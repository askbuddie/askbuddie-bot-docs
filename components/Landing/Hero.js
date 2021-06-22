import React from 'react';
import Wave from '@svgs/wave.svg';
import Button from '@components/Button';
import Heading from '@components/Heading';

export default function Hero() {
  return (
    <main className="">
      <div className="container min-h-screen flex items-center justify-between">
        <div>
          <Heading modifier="mb-6">
            Ask Buddie&apos;s
            <span className="text-primary-400 mt-4 block">Bot Buddy !</span>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            qui.
          </p>
          <Button modifier="mt-12 px-12 text-xl">Get Sexy</Button>
        </div>
        <div className="heroImage relative">
          <img src="/imgs/logo-full.png" alt="" />
        </div>
        <Wave className="absolute -z-1 -bottom-16 left-0  w-screen" />
      </div>
    </main>
  );
}
