import React from 'react';

function Image({ children, className = '', src = '', alt = '' }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.src = `${window.location.href.split('/').length - 3 >= 4 ? '../' : ''}${
          window.location.href.split('/').length - 3 >= 3 ? '../' : ''
        }${window.location.href.split('/').length - 3 >= 2 ? '.' : ''}./assets/image/fallback.jpg`;
      }}
      
    />
  );
}
export default Image;
