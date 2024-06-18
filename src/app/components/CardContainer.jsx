import React from 'react';
import './CardContainer.css';

const CardContainer = () => {
    return (
        <div className="card-container">
            <h1 className="main-title">Especialidad de Italia a Reynosa</h1>
            <div className="cards">
                <div className="card">
                    <img src="/pizza.png" alt="Imagen 1" />
                    <h2>Pizzas Italianas</h2>
                    <a href="/menu-digital">Más Información</a>
                </div>
                <div className="card">
                    <img src="/pasta.png" alt="Imagen 2" />
                    <h2>Pastas Italianas</h2>
                    <a href="/menu-digital">Más Información</a>
                </div>
                <div className="card">
                    <img src="Primi_piatti.webp" alt="Imagen 3" />
                    <h2>Primi Piatti</h2>
                    <a href="/menu-digital">Más Información</a>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
