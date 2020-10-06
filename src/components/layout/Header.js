import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TwsTitle from '../../svgComponents/twsTitle';

const Header = () => {
  const offset = () => (document.documentElement.clientWidth > 639 ? 87 : 127);
  return (
    <header className="top-0 z-50 shadow bg-theme-two xs:sticky">
      <div className="container flex flex-col items-center justify-between px-8 font-semibold font-body sm:flex-row">
        <div className="flex items-center">
          <AnchorLink offset={offset} href="#top">
            <TwsTitle classes="fill-current text-theme-white width-18rem xs:width-20rem md:width-25rem" />
          </AnchorLink>
        </div>
        <div className="sticky flex items-center mb-4 text-lg sm:mb-0">
          <AnchorLink
            offset={offset}
            className="px-4 text-theme-white hover:text-theme-black"
            href="#websites"
          >
            Websites
          </AnchorLink>
          <AnchorLink
            offset={offset}
            className="px-4 text-theme-white hover:text-theme-black"
            href="#shopify"
          >
            Shopify
          </AnchorLink>
          <AnchorLink
            offset={offset}
            className="px-4 hover:text-theme-black text-theme-white"
            href="#contact"
          >
            Contact
          </AnchorLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
