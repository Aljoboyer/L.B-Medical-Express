import React from 'react';
import './Header.css'
import Navbaar from './Navbaar';
const Header = () => {
    return (
        <div className="container-fluid header-container ">
            <Navbaar></Navbaar>
        </div>
    );
};

export default Header;