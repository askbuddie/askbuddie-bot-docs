import Head from 'next/head';

import Nav from '@components/Nav';
import Hero from '@components/Landing/Hero';
import Features from '@components/Landing/Features';
import Community from '@components/Landing/Community';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask Buddie Bot</title>
      </Head>
      <Nav />
      <Hero />
      <Features />
      <Community />
    </>
  );
}
