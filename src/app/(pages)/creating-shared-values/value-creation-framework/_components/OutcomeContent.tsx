import Box from '@/app/_components/Box';
import Icon from '@/app/_components/Icon';
import { outcome } from '@/app/_constants/sharedValues';
import Image from 'next/image';

const OutcomeContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box bgColor='bg-[#D2E9F4]' border='border border-blue'>
      <h3 className='text-center text-xl uppercase'>Outcome + Shared Value</h3>
    </Box>
    <Box
      fullHeight
      bgColor='bg-[#D2E9F4]'
      border='border border-blue'
      padding='p-0'
    >
      {outcome.map((item, index) => (
        <div
          key={item.title}
          className={`p-4 ${
            index !== outcome.length - 1 ? 'border-b border-black' : ''
          }`}
        >
          <h3 className='text-xs font-bold ml-12 mb-4'>{item.title}</h3>
          <div className='flex items-center'>
            <div className='basis-[70%]'>
              {item.data.map((data, index) => (
                <div
                  key={index}
                  className='flex items-center relative pl-12 mb-1'
                >
                  {!!data.icon && (
                    <Icon
                      name={data.icon}
                      extraClass={`text-5xl absolute left-0 ${
                        data?.iconClass ?? ''
                      }`}
                    />
                  )}
                  {/* <p className={`text-xs ${!data.icon ? 'ml-12' : ''}`}>
                    {data.description}
                  </p> */}

                <p
                  className={`text-xs ${!data.icon ? 'ml-12' : ''}`}
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
                </div>
              ))}
            </div>
            <div className='basis-[30%] grid grid-cols-3 gap-x-3'>
              {item.images.map((image, index) => (
                <div key={index} className='relative'>
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    width={64}
                    height={64}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Box>
  </div>
);
export default OutcomeContent;
