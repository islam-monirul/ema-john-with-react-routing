import './Header.css';
import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
     return (
          <div className="Header">
               <img className="main-logo" src={logo} alt="Logo" />
               <nav>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Order</a>
                    <a href="/inventory">Manage Inventory</a>
               </nav>
          </div>
     );
};

export default Header;