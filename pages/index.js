import Nav from '@components/Nav/Nav';
import Hero from '@components/Landing/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask Buddie Bot</title>
      </Head>
      <Nav />
      <Hero />
    </>
  );
}
