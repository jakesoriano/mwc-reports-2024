import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='bg-secondary text-white text-xs'>
      <div className='container mx-auto px-18 py-3 flex gap-7 justify-around items-center flex-col md:flex-row'>
        <ul className='flex gap-2 flex-wrap justify-center'>
          <li className='cursor-pointer border-r border-white pr-2'>
            <Link href='/about-this-integrated-report'>
              About this Integrated Report
            </Link>
          </li>
          <li className='cursor-pointer border-r border-white pr-2'>
            <Link href='/contact-us'>Contact Us</Link>
          </li>
          <li className='cursor-pointer border-r border-white pr-2'>
            <Link href='https://www.manilawater.com/' target='_blank'>
              Manila Water Website
            </Link>
          </li>
          <li>
            <Link
              href='https://reports.manilawater.com/static/media/2023-Integrated-Report.66cb32f843255c860579.pdf'
              target='_blank'
            >
              Download 2024 Integrated Report
            </Link>
          </li>
        </ul>
        <span>Copyright © 2024 Manila Water Company, Inc.</span>
      </div>
    </footer>
  );
}

export default Footer;
