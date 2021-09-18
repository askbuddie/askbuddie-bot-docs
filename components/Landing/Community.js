import React from 'react';

import Heading from '@components/Heading';
import Link from '@components/Link';

import Wave from '@svgs/wave.svg';

export default function Community() {
  return (
    <section className="relative min-h-screen px-2 pt-16 lg:pt-40 pb-28 flex overflow-x-hidden">
      <div className="communityWrap container relative xl:max-w-5xl w-full lg:m-auto flex flex-col-reverse lg:flex-row items-end lg:bg-white-400 lg:drop-shadow-2xl lg:p-10 rounded-l-3xl">
        <div className="lg:w-80 pt-8 lg:pt-0">
          <Heading level={2} modifier="mb-8">
            Join our <span className="text-brand-400">Facebook</span> Community!
          </Heading>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            totam fugiat omnis neque aliquid corporis praesentium fuga
            repudiandae, culpa quam!
          </p>
          <Link
            to="https://www.facebook.com/groups/askbuddie"
            newTab
            className="btn"
          >
            Join Now
          </Link>
        </div>
        <div className="communityImage h-3/4 lg:w-3/5 p-2 bg-white-400 relative lg:absolute rounded-br-3xl bottom-0 lg:-right-8">
          <img
            src="/imgs/fb.png"
            alt="Ask Buddie Facebook Community"
            className="w-full h-full object-cover rounded-tl-3xl rounded-br-2xl"
          />
        </div>
      </div>
      {/* TODO: set max-height to ~320px */}
      <Wave className="absolute bottom-0 left-0 -z-1" />
    </section>
  );
}
