import Image from 'next/image';
import AppLayout from '@/app/_components/AppLayout';
import ContentCarousel from '@/app/_components/ContentCarousel';
import { navItems } from '@/app/_constants/ourReport';

function FinancialSustainability() {
  const contents = [
    <Image
      src='/images/our-report/fsHighlights-1.jpg'
      alt='financial and sustainability highlights 1'
      width={0}
      height={0}
      sizes='100vw'
      className='w-full h-auto'
    />,

    <Image
      src='/images/our-report/fsHighlights-2.jpg'
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
      paddingClass='p-0'
      fullWidth
    >
      <ContentCarousel contents={contents} />
    </AppLayout>
  );
}

export default FinancialSustainability;
