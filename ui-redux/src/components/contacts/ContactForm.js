import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactFilter from '../contacts/ContactFilter';
import {
  addContact,
  updateContact,
  clearCurrent,
} from '../../actions/contactActions';

const ContactForm = ({
  contact: { current },
  addContact,
  updateContact,
  clearCurrent,
}) => {
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
      });
    }
  }, [addContact, updateContact, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { name, email, phone } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div className='row'>
      <div className='col-md-6'>
        <form onSubmit={onSubmit} className='form'>
          <div className='mt-4 mb-4'>
            <h2> {current ? 'Edit Contact' : 'Add Contact'}</h2>
          </div>
          <div className='mb-3'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              placeholder='Phone'
              name='phone'
              value={phone}
              onChange={onChange}
              className='form-control'
            />
          </div>
          <div className='d-grid gap-2 mb-3'>
            <input
              type='submit'
              value={current ? 'Update Contact' : 'Add Contact'}
              className='btn btn-primary'
            />
          </div>
          <div className='d-grid gap-2 mb-3'>
            <button className='btn btn-light' onClick={clearAll}>
              Clear
            </button>
          </div>
        </form>
      </div>
      <div className='col-md-6'>
        <ContactFilter />
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  contact: state.contact,
});

export default connect(mapStateToProps, {
  addContact,
  updateContact,
  clearCurrent,
})(ContactForm);
