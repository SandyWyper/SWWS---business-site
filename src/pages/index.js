import React from 'react';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SvgHeroImage from '../svgComponents/SvgHeroImage';
import StackIcons from '../components/StackIcons';
import SvgImprovements from '../svgComponents/SvgImprovements';
import SvgResponsive from '../svgComponents/SvgResponsive';
import SvgShoppingApp from '../svgComponents/SvgShoppingApp';
import ShopifyLogo from '../icons/Shopify-icon.svg';
import SvgPairProgramming from '../svgComponents/SvgPairProgramming';
import SvgRocket from '../svgComponents/SvgRocket';
import SvgScaleUp from '../svgComponents/SvgScaleUp';
import SvgOnlineShopping from '../svgComponents/SvgOnlineShopping';
import SvgSecurity from '../svgComponents/SvgSecurity';
import ContactForm from '../components/ContactForm';
import SvgMobileApp from '../svgComponents/SvgMobileApp';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const offset = () => (document.documentElement.clientWidth > 639 ? 87 : 127);
export default () => (
  <Layout>
    <section id="top" className="py-12 lg:py-40 ">
      <div className="container px-8 md:flex md:items-center lg:items-end lg:pl-16">
        <div className="text-center md:text-left lg:w-1/2 ">
          <h1 className="mb-8 text-3xl leading-tight xs:text-4xl sm:text-5xl text-theme-black font-title">
            Your business,
            <br />
            our solutions
          </h1>

          <div className="max-w-sm mx-auto mb-6 md:hidden">
            <SvgHeroImage />
          </div>
          <p className="mb-8 text-xl md:text-2xl xl:pr-12">
            We use the latest technology to help you stay ahead of the competition and succeed
            online
          </p>
          <AnchorLink
            offset={offset}
            href="#contact"
            className="px-8 py-4 text-xl font-semibold rounded shadow hover:text-white hover:shadow-xl bg-theme-three hover:bg-theme-two text-theme-white"
          >
            Get in touch
          </AnchorLink>
        </div>
        <div className="hidden md:w-1/3 lg:w-1/2 lg:block">
          <SvgHeroImage />
        </div>
      </div>
    </section>

    <section id="features" className="py-2 bg-theme-two">
      <div className="mx-auto text-center xs:max-w-lg sm:max-w-2xl lg:max-w-5xl">
        {/* <h2 className="text-3xl font-semibold font-title lg:text-5xl">Our Services</h2> */}
        <div className="flex flex-col flex-wrap w-full mt-12 sm:flex-row">
          <Card>
            <div className="flex flex-col sm:flex-row lg:flex-col">
              <SvgImprovements className="w-56 h-40 mx-auto mb-4" />
              <div className="sm:w-1/2 lg:w-auto">
                <p className="mb-2 text-3xl font-title">Builds</p>
                <p className="mb-2">
                  Utilising the JAMstack mothedology, we create cutting edge websites that are fast,
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
                  Add new functionality to your existing website; booking system, maps/directions,
                  enquireies, CMS integration.
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
                  will unsure you get right solution for you. We also offer SEO audits, theme
                  clean-ups and app integration.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <SplitSection
      id="services"
      primarySlot={
        <div className="px-4 lg:pr-32 xl:pr-48">
          <h3 className="text-4xl leading-tight xl:text-5xl font-title">
            Websites that preform for your business
          </h3>
          <p className="mt-8 text-lg font-light leading-relaxed">
            We will sit down with you to outline your needs. Using the best technology available, we
            enable your business to stand on the shoulders of giants. Our websites are built using a
            combination of static site generators, headless CMS and CDN service providers. This is
            taking from the JAMstack mothodology, and the result is astoundinly good websites.
          </p>
        </div>
      }
      secondarySlot={<SvgPairProgramming className="w-full h-full px-4" />}
    />
    <section className="lg:mb-12">
      <h2 className="px-4 mb-20 text-4xl text-center xl:text-5xl font-title">JAMstack Websites</h2>
      <div className="flex flex-wrap mx-auto xs:max-w-lg sm:max-w-2xl lg:max-w-5xl">
        <div className="flex flex-col px-4 mb-16 lg:px-12 sm:w-1/2">
          <SvgRocket className="w-56 h-40 mx-auto mb-6 " />
          <h4 className="mb-4 text-3xl font-title">Fast</h4>
          <p>
            Static site generators build the web pages ahead of time, so there’s no time-consuming
            database queries. Also, Gatsby loads only critical parts of the page, so your site loads
            as fast as possible. Once loaded, Gatsby prefetches resources for other pages so that
            moving around the site feels incredibly fast.
          </p>
        </div>
        <div className="flex flex-col px-4 mb-16 lg:px-12 sm:w-1/2">
          <SvgSecurity className="w-56 h-40 mx-auto mb-6" />
          <h4 className="mb-4 text-3xl font-title">Secure</h4>
          <p>
            JAMstack websites are an absolute fortress. There are no databases, no plugins or CMS
            running on your server. This will highly reduce the risk from SQL injections or other
            hacks.
          </p>
        </div>
        <div className="flex flex-col px-4 mb-16 lg:px-12 sm:w-1/2">
          <SvgMobileApp className="w-56 h-40 mx-auto mb-6" />
          <h4 className="mb-4 text-3xl font-title">Progressive Web Apps</h4>
          <p>
            Our sites are built as PWAs as standard. This creates a fast app-like experience in the
            browser, and could save you time and money building native apps on multiple platforms.
          </p>
        </div>
        <div className="flex flex-col px-4 mb-16 lg:px-12 sm:w-1/2">
          <SvgScaleUp className="w-56 h-40 mx-auto mb-6" />
          <h4 className="mb-4 text-3xl font-title">Scalable</h4>
          <p>
            Traffic bigger than usual? Not an issue with the JAMstack sites - you host your
            websites’ static files in a multi-cloud environment on a CDN with no traffic
            limitations. Implementing new features to your project? Serverless architecture scales
            automatically as your usage or user base extends, so you can scale your app or site
            without hassle.
          </p>
        </div>
      </div>
    </section>
    <StackIcons />
    <div className="px-4 text-theme-white bg-theme-three">
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <img className="w-12 mb-2 mr-4 " src={ShopifyLogo} alt="Shopify Logo" />
              <h3 className="text-4xl leading-tight font-title">Shopify Specialists</h3>
            </div>
            <p className="text-xl font-light leading-relaxed">
              Your Shopify store might not be performing to it's potential. We can help customise
              your store so that you have full control over form + function. Whether you need a
              customised order process, multinational store setup or just a styling change, we can
              deliver the results you need.
            </p>
          </div>
        }
        secondarySlot={<SvgOnlineShopping className="w-full h-full md:pr-8" />}
      />
    </div>
    <section id="contact" className="container px-4 py-16 mx-auto lg:py-24 lg:flex">
      <div className="mb-12 sm:pr-16 lg:w-1/2">
        <h2 className="mb-4 text-4xl font-title">Get in touch</h2>
        <p className="text-xl">
          Whatever your needs, contact us to disscuss the issue and we will find the right solution
          for you.
        </p>
      </div>
      <div className="lg:w-1/2">
        <ContactForm />
      </div>
    </section>
    {/* <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    /> */}
    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col mt-8 sm:flex-row lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
    {/* <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-center text-gray-600">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container py-24 mx-auto my-20 text-center bg-gray-200 rounded-lg">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section> */}
  </Layout>
);
