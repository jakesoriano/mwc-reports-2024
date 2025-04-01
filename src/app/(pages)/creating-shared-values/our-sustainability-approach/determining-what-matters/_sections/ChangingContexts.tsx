import Box from '@/app/_components/Box';
import TitleTextList from '@/app/_components/TitleTextList';
import Image from 'next/image';
import React from 'react';

function ChangingContexts() {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-x-6 gap-y-6'>
        <div className='flex-1'>
          <h2 className='text-2xl font-bold text-secondary mb-4'>
            Adopting to Changing Contexts
          </h2>
          <p className='mb-4'>
            We have always prioritized understanding our most significant
            impacts, which has been instrumental in shaping our goals and
            strategies.
          </p>
          <p className='mb-4'>
            Every two years, we conduct a materiality assessment to identify
            what matters most to our stakeholders and address their evolving
            expectations. This process also allows us to assess our position as
            an organization, evaluating our risks and opportunities. Through our
            materiality assessment, we account for and respond to the changes in
            the social, economic, and business landscapes that influence what
            stakeholders consider critical.
          </p>
          <p className='mb-4'>
            Our materiality process aligns with the Global Reporting Initiative
            (GRI) standards and incorporates the top company risks identified
            through the Enterprise Risk Management (ERM) system.
          </p>
          <p className='mb-4'>
            This year, in response to the increasing prominence of
            sustainability issues for businesses and the changing global and
            local sustainability reporting frameworks, such as that of IFRS S1
            and S2, we have transitioned to a Double Materiality Assessment
            Process.
          </p>
          <Box bgColor='bg-[#EAF2F6]' border='border-0' padding='py-8 px-6'>
            <p className='mb-4'>
              The double materiality assessment methodology is designed to
              identify and understand the relative importance of specific ESG
              and sustainability topics to the business and their stakeholders.
            </p>
            <p className='mb-4'>
              It considers two aspects of sustainability – Impact Materiality
              and Financial Materiality.
            </p>
            <p className='mb-4'>
              Impact materiality focuses on the actual or potential effects of
              Manila Water’s activities on stakeholder, the environment, and
              broader society in the short term and long term.
            </p>
            <p className='mb-4'>
              While Financial Materiality focuses on the actual or potential
              impact that environmental, social, governance, and sustainability
              issues may have on Manila Water in the short to long-term.
            </p>
            <div className='mb-4 mt-6'>
              <Image
                src='/images/shared-values/our-sustainability-approach/determining-what-matters/determining-what-matters-img-1.svg'
                alt='Materiality Assessment'
                width={0}
                height={0}
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
            <div className='mb-4'>
              <Image
                src='/images/shared-values/our-sustainability-approach/determining-what-matters/determining-what-matters-img-2.svg'
                alt='Materiality Assessment'
                width={0}
                height={0}
                sizes='100vw'
                className='w-full h-auto'
              />
            </div>
          </Box>
        </div>
        <div className='flex-1'>
          <h3 className='font-bold text-lg mb-4'>
            Double Materiality Assessment Process
          </h3>
          <TitleTextList
            head='1. Impact Materiality'
            headBgColor='bg-[#457C94]'
            title='Identify Potential Material Topics through a Systematic Process'
            listItems={[
              'Considered the broader organizational context, including purpose, vision, mission, core processes, and activities within the Value Creation Framework.',
              'Conducted a thorough review of the previous materiality assessment and analyzed the latest company risks, considering internal and external environmental shifts.',
              'With an independent materiality facilitator, performed desktop research to identify and rank potential material topics from over 300 issues, distilling them to 16 key topics.',
              'Ensured comprehensive stakeholder engagement by consulting seven key stakeholder groups through surveys and interviews to rank material topics and determine financial and impact materiality.',
            ]}
          />
          <TitleTextList
            head='2. Evaluation and Prioritization'
            headBgColor='bg-[#40B8D7]'
            title='Evaluate Results through a Risk and Opportunity Lens to Prioritize Material Issues'
            listItems={[
              'Evaluated results using a risk and opportunities framework, assessing stakeholder perceptions based on impact and financial materiality, considering criteria such as scale, scope, likelihood, and irremediability.',
              'Derived thematic insights to refine decision-making for prioritizing material topics.',
              'Conducted two levels of validation workshops: one with managers from Sustainability, Enterprise Risk Management, and Finance, and another with the Senior Leadership Team, including C-level executives.',
              'Presented findings of the double materiality assessment at the ESG Committee meeting on December 6, 2024, where committee directors reviewed and concurred on the outcome.',
            ]}
          />
          <TitleTextList
            head='3. Integration'
            headBgColor='bg-[#94BDD3]'
            title='Integrate Material Topics with Strategic Priorities for Actionable Results'
            listItems={[
              'Aim to integrate key material issues into our corporate strategy, aligning with ESG goals and targets for meaningful impact.',
              'Commit to resolving and continuously monitoring progress on material topics, with clear accountability assigned to functional managers and key executives.',
              'Maintain regular communication with the CAO, President and CEO, and the ESG Committee to ensure updates on progress, address emerging issues, and refine our approach as necessary.',
            ]}
          />
        </div>
      </div>

      <div className='mt-6 bg-secondary text-white py-6 px-4'>
        <p className='font-bold mb-4'>Scope, Limitations and Boundaries:</p>
        <p>
          A consultant specializing in double materiality assessments conducted
          our 2024 assessment. The methodology, including parameters such as the
          number of survey respondents and data gathering tool, was determined
          by their established double materiality process.
        </p>
      </div>
    </>
  );
}

export default ChangingContexts;
