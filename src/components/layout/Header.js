import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 shadow bg-theme-blue">
    <div className="container flex flex-col items-center justify-between px-8 py-4 mx-auto sm:flex-row bg-theme-blue">
      <div className="flex items-center text-4xl text-theme-white font-display">
        Tinderbox Web Solutions
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div>
    </div>
  </header>
);

export default Header;
