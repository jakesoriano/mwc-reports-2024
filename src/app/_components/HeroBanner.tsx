import React from 'react';

type Props = {
  title: string;
  titleColor?: string;
  bgColor?: string;
  bgImage?: string;
};

function HeroBanner({ title, titleColor, bgColor, bgImage }: Props) {
  return (
    <section
      className={`h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-end pb-12 pl-12 bg-cover bg-center bg-no-repeat ${titleColor}`}
      style={{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }}
    >
      <h1 className='text-6xl font-bold uppercase '>{title}</h1>
    </section>
  );
}

export default HeroBanner;
