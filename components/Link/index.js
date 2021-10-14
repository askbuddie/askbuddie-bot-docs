import React from 'react';
import NextLink from 'next/link';

export default function Link({
  to,
  newTab = false,
  className = '',
  onClick = () => {},
  title = null,
  children
}) {
  if (newTab) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noreferrer"
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={to}>
      <a href={to} className={className} onClick={onClick}>
        {children}
      </a>
    </NextLink>
  );
}
