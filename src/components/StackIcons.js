import React from 'react';
import AWSLogo from '../icons/aws-icon.svg';
import CSSLogo from '../icons/css3-icon.svg';
import GatsbyLogo from '../icons/gatsby-icon.svg';
import GitHubLogo from '../icons/GitHub-icon.svg';
import GoogleAdsLogo from '../icons/GoogleAds-icon.svg';
import GoogleAnalyticsLogo from '../icons/GoogleAnalytics-icon.svg';
import GoogleMapsLogo from '../icons/GoogleMaps-icon.svg';
import HerokuLogo from '../icons/heroku-icon.svg';
import HTML5Logo from '../icons/HTML5-icon.svg';
import JavaScriptLogo from '../icons/JavaScript-icon.svg';
import MailChimpLogo from '../icons/MailChimp-icon.svg';
import MongDBLogo from '../icons/MongoDB-icon.svg';
import NetlifyLogo from '../icons/netlify-icon.svg';
import NPMLogo from '../icons/npm-icon.svg';
import PayPalLogo from '../icons/PayPal-icon.svg';
import ReactLogo from '../icons/react-icon.svg';
import ServerlessLogo from '../icons/Serverless-icon.svg';
import StripeLogo from '../icons/Stripe-icon.svg';
import ShopifyLogo from '../icons/Shopify-icon.svg';

const StackIcons = () => {
  const imageClasses = 'w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 mx-2 sm:mx-4 my-2 sm:mx-3';
  return (
    <section className="pb-12 mb-8">
      <div className="py-12 mx-auto text-theme-black lg:flex lg:flex-row xs:max-w-lg sm:max-w-2xl lg:max-w-5xl">
        <div className="mb-12 lg:w-1/2">
          <h4 className="px-4 text-2xl text-center lg:text-left sm:text-3xl md:text-4xl font-title lg:pl-12">
            By using the best platforms and services, your business can stand on the shoulders of
            giants.
          </h4>
        </div>
        <div className="flex flex-wrap justify-center mx-auto lg:w-1/2">
          <img src={AWSLogo} alt="AWS logo" className={imageClasses} />
          <img src={NetlifyLogo} alt="Netlify logo" className={imageClasses} />
          <img src={GatsbyLogo} alt="Gatsby logo" className={imageClasses} />
          <img src={GoogleMapsLogo} alt="Google maps logo" className={imageClasses} />
          <img src={ShopifyLogo} alt="Shopify logo" className={imageClasses} />
          <img src={PayPalLogo} alt="Pay Pal logo" className={imageClasses} />
          <img src={StripeLogo} alt="Stripe logo" className={imageClasses} />
          <img src={MailChimpLogo} alt="Mail Chimp logo" className={imageClasses} />
          <img src={GoogleAnalyticsLogo} alt="Google Analytics logo" className={imageClasses} />
          <img src={GoogleAdsLogo} alt="Google Ads logo" className={imageClasses} />
          <img src={ReactLogo} alt="Reactjs logo" className={imageClasses} />
          <img src={JavaScriptLogo} alt="JavaScript logo" className={imageClasses} />
          <img src={MongDBLogo} alt="MongoDB logo" className="w-16 mx-4 sm:w-32" />
          <img src={ServerlessLogo} alt="Serverless logo" className={imageClasses} />
          <img src={GitHubLogo} alt="Github logo" className={imageClasses} />
          <img src={NPMLogo} alt="NPM logo" className={imageClasses} />
          {/* <img src={HerokuLogo} alt="Heroku logo" className={imageClasses} /> */}
          {/* <img src={CSSLogo} alt="CSS logo" className={imageClasses} /> */}
          {/* <img src={HTML5Logo} alt="HTML5 logo" className={imageClasses} /> */}
        </div>
      </div>
    </section>
  );
};
export default StackIcons;
