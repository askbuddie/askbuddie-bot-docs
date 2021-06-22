import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="w-screen">
      <div className="container py-4">
        <Link href="/">Logo here</Link>
      </div>
    </nav>
  );
}
