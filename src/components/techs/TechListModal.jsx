import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techAction';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4 className='center' style={{ color: '#1f2a48' }}>
          Technician List
        </h4>
        <ul className='collection'></ul>
        {!loading &&
          techs !== null &&
          techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
