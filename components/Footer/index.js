import React from 'react';
import Button from '@components/Button';

function index() {
  return (
    <footer className="px-2 bg-brand-faded-1 w-full h-full py-20">
      <div className="container mx-auto">
        <div className="w-full h-full">
          <div className="flex flex-col justify-center max-w-md">
            Logo Here
            <p className="my-7 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elitPraesentium, delectus officiis ducimus vero saepe aperiam ad
              quod explicabo animi tempora!
            </p>
            <Button>Join Now</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default index;
