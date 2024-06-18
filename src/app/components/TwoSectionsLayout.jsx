import React from 'react';
import './TwoSectionsLayout.css';


const TwoSectionsLayout = () => {
  return (
    <div className="main-container-menu">
      <div className="left-section-menu">
        <img src="/logo.png" alt="Logo" className="logo" />
        <a href="https://www.example.com" className="anchor">Menu Digital</a>
        <img src="qr.png" alt="QR Code" className="qr-code" />
      </div>
      <div className="right-section-menu">
        {/* Background image is handled in CSS */}
      </div>
    </div>
  );
};

export default TwoSectionsLayout;
