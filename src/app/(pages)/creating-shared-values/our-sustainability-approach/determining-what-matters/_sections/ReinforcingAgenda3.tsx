import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ReinforcingAgenda3() {
  return (
    <div className='flex'>
      <div className='border-r-2 border-blue pr-10 basis-[30%] relative'>
        <span className='h-16 w-16 rounded-full flex items-center justify-center bg-secondary text-white text-xl absolute z-1 top-4'>
          3
        </span>
        <div className='h-[1px] bg-blue absolute top-10 left-0 w-full z-0'></div>
        <div className='pt-20 mt-20'>
        <p className='mb-4 font-bold text-secondary'>BUILDING A CULTURE OF TRUST AND CARE</p>
          <p className='font-bold'>Material Topics</p>
          <p>Corporate governance</p>
          <p>Supply chain</p>
          <p>Talent</p>
          <p>Health and safety</p>
          <p>Privacy and security</p>
          <p>Human and labor rights</p>
        </div>
        <div className='h-[1px] bg-black w-full my-8' />
        <div className='mb-4'>
          <p className='font-bold'>Related Top Risks</p>
          <p>Government/ Regulatory,</p>
          <p>Talent management,</p>
          <p>Vendor management,</p>
          <p>Systems and processes,</p>
          <p>IT-Cybersecurity</p>
        </div>
        <div>
          <p className='font-bold mb-4'>Related SDGs</p>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-3.png'
              alt='sdg-3'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-5.png'
              alt='sdg-5'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-8.png'
              alt='sdg-8'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-auto'
            />
            <Image
              src='/images/shared-values/our-sustainability-approach/determining-what-matters/sdg-17.png'
              alt='sdg-17'
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
                We recognize that our human capital, intellectual capital, and
                strong social and relationship capital are the cornerstones of
                our value creation strategy. By strategically investing in and
                nurturing these critical assets through targeted programs and
                initiatives, while adhering to strong principles of corporate
                governance, we empower our people, foster innovation, and
                strengthen our relationships with stakeholders. This holistic
                approach drives our business outcomes and sustainable long-term
                growth for all stakeholders.
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
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/building-a-culture#human-capital'>Human Capital</Link>. At Manila Water, our success hinges on the
                  strength and growth of our people, the Katubigs. We prioritize
                  empowering, engaging, and equipping our talent with the
                  necessary competencies to excel in their careers and
                  contribute significantly to our competitive advantage.
                </p>
                <p className='mb-4'>
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/building-a-culture#occupational-health-and-safety'>Occupational Health and Safety</Link>. Prioritizing the well-being of
                  our people is paramount. We have re-launched our health and
                  safety program as we strive to create a safe and conducive
                  work environment across all our operations, whether in
                  offices, facilities, or project sites.
                </p>
                <p className='mb-4'>
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/building-a-culture#governance-and-compliance'>Governance and Compliance</Link>. Strong governance and compliance
                  are foundational to our leadership in the water sector. This
                  includes robust governance structures, policies, and
                  management practices that ensure accountability, transparency,
                  and ethical conduct.
                </p>
                <p className='mb-4'>
                  <Link className='link' href='/creating-shared-values/our-sustainability-approach/building-a-culture#partnership'>Partnerships</Link>. No single entity can navigate the increasingly
                  complex and interconnected challenges in the water industry
                  alone. Collaboration and strong partnerships with government,
                  community, suppliers, and other stakeholders are key to ensure
                  our long term sustainability.
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
                Future-fit the organization and talents, mindful of the
                leadership and technical skills needed to thrive amidst an
                evolving work landscape. (ST) (MT)
              </li>
              <li>
                Set targets on health and safety to reinforce the program across
                all levels of the organization. (ST)
              </li>
              <li>
                Continue to leverage strong and mutually beneficial partnerships
                to unlock opportunities for growth and shared value creation.
                (ST) (MT) (LT)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReinforcingAgenda3;
