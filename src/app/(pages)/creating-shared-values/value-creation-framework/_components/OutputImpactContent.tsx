import Box from '@/app/_components/Box';
import { outputImpact } from '@/app/_constants/sharedValues';

const OutputImpactContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box>
      <h3 className='text-center text-xl'>Output + Impact</h3>
    </Box>
    <Box padding='p-0' fullHeight>
      <div className='flex flex-col justify-center h-full'>
        {outputImpact.map((item) => (
          <div key={item.title} className='text-center py-12'>
            <h3 className='text-2xl font-bold'>{item.title}</h3>
            <p className='font-bold'>{item.description}</p>
          </div>
        ))}
      </div>
    </Box>
  </div>
);
export default OutputImpactContent;
