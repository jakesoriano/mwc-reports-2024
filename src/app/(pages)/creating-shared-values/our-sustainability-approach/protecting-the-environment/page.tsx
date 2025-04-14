import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/sharedValues';
import Link from 'next/link';
import ResourceManagement from './_sections/ResourceManagement';
import EnergyManagement from './_sections/EnergyManagement';
import WasteManagement from './_sections/WasteManagement';
import WasteWaterManagement from './_sections/WasteWaterManagement';
import ClimateChange from './_sections/ClimateChange';

function ProtectingTheEnvironment() {
  return (
    <AppLayout
      heroTitle='Our Sustainability Approach'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/sustainability-approach-banner.jpg'
    >
      <section>
        <h1>Protecting the Environment</h1>
        <figure>
          <Image
            src='/images/shared-values/our-sustainability-approach/helping-communities-thrive/hct-img-1.jpg'
            alt='helping communities thrive banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
          <figcaption className='mt-4 italic text-sm'>
            Customers arrive at our service areas to address their Manila Water
            service inquiries, from account management to technical support.
          </figcaption>
        </figure>
      </section>
      <section className='pt-12'>
        <h2 className='text-2xl font-bold text-secondary mb-3'>Our Approach</h2>
        <p className='text-xs'>GRI 2018:303-3</p>
        <div className='mt-8'>
          <p>
            At Manila Water, protecting the environment is integral to our
            operations. Guided by our Environmental Policy, we are committed to
            sustainable practices that minimize our environmental impact and
            promote the efficient use of the earth’s natural resources. Through
            continuous improvement and innovative solutions, we ensure that our
            operations contribute to the preservation of ecosystems and the
            well-being of future generations. Our commitment to environmental
            stewardship reflects our dedication to delivering reliable services
            while fostering a more sustainable future.
          </p>
        </div>
      </section>
      <ResourceManagement />
      <WasteWaterManagement />
      <WasteManagement />
      <EnergyManagement />
      <ClimateChange />
      <section className='pt-12' id='watershed-management'>
        <h2 className='text-2xl font-bold text-secondary mb-3'>
          Watershed Management
        </h2>
        <p className='text-xs'>GRI 2016: 304-3, 304-4</p>

        <div className='md:columns-2 mt-8 gap-6'>
          <p className='mb-4'>
            Watersheds are vital resources supporting agriculture, forestry,
            recreation, and urban development. For water utilities like ours,
            healthy watersheds are crucial for raw water supply and water
            quality by reducing sedimentation, pollution, and contamination,
            lowering water treatment costs, and regulating water flow to prevent
            floods and droughts.
          </p>
          <p className='mb-4'>
            Recognizing our reliance on freshwater sources and the resulting
            impact on ecosystems, we prioritize watershed management as a core
            part of our strategy. Through initiatives like protection,
            reforestation and enrichment planting, community development, and
            partnerships, we aim to improve water quality, ensure a stable
            supply, preserve biodiversity, and support climate action.
          </p>
          <p className='mb-4'>
            We collaborate with regulators, local governments, NGOs, and
            communities to implement nature-based solutions for key watersheds,
            including Angat, Ipo, La Mesa, and others. Our efforts are guided by
            our <Link className='link' href='https://mediafiles.manilawater.com/legacy/storage/files/9/corporate/ckeditor-files/Biodiversity-Policy.jpg' target='_blank' rel='noopener noreferrer'>Biodiversity Policy</Link>, ensuring we protect and enhance
            biodiversity throughout our operations.
          </p>
          <p className='mb-4'>
            Refer to the <Link className='link' href='/downloads/2024-Watershed-Management-Report.pdf' target='_blank'>2024 Watershed Management Report</Link> for the details of our
            2024 accomplishments and management actions in each watershed.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-7 mt-10 md:px-5 lg:px-15 xl:px-20'>
          <div className='flex-1'>
            <p>Activities to mitigate biodiversity threats:</p>
            <ul className='styled-list'>
              <li>
                protection from deforestation, slash-and-burn, and other
                destructive activities
              </li>
              <li>nurturing of endemic and native species</li>
              <li>removal of invasive species</li>
            </ul>
          </div>
          <div className='flex-1 p-6 bg-[#00A74B] text-white md:mr-[0] lg:mr-[10px] xl:mr-[15px] md:ml-20'>
            <p className='mb-5'>
              <strong>195,727</strong> hectares protected, preserving{' '}
              <strong>60+</strong> threatened species with
              <strong>8</strong> critically endangered, <strong>13</strong>{' '}
              endangered, <strong>31</strong> vulnerable, and{' '}
              <strong>10</strong> other threatened species in 2024.
            </p>
            <p className='mb-5'>
              <strong>131,051</strong> trees planted and nurtured in{' '}
              <strong>294</strong> hectares in 2024
            </p>
            <p>
              <strong>1.7 million</strong> trees nurtured in{' '}
              <strong>3,434</strong> hectares since 2006
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-7 px-10 py-14 bg-[#D9F0F7] mt-10 md:-mt-15 lg:-mt-20 xl:-mt-25'>
          <div className='flex-1'>
            <p className='font-bold mb-6 text-2xl'>
              Biodiversity at the La Mesa Watershed
            </p>
            <figure>
              <Image
                src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-13.jpg'
                alt='helping communities thrive banner'
                width={0}
                height={0}
                className='w-full h-auto'
              />
              <figcaption className='mt-4 italic text-sm'>
                The Philippine Hanging Parrot is one of the 35 endemic species
                residing and safeguarded at the La Mesa Ecopark.
              </figcaption>
            </figure>
          </div>
          <div className='flex-1 py-10 md:py-25'>
            <p className='mb-4'>
              The Manila Water Foundation (MWF) conducted a study at the La Mesa
              Ecopark to evaluate its ecological conservation value and mitigate
              biodiversity threats across the 33-hectare property.
            </p>
            <p className='mb-4'>
              The findings revealed that La Mesa Ecopark holds a high
              conservation value in terms of species diversity and cultural
              significance. Of the 220 species documented, 35 (16%) are endemic,
              and 25 (11%) are classified as threatened. The ecopark’s cultural
              value is also significant, offering recreational, educational, and
              research opportunities.
            </p>
            <p>
              To enhance the park’s biodiversity, MWF has initiated actions such
              as removing exotic species like mahogany seedlings and replacing
              them with native trees. This approach aims to strengthen the
              ecological balance and support conservation efforts.
            </p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default ProtectingTheEnvironment;
