import { React, useState } from 'react';
import Link from '@components/Link';

export default function DocsNav({ menuContent }) {
  const [hambugerClicked, setHamburgerClicked] = useState(false);

  function hamburgerClassName() {
    const base =
      'hamburger transition-transform duration-300 ease-linear cursor-pointer mx-2 fixed right-0 z-10 w-10 h-1 bg-black-400 rounded-lg';

    return hambugerClicked ? `${base} hamburger--active` : base;
  }

  function ulClassName() {
    const base =
      'fixed top-0 right-0 w-full h-screen overflow-auto bg-brand-400 px-2 text-white-400';

    return hambugerClicked ? base : `${base} hidden`;
  }

  return (
    <nav className="relative">
      <div
        className={hamburgerClassName()}
        onClick={() => setHamburgerClicked(!hambugerClicked)}
      ></div>
      <ul className={ulClassName()}>
        {menuContent.map((filename, index) => (
          <li key={index}>
            <Link to={`docs/${filename.replace(/\s/g, '-')}`}>{filename}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
