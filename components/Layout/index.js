import Head from 'next/head';
import Footer from '@components/Footer';

function index({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | AskBuddie Bot`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
      <Footer />
    </>
  );
}

export default index;
