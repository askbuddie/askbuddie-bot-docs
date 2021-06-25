import React from 'react';
import Wave from '@svgs/wave.svg';
import Ellipses from '@svgs/heroEllipses.svg';
import Button from '@components/Button';
import Heading from '@components/Heading';

export default function Hero() {
  return (
    <main className="relative">
      <div className="container relative heroContainer min-h-screen flex items-center justify-between">
        <div>
          <Heading modifier="mb-6">
            Ask Buddie&apos;s
            <span className="text-primary-400 mt-4 font-bold block">
              Bot Buddy !
            </span>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            qui.
          </p>
          <Button modifier="mt-12 px-12 text-xl relative pointer">
            Get Sexy!
          </Button>
        </div>
        <div className="relative">
          <img src="/imgs/logo-full.png" alt="" className="relative z-10" />
          <Ellipses className="w-100 absolute bottom-0 left-0" />
        </div>
      </div>
      <Wave className="absolute -z-1 -bottom-16 left-0" />
    </main>
  );
}
