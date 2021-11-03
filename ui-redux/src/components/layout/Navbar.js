import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <h1 className='navbar-brand'>{title}</h1>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link active'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Movies',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
