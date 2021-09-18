import Heading from '@components/Heading';
import Button from '@components/Button';
import WaveSm from '@svgs/wave-sm.svg';

export default function About() {
  return (
    <section className="bg-brand-faded-1 flex flex-col px-2 md:px-14 pt-14 relative z-0">
      <div className="container mb-20">
        <Heading level={3} modifier="text-center">
          We are <span className="text-brand-400">Open Source</span> &amp; we
          love <span className="text-brand-400">Open Source</span>
        </Heading>
        <div className="flex justify-around mt-10">
          <div className="hidden lg:block mt-28">
            <SideImage />
          </div>
          <div className="flex flex-col items-start lg:ml-32">
            <Block title="Work Together" />
            <Block title="Grow Together" />
            <Button modifier="mt-12 relative">Contribute</Button>
          </div>
        </div>
      </div>
      <WaveSm className="max-h-screen-sm absolute -z-1 bottom-0 right-0" />
    </section>
  );
}

function SideImage() {
  return (
    <div className="aboutSideImageWrap h-0 relative">
      <div className="aboutRedCircleAlias"></div>
      <div className="bg-github-screen rounded-3xl bg-cover bg-center bg-no-repeat w-80 xl:w-108 h-80 xl:h-104">
        <div className="rounded-3xl absolute -top-7 left-4 w-80 xl:w-108 h-80 xl:h-104 border-4 border-white-400">
          <div className="bg-robot rounded-3xl bg-cover bg-center bg-no-repeat w-64 h-64 absolute top-20 left-36 xl:left-96 flex justify-center items-center">
            <div className="rounded-3xl absolute w-60 h-60 border-4 border-white-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title }) {
  return (
    <div className="aboutBlock md:max-w-md">
      <Heading
        level={5}
        modifier="font-bold mt-10 mb-2 text-center lg:text-left"
      >
        {title}
      </Heading>
      <p className="text-center xl:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum
        perferendis cumque suscipit asperiores repellendus magni totam,
        quibusdam eaque esse dolores, quia temporibus aperiam dolorem
        accusantium veritatis nobis. Ab, voluptate.
      </p>
    </div>
  );
}
