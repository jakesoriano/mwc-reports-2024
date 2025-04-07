import Box from '@/app/_components/Box';
import ImageTextCard from '@/app/_components/ImageTextCard';
import { capitals } from '@/app/_constants/sharedValues';

const CapitalsContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box bgColor='bg-[#D2E9F4]' border='border border-blue'>
      <h3 className='text-center text-xl uppercase'>Capital</h3>
    </Box>
    <Box
      padding='p-0'
      bgColor='bg-[#D2E9F4]'
      border='border border-blue'
      fullHeight
    >
      {capitals.map((item, index) => (
        <div key={index}>
          <div className='md:-ml-12 p-4'>
            <ImageTextCard
              imageUrl={item.image}
              imageWidth={60}
              imageHeight={60}
              title={item.title}
              titleClass='font-bold text-xs'
              text={item.description}
              textClass='text-xs'
              alignment='horizontal'
            />
          </div>
          <div
            className={`${
              index !== capitals.length - 1 ? 'h-[1px] bg-black w-full' : ''
            }`}
          />
        </div>
      ))}
    </Box>
  </div>
);
export default CapitalsContent;
