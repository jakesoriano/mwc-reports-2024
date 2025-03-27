import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/ourReport';
import QuoteBanner from '@/app/_components/QuoteBanner';

function MessageOfTheChairman() {
  return (
    <AppLayout
      heroTitle='Our Report'
      navItems={navItems}
      titleColor='text-white'
      containerBG='/images/our-report/chairman-banner.jpg'
      containerBGPosition='bg-bottom'
      paddingClass='md:pt-12 md:pb-14 md:px-6'
    >
      <section className='bg-secondary p-6 md:p-12'>
        <QuoteBanner text='I thank our Board and leadership for their resolve to uphold our Company’s ideals and execute our strategy towards recovery. I thank the rest of our team at Manila Water who have carried us through to this next exciting chapter in our Company’s history.' />
      </section>
      <section className='bg-white p-6 md:p-12'>
        <div className='flex flex-col md:flex-row gap-x-12 pb-6'>
          <div className='flex-1'>
            <h3 className='font-bold mb-4'>
              Fellow stockholders, ladies, and gentlemen.
            </h3>
            <p className='mb-4'>
              On behalf of the Board of Directors and Management team of Manila
              Water, I would like to warmly welcome you to our Annual
              Stockholders Meeting.
            </p>
            <p className='mb-4'>
              I am glad to report that our ongoing efforts to rebuild and
              strengthen our business gained ground in 2023, wherein we saw
              marked progress on several important fronts.
            </p>
            <p className='mb-4'>
              First and foremost were the challenges brought about by climate
              change, where we made extensive work towards ensuring water
              security for our customers.
            </p>
            <p className='mb-4'>
              Second, we further cemented regulatory stability in our area of
              operation through close collaboration and engagement with
              government.
            </p>
            <p className='mb-4'>
              Third, our objective to promote a culture of discipline, cost
              efficiency and continuous improvement is now yielding positive
              results.
            </p>
          </div>
          <div className='flex-1'>
            <p className='mb-4'>
              I thank our Board and leadership for their resolve to uphold our
              Company’s ideals and execute our strategy towards recovery. I
              thank the rest of our team at Manila Water who have carried us
              through to this next exciting chapter in our Company’s history.
            </p>
            <p className='mb-5'>
              Lastly, I thank our shareholders who continue to believe in our
              commitment to provide reliable and efficient service in the
              communities we serve. You sustain our drive and efforts to
              safeguard our Water Future.
            </p>
            <div className='w-fit'>
              <div className='max-w-[140px] mx-auto'>
                <Image
                  src='/images/ekr-sig-blk.png'
                  alt='ekr-sig-blk'
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto'
                />
              </div>
              <p className='font-bold'>Enrique K. Razon, Jr.</p>
              <p>Chairman</p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default MessageOfTheChairman;
