import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteContact,
  setCurrent,
  clearCurrent,
} from '../../actions/contactActions';

const ContactItem = ({ contact, deleteContact, setCurrent, clearCurrent }) => {
  const { _id, name, email, phone } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div
      className='card mt-3 mb-3 me-3'
      style={{ width: '32%', display: 'inline-block' }}
    >
      <div className='card-body'>
        <h3 className='card-text'>{name} </h3>
        <p className='card-text'>{email}</p>
        <p className='card-text'>{phone}</p>
        <p>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          {'  '}
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteContact, setCurrent, clearCurrent })(
  ContactItem
);
