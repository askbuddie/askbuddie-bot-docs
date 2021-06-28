import Heading from '@components/Heading';
import Button from '@components/Button';
import WaveSm from '@svgs/wave-sm.svg';

export default function About() {
  return (
    <div className="aboutContainer flex flex-col px-14 pt-14 relative z-0">
      <div className="container mb-20">
        <Heading level={3} modifier="text-center">
          We are <span className="text-primary-400">Open Source</span> &amp; we
          love <span className="text-primary-400">Open Source</span>
        </Heading>
        <div className="flex justify-around mt-10">
          <div className="mt-28">
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
    </div>
  );
}

function SideImage() {
  return (
    <div className="aboutSideImageWrap h-0 relative">
      <div className="aboutRedCircleAlias"></div>
      <div className="bg-github-screen rounded-3xl bg-cover bg-center bg-no-repeat w-108 h-104 ">
        <div className="rounded-3xl absolute -top-10 left-8 w-108 h-104 border-4 border-white">
          <div className="bg-robot rounded-3xl bg-cover bg-center bg-no-repeat w-64 h-64 absolute top-20 left-96 flex justify-center items-center">
            <div className="rounded-3xl absolute w-60 h-60 border-4 border-white"></div>
          </div>
        </div>
      </div>
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
