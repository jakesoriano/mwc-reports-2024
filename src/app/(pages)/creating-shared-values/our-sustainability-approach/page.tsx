import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/sharedValues';
import ImageTextCard from '@/app/_components/ImageTextCard';
import TargetProgress from '@/app/_components/TargetProgress';
import Link from 'next/link';
import ESGTable from './ESGTable';

function OurSustainabilityApproach() {
  return (
    <AppLayout
      heroTitle='Creating Shared Values'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/creating-shared-value-banner.jpg'
    >
      <section>
        <h1 className='mb-[10px!important]'>Our Sustainability Approach</h1>
        <p className='text-xs mb-12'>GRI 2021: 2-6 | IFRS S1 | IFRS S2</p>
        <div className='flex flex-col md:flex-row gap-x-8 gap-y-8'>
          <div className='basis-[100%]'>
            <p className='mb-4'>
              Sustainability is integrated in everything we do at Manila Water.
              Our Sustainability Framework underpins the development and
              execution of programs that drive our purpose: better lives and
              resilient economies through critical infrastructure. Specifically,
              our approach revolves around three key pillars:
            </p>

            <div className='bg-[#BFE7F2] w-full mx-auto p-6 mt-7 mb-10 rounded-3xl flex flex-col items-center md:flex-row gap-x-8 gap-y-8'>
              <div className='basis-[65%]'>
                <ImageTextCard
                  imageUrl='/images/shared-values/our-sustainability-approach/icon-helping-communities-thrive.svg'
                  imageWidth={70}
                  imageHeight={70}
                  alignment='horizontal'
                  textClass='text-sm'
                  text='<span class="font-bold">Helping Communities Thrive</span><br/>by prioritizing the enhancement of access to clean
water, improving sanitation, and fostering local
economic growth.'
                />

                <ImageTextCard
                  imageUrl='/images/shared-values/our-sustainability-approach/icon-protecting-the-environment.svg'
                  imageWidth={70}
                  imageHeight={70}
                  alignment='horizontal'
                  textClass='text-sm'
                  text='<span class="font-bold">Protecting the Environment</span><br/>is at the core of our mission. We achieve this by
maximizing our positive impact and minimizing our
negative footprint through dedicated sustainable
practices.'
                />

                <ImageTextCard
                  imageUrl='/images/shared-values/our-sustainability-approach/icon-building-a-culture.svg'
                  imageWidth={70}
                  imageHeight={70}
                  alignment='horizontal'
                  textClass='text-sm'
                  text='<span class="font-bold">Building a Culture of Trust and Care</span><br/>by emphasizing the creation of a safe, inclusive,
and ethical workplace while nurturing transparent
relationships with our stakeholders.'
                />
              </div>
              <div className='basis-[35%]'>
                <Image
                  src='/images/shared-values/our-sustainability-approach/key-drivers-1.svg'
                  alt='key drivers'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full'
                />
              </div>
            </div>

            <p className='mb-4'>
              In recent years, we have strengthened our framework by
              articulating our Sustainability and ESG commitments, with our{' '}
              <Link
                className='text-primary'
                href='https://mediafiles.manilawater.com/legacy/storage/files/22/corporate/ckeditor-files/01%20-%20Sustainability%20Policy.jpg'
                target='_blank'
              >
                Sustainability Policy
              </Link>{' '}
              being central to this effort. In 2024, we added three new
              policies: the revised{' '}
              <Link
                className='text-primary'
                href='https://mediafiles.manilawater.com/legacy/storage/files/9/corporate/ckeditor-files/Climate-Change-Policy.jpg'
                target='_blank'
              >
                Climate Change Policy
              </Link>
              ,{' '}
              <Link
                className='text-primary'
                href='https://mediafiles.manilawater.com/legacy/storage/files/9/corporate/ckeditor-files/Biodiversity-Policy.jpg'
                target='_blank'
              >
                Biodiversity Policy
              </Link>
              , and{' '}
              <Link
                className='text-primary'
                href='https://mediafiles.manilawater.com/legacy/storage/files/9/corporate/ckeditor-files/Freedom-of-Association-Policy.jpg'
                target='_blank'
              >
                Freedom of Association Policy
              </Link>
              , reflecting our commitment to addressing pressing global
              challenges.
            </p>

            <p className='mb-4'>
              To ensure that the framework translates into meaningful outcomes,
              we track our progress through several metrics. In 2022, we
              introduced eight ESG commitments as part of our short-term
              sustainability ambitions. These commitments address our material
              issues such as water security and quality, climate change,
              biodiversity preservation, resource efficiency, economic
              contribution, and the health and safety of our employees.
              Developed in alignment with our strategy and guided by stakeholder
              engagement and materiality analysis, these commitments also
              support the achievement of the UN SDGs<sup>1</sup>.
            </p>

            <p className='mb-4 text-xs'>
              <sup>1</sup> United Nations Sustainable Development Goals
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-xl font-bold text-secondary mb-6 mt-12'>
          Progress on ESG Targets to 2025
        </h2>

        <ESGTable />
      </section>
    </AppLayout>
  );
}

export default OurSustainabilityApproach;
