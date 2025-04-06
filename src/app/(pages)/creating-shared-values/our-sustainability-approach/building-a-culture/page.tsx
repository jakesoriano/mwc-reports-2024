import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/sharedValues';
import HumanCapital from './_sections/HumanCapital';
import LearningDevelopment from './_sections/LearningDevelopment';
import OcccupationHealthSafety from './_sections/OcccupationHealthSafety';
import GovernanceCompliance from './_sections/GovernanceCompliance';
import Partnerships from './_sections/Partnerships';

function BuildingACulture() {
  return (
    <AppLayout
      heroTitle='Our Sustainability Approach'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/sustainability-approach-banner.jpg'
    >
      <section>
        <h1>Building a culture of trust and care</h1>
        <figure>
          <Image
            src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-1.jpg'
            alt='banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </figure>
      </section>
      <HumanCapital />
      <LearningDevelopment />
      <OcccupationHealthSafety />
      <GovernanceCompliance />
      <Partnerships />
    </AppLayout>
  );
}

export default BuildingACulture;
