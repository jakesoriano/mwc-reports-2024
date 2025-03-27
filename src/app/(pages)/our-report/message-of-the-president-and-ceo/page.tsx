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
      containerBG='/images/our-report/president-banner.jpg'
      containerBGPosition='bg-bottom'
      paddingClass='md:pt-12 md:pb-14 md:px-6'
    >
      <section className='bg-[#007257] p-6 md:p-12'>
        <QuoteBanner
          quotePlacement='right'
          text='In 2023, we saw topline growth of 35% with the steady recovery of water demand in our service areas, as economic activity continued its resurgence coming from the challenges posed by COVID restrictions in prior years. This was further supported by the implementation of tariff adjustments in both our East Zone and several of our Non-East Zone Philippines (NEZ PH) businesses'
        />
      </section>
      <section className='bg-white p-6 md:p-12'>
        <div className='flex flex-col md:flex-row gap-x-12 pb-6'>
          <div className='flex-1'>
            <h3 className='font-bold mb-4'>
              Mr. Chairman, Members of the Board, fellow shareholders.
            </h3>
            <p className='mb-4'>
              As we marked our 25th anniversary in 2022 prevailing over
              turbulent headwinds that assaulted your company, I am happy to
              share that we have followed through with a solid year of business
              performance in 2023.
            </p>
            <p className='mb-4'>
              Last year, we saw topline growth of 35% with the steady recovery
              of water demand in our service areas, as economic activity
              continued its resurgence coming from the challenges posed by COVID
              restrictions in prior years. This was supported further by the
              implementation of tariff adjustments in both our East Zone and
              several of our Non- East Zone Philippines (NEZ PH) businesses.
            </p>
            <p className='mb-4'>
              In the East Zone, the implementation of the first tranche of our
              approved Rate Rebasing Adjustment in 2023, which amounted to a
              positive adjustment of over Php8.04 per cubic meter, was the key
              driver of our 41% growth in revenues to Php24 billion. Another
              significant catalyst was billed volume, which was up 3% in
              consolidated terms, as consumption across all segments continued
              to recover. Additionally, the higher amount of cross border supply
              to West Zone Concessionaire Maynilad rounded out the key
              contributors to our East Zone’s positive performance. Similarly,
              in our NEZ-PH business, positive tariff adjustments in several of
              our business units were main contributors to its 20% increase in
              revenues. Lastly, for our international operations, the positive
              performance of our Vietnam bulk water businesses and our
              operations in the Kingdom of Saudi Arabia were offset by higher
              interest expenses and a lower contribution from East Water in
              Thailand.
            </p>
            <p className='mb-4'>
              As our topline surged, costs were held steady at Php10.8 billion
              for the period. Specifically, cost increases driven by a higher
              level of production and operations, coupled with our completion of
              new facilities, were offset by non-recurring costs which we
              recognized in 2022. Cost increases were further tempered by our
              multiple cost management initiatives and operational efficiencies.
            </p>
            <p className='mb-4'>
              Owing to these efforts, 2023 EBITDA increased by 60% to reach a
              historic high of Php20.5 billion. EBITDA margin further
              strengthened by 11 percentage points to 67%.
            </p>
            <p className='mb-4'>
              On the other hand, consistent with our disciplined view on
              portfolio management, we recognized a one-off provision related to
              our East Water investment. Specifically, an impairment provision
              of Php4.1 billion was recognized to reflect current market
              conditions and outlook. This consequently tapered consolidated net
              income to Php5.6 billion, with a net income margin settling at
              18%. Without non-recurring items, core net income grew by 74% to
              Php9.6 billion, with core net income margin improving to 31% for
              the period.
            </p>
          </div>
          <div className='flex-1'>
            <p className='mb-4'>
              Moving to our capital expenditure program, the 2023 CAPEX for the
              group reached Php21.6 billion. Our East Zone business accounted
              for 89% of total CAPEX, as it implemented a total of Php19.2
              billion in projects to support our Rate Rebasing Service
              Improvement Plan. We will continue to implement our water and
              wastewater projects in line with our commitment to meet service
              obligations.
            </p>
            <p className='mb-4'>
              Finally, our commitment to follow through on our ESG and
              sustainability thrusts have continued to bear fruit. Notably, we
              have seen marked improvement in our ESG ratings under the Carbon
              Disclosure Project (CDP). For Water Security, to date we are the
              only Philippine company to attain a Leadership (A-) level. For the
              Climate category, our improvement from Awareness (C) to Management
              (B) situates us above regional, and even global, averages. We have
              likewise seen ratings improvements under other distinguished ESG
              rating agencies, namely Sustainalytics and MSCI. For
              Sustainalytics, our improvement to Medium ESG Risk has placed
              Manila Water among the best in Asia-Pacific. On the other hand,
              for MSCI, our recent rating upgrade to Average or the (BB) level
              marks our first improvement since 2019. These achievements speak
              directly to the commitment and hard work of our teams in the areas
              of wastewater treatment and biodiversity, climate action and
              renewable energy transition, as well as in community empowerment.
            </p>
            <p className='mb-4'>
              Equally, I must underscore that these milestones are testament to
              how we have properly aligned our business goals with our
              sustainability aspirations. Our work towards water security amidst
              the threat of climate change and other global issues, further
              investments in infrastructure consistent with SDG 6, as well as
              the creation of more advocates and water stewards, do not merely
              contribute to sustainable development. In truth, these very same
              efforts are what have enabled us to attain the business and
              financial recovery we experienced in 2023. In the end, it is this
              perfect alignment that will help us attain long-term shared value
              for all our stakeholders.
            </p>
            <p className='mb-5'>
              As I look back at 2023, I am encouraged by the resurgence of our
              business and the efficiencies gained from of our cost management
              and efficiency programs. This solid performance was made possible
              through the women and men of Manila Water who have dedicated
              themselves to serve our customers and stakeholders. We will build
              on this stable foundation to further streamline our investments
              and identify better growth opportunities. These efforts are in
              line with our continued thrust to improve shareholder value today,
              and in the years to come.
            </p>
            <div className='w-fit'>
              <div className='max-w-[140px] mx-auto'>
                <Image
                  src='/images/jvedd-sig-blk.png'
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
