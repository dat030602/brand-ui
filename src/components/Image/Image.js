import React from 'react';

function Image({ children, className = '', src = '', alt = '' }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(e) => {
        const size = window.location.href.split('/').length;
        e.target.src = `${size - 3 >= 4 ? '../' : ''}${size - 3 >= 3 ? '../' : ''}${
          size - 3 >= 2 ? '.' : ''
        }./assets/image/fallback.jpg`;
      }}
    />
  );
}
export default Image;
