import Heading from '@components/Heading';
import Button from '@components/Button';
import WaveSm from '@svgs/wave-sm.svg';

export default function About() {
  return (
    <section className="aboutContainer flex flex-col px-14 pt-14 relative">
      <div className="mb-20">
        <Heading level={3} modifier="text-center">
          We are <span className="text-primary-400">Open Source</span> &amp; we
          love <span className="text-primary-400">Open Source</span>
        </Heading>
        <div className="flex justify-center mt-10">
          <div className="mr-10 mt-28">
            <SideImage />
          </div>
          <div className="flex flex-col items-start ml-16">
            <Block title="Work Together" />
            <Block title="Grow Together" />
            <Button modifier="mt-12 px-12 text-xl relative">Contribute</Button>
          </div>
        </div>
      </div>
      <WaveSm className="absolute -z-1 bottom-0 right-0" />
    </section>
  );
}

function SideImage() {
  return (
    <div className="aboutSideImage h-0 relative">
      <div className="aboutRedCircleAlias"></div>
      <img src="/imgs/about-side-image.png" alt="" className="sideImage" />
    </div>
  );
}

function Block({ title }) {
  return (
    <div className="aboutBlock">
      <Heading level={5} modifier="font-bold mt-10 mb-2">
        {title}
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum
        perferendis cumque suscipit asperiores repellendus magni totam,
        quibusdam eaque esse dolores, quia temporibus aperiam dolorem
        accusantium veritatis nobis. Ab, voluptate.
      </p>
    </div>
  );
}
