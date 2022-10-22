import { useState, useEffect } from 'react';
import Head from 'next/head';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <main className="item-center">
      <Head>
        <title>Shopzone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="shoping cart Demo - Fakeshop API " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-0">
        <Landing />
      </section>
    </main>
  );
}
