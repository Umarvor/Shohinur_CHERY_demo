import React from 'react';
import './Navbar.css';
import Logo from '../img/logo-white.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
       <a href="#"> <img src={Logo} alt="Chery" /></a>
      </div>
      <div className="menu">
        <li className="menu-item">MODELLAR</li>
        <li className="menu-item">DILLERLAR</li>
        <li className="menu-item">XARIDORLARGA</li>
        <li className="menu-item">CHERY OLAMI</li>
      </div>
      <div className="call-section">
        <a href="#" className="menu-item">Qo'ng'iroq buyurtma qilish</a>
        <a href="#" className="menu-item">RU</a>
        <a href="#" className="menu-item">UZ</a>
      </div>
    </div>
  );
}

export default Navbar;
