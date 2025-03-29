import Box from '@/app/_components/Box';
import Icon from '@/app/_components/Icon';
import { inputs } from '@/app/_constants/sharedValues';
import Link from 'next/link';

const InputsContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box>
      <h3 className='text-center text-xl'>Inputs</h3>
    </Box>
    <Box padding='p-0' fullHeight>
      {inputs.map((input, index) => (
        <div
          className={`pt-2 pb-4 pr-4 pl-2 ${
            index !== inputs.length - 1 ? 'border-b border-black' : ''
          }`}
          key={index}
        >
          {input.map((item, index) => (
            <div key={index} className='flex items-center'>
              {!!item.icon && <Icon name={item.icon} extraClass='text-5xl' />}
              <p className={`text-xs ${!item.icon ? 'ml-12' : ''}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ))}
      <div className='pl-14 pr-4'>
        <Link href='' className='link text-xs'>
          Watershed Management Report
        </Link>
      </div>
    </Box>
  </div>
);
export default InputsContent;
