import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';

const Thankyou = () => (
  <Layout>
    <section className="max-w-5xl px-4 py-24 mx-auto text-center">
      <div className="mb-16">
        <h1 className="mb-10 text-5xl font-title">Thank you</h1>
        <p className="text-lg leading-loose text-green-600">
          Your message has been submitted successfully.
        </p>
        <p className="text-lg leading-loose">
          Thanks for getting in touch. I'll get back to you as soon as i can.
        </p>
      </div>
      <Link
        to="/"
        className="px-8 py-4 text-xl font-semibold rounded shadow hover:text-white hover:shadow-xl bg-theme-three hover:bg-theme-two text-theme-white"
      >
        Return to home page
      </Link>
    </section>
  </Layout>
);

export default Thankyou;
