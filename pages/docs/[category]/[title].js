import React from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '@components/Layout';
import Nav from '@components/Nav';
import Hamburger from '@components/Hamburger';
import Article from '@components/Article';

export default function Content({ folderFileMap, title, content }) {
  return (
    <Layout title={title}>
      <Nav>
        <Hamburger menuContent={folderFileMap} />
      </Nav>
      <Article title={title} content={content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const folderNames = fs.readdirSync(
    path.resolve(__dirname, '../../../../../docs')
  );

  const folderFileMap = {};
  folderNames.forEach((folderName) => {
    fs.readdirSync(
      path.resolve(__dirname, `../../../../../docs/${folderName}`)
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

  const filePath = path.resolve(
    __dirname,
    `../../../../../docs/${params.category}/${params.title}.md`
  );
  const content = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      folderFileMap,
      title: params.title.replace(/-/g, ' '),
      content
    }
  };
}

export async function getStaticPaths(context) {
  const folderNames = fs.readdirSync(
    path.resolve(__dirname, '../../../../../docs')
  );
  const paths = [];
  folderNames.forEach((folderName) => {
    fs.readdirSync(
      path.resolve(__dirname, `../../../../../docs/${folderName}`)
    ).forEach((fileName) => {
      paths.push({
        params: { title: `${fileName.split('.md')[0]}`, category: folderName }
      });
    });
  });

  return {
    paths,
    fallback: false
  };
}
