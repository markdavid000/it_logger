import React from 'react';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
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
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          last updated by <span className='white-text'>{log.tech}</span> on{' '}
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons red-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
