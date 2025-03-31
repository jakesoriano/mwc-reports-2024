import Image from 'next/image';
import AppLayout from '@/app/_components/AppLayout';
// import LeftRightPaginate from '@/app/_components/ContentCarousel';
import { navItems } from '@/app/_constants/ourReport';
import ContentCarousel from '@/app/_components/ContentCarousel';


function FinancialSustainability() {
  const contents = [
    <Image
      src='/images/our-report/financial-sustainability-highlights/fsHighlights-1.jpg'
      alt='financial and sustainability highlights 1'
      width={0}
      height={0}
      sizes='100vw'
      className='w-full h-auto'
    />,

    <Image
      src='/images/our-report/financial-sustainability-highlights/fsHighlights-2.jpg'
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
      <ContentCarousel contents={contents} />
    </AppLayout>
  );
}

export default FinancialSustainability;
