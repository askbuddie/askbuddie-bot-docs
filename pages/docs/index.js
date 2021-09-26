import React from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '@components/Layout';
import Nav from '@components/Nav';
import Heading from '@components/Heading';
import Hamburger from '@components/Hamburger';

export default function Docs({ filenames }) {
  return (
    <Layout title="Documentation">
      <Nav>
        <Hamburger menuContent={filenames} />
      </Nav>
      <div className="container min-h-screen">
        <Heading modifier="px-2">Hello from docs</Heading>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const filenames = fs
    .readdirSync(path.resolve(__dirname, '../../../docs'))
    .map((filename) => filename.replace(/-/g, ' ').split('.md')[0]); // 'example-doc-one.md' will be 'example doc one'

  return {
    props: {
      filenames
    }
  };
}
