import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-20 mb-12 lg:pt-32 lg:pb-20">
    <div className="container flex flex-col items-center mx-auto sm:px-10 lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mb-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
