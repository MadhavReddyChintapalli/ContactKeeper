import React, { Fragment, useEffect } from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';

const Contacts = ({ contact: { contacts, filtered }, getContacts }) => {
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {filtered != null
        ? filtered.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        : contacts &&
          contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
    </Fragment>
  );
};

Contacts.propTypes = {
  getContacts: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
