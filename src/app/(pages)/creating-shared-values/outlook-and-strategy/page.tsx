import { navItems } from '@/app/_constants/sharedValues';
import Image from 'next/image';
import AppLayout from '@/app/_components/AppLayout';
import React from 'react';

function OutlookAndStrategy() {
  return (
    <AppLayout
      heroTitle='Creating Shared Values'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/creating-shared-value-banner.jpg'
    >
      <section>
        <h1>Outlook and Strategy</h1>
        <h3 className='font-bold mb-1'>Purpose and Aspiration</h3>
        <p className='mb-4'>
        In the past 26 years, we have excelled in providing quality
water and environmental services tailored to the communities
we serve. We have embraced our purpose of “better lives
and resilient economies through the provision of critical
infrastructure”. Our mission and vision has continually propelled
us into an exceptional performance in 2023 anchored on our
drive to exude our corporate values.
        </p>
        <h3 className='font-bold mb-1'>Growth and Geography</h3>
        <p className='mb-4'>
        As we go about our day-to-day operations, we will embrace
our aspiration of becoming a value-creating water company
through our growth pillars: the East Zone business, our
Philippine portfolio, and our International businesses.
We expect our East Zone business to remain as our core
platform as we grow in key areas in the country as well as other
emerging markets globally. For the East Zone, we will continue
to protect our core and increase the value of the business through effective regulatory management and sustained
operational performance. We will tap unmet demand in areas
where we already operate, while expanding our local footprint
in the Philippine market outside the East Zone. Internationally,
we see ourselves pursuing profitable growth in a very strategic
and deliberate manner. We will prioritize markets with robust
growth prospects that will add value to the enterprise through
the application of best practices and proven expertise.
        </p>
        <p className='mb-4'>
        These 3 growth pillars, coupled with our internal initiatives
such as funding programs, cost efficiency projects,
new organizational design, will enable us to achieve
our aspirations.
        </p>
        <Image
          src='/images/shared-values/outlook-and-strategy-img-1.jpg'
          alt='Outlook and Strategy'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full'
        />
        <h3 className='font-bold mb-1 mt-4'>27 years of Unwavering Service</h3>
        <p className='mb-4'>
          Since our incorporation in 1997, we have consistently provided not
          only clean and potable water to our customers, but also uninterrupted
          water supply, and sewerage service. We have been able to deliver on
          our privatization objectives by focusing on our customers.
        </p>
        <p className='mb-4'>
        Twenty seven years later, we continue to improve on
our record. Moreover, we will strive to provide our customers
across the globe with world class water
and wastewater services, while protecting the
environment and promoting sustainability.
        </p>
      </section>
    </AppLayout>
  );
}

export default OutlookAndStrategy;
