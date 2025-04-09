import React from 'react';
import HeroBanner from './HeroBanner';
// import PageNav from './PageNav';

import { NavItem } from '../_constants/navItems';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
  heroTitle: string;
  titleColor?: string;
  navItems: NavItem[];
  heroBGColor?: string;
  heroBGImage?: string;
  containerBG?: string;
  containerBGPosition?: 'bg-center' | 'bg-bottom' | 'bg-top';
  paddingClass?: string;
  fullWidth?: boolean;
};

function AppLayoutNoSubnav({
  children,
  heroTitle,
  titleColor,
  heroBGColor,
  heroBGImage,
  // navItems,
  containerBG = 'bg-center',
  containerBGPosition,
  paddingClass = 'py-32 px-6',
  fullWidth = false,
}: Props) {
  return (
    <>
      <main>
        <HeroBanner
          title={heroTitle}
          titleColor={titleColor}
          bgColor={heroBGColor}
          bgImage={heroBGImage}
        />
        <div
          className={`bg-white page-wrapper bg-cover ${containerBGPosition} bg-no-repeat relative`}
          style={{ backgroundImage: `url(${containerBG})` }}
        >
          <div
            className={`${
              fullWidth
                ? 'w-full'
                : 'sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] mx-auto'
            } ${paddingClass ?? ''}`}
          >
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AppLayoutNoSubnav;
