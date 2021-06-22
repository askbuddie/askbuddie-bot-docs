import React from 'react';

export default function Button({
  type = 'button',
  onClick,
  children,
  modifier
}) {
  return (
    <button type={type} className={`btn ${modifier}`} onClick={onClick}>
      {children}
    </button>
  );
}
