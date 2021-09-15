import React from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '@components/Layout';
import Article from '@components/Article';

export default function Content({ filenames, title, content }) {
  return (
    <Layout title={title}>
      <Article title={title} content={content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const filenames = fs
    .readdirSync(path.resolve(__dirname, '../../../../content'))
    .map((filename) => filename.split('.md')[0]);

  const filePath = path.resolve(
    __dirname,
    `../../../../content/${params.title}.md`
  );
  const content = fs.readFileSync(filePath, 'utf8');
  return {
    props: {
      filenames,
      title: params.title.replace(/-/g, ' '),
      content
    }
  };
}

export async function getStaticPaths(context) {
  const filenames = fs.readdirSync(
    path.resolve(__dirname, '../../../../content')
  );
  const paths = filenames.map((filename) => {
    return { params: { title: filename.split('.md')[0] } };
  });

  return {
    paths,
    fallback: false
  };
}
