import React from 'react';
import './TextWithBackground.css';

const TextWithBackground = () => {
  return (
    <div className="main-container">
      <div className="text-container">
        <h1>Sugerencias de la casa.</h1>
      </div>
      <div className="background-container">
        {/* Optional overlay for background image */}
      </div>
    </div>
  );
};

export default TextWithBackground;
