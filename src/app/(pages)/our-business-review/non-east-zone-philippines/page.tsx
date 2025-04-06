import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import {
  navItems,
  nonEastZoneCols1,
  nonEastZoneCols2,
  nonEastZoneData1,
  nonEastZoneData2,
} from '@/app/_constants/businessReview';
import DataTable from '@/app/_components/DataTable';

function NonEastZone() {
  return (
    <AppLayout
      heroTitle='Our Business Review'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/our-business-review/east-zone-concession/nez-img-1.jpg'
    >
      <section>
        <h1 className='text-center'>
          NON-EAST ZONE PHILIPPINES
          <br />
          “Expand Footprint”
        </h1>
        <div className='flex flex-col md:flex-row gap-7'>
          <div className='flex-1'>
            <p className='mb-4'>
              Our NEZ PH business is the growth platform of Manila Water in the
              Philippines via acquisitions and partnerships. NEZ PH focuses on
              developing strong partnerships with local government units, water
              districts, as well as key players in the property sector with its
              core domestic operating subsidiaries namely, (1) Boracay Water,
              (2) Clark Water, (3) Laguna Water, and (4) Estate Water
            </p>
            <div className='overflow-x-auto'>
              <div className='w-[500px]'>
                <DataTable
                  data={nonEastZoneData1}
                  columns={nonEastZoneCols1}
                  color='primary'
                />
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='overflow-x-auto mb-7'>
              <div className='w-[500px]'>
                <DataTable
                  data={nonEastZoneData2}
                  columns={nonEastZoneCols2}
                  color='primary'
                />
              </div>
            </div>
            <p className='mb-4'>
              On a consolidated level, NEZ PH revenues grew by 29% to more than
              Php9.0 billion. The higher contributions from our Laguna, Clark,
              Boracay and Estate Water businesses were the main catalysts for
              the positive performance. This was further supported by robust BV
              growth of 8%. On the other hand, cost and expenses increased to
              Php4.5 billion, driven by higher project cost, bulk water cost and
              personnel cost. The strong topline performance resulted in a 45%
              improvement in EBITDA to Php4.5 billion. EBITDA margin improved to
              50%.
            </p>
            <p className='mb-4'>
              In all, NEZ PH ended the period with a net income of Php2.3
              billion, which is more than 3x of the net income the previous
              year. Consequently, net income margin improved 14 ppts to 25% for
              the period.
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <Image
            src='/images/our-business-review/non-east-zone-philippines/nez-img-2.jpg'
            alt='non east banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
          <div className='md:columns-2 mt-8 gap-6'>
            <div>
              <p className='mb-4'>
                Here is a snapshot of the operating and financial highlights of
                our core subsidiaries under Manila Water Philippine Ventures:
              </p>
              <h3 className='text-lg font-bold mb-4 uppercase'>LAGUNA WATER</h3>
              <p className='mb-4'>
                Revenues were up by 12% mainly driven by implementation of
                tariff adjustments. Billed volume of Laguna Water remained
                steady at 44.8 mcm. Costs and expenses increased due to higher
                premises costs in relation to new facilities.
              </p>
              <p className='mb-4'>
                NIAT improved to Php1,027 million from higher revenues due to
                tariff adjustments and lower interest expense.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold mb-4 uppercase'>ESTATE WATER</h3>
              <p className='mb-4'>
                Billed volume of Estate Water increased by 8% to 13.0 mcm. This
                was due to higher consumption from its residential and
                commercial segments from existing developments combined with new
                connections from greenfield projects.
              </p>
              <p className='mb-4'>
                Estate Water increased its supervision fees as a result of
                higher construction progress in greenfield projects. It closed
                the year with a net income of Php278 Million.
              </p>
            </div>
            <div className='mt-4'>
              <h3 className='text-lg font-bold mb-4 uppercase'>
                BORACAY WATER
              </h3>
              <p className='mb-4'>
                Revenues increased by 24% driven by the implementation of tariff
                adjustments combined with 6% increase in billed volume in 2024.
                This resulted to an improved performance of Boracay Water with a
                net income of Php109 Million.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold mb-4 uppercase'>CLARK WATER</h3>
              <p className='mb-4'>
                Billed volume of Clark Water increased 1% to 13.6 mcm. The
                steady billed volume coupled with tariff adjustments resulted in
                41% revenue growth but slightly offset by higher operating
                expenses. These resulted in a 307% increase in net income to
                Php171 million for the year.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default NonEastZone;
