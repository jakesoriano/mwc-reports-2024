import ImageTextCard from './ImageTextCard';

type Props = {
  image: string;
  name: string;
  position?: string;
  company?: string;
  theme: 'light' | 'dark';
  testimonialHighlight: string;
  testimonial: string;
};

function Testimonials({
  image,
  name,
  position,
  company,
  theme,
  testimonialHighlight,
  testimonial,
}: Props) {
  return (
    <div
      className={`text-white rounded-lg py-4 px-8 ${
        theme === 'dark' ? 'bg-secondary' : 'bg-blue'
      }`}
    >
      <ImageTextCard
        imageHeight={100}
        imageWidth={100}
        imageRounded
        alignment='horizontal'
        imageUrl={image}
        title={name}
        titleClass='font-bold uppercase'
        text={`${position}<br/>${company}`}
        textClass='italic text-sm'
      />
      <div className='relative'>
        <span
          className={`text-7xl absolute top-0 left-0 ${
            theme === 'dark' ? 'text-blue' : 'text-secondary'
          }`}
        >
          ❝
        </span>
        <div className='pt-12 pb-19'>
          <p className='font-bold text-lg mb-8'>{testimonialHighlight}</p>
          <p>{testimonial}</p>
        </div>
        <span
          className={`text-7xl absolute bottom-0 left-0 ${
            theme === 'dark' ? 'text-blue' : 'text-secondary'
          }`}
        >
          ❞
        </span>
      </div>
    </div>
  );
}

export default Testimonials;
