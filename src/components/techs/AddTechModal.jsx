import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Please enter the first and last name',
        classes: 'rounded red',
      });
    } else {
      console.log(firstName, lastName);

      // Clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='tech-modal' className='modal'>
      <div className='modal-content'>
        <h4 style={{ marginBottom: '2rem', color: '#1f2a48' }}>
          Add a New Technician
        </h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName'>First Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName'>Last Name</label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-green btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
