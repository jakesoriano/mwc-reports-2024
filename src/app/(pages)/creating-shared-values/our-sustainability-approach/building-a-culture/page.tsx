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
        <h1>Building a Culture of Trust and Care</h1>

        <figure>
          <Image
            src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-1.jpg'
            alt='banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </figure>

        <h2 className='text-2xl font-bold text-secondary mb-3 mt-10'>Our Approach</h2>
        <p className='text-xs mb-6'>GRI 2021:3-3</p>

        <p className='mb-4'>Manila Water cultivates a culture of care and trust by
prioritizing its employees’ well-being and upholding strong
ethical principles. We invest in their development and ensure a
safe, healthy work environment, while maintaining transparent
and accountable practices.</p>

<p className='mb-4'>We extend this care and trust through active community
partnerships and industry leadership. By engaging in
collaborative initiatives and sharing best practices,
we create a positive impact and foster sustainable growth
for all stakeholders.</p>
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
