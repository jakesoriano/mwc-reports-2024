import AppLayout from '@/app/_components/AppLayout';
import Image from 'next/image';
import { navItems } from '@/app/_constants/sharedValues';
import ImageTextCard from '@/app/_components/ImageTextCard';
import TargetProgress from '@/app/_components/TargetProgress';

function OurSustainabilityApproach() {
  return (
    <AppLayout
      heroTitle='Creating Shared Values'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/sustainability-approach-banner.jpg'
    >
      <section>
        <h1>Sustainability Agenda</h1>
        <div className='flex flex-col md:flex-row gap-x-8 gap-y-8'>
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
          <div className='basis-[65%]'>
            <h3 className='font-bold text-secondary'>
              Our Sustainability Approach
            </h3>
            <p className='mb-4'>
              At Manila Water, we always say that Sustainability is integrated
              in everything we do – from the source to the tap, and to
              wastewater services. Our approach revolves around three key
              pillars:
            </p>
            <div className='flex flex-col md:flex-row gap-x-5 gap-y-5'>
              <div className='flex-1'>
                <ImageTextCard
                  imageUrl='/images/shared-values/our-sustainability-approach/icon-helping-communities-thrive.svg'
                  imageWidth={90}
                  imageHeight={90}
                  text='<span class="font-bold">Helping Communities Thrive</span> remains our core commitment as we strive to provide the most basic human need through our water and wastewater service. We believe that by ensuring water accessibility and water affordability, we help uplift lives, and build sustainable communities while contributing to economic growth and resilience.'
                />
              </div>
              <div className='flex-1'>
                <ImageTextCard
                  imageUrl='/images/shared-values/our-sustainability-approach/icon-protecting-the-environment.svg'
                  imageWidth={90}
                  imageHeight={90}
                  text='<span class="font-bold">Protecting the Environment</span> is the nature of our business. We understand the urgent need to address global issues on environmental degradation, climate change and biodiversity loss. We do this primarily through our wastewater treatment, watershed management, and by weaving sustainability practices and innovation into our strategies.'
                />
              </div>
              <div className='flex-1'>
                <ImageTextCard
                  imageUrl='/images/shared-values/our-sustainability-approach/icon-building-a-culture.svg'
                  imageWidth={90}
                  imageHeight={90}
                  text='<span class="font-bold">Building a Culture of Trust and Care</span> is essential for us and is our foundation. We believe that genuine service can only be anchored on ethical business practices, and transparent and accountable corporate governance. We strive to build strong relationships with our stakeholders based on mutual trust and respect, a concern for health and wellbeing, and a common advocacy for a sustainable future.'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-xl font-bold text-secondary mb-6'>
          ESG Commitments to 2025
        </h2>
        <div className='flex flex-col md:flex-row gap-x-10 gap-y-10 border-b-3 border-b-secondary py-10'>
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
        </div>
      </section>
    </AppLayout>
  );
}

export default OurSustainabilityApproach;
