import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="text-4xl font-semibold lg:text-6xl text-theme-two">{primaryText}</p>
    <p className="mb-6 font-semibold">{secondaryText}</p>
  </>
);

export default StatsBox;
