import React from 'react';

import Heading from '@components/Heading';
import Link from '@components/Link';

import Wave from '@svgs/wave.svg';

export default function Community() {
  return (
    <section className="relative min-h-screen pt-40 pb-28 flex">
      <div className="communityWrap relative max-w-5xl w-full  m-auto flex items-end bg-white-400 drop-shadow-2xl p-10 rounded-l-3xl">
        <div className="w-80">
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
        <div className="communityImage h-3/4 w-3/5 p-2 bg-white-400 absolute rounded-br-3xl bottom-0 -right-8">
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
