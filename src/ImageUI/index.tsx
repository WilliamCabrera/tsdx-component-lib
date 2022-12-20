import React from 'react';
import logo_color from './LogoBiodiversiteQuebec2.png';

export const ImageUI = () => {
  return (
    <div style={{ width: '100%', height: '50vh', backgroundColor: 'blue' }}>
      <img
        src={logo_color}
        style={{ display: 'block', width: '500px', height: '200px' }}
      />
    </div>
  );
};
