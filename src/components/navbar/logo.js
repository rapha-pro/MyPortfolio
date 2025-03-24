import React from 'react';

const Logo = ({ width = 'w-16' }) => {
    return (
      <div className="flex items-center space-x-4">
        <svg className={`${width}`} aria-hidden="true">
          <use href="/logo.svg#logo" />
        </svg>
        <p className="text-xl font-semibold text-blue-00">Raphaël</p>
      </div>
    );
  };
  
  export default Logo
