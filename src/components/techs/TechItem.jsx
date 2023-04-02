import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: 'Tech Deleted Successfully', classes: 'rounded green' });
  };

  return (
    <li className='collection-item'>
      <div style={{ color: '#1f2a48' }}>
        {firstName} {lastName}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons red-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
