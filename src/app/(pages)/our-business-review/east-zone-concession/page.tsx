import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import {
  finHighlightsCols,
  finHighlightsData,
  navItems,
  opsHighlightsCols,
  opsHighlightsData,
} from '@/app/_constants/businessReview';
import DataTable from '@/app/_components/DataTable';

function EastZone() {
  return (
    <AppLayout
      heroTitle='Our Business Review'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/2024/images/our-business-review/east-zone-concession/ezc-img-1.jpg'
    >
      <section>
        <h1 className='text-center'>
          EAST ZONE CONCESSION
          <br />
          “Protect and Build the Core”
        </h1>
        <div className='flex flex-col md:flex-row gap-7'>
          <div className='flex-1'>
            <p className='mb-4'>
              The East Zone Concession holds the exclusive right to provide
              water and wastewater services to the eastern side of Metro Manila
              and certain municipalities of Rizal. The concession area covers
              1,400 square kilometers, encompassing 24 cities and municipalities
              with a population of more than 7 million comprising a broad range
              of residential, semi-business, commercial and industrial
              customers.
            </p>
            <p className='mb-4'>
              On a consolidated level, revenues increased 19% to nearly Php36.6
              billion. This growth was supported by the recovery of the East
              Zone’s residential and commercial accounts, as well as by the 29%
              increase in revenues from our NEZ PH businesses. Consolidated cost
              of services and expenses for the period totaled Php11.8 billion,
              reflecting a 9% increase year-on-year. Key cost drivers included
              expenditures related to the new facilities, regulatory compliance
              requirements, market-driven rate adjustments, and costs directly
              tied to higher revenue and production levels. Costs were further
              tempered by various efforts to streamline costs and realize
              operating efficiencies. As a result, consolidated EBITDA rose 26%
              to Php 25.9 billion, lifting the EBITDA margin by 4 percentage
              points to 71%. This figure includes our share in the one-time gain
              from the divestment of Tan Hiep amounting to Php471 million under
              Saigon Water. Excluding this share in one-time gain, the
              normalized EBITDA margin stands at 69%.
            </p>
            <p className='mb-4'>
              The year 2024 has been a solid year for the Company, driven by
              strong topline growth from the continued recovery of customer
              demand with the continued uptick of economic activities and
              implementation of tariff adjustments. Revenues at the Parent
              Company showed robust performance which increased 20% to Php28.8
              billion with the implementation of the 2nd tranche of
            </p>
            <div className='overflow-x-auto'>
              <div className='w-[500px]'>
                <DataTable
                  data={opsHighlightsData}
                  columns={opsHighlightsCols}
                />
              </div>
            </div>
            <div className='overflow-x-auto my-8'>
              <div className='w-[500px]'>
                <DataTable
                  data={finHighlightsData}
                  columns={finHighlightsCols}
                />
              </div>
            </div>
            <p className='text-xs italic'>
              *East Zone net income presented above is before impairment
              provision for MWAP investment. East Zone statutory net income
              after impairment provision for financial statement purposes is
              Php9,037 million.
            </p>
          </div>
          <div className='flex-1'>
            <figure className='mb-5'>
              <Image
                src='/2024/images/our-business-review/east-zone-concession/ezc-img-2.jpg'
                alt='capex disbursements'
                width={0}
                height={0}
                className='w-full h-auto'
              />
            </figure>
            <p className='mb-4'>
              With improved mobility during the year, we continued to develop
              and construct water and wastewater infrastructure for the current
              and future requirements of our East Zone customers. The capital
              expenditure level reached nearly Php26.3 billion in 2024. As the
              East Zone Concession remains to be the largest business segment of
              the group, we will continue to protect and strengthen this core as
              we gear up for growth. Specifically, we will continue to
              accelerate our CAPEX projects both in the areas of water security
              and wastewater
            </p>
            <p className='mb-4'>
              As the East Zone Concession remains to be the largest business
              segment of the group, we will continue to protect and strengthen
              this core as we gear up for growth. Specifically, we will continue
              to accelerate our CAPEX projects both in the areas of water
              security and wastewater treatment. 23.6 22.7 19.2
            </p>
            <p className='mb-4'>To name a few of these projects:</p>
            <ul className='styled-list styled-list-primary'>
              <li>
                The East Bay Project Phase 1 is composed of a 50 million liter
                per day (mld) water treatment plant with a 25 km transmission
                pipeline, pumping stations and a 21 km submarine pipeline. Said
                project will similarly extract water from Laguna Lake as with
                the now operational 100 mld Cardona Plant. The East Bay Phase 1
                is now physically completely and is ongoing process proving and
                the larger East Bay Phase 2 with a 200 million liters per day
                (mld) capacity is at 66% completion.
              </li>
              <li>
                The Wawa Calawis Phase 1 project is composed of an 80 mld water
                treatment plant and 10 km pipe network with reservoir and
                booster station. The larger Phase 2 with a 220 million liters
                per day (mld) capacity is now at 43% completion. These projects
                will further augment the water supply available to customers and
                ensure water security in the coming years.
              </li>
              <li>
                The Hinulugang Taktak Sewer Treatment Plant will have the
                capacity to treat 16 million liters of wastewater per day to
                help rehabilitate the historic Hinulugang Taktak falls, one of
                the city’s popular tourist destinations. It is currently at 74%
                completion. Another is the Mandaluyong West – San Juan South–
                Quezon City South Sewerage System Project which is composed of a
                60 mld sewage treatment plant with a 53 km combined sewer. This
                project is currently at 63% done and is targeted for completion
                in 2025.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default EastZone;
