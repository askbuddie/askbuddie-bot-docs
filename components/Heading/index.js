import React from 'react';

export default function Heading({ level = 1, children, modifier }) {
  let HeadingLevel, headingClass;

  switch (level) {
    case 2:
      HeadingLevel = 'h2';
      headingClass = 'text-6xl font-bold';
      break;
    case 3:
      HeadingLevel = 'h3';
      headingClass = 'text-4xl font-bold';
      break;
    case 4:
      HeadingLevel = 'h4';
      headingClass = 'text-3xl font-bold';
      break;
    case 5:
      HeadingLevel = 'h5';
      headingClass = 'text-2xl';
      break;
    case 6:
      HeadingLevel = 'h6';
      headingClass = 'text-xl';
      break;
    default:
      HeadingLevel = 'h1';
      headingClass = 'text-7xl font-extrabold';
  }

  return (
    <HeadingLevel className={`font-heading ${headingClass} ${modifier}`}>
      {children}
    </HeadingLevel>
  );
}
