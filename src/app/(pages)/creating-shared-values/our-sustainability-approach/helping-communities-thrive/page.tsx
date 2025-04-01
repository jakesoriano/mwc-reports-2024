import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/sharedValues';
import OurApproach from './_sections/OurApproach';
import ClimateResilience from './_sections/ClimateResilience';
import WaterWasteServices from './_sections/WaterWasteServices';
import CustomerCentricity from './_sections/CustomerCentricity';
import EnvironmentalStewardship from './_sections/EnvironmentalStewardship';

function HelpingCommunitiesThrive() {
  return (
    <AppLayout
      heroTitle='Creating Shared Values'
      navItems={navItems}
      titleColor='text-white'
      heroBGImage='/images/shared-values/our-sustainability-approach/stakeholder-engagement/stakeholder-engagement-img-1-tinted.jpg'
    >
      <section>
        <h1>Helping Communities Thrive</h1>
        <figure>
          <Image
            src='/images/shared-values/our-sustainability-approach/helping-communities-thrive/hct-img-1.jpg'
            alt='helping communities thrive banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
          <figcaption className='mt-4 italic text-sm'>
            Customers arrive at our service areas to address their Manila Water
            service inquiries, from account management to technical support.
          </figcaption>
        </figure>
      </section>
      <OurApproach />
      <ClimateResilience />
      <WaterWasteServices />
      <CustomerCentricity />
      <EnvironmentalStewardship />
    </AppLayout>
  );
}

export default HelpingCommunitiesThrive;
