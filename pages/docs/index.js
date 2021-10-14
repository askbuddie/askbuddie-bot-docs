import React from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '@components/Layout';
import Nav from '@components/Nav';
import Heading from '@components/Heading';
import Hamburger from '@components/Hamburger';

export default function Docs({ folderFileMap }) {
  return (
    <Layout title="Documentation">
      <Nav>
        <Hamburger menuContent={folderFileMap} />
      </Nav>
      <div className="container min-h-screen">
        <Heading modifier="px-2">Hello from docs</Heading>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const folderNames = fs.readdirSync(path.resolve(__dirname, '../../../docs'));
  const folderFileMap = {};
  folderNames.forEach((folderName) => {
    fs.readdirSync(
      path.resolve(__dirname, `../../../docs/${folderName}`)
    ).forEach((fileName) => {
      if (!folderFileMap[folderName]) {
        folderFileMap[folderName] = [fileName.split('.md')[0]];
      } else {
        folderFileMap[folderName] = [
          ...folderFileMap[folderName],
          fileName.split('.md')[0]
        ];
      }
    });
  });

  return {
    props: {
      folderFileMap
    }
  };
}
