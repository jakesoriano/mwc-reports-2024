import Image from 'next/image';

function ClimateChange() {
  return (
    <section className='pt-12' id='climate-change-mitigation'>
      <h2 className='text-2xl font-bold text-secondary mb-3'>
        Climate Change Mitigation
      </h2>
      <p className='text-xs'>
        GRI 2016: 305-1, 305-2, 305-3, 305-4, 305-5 | SASB IF-WU-450a.4 | TCFD |
        ISSB S22
      </p>
      <div className='md:columns-2 mt-8 gap-6'>
        <p className='mb-4'>
          We are committed to UN Sustainable Development Goal (SDG) 13: Climate
          Action and fully support the Paris Agreement’s goal of limiting global
          temperature rise to 1.5°C by reducing greenhouse gas (GHG) emissions.
          We also align with the Philippines’ Nationally Determined
          Contributions (NDCs) target of a 75% GHG reduction by 2030 compared to
          the business-as- usual (BAU) scenario.
        </p>
        <p>
          Guided by the Task Force on Climate-related Financial Disclosures
          (TCFD) framework, our decarbonization efforts focus on mitigating
          climate risks and strengthening resilience in an evolving regulatory
          and market landscape. This alignment is supported by the board-level
          ESG Committee. Further discussion of our TCFD is in the Sustainability
          Content Index.
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-7'>
        <div className='flex-1'>
          <p className='mb-5'>
            Our Climate Change Policy outlines key mitigation strategies,
            including:
          </p>
          <ul className='styled-list'>
            <li>GHG accounting and emissions reduction initiatives,</li>
            <li>
              Adoption of best-available technologies to enhance resource
              efficiency,
            </li>
            <li>
              Transitioning to renewable and energy-efficient energy sources,
            </li>
            <li>
              Aligning efforts with the Philippines’ NDCs by expanding
              wastewater treatment and sanitation,
            </li>
            <li>
              Supporting carbon capture through watershed protection and
              reforestation.
            </li>
            <li>
              Providing climate change awareness and capacity building for
              employees, supply chain partners, communities, and stakeholders.
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <p className='font-bold mb-4'>
            GHG emmisions, metric tons CO<sub>2</sub>e
          </p>

          <Image
            src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-12.jpg'
            alt='helping communities thrive banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </div>
      </div>
      <p className='mb-4 mt-6'>
        While we monitor our scope 1 and 2 emissions, we are also part of the
        Philippines accounting of Nationally Determined Contribution,
        particularly on wastewater management. Expanding wastewater coverage and
        operating centralized aerobic water treatment facilities play a vital
        role in avoiding methane emissions. Methane is a significant byproduct
        of traditional septic tank systems, which are the predominant wastewater
        treatment method in the country.
      </p>
      <p className='mb-4'>
        In 2024, our facilities achieved methane avoidance equivalent to 65,709
        metric tons of CO2 e through enhanced sewage and septage treatment.
      </p>

      <Image
        src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-14-rev.jpg'
        alt='enhanced sewage and septage treatment'
        width={0}
        height={0}
        className='w-full h-auto'
      />
    </section>
  );
}

export default ClimateChange;
