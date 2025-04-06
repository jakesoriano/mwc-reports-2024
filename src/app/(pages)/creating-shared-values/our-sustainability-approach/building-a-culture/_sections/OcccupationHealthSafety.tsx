import Image from 'next/image';

function OcccupationHealthSafety() {
  return (
    <section>
      <h2 className='text-2xl font-bold text-secondary mb-3'>
        Occupational Health and Safety
      </h2>
      <div>
        <h3 className='font-bold text-xl mb-4'>
          Health, safety, and environment programs
        </h3>
        <p className='text-xs mb-4'>GRI 2018:403-1</p>
        <p className='mb-4'>
          We maintain a global approach to employee safety and well-being
          through our Health and Safety Policy, applicable to all business units
          of Manila Water. This policy adheres to standards prescribed by the
          Department of Labor and Employment (DOLE) or the regulatory
          requirement of every country where we do business. This commitment is
          driven by our Occupational Health and Safety Departments (OSHD), which
          report directly to respective Chief Operating Officers, ensuring
          executive-level accountability.
        </p>
        <p>
          Our health, safety, and environment (HSE) program is implemented
          through collaborative health and safety committees at every
          organizational level, encompassing employees and contracted workers.
          These committees, overseen by executives, ensure consistent
          application of HSE procedures. Recognizing the importance of
          continuous training, OSHD works together with Human Resources to
          identify and address training needs. In 2024, we delivered
          approximately 14,566 safety training hours, covering essential
          programs such as Basic Occupational Safety and Health (BOSH),
          Construction Occupational Safety and Health (COSH), Chemical Safety,
          First Aid, CPR, and our iJoin onboarding program.
        </p>
        <div className='flex flex-col md:flex-row gap-7 items-center mt-10'>
          <div className='flex-1'>
            Beyond occupational safety, we integrate employee wellness into our
            approach. OSHD collaborates with our Wellness Team to manage
            employee health data and ensure accurate reporting to regulatory
            bodies, while upholding strict confidentiality. The Wellness Team
            delivers healthcare services and designs programs tailored to our
            diverse workforce. This includes regular webinars addressing
            critical health topics such as mental and physical well-being,
            healthy lifestyles, and disease prevention. By investing in the
            health and safety of our employees, Manila Water fosters a
            productive and resilient workforce, ensuring sustainable operational
            excellence.
          </div>
          <div className='flex-1'>
            <figure>
              <Image
                src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-13.jpg'
                alt='OSHD'
                width={0}
                height={0}
                className='w-full h-auto'
              />
              <figcaption className='mt-4 italic text-sm'>
                Safety is a team effort! Our OSHD champions safety awareness
                through training, positive reinforcement for incident reporting,
                and employee involvement in policy and program development.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div>
        <h3 className='font-bold text-xl mb-4'>Hazard identification</h3>
        <p className='text-xs mb-4'>GRI 2018:403-2</p>
        <div className='md:columns-2 mt-8 gap-6'>
          <p className='mb-4'>
            100% of our managed buildings, construction sites, and corporate
            office undergo regular Hazard Identification, Risk Assessment, and
            Risk Control (HIRAC) exercises. To streamline this process and
            ensure accessibility of crucial safety information, we have
            established an online HIRAC Registry, available to all business
            units.
          </p>
          <p className='mb-4'>
            Open communication with employees is paramount, and we encourage
            both formal and informal reporting of near- misses or incidents.
            Formal channels include committee meetings, toolbox meetings, and a
            dedicated departmental email address. Informal reporting is also
            encouraged, such as directly messaging OSHD members. Following any
            reported incident, an incident report is prepared which is shared
            with the employee and their immediate superior. Furthermore,
            corrective actions or adaptations are communicated to ensure prompt
            remediation and continuous improvement.
          </p>
        </div>
      </div>
      <div>
        <h3 className='font-bold text-xl mb-4'>
          Health and safety performance
        </h3>
        <p className='text-xs mb-4'>GRI 2018:403-9</p>
        <table className='bg-[#BFE7F2] w-full mb-7'>
          <thead>
            <tr className='border-b-2 border-blue'>
              <th align='left' className='py-1 px-4'>
                Health and safety
              </th>
              <th align='left' className='py-1 px-4'>
                2022
              </th>
              <th align='left' className='py-1 px-4'>
                2023
              </th>
              <th align='left' className='py-1 px-4'>
                2024
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2 border-blue'>
              <td align='left' className='py-1 px-4'>
                Fatality as a result of a work-related injury, count
              </td>
              <td align='left' className='py-1 px-4'>
                1
              </td>
              <td align='left' className='py-1 px-4'>
                1
              </td>
              <td align='left' className='py-1 px-4'>
                0
              </td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td align='left' className='py-1 px-4'>
                High-consequence work-related injury except fatality, count
              </td>
              <td align='left' className='py-1 px-4'>
                0
              </td>
              <td align='left' className='py-1 px-4'>
                0
              </td>
              <td align='left' className='py-1 px-4'>
                0
              </td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td align='left' className='py-1 px-4'>
                Recordable work-related injury, count
              </td>
              <td align='left' className='py-1 px-4'>
                3
              </td>
              <td align='left' className='py-1 px-4'>
                6
              </td>
              <td align='left' className='py-1 px-4'>
                27
              </td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td align='left' className='py-1 px-4'>
                Lost Time Injury Rate
              </td>
              <td align='left' className='py-1 px-4'>
                0.38
              </td>
              <td align='left' className='py-1 px-4'>
                0.46
              </td>
              <td align='left' className='py-1 px-4'>
                0
              </td>
            </tr>
          </tbody>
        </table>
        <div className='md:columns-2 mt-8 gap-6'>
          <p className='mb-4'>
            We actively track and take accountability for reportable incidents
            to foster a safe and healthy workplace. In 2024, we maintained a
            strong safety record with no fatalities, high-consequence injuries
            or cases of occupational disease involving our employees. The
            majority of recordable work- related injuries stemmed from a rise in
            reporting of incidents such as slips and falls, trips, vehicular
            accidents, and chemical spills. For each reported incident, root
            causes were thoroughly identified, and corrective actions were
            promptly implemented to prevent recurrence and further enhance our
            safety protocols.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OcccupationHealthSafety;
