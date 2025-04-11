'use client';

import { navItems } from '@/app/_constants/sharedValues';
import { useResponsiveDevice } from '@/app/_hooks/useResponsiveDevice';
import Image from 'next/image';
import AppLayout from '@/app/_components/AppLayout';
import ContentCarousel from '@/app/_components/ContentCarousel';
import React from 'react';
import CapitalsContent from './_components/CapitalsContent';
import InputsContent from './_components/InputsContent';
import KeyDriversContent from './_components/KeyDriversContent';
// import Link from 'next/link';
import OutputImpactContent from './_components/OutputImpactContent';
import OutcomeContent from './_components/OutcomeContent';

function ValueCreationFramework() {
  const contents: React.ReactNode[] = [
    <>
      <div className='flex items-stretch gap-x-6 mb-4'>
        <div className='basis-[28%]'>
          <CapitalsContent />
        </div>
        <div className='basis-[28%]'>
          <InputsContent />
        </div>
        <div className='basis-[44%]'>
          <KeyDriversContent />
        </div>
      </div>
      <Image
        src='/images/shared-values/value-creation/vcf-footer-01.svg'
        alt='shared value'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto'
      />
    </>,
    <>
      <div className='flex items-stretch gap-x-6 mb-4'>
        <div className='basis-[30%]'>
          <OutputImpactContent />
        </div>
        <div className='basis-[70%]'>
          <OutcomeContent />
        </div>
      </div>

      <Image
        src='/images/shared-values/value-creation/vcf-footer-02.svg'
        alt='shared value'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto'
      />
    </>,
  ];

  const contentsMobile = [
    <>
      <div className='mb-4'>
        <CapitalsContent />
      </div>
      <Image
        src='/images/shared-values/value-creation/vcf-footer-01.svg'
        alt='shared value'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto'
      />
    </>,
    <>
      <div className='mb-4'>
        <InputsContent />
      </div>
      <Image
        src='/images/shared-values/value-creation/vcf-footer-01.svg'
        alt='shared value'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto'
      />
    </>,
    <>
      <div className='mb-4'>
        <KeyDriversContent />
      </div>
      <Image
        src='/images/shared-values/value-creation/vcf-footer-01.svg'
        alt='shared value'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto'
      />
    </>,
    <>
      <div className='mb-4'>
        <OutputImpactContent />
      </div>
      <Image
        src='/images/shared-values/value-creation/vcf-footer-02.svg'
        alt='shared value'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto'
      />
    </>,
    <>
      <div className='mb-4'>
        <OutcomeContent />,
      </div>
      <Image
        src='/images/shared-values/value-creation/vcf-footer-02.svg'
        alt='shared value'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto'
      />
    </>,
  ];

  const device = useResponsiveDevice();

  return (
    <AppLayout
      heroTitle='Creating Shared Values'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/creating-shared-value-banner.jpg'
    >
      <section>
        <h1 className='mb-[16px!important]'>Value Creation Framework</h1>
        <p className='text-xs mb-10'>GRI 2021: 2-6 | GRI 2016: 201-1 | IFRS S1</p>
        <p className='mb-10'>At Manila Water, we are committed to delivering water and wastewater services in a responsible and sustainable manner, ensuring long-term value creation for all our stakeholders. Through the transformation of our capital – financial, manufactured, intellectual, human, social, and natural – we drive the execution of our strategy and contribute to the advancement of the United Nations Sustainable Development Goals (UN SDGs). As we navigate this transformation, we focus on growth that is inclusive, responsible, and sustainable, aligning our business activities with the broader goal of creating lasting positive impact.</p>

        <ContentCarousel
          contents={device === 'mobile' ? contentsMobile : contents}
        />
        
        <p className='font-bold text-xs'>Footnotes:
        </p>
        <ol className='text-xs list-decimal list-inside'>
          <li>Comparison vs 2023: ▲ increase; ▼ decrease = no signifcant change</li>
          <li>Property, plant, equipment</li>
          <li>Total direct individuals reached thru WASH and La Mesa Ecopark</li>
          <li>Energy consumed within the organization</li>
          <li>Non compliance related to effluent and drinking water quality</li>
        </ol>
      </section>
    </AppLayout>
  );
}

export default ValueCreationFramework;
