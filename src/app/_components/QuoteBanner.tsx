import Image from 'next/image';

type Props = {
  quotePlacement?: 'left' | 'right';
  text: string;
};

function QuoteBanner({ quotePlacement = 'left', text }: Props) {
  return (
    <div
      className={`flex gap-x-12 ${
        quotePlacement === 'right' ? 'flex-row-reverse' : ''
      }`}
    >
      <div>
        <Image
          src='/images/quote.svg'
          alt='quote'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto'
        />
      </div>
      <p className='text-base md:text-3xl text-white font-medium'>{text}</p>
    </div>
  );
}

export default QuoteBanner;
