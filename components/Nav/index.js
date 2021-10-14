import React from 'react';
import Link from 'next/link';

export default function Nav({ children }) {
  return (
    <nav className="w-screen px-2">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/">Logo here</Link>
        {children}
      </div>
    </nav>
  );
}
