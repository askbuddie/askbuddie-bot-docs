import { React, useState } from 'react';
import Link from '@components/Link';

export default function Hamburger({ menuContent }) {
  const [hambugerClicked, setHamburgerClicked] = useState(false);

  function hamburgerClassName() {
    const base =
      'hamburger transition-transform duration-300 ease-linear cursor-pointer mx-2 fixed right-0 z-10 w-10 h-1 bg-black-400 rounded-lg';

    return hambugerClicked ? `${base} bg-white-400 hamburger--active` : base;
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
        {Object.keys(menuContent).map((folderName, index) => (
          <li key={index}>
            <details>
              <summary>{folderName.replace(/-/g, ' ')}</summary>
              {menuContent[folderName].map((filename, index) => (
                <Link
                  key={index}
                  to={`/docs/${folderName}/${filename.replace(/\s/g, '-')}`}
                  onClick={() => setHamburgerClicked(false)}
                >
                  {filename.replace(/-/g, ' ')}
                </Link>
              ))}
            </details>
          </li>
        ))}
      </ul>
    </nav>
  );
}
