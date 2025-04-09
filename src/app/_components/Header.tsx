'use client';

import { useEffect, useState } from 'react';
import { NavItem, navItems } from '../_constants/navItems';
import Topbar from './Topbar';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const RecursiveSubmenu = ({ items }: { items: NavItem[] }) => (
    <ul className='flex flex-col'>
      {items.map((item, index) => (
        <li
          key={`${item.name}-${index}`}
          className='not-last-of-type:border-b-2 border-gray-500'
        >
          <Link href={item.url} className='py-4 block text-inherit' onClick={toggleMenu}>
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
    <header className='lg:bg-linear-[white,transparent] z-10'>
      <div className='hidden lg:block'>
        <Topbar />
      </div>
      <div className='lg:hidden flex justify-between items-center px-4 py-2 text-white'>
        <Topbar />
        <button className='icon-menu text-2xl' onClick={toggleMenu} />
      </div>
      <nav className='hidden lg:flex'>
        {navItems.map((item) => (
          <div key={item.name} className='flex-1 group relative'>
            <Link
              href={item.url}
              className='text-white group-hover:text-black py-8 px-2 uppercase block text-center group-hover:bg-white bg-(--color-secondary)'
            >
              {item.name}
            </Link>
            {item.children && (
              <div className='hidden group-hover:block absolute text-black uppercase left-0 right-0 z-10'>
                <div className='mt-4 bg-white px-4'>
                  <RecursiveSubmenu items={item.children} />
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {isMenuOpen && (
        <div className='fixed inset-0 bg-secondary z-50 flex flex-col items-start justify-start p-4 lg:hidden max-h-full overflow-auto text-white'>
          <button
            className='icon-close text-2xl absolute top-4 right-4'
            onClick={toggleMenu}
          />
          <ul className='flex flex-col'>
            {navItems.map((item, index) => (
              <li
                key={`${item.name}-${index}`}
                className='border-b-2 border-gray-500 mb-4'
              >
                <Link href={item.url} className='text-white text-xl block px-4'>
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
        </div>
      )}
    </header>
  );
}

export default Header;
