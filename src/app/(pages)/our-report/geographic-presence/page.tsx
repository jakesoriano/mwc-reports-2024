import Image from 'next/image';
import AppLayout from '@/app/_components/AppLayout';
import { navItems } from '@/app/_constants/ourReport';
import PhilippineOperations from './sections/PhilippineOperations';
import InternationalOperations from './sections/InternationalOperations';

function GeographicPresence() {
  return (
    <AppLayout
      heroTitle='Our Report'
      navItems={navItems}
      titleColor='text-white'
    >
      <section>
        <h1>Geographic Presence</h1>
        <div className='w-full lg:w-[70%] mx-auto mt-12'>
          <Image
            src='/images/our-report/geographic-presence/geomap.svg'
            alt='geographic presence'
            width={0}
            height={0}
            sizes='80vw'
            className='w-full h-auto'
          />
        </div>
      </section>
      <PhilippineOperations />
      <InternationalOperations />
      <div className='mt-6'>
        <p className='italic text-xs'>
          EPCM - Engineering, Procurement, Construction and Management
        </p>
        <p className='italic text-xs'>SAWACO - Saigon Water Company</p>
        <p className='italic text-xs'>MLD - millions of liter per day</p>
        <p className='italic text-xs'>SW – Saigon Water</p>
        <p className='italic text-xs'>PT STU – PT. Sarana Tirta Ungaran</p>
      </div>
    </AppLayout>
  );
}

export default GeographicPresence;
