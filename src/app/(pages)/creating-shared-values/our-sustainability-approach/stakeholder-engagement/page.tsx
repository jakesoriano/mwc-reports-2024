import AppLayout from '@/app/_components/AppLayout';
import DataTable from '@/app/_components/DataTable';
import Testimonials from '@/app/_components/Testimonials';
import {
  navItems,
  stakeholderCols,
  stakeholdersData,
} from '@/app/_constants/sharedValues';
import React from 'react';

function StakeholderEngagement() {
  return (
    <AppLayout
      heroTitle='Our Sustainability Approach'
      navItems={navItems}
      titleColor='text-white'
      heroBGColor='black'
      heroBGImage='/images/sustainability-approach-banner.jpg'
    >
      <section>
        <h1>Stakeholder Engagement</h1>
        <p>
          Stakeholder engagement is integral to our business strategy and the
          identification of material sustainability issues. Through various
          channels of engagement embedded in our daily work, we respond to their
          issues and concerns and incorporate their valuable insights in our
          plans and programs.
        </p>
        <div className='text-sm mt-8 max-w-[100%] overflow-x-auto'>
          <div className='min-w-[800px]'>
            <DataTable
              columns={stakeholderCols}
              data={stakeholdersData}
              equalColumnsWidth
            />
          </div>
        </div>
      </section>
      <section className='py-10'>
        <h3 className='text-xl font-bold text-secondary mb-6'>
          Stakeholder Testimonials
        </h3>
        <div className='flex flex-col md:flex-row gap-x-6 gap-y-6'>
          <div className='basis-[50%]'>
            <Testimonials
              name='ENGR. LEONOR C. CLEOFAS, CESO IV'
              position='Administrator'
              company='Metropolitan Waterworks and Sewerage System'
              theme='dark'
              testimonialHighlight='They are more than just their day jobs.'
              testimonial="Since 1997, Manila Water has been more than just a water and wastewater service provider in Metro Manila's East Zone. They have consistently demonstrated a commitment that extends far beyond their mandate. Programs like Toka-Toka and WASH are primary examples. These initiatives not only reect the organization’s core values of enhancing stakehold- er well-being and delivering quality services, but also their dedication to environmental protection. By promoting responsible household wastewater management through Toka-Toka and ensuring access to water and sanitation in underserved communities with WASH, Manila Water actively embodies sustainability. We commend their eorts to continuously invest in the needs of future generations, showcasing a dedication that transcends their day-to-day operations."
              image='/images/shared-values/our-sustainability-approach/stakeholder-engagement/staeholder-testi-1.png'
            />
          </div>
          <div className='basis-[50%] self-end'>
            <Testimonials
              name='SHERISSA “BABY” NUESA'
              position='Member of Manila Water Board of Directors'
              company='Manila Water Company'
              theme='light'
              testimonialHighlight='Over the years, Manila Water has carved a remarkable imprint on Sustainability.'
              testimonial='- The Company has consistently demonstrated a deep commitment to sustainability, integrating ESG principles into the core of its operations. This commitment is evident in their achievements on reducing system losses, developing new water sources, protecting watersheds, implementing water reuse and recycling, and expanding access to clean water. Furthermore, they continue to drive progress in reducing greenhouse gas emissions, enhancing sustainability reporting, and expanding reforestation initiatives. These eorts solidify their role as a responsible and forward-thinking organization.'
              image='/images/shared-values/our-sustainability-approach/stakeholder-engagement/staeholder-testi-2.png'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-x-6 gap-y-6 mt-6'>
          <div className='basis-[50%]'>
            <Testimonials
              name='RON JOHN M. QUEJADO'
              position='Master Teacher I'
              company='H. Bautista Elementary School'
              theme='light'
              testimonialHighlight="As a public-school teacher in Marikina City, I deeply admire Manila Water's dedication to providing excellent and safe water services, especially in our city."
              testimonial="They've proven to be a valuable partner to our educational sector, consistently delivering quality service and supporting us during disasters and school events. We appreciate their commitment to environmental sustainability, which contributes to our nation's development."
              image='/images/shared-values/our-sustainability-approach/stakeholder-engagement/staeholder-testi-3.png'
            />
          </div>
          <div className='basis-[50%]'>
            <Testimonials
              name='LYN JOCEFFIN D. ZAMORA'
              position='General Manager'
              company='Clark Water'
              theme='dark'
              testimonialHighlight='Manila Water demonstrates a strong commitment to sustainability by seamlessly integrating its strategies into its core mission of providing quality water and environmental services.'
              testimonial='The Company eectively balances economic viability with social and environmental responsibility, adopting a proactive and long-term approach that positions it as a leader in sustainable water and wastewater management. This success is undeniably driven by its dedicated and passionate employees, who play a crucial role in ensuring environmental stewardship, operational eciency, and meaningful community engagement.'
              image='/images/shared-values/our-sustainability-approach/stakeholder-engagement/staeholder-testi-4.png'
            />
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default StakeholderEngagement;
