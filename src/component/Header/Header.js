import React from 'react';
import './Header.css';
import logo from '../../ema-john-resources/images/Logo.svg'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/OrderReview">Order Review</a>
                <a href="/ManageInventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;