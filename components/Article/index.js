import React from 'react';
import marked from 'marked';

export default function Article({ title, content }) {
  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </article>
  );
}
