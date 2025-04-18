import Image from 'next/image';
import AppLayout from '@/app/_components/AppLayout';
import { navItems } from '@/app/_constants/ourReport';
import ContentCarousel from '@/app/_components/ContentCarousel';

function FinancialSustainability() {
  const contentsLarge = [
    <Image
      key='fsHighlights-1-large'
      src='/images/our-report/financial-sustainability-highlights/fsHighlights-1.jpg'
      alt='financial and sustainability highlights 1'
      width={0}
      height={0}
      sizes='100vw'
      className='w-full h-auto'
    />,
    <Image
      key='fsHighlights-2-large'
      src='/images/our-report/financial-sustainability-highlights/fsHighlights-2.jpg'
      alt='financial and sustainability highlights 2'
      width={0}
      height={0}
      sizes='100vw'
      className='w-full h-auto'
    />,
  ];

  const contentsSmall = [
    <Image
      key='fsHighlights-1-small'
      src='/images/our-report/financial-sustainability-highlights/fsHighlights-1_mobile.jpg'
      alt='financial and sustainability highlights 1'
      width={0}
      height={0}
      sizes='100vw'
      className='w-full h-auto'
    />,
    <Image
      key='fsHighlights-2-small'
      src='/images/our-report/financial-sustainability-highlights/fsHighlights-2_mobile.jpg'
      alt='financial and sustainability highlights 2'
      width={0}
      height={0}
      sizes='100vw'
      className='w-full h-auto'
    />,
  ];

  return (
    <AppLayout
      heroTitle='Our Report'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/our-report-banner.jpg'
      paddingClass='p-0'
      fullWidth
    >
      <div className='hidden lg:block'>
        <ContentCarousel contents={contentsLarge} />
      </div>
      <div className='block lg:hidden'>
        <ContentCarousel contents={contentsSmall} />
      </div>
    </AppLayout>
  );
}

export default FinancialSustainability;
