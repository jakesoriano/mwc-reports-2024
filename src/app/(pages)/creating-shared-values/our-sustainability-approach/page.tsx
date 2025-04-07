import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/sharedValues';
import ImageTextCard from '@/app/_components/ImageTextCard';
import TargetProgress from '@/app/_components/TargetProgress';
import Link from 'next/link';

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
            Sustainability is integrated in everything we do at Manila Water. Our Sustainability Framework underpins the development
and execution of programs that drive our purpose: better lives and resilient economies through critical infrastructure.
Specifically, our approach revolves around three key pillars:
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

            <p className='mb-4'>In recent years, we have strengthened our framework by articulating our Sustainability and ESG commitments, with our <Link className='text-primary' href='https://mediafiles.manilawater.com/legacy/storage/files/22/corporate/ckeditor-files/01%20-%20Sustainability%20Policy.jpg' target='_blank'>Sustainability Policy</Link> being central to this effort. In 2024, we added three new policies: the revised <Link className='text-primary' href='https://mediafiles.manilawater.com/legacy/storage/files/9/corporate/ckeditor-files/Climate-Change-Policy.jpg' target='_blank'>Climate Change Policy</Link>, <Link className='text-primary' href='https://mediafiles.manilawater.com/legacy/storage/files/9/corporate/ckeditor-files/Biodiversity-Policy.jpg' target='_blank'>Biodiversity Policy</Link>, and <Link className='text-primary' href='https://mediafiles.manilawater.com/legacy/storage/files/9/corporate/ckeditor-files/Freedom-of-Association-Policy.jpg' target='_blank'>Freedom of Association Policy</Link>, reflecting our commitment to addressing pressing global challenges.</p>
            
            <p className='mb-4'>To ensure that the framework translates into meaningful outcomes, we track our progress through several metrics. In 2022, we introduced eight ESG commitments as part of our short-term sustainability ambitions. These commitments address our material issues such as water security and quality, climate change, biodiversity preservation, resource efficiency, economic contribution, and the health and safety of our employees. Developed in alignment with our strategy and guided by stakeholder engagement and materiality analysis, these commitments also support the achievement of the UN SDGs<sup>1</sup>.</p>

            <p className='mb-4 text-xs'><sup>1</sup> United Nations Sustainable Development Goals</p>

          </div>
        </div>
      </section>
      <section>
        <h2 className='text-xl font-bold text-secondary mb-6 mt-12'>
        Progress on ESG Targets to 2025
        </h2>





        {/* <div className='flex flex-col md:flex-row gap-x-10 gap-y-10 border-b-3 border-b-secondary py-10'>
          <div className='basis-[50%]'>
            <TargetProgress
              titleImages={[
                '/images/shared-values/our-sustainability-approach/environment.jpg',
              ]}
              title='Water Security'
              target='<span class="font-bold text-primary">At least 15%</span> raw water supply buffer'
              progress='Achieved <span class="font-bold text-primary">24%</span> water buffer, ensuring ample raw water for all business units'
              sideImage='/images/shared-values/our-sustainability-approach/esgtargets1.jpg'
            />
          </div>
          <div className='basis-[50%]'>
            <TargetProgress
              titleImages={[
                '/images/shared-values/our-sustainability-approach/environment.jpg',
              ]}
              title='Climate Change | GHG Reduction'
              target='<span class="font-bold text-primary">60% reduction and avoidance</span> through renewable energy and wastewater treatment'
              progress='Achieved <span class="font-bold text-primary">42%</span> reduction and avoidance in Scope 1 and 2 GHG Emissions compared to BAU<sup>1</sup>'
              sideImage='/images/shared-values/our-sustainability-approach/esgtargets2.jpg'
              smallText='<sup>1</sup> Business-as-usual'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-x-10 gap-y-10 border-b-3 border-b-secondary py-10'>
          <div className='basis-[50%]'>
            <TargetProgress
              titleImages={[
                '/images/shared-values/our-sustainability-approach/social.jpg',
              ]}
              title='Economic Contribution'
              target='<span class="font-bold text-primary">Building infrastructure</span> sufficient to satisfy service commitments and improvements'
              progress='Successfully met service obligations with a <span class="font-bold text-primary">Php 20 Bn</span> capex investment in concession businesses'
              sideImage='/images/shared-values/our-sustainability-approach/esgtargets3.jpg'
            />
          </div>
          <div className='basis-[50%]'>
            <TargetProgress
              titleImages={[
                '/images/shared-values/our-sustainability-approach/social.jpg',
                '/images/shared-values/our-sustainability-approach/environment.jpg',
              ]}
              title='Resource Efficiency'
              target='<span class="font-bold text-primary">< 15% NRW level</span> for East Zone Concession'
              progress='Achieved an end-of-period NRW level at <span class="font-bold text-primary">13.5%</span>'
              sideImage='/images/shared-values/our-sustainability-approach/esgtargets4.jpg'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-x-10 gap-y-10 border-b-3 border-b-secondary py-10'>
          <div className='basis-[50%]'>
            <TargetProgress
              titleImages={[
                '/images/shared-values/our-sustainability-approach/environment.jpg',
              ]}
              title='Biodiversity'
              target='<span class="font-bold text-primary">1,000 has.</span> of watershed area reforested'
              progress='Reforested approximately <span class="font-bold text-primary">680 has.</span> of watershed area since 2022'
              sideImage='/images/shared-values/our-sustainability-approach/esgtargets5.jpg'
            />
          </div>
          <div className='basis-[50%]'>
            <TargetProgress
              titleImages={[
                '/images/shared-values/our-sustainability-approach/environment.jpg',
              ]}
              title='Biodiversity'
              target='<span class="font-bold text-primary">580,000 trees</span> planted and nurtured'
              progress='planted and nurtured <span class="font-bold text-primary">310,000</span> trees since 2022'
              sideImage='/images/shared-values/our-sustainability-approach/esgtargets6.jpg'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-x-10 gap-y-10 pt-10'>
          <div className='basis-[50%]'>
            <TargetProgress
              titleImages={[
                '/images/shared-values/our-sustainability-approach/environment.jpg',
              ]}
              title='Water Quality'
              target='<span class="font-bold text-primary">100%</span> to national drinking water standards'
              progress='Consistently maintained <span class="font-bold text-primary">100%</span> compliance with national drinking water standards'
              sideImage='/images/shared-values/our-sustainability-approach/esgtargets7.jpg'
            />
          </div>
          <div className='basis-[50%]'>
            <TargetProgress
              titleImages={[
                '/images/shared-values/our-sustainability-approach/environment.jpg',
              ]}
              title='Health & Safety'
              target='<span class="font-bold text-primary">Zero</span> Lost Time Injury Rate'
              progress='Maintained a below-industry LTI rate average at <span class="font-bold text-primary">0.46</span>'
              sideImage='/images/shared-values/our-sustainability-approach/esgtargets8.jpg'
            />
          </div>
        </div> */}




      </section>
    </AppLayout>
  );
}

export default OurSustainabilityApproach;
