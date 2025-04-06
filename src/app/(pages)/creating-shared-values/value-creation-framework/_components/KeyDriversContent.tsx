import Box from '@/app/_components/Box';
import ImageTextCard from '@/app/_components/ImageTextCard';
import Link from 'next/link';
import Image from 'next/image';
import { coreValues } from '@/app/_constants/ourReport';

const KeyDriversContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box bgColor='bg-[#D2E9F4]' border='border border-blue'>
      <h3 className='text-center text-xl uppercase'>Key Drivers</h3>
    </Box>
    <Box bgColor='bg-[#D2E9F4]' border='border border-blue' fullHeight>
      {/* Strategy */}
      <div className='mb-4 text-xs'>
        <h4 className='font-bold mb-4 uppercase'>Strategy</h4>
        <p className='mb-4'>
          Sustainability is at the core of what we do. We believe that by
          delivering world-class facilities and services that are attuned to the
          needs of the communities we serve and the stakeholders we work with,
          we contribute to sustainable development.
        </p>
        <Image
          src='/images/shared-values/our-sustainability-approach/key-drivers-1.svg'
          alt='shared value'
          width={0}
          height={0}
          sizes='100vw'
          className='w-[70%] h-auto mx-auto'
        />
        <p className='mb-4 text-xs'>
          Through our Sustainability Framework, we monitor and measure
          performance against operational metrics to create shared, long-term
          value and drive positive impact.
        </p>
        <p>Read more about:</p>
        <ul className='styled-list'>
          <li>
            <Link
              href='/creating-shared-values/our-sustainability-approach'
              className='link'
            >
              Our Sustainability Approach
            </Link>
          </li>
          <li>
            <Link
              href='/creating-shared-values/our-sustainability-approach'
              className='link'
            >
              ESG Performance Data
            </Link>
          </li>
        </ul>
      </div>
      {/* People + Stakeholders */}
      <div className='text-xs'>
        <h4 className='font-bold mb-4 uppercase'>People + Stakeholders</h4>
        <p className='mb-4'>
          We are mindful of upholding responsible business practices through a
          robust governance structure and policies that ensure transparency,
          accountability, and ethical decision-making.
        </p>
        <p className='mb-4'>
          We prioritize understanding stakeholder expectations by assessing
          their concerns and identifying material issues to align our strategies
          and build trust.
        </p>
        <p>Read more about:</p>
        <ul className='styled-list'>
          <li>
            <Link href='' className='link'>
              Corporate Policies
            </Link>
          </li>
          <li>
            <Link href='' className='link'>
              Corporate Governance Report
            </Link>
          </li>
          <li>
            <Link
              href='/creating-shared-values/our-sustainability-approach/determining-what-matters'
              className='link'
            >
              Determining What Matters
            </Link>
          </li>
        </ul>
      </div>

      {/*Environment*/}
      <div className='mb-6 text-xs'>
        <h4 className='font-bold uppercase mb-4'>Environment</h4>
        <p className='mb-4'>
          We recognize the importance of understanding potential challenges for
          sustained success. Through a robust framework for identifying,
          assessing, and managing risks and opportunities, we implement regular
          monitoring and long-term plans to enhance resilience and drive growth.
        </p>
        <p>Read more about:</p>
        <ul className='styled-list'>
          <li>
            <Link href='' className='link'>
              TCFD and TNFD on Sustainability Content Index
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  </div>
);
export default KeyDriversContent;
