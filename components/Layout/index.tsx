import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="flex flex-col bg-gradient-to-b ">
      <Head>
        <title>Shopzone</title>
        <meta name="description" content="Daniel Mesfin" />
        <link rel="icon" href="/Icon/favicon.ico" />
      </Head>
      <Navbar />
      <main className="px-2 md:px-20">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
