import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Heading from '@components/Heading';

function reusableHeadingComponent(level, children) {
  return (
    <Heading level={level + 1} modifier="my-4">
      {children}
    </Heading>
  );
}

const markdownComponents = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
        {children}
      </SyntaxHighlighter>
    ) : (
      <code className="p-1 bg-black-faded-7 text-white-400 rounded">
        {children}
      </code>
    );
  },
  h1({ level, children }) {
    return reusableHeadingComponent(level, children);
  },
  h2({ level, children }) {
    return reusableHeadingComponent(level, children);
  },
  h3({ level, children }) {
    return reusableHeadingComponent(level, children);
  },
  h4({ level, children }) {
    return reusableHeadingComponent(level, children);
  },
  p({ children }) {
    return <p className="text-base mb-2">{children}</p>;
  }
};

export default markdownComponents;
