import { navItems } from '@/app/_constants/sharedValues';
import Image from 'next/image';
import AppLayout from '@/app/_components/AppLayout';
import ContentCarousel from '@/app/_components/ContentCarousel';
import React from 'react';
import Link from 'next/link';

function ValueCreationFramework() {
  return (
    <AppLayout
      heroTitle='Creating Shared Values'
      navItems={navItems}
      titleColor='text-white'
    >
      <section>
        <h1>Outlook and Strategy</h1>
      </section>
      <section className='pt-4'></section>
    </AppLayout>
  );
}

export default ValueCreationFramework;
