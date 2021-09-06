import React from 'react';

import Heading from '@components/Heading';
import Button from '@components/Button';



function index() {
  return (
    <footer className="bg-brand-faded-1 w-full h-full py-20">
      <div className="container grid grid-cols-2 w-10/12 h-auto mx-auto">
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
      </div>
    </footer>
  );
}

export default index;
