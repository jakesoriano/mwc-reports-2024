import Box from '@/app/_components/Box';
import ImageTextCard from '@/app/_components/ImageTextCard';
import { capitals } from '@/app/_constants/sharedValues';

const CapitalsContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box>
      <h3 className='text-center text-xl'>Capitals</h3>
    </Box>
    <Box padding='p-0' fullHeight>
      {capitals.map((item, index) => (
        <div
          className={`p-4 ${
            index !== capitals.length - 1 ? 'border-b border-black' : ''
          }`}
          key={index}
        >
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
      ))}
    </Box>
  </div>
);
export default CapitalsContent;
