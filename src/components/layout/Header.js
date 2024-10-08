import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TwsTitle from '../../svgComponents/twsTitle';
import useScrollPosition from '../../lib/useScrollPosition';

const Header = () => {
  const offset = 0;

  // nav bar at the top shown or not
  const [isShown, setIsShown] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const headerEl = document.querySelector('#header');
      const show = currPos.y > -60 || currPos.y > prevPos.y;

      if (show !== isShown) {
        setIsShown(show);
        if (isShown) {
          headerEl.classList.add('hide');
        } else {
          headerEl.classList.remove('hide');
        }
      }
    },
    [isShown],
    undefined,
    undefined,
    100
  );

  return (
    <header id="header" className="fixed inset-x-0 top-0 z-50 shadow bg-theme-two">
      <div className="container flex flex-col items-center justify-between px-8 font-semibold font-body sm:flex-row">
        <div className="flex items-center">
          <AnchorLink offset={offset} href="#top">
            <TwsTitle classes="fill-current text-theme-black width-18rem xs:width-20rem md:width-25rem" />
          </AnchorLink>
        </div>
        <div className="flex items-center justify-around w-full mb-4 text-lg sm:justify-between md:justify-end sm:mb-0">
          <AnchorLink
            offset={offset}
            className="sm:px-2 md:px-4 text-theme-black hover:text-theme-white"
            href="#websites"
          >
            Websites
          </AnchorLink>
          <AnchorLink
            offset={offset}
            className="sm:px-2 md:px-4 text-theme-black hover:text-theme-white"
            href="#shopify"
          >
            Shopify
          </AnchorLink>
          <AnchorLink
            offset={offset}
            className="sm:px-2 md:px-4 text-theme-black hover:text-theme-white"
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
