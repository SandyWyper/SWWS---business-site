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
  const imageClasses = 'w-20 m-12';
  return (
    <section className="">
      <div className="flex overflow-x-scroll">
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
        <img src={HerokuLogo} alt="Heroku logo" className={imageClasses} />
        <img src={ReactLogo} alt="Reactjs logo" className={imageClasses} />
        <img src={JavaScriptLogo} alt="JavaScript logo" className={imageClasses} />
        <img src={MongDBLogo} alt="MongoDB logo" className="w-32 m-12" />
        <img src={ServerlessLogo} alt="Serverless logo" className={imageClasses} />
        <img src={GitHubLogo} alt="Github logo" className={imageClasses} />
        <img src={NPMLogo} alt="NPM logo" className={imageClasses} />
        <img src={CSSLogo} alt="CSS logo" className={imageClasses} />
        <img src={HTML5Logo} alt="HTML5 logo" className={imageClasses} />
      </div>
    </section>
  );
};
export default StackIcons;
