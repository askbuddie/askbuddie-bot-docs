import Head from 'next/head';

import Nav from '@components/Nav';
import Footer from '@components/Footer';

function index({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | AskBuddie Bot`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default index;
