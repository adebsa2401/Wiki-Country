import React from 'react';
import PropTypes from 'prop-types';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import '../styles/Header.css';

export default function Header({ title, showBackButton }) {
  return (
    <header>
      {showBackButton && <IoIosArrowBack onClick={() => window.history.back()} />}
      <h1>{title}</h1>
      <FaMicrophone />
      <FiSettings />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
};

Header.defaultProps = {
  showBackButton: false,
};
