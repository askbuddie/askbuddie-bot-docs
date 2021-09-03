import React from 'react';
import Heading from '@components/Heading';
import Tweaks from '@svgs/tweaks.svg';

function Cards({ details }) {
  return (
    <div className="mt-24 pb-16 flex flex-wrap gap-28 md:gap-16 justify-around items-center container">
      {details.map((detail, index) => {
        const { title, description, Icon } = detail;
        return (
          <div
            key={index}
            className="relative w-72 p-4 text-center rounded-xl shadow-2xl"
          >
            <Icon className="w-16 absolute left-1/4 translate-x-1/2 -top-1/4 translate-y-1/2" />
            <Heading level={5} modifier="font-bold mb-4 mt-10">
              {title}
            </Heading>
            <p className="opacity-80">{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Features() {
  const cardDetails = [
    {
      title: 'Sample Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elitPraesentium, delectus officiis ducimus vero saepe aperiam ad quod explicabo animi tempora!',
      Icon: Tweaks
    },
    {
      title: 'Sample Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elitPraesentium, delectus officiis ducimus vero saepe aperiam ad quod explicabo animi tempora!',
      Icon: Tweaks
    },
    {
      title: 'Sample Title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elitPraesentium, delectus officiis ducimus vero saepe aperiam ad quod explicabo animi tempora!',
      Icon: Tweaks
    }
  ];
  return (
    <section className="mt-28 px-2">
      <Heading level={4} modifier="text-center">
        <span className="text-brand-400">Ask Buddie's Bot</span> is the best bot
        in the word(probably)
      </Heading>
      <Heading level={5} modifier="text-center mt-2">
        Here are the basic features of the bot
      </Heading>
      <Cards details={cardDetails} />
    </section>
  );
}
