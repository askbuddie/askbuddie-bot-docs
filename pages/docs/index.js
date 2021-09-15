import React from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '@components/Layout';
import Link from '@components/Link';

export default function Docs({ filenames }) {
  return (
    <Layout title="Documentation">
      <h1 className="text-3xl font-extrabold text-black mb-4">
        Hello from docs
      </h1>
      <nav>
        {filenames.map((filename, index) => (
          <Link key={index} to={`docs/${filename.replace(/\s/g, '-')}`}>
            {filename}
          </Link>
        ))}
      </nav>
    </Layout>
  );
}

export function getStaticProps() {
  const filenames = fs
    .readdirSync(path.resolve(__dirname, '../../../content'))
    .map((filename) => filename.replace(/-/g, ' ').split('.md')[0]); // 'example-doc-one.md' will be 'example doc one'

  return {
    props: {
      filenames
    }
  };
}
