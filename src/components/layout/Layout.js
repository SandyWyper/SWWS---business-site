import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-theme-white" id="top">
      <Header />
      <main className="mt-32 text-theme-black font-body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
