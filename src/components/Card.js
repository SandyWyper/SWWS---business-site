import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`mx-4 px-3 sm:px-6 pt-12 pb-6 lg:flex-1 mb-8 rounded-lg bg-theme-white shadow-xl text-theme-black ${className}`}
  >
    {children}
  </div>
);

export default Card;
