import React from 'react'
import './header.css';
import { FaPizzaSlice,FaSearch, FaShoppingCart, FaUser, FaSun, FaMoon } from "react-icons/fa";

const Header = ({ isDarkMode, onDarkModeClick }) => {
  return (
    <div className="header">
    <h1> <FaPizzaSlice/> Cuisine delicacy</h1>
    <div className="icons">
      <ul>
        <li><FaSearch /></li>
        <li onClick={onDarkModeClick}>  {isDarkMode ? <FaMoon/> : <FaSun />}  </li>
      </ul>
    </div>
  </div>
);
}

export default Header