import fs from 'fs';
import path from 'path';

export default function Content({ category }) {
  return <h1>{category}</h1>;
}

export async function getStaticProps({ params }) {
  return {
    props: {
      category: params.category
    }
  };
}

export async function getStaticPaths(context) {
  const folderNames = fs.readdirSync(
    path.resolve(__dirname, '../../../../docs')
  );
  const paths = folderNames.map((folderName) => ({
    params: { category: folderName }
  }));

  return {
    paths,
    fallback: false
  };
}
