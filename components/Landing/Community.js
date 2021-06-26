import React from 'react';
import Heading from '@components/Heading';
import Link from '@components/Link';

export default function Community() {
  return (
    <section className="relative min-h-screen flex">
      <div className="relative max-w-5xl w-full  m-auto flex items-end bg-white drop-shadow-xl p-10 rounded-l-3xl">
        <div className="w-80">
          <Heading level={2} modifier="mb-8">
            Join our <span className="text-primary-400">Facebook</span>{' '}
            Community!
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
        <div className="h-4/5 w-3/5 p-2 bg-white absolute rounded-br-3xl bottom-0 -right-8">
          <img
            src="/imgs/fb.png"
            alt="Ask Buddie Facebook Community"
            className="w-full h-full object-cover rounded-tl-3xl rounded-br-2xl"
          />
        </div>
      </div>
    </section>
  );
}
