import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/ourReport';
import QuoteBanner from '@/app/_components/QuoteBanner';

function MessageOfTheChairman() {
  return (
    <AppLayout
      heroTitle='Our Report'
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/our-report-banner.jpg'
      navItems={navItems}
      containerBG='/images/our-report/message-of-the-chairman/chairman-content-area-bg.jpg'
      containerBGPosition='bg-bottom'
      paddingClass='md:pt-12 md:pb-14 md:px-6'
    >
      <section className='bg-secondary p-6 md:p-12'>
        <QuoteBanner text='I would like to thank our Board and leadership for their unwavering commitment to the disciplined execution of our strategy. I thank the Manila Water team for their hard work and dedication to the path we have charted towards growth. Lastly, I thank our shareholders who place their trust in our efforts to bring long-term value and contribute to a more sustainable future.' />
      </section>
      <section className='bg-white p-6 md:p-12'>
        <div className='flex flex-col md:flex-row gap-x-12 pb-6'>
          <div className='flex-1'>
            <h3 className='font-bold mb-4'>
            Fellow stockholders, ladies, and gentlemen,
            </h3>
            <p className='mb-4'>
            I am pleased to report that your Company delivered record
level results in 2024. This was made possible by the strong
fundamentals we have established for the business in recent
years, and further strengthened by our continued focus
on growth, efficient operations and disciplined financial
management.
            </p>
            <p className='mb-4'>
            Manila Water increased its revenues 19 percent in 2024
to Php36.6 billion. This was supported by the recovery of
consumption in our service areas, and the implemented tariff
adjustments in both our East Zone and NEZ PH businesses.
Coupled with continuing efforts to streamline costs and realize
operating efficiencies, EBITDA increased 26 percent to Php25.9
billion and strengthened EBITDA margin by 4 percentage
points to 71 percent.
            </p>
            <p className='mb-4'>
            Consistent with our commitment to disciplined portfolio
management, we executed strategic divestments, as well as
recognized adjustments on several of our investments to reflect
current market conditions and operating outlook. Specifically,
we divested our Bulacan business units and generated a gain
of Php894 million. On the other hand, we recognized full
impairment on legacy investments in East Water in Thailand, as
well as partial impairment of our Saigon Water investment in
Vietnam.
            </p>
          </div>
          <div className='flex-1'>
            <p className='mb-4'>
            Excluding one-offs, core income grew by 48 percent to Php14.2
billion. In all, Manila Water posted consolidated net income of
Php10.5 billion for 2024 – the highest in our company’s 27-year
history.
            </p>
            <p className='mb-4'>
            As we are encouraged by these milestone successes, we
continue to work towards further building up our critical
infrastructure to ensure reliable service.
            </p>
            <p className='mb-4'>
            Notably, for our East Zone Concession, Phase 1 of the East Bay
Project is now physically complete. This project will provide 50
million liters per day (MLD) of treated water, while the larger
Phase 2, which is now at 66 percent complete, is designed
to supply an additional 200 MLD. These new projects are a
significant component of our Service Improvement Plan, which
was approved by MWSS under its Water Security Master Plan, to
provide sufficient water supply for Metro Manila in the coming
years.
            </p>
            <p className='mb-5'>
            I would like to thank our Board and leadership for their
unwavering commitment to the disciplined execution of our
strategy. I thank the Manila Water team for their hard work and
dedication to the path we have charted towards growth. Lastly,
I thank our shareholders who place their trust in our efforts to
bring long-term value and contribute to a more sustainable
future.
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
