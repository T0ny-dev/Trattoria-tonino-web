import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>Auténtica Comida Italiana en Reynosa</h1>
                <p>La mejor pizza italiana en Reynosa. Nuestro chef, con años de experiencia en la cocina italiana, prepara cada pizza con ingredientes frescos y auténticos, siguiendo las recetas tradicionales de Italia.</p>
                <div className='deliveery'>
                <button className='primary_button'><img src="/delivery.png" alt="" />Ordenar Ahora</button>
                <a href="/menu-digital" className='more_info'>Más Información</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
