'use client';
import { useState } from 'react';
import Icon from './Icon';

type Props = {
  contents: React.ReactNode[];
};

function ContentCarousel({ contents }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contents.length) % contents.length
    );
  };

  return (
    <div className='relative'>
      <div>{contents[currentIndex]}</div>
      {contents.length > 1 && currentIndex > 0 && (
        <button
          className='absolute top-1/2 left-5 transform -translate-y-1/2 -rotate-90 animate-bounce cursor-pointer'
          onClick={handlePrev}
        >
          <Icon
            name='chevron-up'
            extraClass='text-gray-900 text-4xl md:text-5xl hover:text-primary'
          />
        </button>
      )}
      {contents.length > 1 && currentIndex < contents.length - 1 && (
        <button
          className='absolute top-1/2 right-5 transform -translate-y-1/2 rotate-90 animate-bounce cursor-pointer'
          onClick={handleNext}
        >
          <Icon
            name='chevron-up'
            extraClass='text-gray-900 text-4xl md:text-5xl hover:text-primary'
          />
        </button>
      )}
    </div>
  );
}

export default ContentCarousel;
