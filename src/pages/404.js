import React from 'react';
import { Link } from 'gatsby';
import Robot404 from '../svgComponents/Robot404';
import Layout from '../components/layout/Layout';

const NotFoundPage = () => (
  <Layout>
    <section className="max-w-5xl px-4 py-24 mx-auto md:px-12 md:flex">
      <div className="md:w-1/2">
        <h1 className="mb-8 text-3xl leading-tight xs:text-4xl sm:text-5xl text-theme-black font-title">
          NOT FOUND
        </h1>
        <p className="mb-8 text-xl md:text-2xl xl:pr-12">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
        <Link
          to="/"
          className="hidden px-8 py-4 text-xl font-semibold rounded shadow md:inline-block hover:text-white hover:shadow-xl bg-theme-three hover:bg-theme-two text-theme-white"
        >
          Return to home page
        </Link>
      </div>
      <div className="md:w-1/2">
        <Robot404 classes="max-w-lg" />
        <Link
          to="/"
          className="px-8 py-4 text-xl font-semibold rounded shadow md:hidden hover:text-white hover:shadow-xl bg-theme-three hover:bg-theme-two text-theme-white"
        >
          Return to home page
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
