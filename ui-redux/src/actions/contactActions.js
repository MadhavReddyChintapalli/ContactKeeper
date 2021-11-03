import axios from 'axios';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  CONTACT_ERROR,
  CLEAR_CONTACTS,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from './types';

// Get Contacts
export const getContacts = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/contacts');

    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

// Add Contact
export const addContact = contact => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      'http://localhost:5000/api/contacts',
      contact,
      config
    );

    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

// Delete Contact
export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);

    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

// Update Contact
export const updateContact = contact => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(
      `http://localhost:5000/api/contacts/${contact._id}`,
      contact,
      config
    );

    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

// Clear Contacts
export const clearContacts = () => async dispatch => {
  dispatch({ type: CLEAR_CONTACTS });
};

// Set Current Contact
export const setCurrent = contact => async dispatch => {
  dispatch({ type: SET_CURRENT, payload: contact });
};

// Clear Current Contact
export const clearCurrent = () => async dispatch => {
  dispatch({ type: CLEAR_CURRENT });
};

// Filter Contacts
export const filterContacts = text => async dispatch => {
  dispatch({ type: FILTER_CONTACTS, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: CLEAR_FILTER });
};
