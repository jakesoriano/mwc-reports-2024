'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '../_constants/navItems';

type Props = {
  navItems: NavItem[];
};

function PageNav({ navItems }: Props) {
  const [activeLink, setActiveLink] = useState<string>('');
  const [activeParent, setActiveParent] = useState<NavItem | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathArray = window.location.pathname.split('/');

      let currentPath = "";
      for (let i = 2; i < pathArray.length-1; i++) {
        currentPath += "/";
        currentPath += pathArray[i];
      }

      setActiveLink(currentPath);

      // Find the parent of the current active link or the active link itself
      const parentItem = navItems.find(
        (item) =>
          item.url === currentPath ||
          item.children?.some((child) => child.url === currentPath),
      );
      setActiveParent(parentItem || null);
    }
  }, [navItems]);

  return (
    <>
      <nav className='bg-gray-200 py-4 overflow-x-auto'>
        <ul className='flex'>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`flex-1 text-center group relative flex justify-center items-center ${
                activeLink === item.url || activeParent?.url === item.url
                  ? 'is-active'
                  : ''
              }`}
            >
              <Link
                href={item.url}
                className='text-primary font-bold uppercase block p-4 whitespace-nowrap'
              >
                {item.name}
              </Link>
              <span className='absolute left-1/2 bottom-0 w-0 h-[2px] bg-white group-hover:w-[calc(100%-1rem)] group-[.is-active]:w-[calc(100%-1rem)] transition-all duration-300 transform -translate-x-1/2'></span>
            </li>
          ))}
        </ul>
      </nav>
      {activeParent && activeParent.children && (
        <nav className='bg-white overflow-x-auto text-sm px-4'>
          <ul className='flex justify-center'>
            {activeParent.children.map((item) => (
              <li
                key={item.name}
                className={`text-center group relative flex justify-center items-center ${
                  activeLink === item.url ? 'is-active' : ''
                }`}
              >
                <Link
                  href={item.url}
                  className='text-secondary font-bold uppercase block p-4 whitespace-nowrap'
                >
                  {item.name}
                </Link>
                <span className='absolute left-1/2 bottom-0 w-0 h-[2px] bg-secondary group-hover:w-[calc(100%-1rem)] group-[.is-active]:w-[calc(100%-1rem)] transition-all duration-300 transform -translate-x-1/2'></span>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default PageNav;
