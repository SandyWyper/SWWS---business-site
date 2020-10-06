import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-theme-white">
      <Header />
      <main className="text-theme-black font-body">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
