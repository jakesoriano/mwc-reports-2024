import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import {
  navItems,
  nonEastZoneICols,
  nonEastZoneIData,
} from '@/app/_constants/businessReview';
import DataTable from '@/app/_components/DataTable';

function NonEastZoneIntl() {
  return (
    <AppLayout
      heroTitle='Our Business Review'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/our-business-review/non-east-zone-international/mwap-img-1.jpg'
    >
      <section>
        <h1 className='text-center'>
          NON-EAST ZONE INTERNATIONAL BUSINESSES
          <br />
          “New Geographies””
        </h1>
        <Image
          src='/images/our-business-review/non-east-zone-international/mwap-img-2.jpg'
          alt='non east intl banner'
          width={0}
          height={0}
          className='w-full h-auto'
        />
        <div className='md:columns-2 mt-8 gap-6'>
          <div>
            <p className='mb-4'>
              NEZ International, which is our vehicle for international
              expansion, started with our Performance-based Leakage Reduction
              project in Zone 1 of Ho Chi Minh City. We have since expanded our
              market presence in Vietnam, Thailand, Indonesia, and most
              recently, in the Kingdom of Saudi Arabia. In the past decade, NEZ
              International has grown significantly and has underscored its
              presence in the international water and wastewater industry.
            </p>
            <p className='mb-4'>
              On a consolidated level, NEZ International posted a net loss of
              Php4.0 billion, largely due to impairment provisions.
              Specifically, going to our investment in East Water, an additional
              provision amounting to Php3.6 billion to recognize full impairment
              of our Thailand investment to reflect current market conditions
              and outlook, and recognized Php902 million provision for Saigon
              Water investment. Consistent with our Portfolio Review process, we
              continue to assess and rationalize our investments against set
              financial and performance standards.
            </p>
            <p>
              Equity share in net income of associates increased by 74% to
              Php867. The increase in equity share in net income of associates
              was largely driven by the one-time gain in the sale of Tan Hiep, a
              business unit under Saigon Water. Without the gain, performance
              would have dropped by 21% because of the higher OPEX of Vietnam
              and Thailand investments.
            </p>
          </div>
        </div>
        <div className='overflow-x-auto my-7'>
          <div className='min-w-[500px]'>
            <DataTable data={nonEastZoneIData} columns={nonEastZoneICols} />
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col md:flex-row gap-7'>
          <div className='flex-1'>
            <div>
              <h3 className='text-primary font-bold uppercase mb-4'>
                1 Vietnam
              </h3>
              <ul className='styled-list styled-list-secondary mb-4'>
                <li className='mb-4'>
                  <h3 className='text-secondary font-bold uppercase'>
                    THU DUC WATER
                  </h3>
                  <div className='text-sm italic'>
                    <p>49% stake in a</p>
                    <p>50 year Bulk Water Contract</p>
                    <p>300 MLD with Saigon Water Company (SAWACO)</p>
                  </div>
                </li>
                <li className='mb-4'>
                  <h3 className='text-secondary font-bold uppercase'>
                    CU CHI WATER
                  </h3>
                  <div className='text-sm italic'>
                    <p>
                      Concession Agreement for water distribution under Saigon
                      Water
                    </p>
                  </div>
                </li>
                <li className='mb-4'>
                  <h3 className='text-secondary font-bold uppercase'>
                    KENH DONG WATER
                  </h3>
                  <div className='text-sm italic'>
                    <p>47.35% stake in a 20 year contract</p>
                    <p>200 MLD with SAWACO, Saigon Water</p>
                  </div>
                </li>
                <li className='mb-4'>
                  <h3 className='text-secondary font-bold uppercase'>
                    SAIGON WATER
                  </h3>
                  <div className='text-sm italic'>
                    <p>37.99% in a holding company</p>
                    <p>with multiple investments</p>
                    <p>in the water value chain</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-primary font-bold uppercase mb-4'>
                2 Thailand
              </h3>
              <ul className='styled-list styled-list-secondary mb-4'>
                <li className='mb-4'>
                  <h3 className='text-secondary font-bold uppercase'>
                    EAST WATER
                  </h3>
                  <div className='text-sm italic'>
                    <p>
                      18.72% stake in a raw water supply and water distribution
                    </p>
                    <p>business in Chachoengsao, Chonburi and Rayong of</p>
                    <p>Thailand’s Easter Economic Corridor</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex-1'>
            <div>
              <h3 className='text-primary font-bold uppercase mb-4'>
                3 Indonesia
              </h3>
              <ul className='styled-list styled-list-secondary mb-4'>
                <li className='mb-4'>
                  <h3 className='text-secondary font-bold uppercase'>PT STU</h3>
                  <div className='text-sm italic'>
                    <p>
                      20% stake in a bulk water supply company in Semarang
                      Regency, Central Java Province, Indonesia
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-primary font-bold uppercase mb-4'>
                4 KINGDOM OF SAUDI ARABIA (KSA)
              </h3>
              <ul className='styled-list styled-list-secondary mb-4'>
                <li className='mb-4'>
                  <h3 className='text-secondary font-bold uppercase'>
                    NORTHWEST CLUSTER KSA O&M
                  </h3>
                  <div className='text-sm italic'>
                    <p>
                      30% stake in a 1,000MLD MOM Contract in the NorthWest
                      <br />
                      Cluster (Tabuk, Madinah) of KSA
                    </p>
                  </div>
                </li>
                <li className='mb-4'>
                  <h3 className='text-secondary font-bold uppercase'>
                    EASTERN CLUSTER KSA O&M
                  </h3>
                  <div className='text-sm italic'>
                    <p>
                      20% stake in a 1,800 MLD
                      <br />
                      MOM Contract in the Eastern Cluster
                      <br />
                      (Dammam) of KSA
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default NonEastZoneIntl;
