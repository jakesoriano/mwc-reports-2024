import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/businessReview';

function ConsolidatedPerformance() {
  return (
    <AppLayout
      heroTitle='Consolidated Performance'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/2024/images/our-business-review/consolidated-performance/conso-perf-img-1.jpg'
    >
      <section>
        <p className='mb-4'>
          Manila Water posted consolidated revenues of Php36.6 billion for the
          full year of 2024. Solid topline growth was fueled by the continued
          recovery of customer demand with the resumption of economic activities
          as well as implementation of tariff adjustments in both EZ and NEZ key
          businesses. Core NIAT sustained upward trajectory and grew by 48% to
          Php14.2 billion on the back of strong revenue performance and
          effective cost management. NIAT surged by 88% to a record level of
          Php10.5 billion.
        </p>
        <p className='mb-4'>
          On a consolidated level, revenues increased 19% to nearly Php36.6
          billion. This growth was supported by the recovery of the East Zone’s
          residential and commercial accounts, as well as by the 29% increase in
          revenues from our NEZ PH businesses. Consolidated cost of services and
          expenses for the period totaled Php11.8 billion, reflecting a 9%
          increase year-on-year. Key cost drivers included expenditures related
          to the new facilities, regulatory compliance requirements,
          market-driven rate adjustments, and costs directly tied to higher
          revenue and production levels. Costs were further tempered by various
          efforts to streamline costs and realize operating efficiencies. As a
          result, consolidated EBITDA rose 26% to Php 25.9 billion, lifting the
          EBITDA margin by 4 percentage points to 71%. This figure includes our
          share in the one-time gain from the divestment of Tan Hiep amounting
          to Php471 million under Saigon Water. Excluding this share in one-time
          gain, the normalized EBITDA margin stands at 69%.
        </p>
        <p className='mb-4'>
          In our commitment to disciplined portfolio management, we executed
          strategic divestments and adjustments. The divestment of the Bulacan
          business units generated a gain of Php894 million booked under Other
          Income. We recognized full impairment of our investment in East Water
          (Php3.6 billion) and partial impairment of our Saigon Water investment
          (Php902 million), to reflect current market conditions and operational
          outlook.
        </p>
        <p className='mb-4'>
          We remain committed to delivering on our project and service
          obligation commitments, as evidenced by our group CAPEX accomplishment
          which reached Php26.3 billion for the year.
        </p>
        <figure className='mb-5'>
          <Image
            src='/2024/images/our-business-review/consolidated-performance/conso-perf-img-2.jpg'
            alt='net income'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </figure>
      </section>
    </AppLayout>
  );
}

export default ConsolidatedPerformance;
