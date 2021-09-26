import React from 'react';
import Nav from '@components/Nav';
import Hero from './Hero';
import Features from './Features';
import Community from './Community';
import About from './About';

export default function Landing() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <About />
      <Community />
    </>
  );
}
