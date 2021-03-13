import React from 'react';
import PhoneIcon from '../../svgComponents/SvgCall.js';
import MailIcon from '../../svgComponents/SvgMail.js';

const Footer = () => (
  <footer className="flex-grow bg-theme-black text-theme-white">
    <div className="container flex flex-col py-10 mx-auto lg:py-16 md:flex-row">
      <div className="w-full px-4 mb-6 md:1/2 lg:w-1/3">
        {/* <h2 className="text-lg font-semibold">About TWS</h2> */}
        {/* <TwsTitle classes="fill-current width-15rem h-8" /> */}
        <p className="text-xl font-semibold font-display">Tinderbox Web Solutions</p>
        <p className="mb-6 ">
          35 Ennor's Road
          <br />
          Newquay
          <br />
          Cornwall
          <br />
          England
          <br />
          TR7 1RB
        </p>
      </div>
      <div className="flex justify-around w-full px-3 md:block md:1/2 lg:w-2/3">
        <h2 className="hidden mb-6 text-lg font-semibold md:block">Contact</h2>
        <div>
          <a className="flex items-center mb-4 text-theme-white" href="tel:07853835718">
            <PhoneIcon className="w-6 h-6 mr-4 fill-current" />
            <p className="hidden font-sans text-lg md:inline-block">07853 835 718</p>
          </a>
        </div>
        <div>
          <a
            className="flex items-center mb-6 text-theme-white"
            href="mailto:hello@tinderboxwebsolutions.com"
          >
            <MailIcon className="w-6 h-6 mr-4 fill-current " />
            <p className="hidden text-lg underline md:inline-block font-body">
              hello@tinderboxwebsolutions.com
            </p>
          </a>
        </div>
      </div>

      {/* <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://dev.to/changoman">Dev.to</a>
            </li>
            <li>
              <a href="https://twitter.com/HuntaroSan">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
            </li>
          </ul> */}
    </div>
  </footer>
);

export default Footer;
