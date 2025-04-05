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
import Link from 'next/link';
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
        <h1>Value Creation Framework</h1>
        <ContentCarousel
          contents={device === 'mobile' ? contentsMobile : contents}
        />
        <p className='text-xs mt-4 mb-6 italic'>
          Refer to our{' '}
          <Link href='' className='link'>
            ESG Performance Data
          </Link>{' '}
          for more information
        </p>
      </section>
    </AppLayout>
  );
}

export default ValueCreationFramework;
