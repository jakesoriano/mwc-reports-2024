import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/sharedValues';
import IntegratedWash from './_sections/IntegratedWash';
import WashInterventions from './_sections/WashInterventions';
import AwardsRecognitions from './_sections/AwardsRecognitions';

function ManilaWaterFoundation() {
  return (
    <AppLayout
      heroTitle='MANILA WATER FOUNDATION:<br/>FORMING SYNERGIES WITH DEPTH AND BREADTH'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/sustainability-approach-banner.jpg'
    >
      <section>
        <h1>Manila Water Foundation</h1>
        <p className='mb-4'>
          Manila Water Foundation, the social development arm of Manila Water,
          continued to make waves, created synergies and partnerships for water
          access, sanitation and hygiene or WASH.
        </p>
        <p className='mb-4'>
          In 2024, Manila Water Foundation takes a step forward as it is the new
          steward of the La Mesa Ecopark in Quezon City. This milestone task
          will place Manila Water Foundation in the La Mesa Watershed
          Reservation Multi-sectoral Management Council-Technical Working Group
          with the Metropolitan Waterworks and Sewerage System (MWSS), the
          Department of Environment and Natural Resources (DENR), Maynilad and
          the Quezon City Government. La Mesa Ecopark, considered one of the
          “last lungs” of Metro Manila, the 33-hectare green space is poised to
          be an area to inspire climate action while it raises awareness on
          “biodiverCity”: biodiversity in the city.
        </p>
        <p>
          Manila Water Foundation&apos;s programs with valued partners and in
          collaboration with Manila Water Business Units has reached more than
          10M Filipinos. As it celebrates 20 years in 2025, Manila Water
          Foundation is challenged to continue to implement programs and reach
          communities with breadth and depth.
        </p>
      </section>
      <IntegratedWash />
      <WashInterventions />
      <section>
        <h2 className='text-2xl font-bold text-secondary mb-3'>
          La Mesa Ecopark
        </h2>
        <div className='md:columns-2 mt-8 gap-6'>
          <p className='mb-4'>
            In a collaborative project among the MWSS and the Quezon City
            Government, Manila Water Foundation was assigned as the steward of a
            premiere urban green space: the La Mesa Ecopark. The goal of La Mesa
            Ecopark is to transform the 33-hectare space into a leading
            environmental hub that promotes environmental conservation,
            ecological awareness that leads to climate action.
          </p>
          <div className='h-[100px]'></div>
          <p className='mb-4'>
            Business, academe and faith-based institutions have conducted
            various environmental conservation activities such as weeding and
            tree nurturing activities within the La Mesa Ecopark in 2024. The La
            Mesa Ecopark has drawn international attention with the Taiwanese
            Government’s donation through the Taiwan Excellence Awards to
            support biodiversity and environmental sustainability in the park.
            Last October 2024, the La Mesa Ecopark hosted a visit by the UK
            Ambassador to the Philippines Laure Beaufils and Ms Catherine West
            MP, the UK Foreign, Commonwealth, and Development Office Minister
            for the Indo-Pacific.
          </p>
        </div>
        <figure className='mb-5'>
          <Image
            src='/images/shared-values/manila-water-foundation/mwf-img-8.jpg'
            alt='La Mesa Ecopark'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </figure>
        <figure className='mb-5'>
          <Image
            src='/images/shared-values/manila-water-foundation/mwf-img-9.jpg'
            alt='La Mesa Ecopark By The Numbers'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </figure>
      </section>
      <AwardsRecognitions />
    </AppLayout>
  );
}

export default ManilaWaterFoundation;
