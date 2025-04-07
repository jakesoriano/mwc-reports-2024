import Box from '@/app/_components/Box';
import Icon from '@/app/_components/Icon';
import { outputImpact } from '@/app/_constants/sharedValues';

const OutputImpactContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box bgColor='bg-[#D2E9F4]' border='border border-blue'>
      <h3 className='text-center text-xl uppercase'>Output</h3>
    </Box>
    <Box
      padding='p-0'
      bgColor='bg-[#D2E9F4]'
      border='border border-blue'
      fullHeight
    >
      <div className='flex flex-col justify-center h-full'>
        {outputImpact.map((item, index) => (
          <div key={index} className='flex items-center px-4 py-12'>
            {!!item.icon && (
              <Icon
                name={item.icon}
                extraClass={`text-5xl ${item?.iconClass ?? ''}`}
              />
            )}
            <div className='flex-1'>
              <h3
                className={`text-2xl font-bold`}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p
                className={`font-bold ${!item.icon ? 'ml-12' : ''}`}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </Box>
  </div>
);
export default OutputImpactContent;
