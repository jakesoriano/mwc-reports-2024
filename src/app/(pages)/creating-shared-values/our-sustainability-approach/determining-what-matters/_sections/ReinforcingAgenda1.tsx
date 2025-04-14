import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ReinforcingAgenda1() {
  return (
    <div className='flex'>
      <div className='border-r-2 border-blue mt-4 pr-10 basis-[30%] relative'>
        <span className='h-16 w-16 rounded-full flex items-center justify-center bg-secondary text-white text-xl absolute z-1 -top-8'>
          1
        </span>
        <div className='h-[1px] bg-blue absolute top-0 left-0 w-full z-0'></div>
        <div className='pt-8 mt-20'>
          <p className='mb-4 font-bold text-secondary'>HELPING COMMUNITIES THRIVE</p>
          <p className='font-bold'>Material Topics</p>
          <p>Water Stewardship</p>
          <p>Climate Change</p>
          <p>Communities and Social Impact</p>
          <p>Customer Satisfaction</p>
          <p>Industry, Innovation and</p>
          <p>Infrastructure</p>
        </div>
        <div className='h-[1px] bg-black w-full my-8' />
        <div className='mb-4'>
          <p className='font-bold'>Related Top Risks</p>
          <p>Water Supply, CAPEX Delivery,</p>
          <p>Commercial, Government/</p>
          <p>Regulatory</p>
        </div>
        <div>
          <p className='font-bold mb-4'>Related SDGs</p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/2024/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-6.png'
              alt='sdg-6'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/2024/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-11.png'
              alt='sdg-11'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/2024/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-13.png'
              alt='sdg-13'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/2024/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-10.png'
              alt='sdg-10'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
      <div className='basis-[70%]'>
        <div className='relative'>
          <div className='h-[1px] bg-blue absolute top-4 left-0 w-full'></div>
          <div className='pl-20 relative'>
            <div className='py-1 px-4 bg-secondary text-white mb-4'>
              Implications on Value Creation
            </div>
            <div className='pl-4'>
              <p className='mb-4'>
                To fulfill the mission of serving the communities with water and
                wastewater services, we strategically leverage our financial,
                manufactured, social and intellectual capital to treat and
                distribute clean and potable water to our customers’ taps.
              </p>
              <p className='mb-4'>
                While all these resources directly generate revenues, business
                prospers as the communities and their local economy thrives. We
                reinvest these gains back into the business, nature, and the
                communities, ensuring a sustainable ecosystem between nature,
                humanity and the built environment.
              </p>
            </div>
          </div>
          <div className='relative'>
            <div className='h-[1px] bg-blue absolute top-4 left-0 w-full'></div>
            <div className='pl-20 relative'>
              <div className='py-1 px-4 bg-secondary text-white mb-4'>
                Strategic Response
              </div>
              <div className='pl-4'>
                <p className='mb-4'>
                <Link className='link' href='/creating-shared-values/our-sustainability-approach/helping-communities-thrive#water-security'>Water Security</Link>. We enhance the security and resilience of our
                  water services through a multi-pronged approach. That includes
                  actively engaging with government and key stakeholders for the
                  development of new and existing water sources, crafting a
                  comprehensive masterplan such as the 4 Water System Masterplan
                  for the East Zone business to guide our long-term strategy,
                  and investing on the critical infrastructure and programs
                  outlined in these plans to ensure a robust and sustainable
                  water supply.
                </p>
                <p className='mb-4'>
                <Link className='link' href='/creating-shared-values/our-sustainability-approach/helping-communities-thrive#climate-resilience'>Climate Resilience</Link>. We proactively address the potential
                  impacts of climate change and other natural events by
                  incorporating robust risk management strategies into our
                  operations. This includes a comprehensive business continuity
                  plan that emphasizes organizational preparedness and response,
                  alongside the design and development of resilient assets.
                </p>
                <p className='mb-4'>
                <Link className='link' href='/creating-shared-values/our-sustainability-approach/helping-communities-thrive#water-wastewater-service'>Water and Wastewater Service</Link>. We prioritize meeting our
                  customers’ evolving water needs and extending access to our
                  services to underserved communities. We achieve this through
                  robust asset management, network improvements, and operational
                  efficiencies, ensuring a sustainable and reliable water supply
                  and wastewater services for all.
                </p>
                <p className='mb-4'>
                <Link className='link' href='/creating-shared-values/our-sustainability-approach/helping-communities-thrive#customer-centricity'>Customer Centricity</Link>. Our core value of malasakit (care) drives
                  us to deliver exceptional customer service. As a Filipino
                  company, we approach our work with genuine compassion
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='h-[1px] bg-blue absolute top-4 left-0 w-full'></div>
          <div className='pl-20 relative'>
            <div className='py-1 px-4  bg-primary text-white mb-4'>
              Outlook and Opportunities
            </div>
            <ul className='styled-list styled-list-primary'>
              <li>
                Fuel growth opportunities in new markets and underserved
                communities leveraging depth of experience in the sector and
                intellectual capital within and outside the country. (MT) (LT)
              </li>
              <li>
                Strengthen partnerships with government agencies, regulators,
                and key stakeholders to continue to contribute to national
                development and advance the achievement of the Sustainable
                Development Goals (SDGs), with a particular focus on SDG 6:
                Clean Water and Sanitation (ST) (MT) (LT)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReinforcingAgenda1;
