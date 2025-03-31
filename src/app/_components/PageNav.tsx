'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '../_constants/navItems';

type Props = {
  navItems: NavItem[];
};

function PageNav({ navItems }: Props) {
  const [activeLink, setActiveLink] = useState<String>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  return (
    <nav className='bg-gray-200 py-4 overflow-x-auto'>
      <ul className='flex'>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`flex-1 text-center group relative flex justify-center items-center ${
              activeLink === item.url ? 'is-active' : ''
            }`}
          >
            <Link
              href={item.url}
              className='text-secondary font-bold block p-4 text-sm'
            >
              {item.name}
            </Link>
            <span className='absolute left-1/2 bottom-0 w-0 h-[2px] bg-white group-hover:w-[calc(100%-1rem)] group-[.is-active]:w-[calc(100%-1rem)] transition-all duration-300 transform -translate-x-1/2'></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PageNav;
