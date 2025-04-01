'use client';

import { useEffect, useRef, useState } from 'react';
import { NavItem, navItems } from '../_constants/navItems';
import Topbar from './Topbar';
import Link from 'next/link';

function Header() {
  const RecursiveSubmenu = ({ items }: { items: NavItem[] }) => (
    <ul className='flex flex-col'>
      {items.map((item, index) => (
        <li
          key={`${item.name}-${index}`}
          className='not-last-of-type:border-b-2 border-gray-500'
        >
          <Link href={item.url} className='py-4 block'>
            {item.name}
          </Link>
          {item.children && (
            <div className='pl-4'>
              <RecursiveSubmenu items={item.children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header className='lg:bg-linear-[white,transparent]'>
      <Topbar />
      <nav className='hidden lg:flex'>
        {navItems.map((item) => (
          <div key={item.name} className='flex-1 group relative'>
            <Link
              href={item.url}
              className='text-white hover:text-black py-8 px-2 uppercase block text-center hover:bg-white bg-(--color-secondary)'
            >
              {item.name}
            </Link>

            {item.children && (
              <div className='hidden group-hover:block absolute text-black uppercase left-0 right-0'>
                <div className='mt-4 bg-white px-4'>
                  <RecursiveSubmenu items={item.children} />
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
