import React from 'react';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';

const Home = () => (
  <div className='container'>
    <ContactForm />
    <Contacts />
  </div>
);

export default Home;
