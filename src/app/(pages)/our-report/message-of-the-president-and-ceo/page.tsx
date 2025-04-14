import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/ourReport';
import QuoteBanner from '@/app/_components/QuoteBanner';

function MessagePresident() {
  return (
    <AppLayout
      heroTitle='Our Report'
      navItems={navItems}
      titleColor='text-white'
      containerBG='/2024/images/our-report/message-of-the-president/president-content-area-bg.jpg'
      containerBGPosition='bg-bottom'
      paddingClass='md:pt-12 md:pb-14 md:px-6'
      heroBGColor='black'
      heroBGImage='/2024/images/our-report-banner.jpg'
    >
      <section className='bg-[#007257] p-6 md:p-12'>
        <QuoteBanner
          quotePlacement='right'
          text='In 2024, several of our key business units delivered stellar results. For our East Zone Concession, the business posted a 20% increase in revenues to end the year at Php28.8 billion. This performance was largely driven by the implementation of the second tranche of our approved Rate Rebasing tariff adjustment and further supported by steady consumption growth across all customer segments. EBITDA increased by 22% to Php20.7 billion, with EBITDA margin improving to 72%.'
        />
      </section>
      <section className='bg-white p-6 md:p-12'>
        <div className='flex flex-col md:flex-row gap-x-12 pb-6'>
          <div className='flex-1'>
            <h3 className='font-bold mb-4'>
            Mr. Chairman, Members of the Board, fellow shareholders.
            </h3>
            <p className='mb-4'>
            The solid foundation laid in recent years continued to allow us
to achieve remarkable results in 2024. This is truly significant
as our achievements were attained during a particularly
challenging El Niño year.
            </p>
            <p className='mb-4'>
            In 2024, several of our key business units delivered stellar
results. For our East Zone Concession, the business posted a
20% increase in revenues to end the year at Php28.8 billion.
This performance was driven largely by the implementation
of the second tranche of our approved Rate Rebasing tariff
adjustment and supported by steady consumption growth
across all customer segments. EBITDA increased by 22% to
Php20.7 billion, with EBITDA margin improving to 72%.
            </p>
            <p className='mb-4'>
            Similarly notable was the performance of our NEZ PH business,
which had a banner year in 2024 with earnings growing more
than threefold to Php2.3 billion, from Php750 million the
previous year. This impressive growth trajectory was driven
by an 8% increase in total billed volume, implemented tariff
adjustments in several NEZ PH service areas, and stronger
contributions from key business units which, in all, pushed
revenues past Php9.0 billion. The collaboration we have with
government and water district partners in Laguna, Boracay,
Cebu, Clark as well as the communities served by our Estate
Water Group, continues to propel us to do better outside of our
core East Zone business.
            </p>
            <p className='mb-4'>
            Equally important, in 2024 we continued to invest in critical
infrastructure to fulfill our regulatory and service commitments.
Group-wide capital expenditures (CAPEX) reached Php26.3
billion in 2024, with our East Zone Concession accounting
for 90% of total CAPEX at Php23.6 billion. These investments
underscore our focus on ensuring sustainable water supply and
wastewater coverage, while continuing the rollout of service
improvements for our growing customer base.
            </p>
          </div>
          <div className='flex-1'>
            <p className='mb-4'>
            Lastly, I would like to share our progress relative to our ESG
commitments. You will recall that several years ago, we
had set out clear target outcomes covered under our three
sustainability pillars, namely (1) Helping Communities Thrive;
(2) Protecting the Environment; and (3) Building a Culture of
Care and Trust. Said target outcomes are categorized under
seven areas and outlined as a total of eight distinct ESG
commitments for target completion year in 2025. I am happy
to share that, as of 2024, we have already attained four of
our eight ESG commitments ahead of schedule. Specifically,
these attained outcomes fall under the categories of (1) Water
Security; (2) Economic Contribution; (3) Resource Efficiency;
and (4) Health and Safety. This milestone speaks significantly to
the importance we place upon fulfilling our purpose of working
towards better lives and resilient economies through critical
infrastructure.
            </p>
            <p className='mb-5'>
            In closing, I would like to credit our solid performance in 2024
to team Manila Water – the women and men who continue
to inspire the Leadership Team through their unfailing
dedication to the customers in the different areas we serve.
You can rest assured that we in Manila Water will continue
to improve services, drive operational efficiencies and create
more value for our shareholders and stakeholders.
            </p>
            <div className='w-fit'>
              <div className='max-w-[140px] mx-auto'>
                <Image
                  src='/2024/images/jvedd-sig-blk.png'
                  alt='ekr-sig-blk'
                  width='0'
                  height='0'
                  sizes='100vw'
                  className='w-full h-auto'
                />
              </div>
              <p className='font-bold'>Jose Victor Emmanuel A. De Dios</p>
              <p>President & CEO</p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default MessagePresident;
