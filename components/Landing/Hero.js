import React from 'react';
import Wave from '@svgs/wave.svg';
import Ellipses from '@svgs/heroEllipses.svg';
import Link from '@components/Link';
import Heading from '@components/Heading';

export default function Hero() {
  return (
    <main className="relative px-2">
      <div className="container relative heroContainer flex flex-col-reverse md:flex-row items-end md:items-center justify-between">
        <div className="relative z-20 -mt-20 md:mt-0">
          <Heading modifier="mb-6 pt-4 bg-gradient-to-r from-white-faded-1 to-white-faded-9 md:pt-0 lg:bg-none">
            Ask Buddie&apos;s
            <span className="text-brand-400 mt-4 font-bold block">
              Bot Buddy !
            </span>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            qui.
          </p>
          <Link to="/docs" className="btn block mt-12 relative pointer">
            Get Sexy!
          </Link>
        </div>
        <div className="relative w-72 md:w-1/2 md:static">
          <img
            src="/imgs/logo-full.png"
            alt=""
            className="absolute bottom-0 w-72 md:w-full z-10 md:relative"
          />
          <Ellipses className="w-72 md:absolute md:w-1/2 bottom-0 right-0" />
        </div>
      </div>
      <Wave className="max-h-screen-sm absolute -z-1 -bottom-32 md:-bottom-16 left-0" />
    </main>
  );
}
