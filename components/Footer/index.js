import React from 'react';

import Heading from '@components/Heading';
import Button from '@components/Button';

function FooterMenu({ fakeMenuOptions, index }) {
  return (
    <div className="flex flex-col text-center ">
      <div>
        <Heading level={6} modifier="font-extrabold mb-7 uppercase">
          {fakeMenuOptions[index]?.title}
        </Heading>
      </div>

      <ul className="w-full h-full">
        {fakeMenuOptions[index]?.menuOptions?.map((menu) => (
          <li key={menu?.id}>
            <a href={menu?.link} className="font-normal capitalise">
              {menu?.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const fakeMenuOptions = {
  0: {
    title: 'getting started',
    menuOptions: [
      {
        id: 0,
        text: 'Line One Here',
        link: '/url'
      },
      {
        id: 1,
        text: 'Line One Here',
        link: '/url'
      },
      {
        id: 1,
        text: 'Line One Here',
        link: '/url'
      }
    ]
  },
  1: {
    title: 'core concept',
    menuOptions: [
      {
        id: 0,
        text: 'Line One Here',
        link: '/url'
      },
      {
        id: 1,
        text: 'Line One Here',
        link: '/url'
      },
      {
        id: 1,
        text: 'Line One Here',
        link: '/url'
      }
    ]
  },
  2: {
    title: 'community',
    menuOptions: [
      {
        id: 0,
        text: 'Line One Here',
        link: '/url'
      },
      {
        id: 1,
        text: 'Line One Here',
        link: '/url'
      }
    ]
  }
};

function index() {
  return (
    <footer className="bg-lightRed w-full h-full py-20">
      <div className=" grid grid-cols-2 w-10/12 h-auto mx-auto">
        <div className="w-full h-full">
          <div className="flex flex-col justify-center max-w-md">
            Logo Here
            <p className="my-7 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elitPraesentium, delectus officiis ducimus vero saepe aperiam ad
              quod explicabo animi tempora!
            </p>
            <Button modifier="px-12 text-xl heroCTA">Join Now</Button>
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-3">
          <FooterMenu fakeMenuOptions={fakeMenuOptions} index={0} />
          <FooterMenu fakeMenuOptions={fakeMenuOptions} index={1} />
          <FooterMenu fakeMenuOptions={fakeMenuOptions} index={2} />
        </div>
      </div>
    </footer>
  );
}

export default index;
