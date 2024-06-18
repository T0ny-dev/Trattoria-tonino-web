// Footer.js
import React from 'react';
import './Footer.css';
 // Asegúrate de tener un logo en la carpeta adecuada

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src="/logo.png" alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-column">
                <ul className="footer-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/menu-digital">Menú Digital</a></li>
                </ul>
                <button className="primary_button"><img src="/delivery.png" alt="" />Realizar Pedido</button>
            </div>
            <div className="footer-column">
                <p style={{fontWeight:"600"}}>+52 899 129 3399</p>
                <p>Cuarta #200, Las Fuentes, Reynosa, Tamaulipas, 88740</p>
                <p>Trattoria Tonino</p>
            </div>
        </footer>
    );
};

export default Footer;
