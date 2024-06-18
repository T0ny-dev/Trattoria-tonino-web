"use client"

import React, { useState } from 'react';
import menuData from '../data/menuData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavbarMobile from '../components/NavbarMobile';
import './page.css'; // Asegúrate de crear este archivo para los estilos

function MenuDigital() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoria) => {
    setSelectedCategory(categoria);
  };

  return (
    <>
    <Header/>
    <NavbarMobile/>
    <div className='hero-menu'>
      <h2>
      Menú Digital
      </h2>
    </div>
    <div className="menu-digital">
      {!selectedCategory ? (
        <div className="category-buttons">
          {menuData.menu.map((category, index) => (
            <div
              key={index}
              className="category-button"
              onClick={() => handleCategoryClick(category)}
            >
              <img src={`${category.imagen}`} alt={category.categoria} />
              <h2>{category.categoria}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="category-details">
          <button onClick={() => setSelectedCategory(null)}>Volver</button>
          <h2>{selectedCategory.categoria}</h2>
          {selectedCategory.platillos.map((platillo, index) => (
            <div key={index} className="platillo">
              <h3>{platillo.nombre} - ${platillo.precio}</h3>
              <p>{platillo.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default MenuDigital;
