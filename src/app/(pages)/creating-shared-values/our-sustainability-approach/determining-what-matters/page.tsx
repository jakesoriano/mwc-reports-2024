import AppLayout from '@/app/_components/AppLayout';
import { navItems } from '@/app/_constants/sharedValues';
import React from 'react';
import ChangingContexts from './_sections/ChangingContexts';
import MaterialTopics from './_sections/MaterialTopics';
import ReinforcingAgenda1 from './_sections/ReinforcingAgenda1';
import ReinforcingAgenda2 from './_sections/ReinforcingAgenda2';
import ReinforcingAgenda3 from './_sections/ReinforcingAgenda3';

function DeterminingWhatMatters() {
  return (
    <AppLayout
      heroTitle='Our Sustainability Approach'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/sustainability-approach-banner.jpg'
    >
      <section>
        <h1>Determining What Matters</h1>
        <ChangingContexts />
      </section>
      <MaterialTopics />
      <section className='pt-20 max-w-[500px] md:max-w-[unset] overflow-x-auto'>
        <div className='w-[800px] md:w-full'>
          <ReinforcingAgenda1 />
        </div>
      </section>
      <section className='max-w-[500px] md:max-w-[unset] overflow-x-auto'>
        <div className='w-[800px] md:w-full'>
          <ReinforcingAgenda2 />
        </div>
      </section>
      <section className='max-w-[500px] md:max-w-[unset] overflow-x-auto'>
        <div className='w-[800px] md:w-full'>
          <ReinforcingAgenda3 />
        </div>
      <div className='text-right'>
        <p className='mb-4 mt-5 text-xs'><span className='font-bold underline'>Legend:</span><br/>(ST) Short Term<br/>(MT) Medium Term<br/>(LT) Long Term</p>
      </div>
      </section>
    </AppLayout>
  );
}

export default DeterminingWhatMatters;
