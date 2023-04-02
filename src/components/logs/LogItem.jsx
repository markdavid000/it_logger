import React from 'react';
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted Successfully', classes: 'rounded green' });
  };

  return (
    <li className='collection-item white'>
      <div>
        <span className='white-text'>ID #{log.id}</span>
        <br />
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'green-text'
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          last updated by <span className='white-text'>{log.tech}</span>
          <br />
          {/* <Moment
            className='white-text'
            format='MMMM Do YYYY, h:mm:ss a'
          ></Moment> */}
          on <span className='white-text'>{log.date}</span>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons red-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
