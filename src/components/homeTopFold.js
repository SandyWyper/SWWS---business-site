import React, { useLayoutEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { gsap } from 'gsap';
import SvgHeroImage from '../svgComponents/SvgHeroImage';

const HomeTopFold = () => {
  useLayoutEffect(() => {
    const buttonAnimation = gsap.timeline();

    buttonAnimation
      .to('[data-button-animate]', { scale: 1.05, x: 10, duration: 1, delay: 3 })
      .to('[data-button-animate]', { scale: 1, x: 0, duration: 1 });
  });

  return (
    <section className="py-12 lg:py-40">
      <div className="container px-8 md:flex md:items-center lg:items-end lg:pl-16">
        <div className="mb-20 text-center md:text-left lg:w-1/2 lg:mb-0">
          <h1 className="mb-4 text-3xl leading-tight xs:text-4xl sm:text-5xl text-theme-black font-title">
            <span data-text-reveal className="block">
              Your business,
            </span>
            <span data-text-reveal className="block">
              our solutions
            </span>
          </h1>

          <div className="max-w-sm mx-auto mb-6 md:hidden" id="hero-svg-mobile">
            <SvgHeroImage />
          </div>
          <p className="mb-16 text-xl md:text-2xl xl:pr-12" data-text-reveal>
            We use the latest technology to help you stay ahead of the competition and succeed
            online
          </p>
          <div data-button-animate>
            <AnchorLink
              href="#contact"
              className="px-8 py-4 my-8 text-xl font-semibold rounded shadow hover:text-white hover:shadow-xl bg-theme-one hover:bg-theme-three text-theme-white"
            >
              Get in touch
            </AnchorLink>
          </div>
        </div>
        <div className="hidden md:w-1/3 lg:w-1/2 lg:block">
          <SvgHeroImage />
        </div>
      </div>
    </section>
  );
};

export default HomeTopFold;
