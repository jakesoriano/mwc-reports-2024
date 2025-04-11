import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ReinforcingAgenda2() {
  return (
    <div className='flex'>
      <div className='border-r-2 border-blue pr-10 basis-[30%] relative'>
        <span className='h-16 w-16 rounded-full flex items-center justify-center bg-secondary text-white text-xl absolute z-1 top-4'>
          2
        </span>
        <div className='h-[1px] bg-blue absolute top-10 left-0 w-full z-0'></div>
        <div className='pt-20 mt-20'>
          <p className='font-bold'>Material Topics</p>
          <p>Water Stewardship</p>
          <p>Climate Change</p>
          <p>Biodiversity and ecosystem</p>
          <p>Energy</p>
          <p>Resource use and circular economy</p>
          <p>Industry, Innovation and Infrastructure</p>
          <p>Waste</p>
          <p>Emissions</p>
        </div>
        <div className='h-[1px] bg-black w-full my-8' />
        <div className='mb-4'>
          <p className='font-bold'>Related Top Risks</p>
          <p>Water Supply, Commercial,</p>
          <p>Government/ Regulatory/</p>
        </div>
        <div>
          <p className='font-bold mb-4'>Related SDGs</p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-6.png'
              alt='sdg-6'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-11.png'
              alt='sdg-11'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-13.png'
              alt='sdg-13'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-10.png'
              alt='sdg-10'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-14.png'
              alt='sdg-14'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-15.png'
              alt='sdg-15'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-9.png'
              alt='sdg-9'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
      <div className='basis-[70%]'>
        <div className='relative pt-6'>
          <div className='h-[1px] bg-blue absolute top-10 left-0 w-full'></div>
          <div className='pl-20 relative'>
            <div className='py-1 px-4 bg-secondary text-white mb-4'>
              Implications on Value Creation
            </div>
            <div className='pl-4'>
              <p className='mb-4'>
                The state of nature and the environment plays a critical role in
                creating value for our business. Our primary resource, natural
                capital – raw water from surface or ground water sources, can
                vary in terms of quality, quantity, and availability. This
                variability directly impacts our ability to supply 24/7 water to
                the communities we serve, both now and in the long term.
              </p>
              <p className='mb-4'>
                Furthermore, the interconnectedness of nature to our business,
                including our manufactured and financial capital, highlights the
                importance of a healthy environment for our long-term success.
                By providing environmental services in the form of wastewater
                treatment, we are not only fulfilling our environmental
                responsibility but also re-investing in the natural capital of
                the communities and the country.
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
                <Link className='link' href='/creating-shared-values/our-sustainability-approach/protecting-the-environment#resource-management'>Resource Management</Link>. We operate with the mindset that the
                  resources we use from the earth are not finite and that nature
                  needs time to replenish itself. As such, we make use of
                  resources efficiently and adopt circular practices where we
                  can.
                </p>
                <p className='mb-4'>
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/protecting-the-environment#wastewater-management'>Wastewater Management</Link>. We protect water bodies and promote a
                  healthier environment by effectively treating wastewater to
                  meet national effluent quality standards, building capacity
                  and infrastructure, and educating customers on responsible
                  wastewater management.
                </p>
                <p className='mb-4'>
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/protecting-the-environment#waste-management'>Waste Management</Link>. While waste is a by-product of our
                  operations, we ensure not only its safe and responsible
                  disposal to minimize environmental impact but explore
                  recycling and circular practices.
                </p>
                <p className='mb-4'>
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/protecting-the-environment#energy-management'>Energy Management</Link>. In Manila Water, energy management involves
                  efforts from strategically planning sources, energy demand
                  management and conservation and efficiency efforts.
                  Furthermore, it extends to initiatives to manage environmental
                  impact via transition to renewable energy while maintaining
                  operational performance.
                </p>
                <p className='mb-4'>
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/protecting-the-environment#climate-change-mitigation'>Climate Change Mitigation</Link>. Despite hurdles, we are actively
                  transitioning to renewable energy sources to balance expanding
                  water and wastewater services with our commitment to reducing
                  our carbon footprint and GHG emissions, contributive to
                  climate change mitigation.
                </p>
                <p className='mb-4'>
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/protecting-the-environment#watershed-management'>Watershed Management</Link>. We recognize our reliance on natural
                  resources and collaborate with stakeholders to implement
                  watershed management programs around our water sources. These
                  initiatives include reforestation, partnerships with
                  indigenous communities, and biodiversity protection.
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
                Drive operational excellence through continuous innovation and
                exploration of new technologies, focused on enhancing
                efficiency, reducing GHG emissions, minimizing waste, and
                optimizing resource utilization. (ST) (MT) (LT)
              </li>
              <li>
                Leverage our strong culture of environmental advocacy and
                volunteerism to mobilize employee engagement and drive
                collective action towards achieving our nature and climate
                goals. (ST) (MT)
              </li>
              <li>
                Advance water reuse initiatives to augment water supply and
                promote circularity. (ST) (MT) (LT)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReinforcingAgenda2;
