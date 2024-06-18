import React from 'react';
import './TwoSectionComponent.css';
// Asegúrate de tener esta imagen en la carpeta correcta

const TwoSectionComponent = () => {
    return (
        <div className="container">
            <div className="logo-section">
                <img src="/logo.png" alt="Logo" className="logo-image" />
            </div>
            <div className="text-section">
                <h1>Bienvenidos</h1>
                <p>Desde la masa hecha a mano hasta las salsas caseras y los quesos de la más alta calidad, cada bocado te transportará directamente a las calles de Nápoles. Ven y disfruta de una experiencia culinaria inigualable.</p>
            </div>
        </div>
    );
};

export default TwoSectionComponent;
