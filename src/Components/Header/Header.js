import './Header.css';
import React from 'react';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
     return (
          <div className="Header">
               <img className="main-logo" src={logo} alt="Logo" />
               <nav>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/orderReview">Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory</NavLink>
               </nav>
          </div>
     );
};

export default Header;