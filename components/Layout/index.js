import Head from 'next/head';

import Nav from '@components/Nav';
import Footer from '@components/Footer';

function index({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default index;
