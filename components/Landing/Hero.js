import React from 'react';
import Wave from '@svgs/wave.svg';

export default function Hero() {
  return (
    <main className="">
      <div className="container min-h-screen flex items-center justify-between">
        <div>
          <h1 className="font-heading text-7xl font-extrabold mb-6">
            Ask Buddie's
            <span className="text-primary-400 mt-4 block">Bot Buddy !</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            qui.
          </p>
          <button className="mt-12 w-max px-12 py-2 text-xl font-medium rounded-md bg-primary-400 text-white">
            Get Sexy
          </button>
        </div>
        <div className="heroImage relative">
          <img src="/imgs/logo-full.png" alt="logo" />
        </div>
        <Wave className="absolute -z-1 -bottom-16 left-0  w-screen" />
      </div>
    </main>
  );
}
