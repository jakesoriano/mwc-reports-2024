import Box from '@/app/_components/Box';
import ImageTextCard from '@/app/_components/ImageTextCard';
import { coreValues } from '@/app/_constants/ourReport';
import Link from 'next/link';

const KeyDriversContent = () => (
  <div className='flex flex-col gap-y-4 h-full'>
    <Box>
      <h3 className='text-center text-xl'>Key Drivers</h3>
    </Box>
    <Box>
      {/* Mission Vision */}
      <div className='flex gap-x-4'>
        <div className='flex-1'>
          <h4 className='text-xs font-bold'>Purpose</h4>
          <p className='text-xs'>
            Better lives and resilient economies through critical infrastructure
          </p>
        </div>
        <div className='flex-1'>
          <h4 className='text-xs font-bold'>Vision</h4>
          <p className='text-xs'>
            A global leader in providing quality water and environmental
            services supportive of sustainable development
          </p>
        </div>
        <div className='flex-1'>
          <h4 className='text-xs font-bold'>Mission</h4>
          <p className='text-xs'>
            Deliver world-class services tailored to the needs of the
            communities we serve, through sustainable solutions and
            purposedriven, empowered, innovative teams
          </p>
        </div>
      </div>
      {/* Core Values */}
      <h4 className='text-xs font-bold mb-4'>Core Values</h4>
      <div className='grid grid-cols-3 mb-6'>
        {coreValues.map((item, index) => (
          <ImageTextCard
            imageUrl={item.imageUrl}
            imageWidth={60}
            imageHeight={60}
            title={item.title}
            titleClass='font-bold text-xs text-center'
            key={index}
          />
        ))}
      </div>
      {/*Enterprise Risk Management*/}
      <div className='mb-6'>
        <h4 className='text-xs font-bold mb-1'>Enterprise Risk Management</h4>
        <p className='text-xs'>
          Effectively managing risks is an integral aspect of our value creation
          process. We recognize that having a comprehensive understanding of
          potential challenges is crucial for our sustained success. By
          identifying, assessing, and mitigating risks, we can proactively
          navigate uncertainties, safeguard our financial health, and fortify
          our operations. This proactive approach not only ensures our
          resilience but also establishes a foundation for long-term value
          creation.
        </p>
        <p className='text-xs mt-4'>
          For a more in-depth exploration of our risk landscape, please refer to{' '}
          <Link href='' className='link'>
            Enterprise Risk Management in Manila Water.
          </Link>
        </p>
      </div>
      {/*Stakeholder Concerns And Material Issues*/}
      <div>
        <h4 className='text-xs font-bold mb-1'>
          Stakeholder Concerns And Material Issues
        </h4>
        <p className='text-xs'>
          Recognizing the importance of understanding and responding to the
          expectations of our diverse stakeholders, we prioritize a
          comprehensive assessment of their concerns and the identification of
          material issues. By doing so, we not only enhance our transparency and
          accountability but also foster a foundation for sustainable and
          responsible business practices.
        </p>
        <p className='text-xs mt-4 mb-6'>
          For a more thorough exploration of our approach to stakeholder
          engagement and materiality, please go{' '}
          <Link href='' className='link'>
            here.
          </Link>
        </p>
      </div>
      {/*ESG Target*/}
      <div>
        <h4 className='text-xs font-bold mb-1'>ESG Target</h4>
        <ul className='text-xs grid grid-cols-2'>
          <li>Infrastructure Development</li>
          <li></li>
          <li>Occupational Health and Safety</li>
          <li>Biodiversity</li>
          <li>Water Security</li>
          <li>Resource Efficiency</li>
          <li>Water Quality</li>
          <li>Carbon Reduction and Avoidance</li>
        </ul>
        <p className='text-xs mt-4 mb-6'>
          For more information on our ESG Target, refer to our{' '}
          <Link href='' className='link'>
            ESG Performance Data.
          </Link>
        </p>
      </div>
    </Box>
  </div>
);
export default KeyDriversContent;
