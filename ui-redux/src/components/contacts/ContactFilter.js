import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts, clearFilter } from '../../actions/contactActions';

const ContactFilter = ({
  contact: { filtered },
  filterContacts,
  clearFilter,
}) => {
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <div className='mt-4 mb-4'>
        <h2>Filter Contact</h2>
      </div>
      <form className='form'>
        <input
          ref={text}
          type='text'
          placeholder='Filter Contacts...'
          onChange={onChange}
          className='form-control'
        />
      </form>
    </div>
  );
};

ContactFilter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { filterContacts, clearFilter })(
  ContactFilter
);
