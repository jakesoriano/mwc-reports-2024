import Box from '@/app/_components/Box';
import Icon from '@/app/_components/Icon';
import { inputs } from '@/app/_constants/sharedValues';
import Link from 'next/link';

const InputsContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box bgColor='bg-[#D2E9F4]' border='border border-blue'>
      <h3 className='text-center text-xl uppercase'>Resources<sup>1</sup></h3>
    </Box>
    <Box
      padding='p-0'
      bgColor='bg-[#D2E9F4]'
      border='border border-blue'
      fullHeight
    >
      {inputs.map((input, index) => (
        <div
          className={`pt-2 pb-4 pr-4 pl-2 ${
            index !== inputs.length - 1 ? 'border-b border-black' : ''
          }`}
          key={index}
        >
          {Array.isArray(input) &&
            input.map((item, index) => (
              <div key={index} className='flex items-center'>
                {!!item.icon && (
                  <Icon
                    name={item.icon}
                    extraClass={`text-4xl ${item?.iconClass ?? ''}`}
                  />
                )}
                <p
                  className={`text-xs ${!item.icon ? 'ml-12' : ''}`}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          {typeof input === 'string' && (
            <div
              className='text-xs pl-2'
              dangerouslySetInnerHTML={{ __html: input }}
            />
          )}
        </div>
      ))}
      <div className='pl-14 pr-4'>
        <Link href='/downloads/2024-Watershed-Management-Report.pdf' target='_blank' className='link text-xs'>
          Watershed Management Report 
        </Link>
      </div>
    </Box>
  </div>
);
export default InputsContent;
