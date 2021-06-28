import Layout from '@components/Layout';
import Hero from '@components/Landing/Hero';
import Features from '@components/Landing/Features';
import Community from '@components/Landing/Community';
import About from '@components/Landing/About';

export default function Home() {
  return (
    <Layout title="Ask Buddie Bot">
      <Hero />
      <Features />
      <About />
      <Community />
    </Layout>
  );
}
