import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Heading from '@components/Heading';
import markdownComponents from './markdownComponents';

export default function Article({ title, content }) {
  return (
    <article className="px-2">
      <Heading level="2" modifier="my-4">
        {title}
      </Heading>
      <hr />
      <ReactMarkdown
        components={markdownComponents}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
