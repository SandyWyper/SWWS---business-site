import React from 'react';
import SvgImprovements from '../svgComponents/SvgImprovements';
import SvgResponsive from '../svgComponents/SvgResponsive';
import SvgShoppingApp from '../svgComponents/SvgShoppingApp';
import Card from '../components/Card';
import ShopifyLogo from '../icons/Shopify-icon.svg';

const Services = () => {
  return (
    <section className="py-2 bg-theme-two">
      <div className="mx-auto text-center xs:max-w-lg sm:max-w-2xl lg:max-w-5xl">
        {/* <h2 className="text-3xl font-semibold font-title lg:text-5xl">Our Services</h2> */}
        <div className="flex flex-col flex-wrap w-full mt-12 sm:flex-row">
          <Card>
            <div className="flex flex-col sm:flex-row lg:flex-col">
              <SvgImprovements className="w-56 h-40 mx-auto mb-4" />
              <div className="sm:w-1/2 lg:w-auto">
                <p className="mb-2 text-3xl font-title">Builds</p>
                <p className="mb-2">
                  Utilising the JAMstack methodology, we create cutting edge websites that are fast,
                  secure and robust. We want the best user experience possible for every site we
                  build.
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col sm:flex-row-reverse lg:flex-col">
              <SvgResponsive className="w-56 h-40 mx-auto mb-4" />
              <div className="sm:w-1/2 lg:w-auto">
                <p className="mb-2 text-3xl font-title">Improvements</p>
                <p className="mb-2">
                  Add new functionality to your existing website; booking system, live chat,
                  maps/directions, enquiries, CMS integration, e-commerce or payment gateway.
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col sm:flex-row lg:flex-col">
              <SvgShoppingApp className="w-56 h-40 mx-auto mb-4" />
              <div className="sm:w-1/2 lg:w-auto">
                <div className="flex justify-center">
                  <img className="w-6 mb-4 mr-4" src={ShopifyLogo} alt="Shopify Logo" />
                  <p className="mb-2 text-3xl font-title">Shopify</p>
                </div>
                <p className="mb-2">
                  From fresh builds to theme customisation, our comprehensive knowledge of Shopify
                  will ensure you get the right solution for you. We also offer SEO audits, theme
                  clean-ups and app integration.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Services;
