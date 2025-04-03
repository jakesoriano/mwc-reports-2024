import React from 'react';
import Image from 'next/image';

function MaterialTopcs() {
  return (
    <section className='py-10'>
      <h3 className='font-bold text-xl mb-4'>Material Topics</h3>
      <div className='mb-20'>
        <p className='mb-4'>
          The double materiality assessment exercise yielded 16 material topics,
          critical to our business and our environmental, social, and governance
          performance. We intend to continue monitoring and managing our
          socio-environmental impacts by ensuring these topics are strategically
          integrated in the way we operate and do business.
        </p>
        <Image
          src='/images/shared-values/our-sustainability-approach/determining-what-matters/determining-what-matters-img-4.svg'
          alt='material topics'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto'
        />
      </div>
      <div>
        <p className='mb-4 font-bold text-center text-lg'>
          Mapping and comparative between 2024 and 2023 Material Topics
        </p>
        <Image
          src='/images/shared-values/our-sustainability-approach/determining-what-matters/determining-what-matters-img-3.svg'
          alt='material topics'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto'
        />
      </div>
    </section>
  );
}

export default MaterialTopcs;
