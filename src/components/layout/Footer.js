import React from 'react';

const Footer = () => (
  <footer className="flex-grow bg-theme-black text-theme-white">
    <div className="container flex flex-col py-10 mx-auto lg:py-16 md:flex-row ">
      <div className="w-full px-3 mb-6 md:w-1/3">
        {/* <h2 className="text-lg font-semibold">About TWS</h2> */}
        {/* <TwsTitle classes="fill-current width-15rem h-8" /> */}
        <p className="text-xl font-semibold font-display">Tinderbox Web Solutions</p>
        <p className="">
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
      <div className="w-full px-3 md:w-1/3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <ul className="leading-loose ">
          <li>
            <p>tel: 07853 835 718</p>
          </li>
          <li>
            <p className="inline-block">email:&nbsp;</p>
            <a href="mailto:hello@tinderboxwebsolutions.com">hello@tinderboxwebsolutions.com</a>
          </li>
        </ul>
      </div>
      <div className="w-full px-3 md:w-1/3">
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
    </div>
  </footer>
);

export default Footer;
