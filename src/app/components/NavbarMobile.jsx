"use client"

import React, { useState } from 'react';
import './NavbarMobile.css';

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-mobile">
      <div className="navbar-header">
        <div className="logo-mobile"><img src="/logo.png" alt="Logo"  /></div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Icono de 3 líneas */}
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/menu-digital">Menú Digital</a></li>
            <li><a href="#">Realizar Pedido</a></li>
            <li><a href="#">+52 899 129 3399</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
