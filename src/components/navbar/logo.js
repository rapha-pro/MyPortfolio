import React from 'react';

const Logo = ({ width = 'w-16' }) => {
    return (
      // space-x-4
      <div className="flex items-center">
        <div className={`${width}`} aria-hidden="true">
          <img src="favicon/logo512.png" alt="website logo"/>
        </div>
        {/* <p className="text-xl font-semibold text-blue-00 -ml-3 mt-3">aphaël</p> */}
      </div>
    );
  };
  
  export default Logo
