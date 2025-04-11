import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { default as socials } from '@/app/_data/socials.json';
import Icon from './Icon';

function Topbar() {
  return (
    <div className='flex justify-between items-center pt-6 pb-6 pr-6 pl-0 lg:pl-6'>
      <div className='max-w-[250px] lg:max-w-[300px]'>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt='logo'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto'
          />
        </Link>
      </div>

      <div className='hidden lg:flex items-center gap-4'>
        {socials.map((social) => (
          <Link href={social.url} key={social.name}>
            <Icon
              name={social.icon}
              size='3xl'
              extraClass='text-secondary text-5xl'
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topbar;
