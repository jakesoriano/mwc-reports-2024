import Image from 'next/image';

function EnvironmentalStewardship() {
  return (
    <section>
      <h2 className='text-2xl font-bold text-secondary mb-3 mt-10'>
        Environmental Stewardship
      </h2>
      <p className='text-xs mb-5'>GRI:2016 413-1</p>
      <figure>
        <Image
          src='/images/shared-values/our-sustainability-approach/helping-communities-thrive/hct-img-9.jpg'
          alt='environmental stewardship banner'
          width={0}
          height={0}
          className='w-full h-auto'
        />
        <figcaption className='mt-4 italic text-sm'>
          The Lakbayan Water Trail: From source to treatment, participants
          discover the journey water takes, starting at Angat Dam and ending at
          our treatment facilities.
        </figcaption>
      </figure>
      <div className='mt-8'>
        <h3 className='text-lg font-bold'>Lakbayan</h3>
        <div className='md:columns-2 gap-6 mt-4'>
          <p className='mb-4'>
            Effective education and engagement are crucial for achieving our
            sustainability goals. Our programs aim to raise awareness and foster
            stakeholder involvement in the rehabilitation, protection, and
            conservation of natural resources. We go beyond simply sharing
            information about water sources and wastewater treatment, we empower
            our stakeholders to take an active role in environmental
            stewardship.
          </p>
          <p className='mb-4'>
            Our flagship Lakbayan (Water Trail) program offers immersive
            experience in our operations through guided tours of our facilities,
            from raw water source to treatment and distribution. Participants
            gain a deeper understanding of the processes involved in delivering
            safe, potable water to homes and businesses across eastern Metro
            Manila. Beyond showcasing the reliability of our 24/7 water supply
            amidst climate change challenges, Lakbayan highlights our wastewater
            management and treatment systems, emphasizing our commitment to
            environmental compliance and sustainability.
          </p>
          <p>
            Since its inception in 2006, Lakbayan has engaged over 100,000
            participants, including representatives from academic institutions,
            local government units, national government agencies, private
            organizations, and international agencies eager to learn about our
            best practices, including our globally recognized non-revenue water
            (NRW) management.
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <h3 className='text-lg font-bold'>Salin</h3>
        <div className='md:columns-2 gap-6 mt-4'>
          <p className='mb-4'>
            Building on Lakbayan’s success, SALIN: Lakbayan Para sa mga Guro
            program empowers public school teachers through specialized tours.
            Since its 2023 launch, SALIN has conducted 18 sessions, reaching
            over 200 participants. In 2024 alone, it welcomed educators from 59
            schools across Metro Manila’s East Zone.
          </p>
          <p>
            In collaboration with the Department of Education – National Capital
            Region (DepEd NCR), SALIN offers a full-day immersive tour of key
            Manila Water facilities. The journey starts at La Mesa Ecopark,
            Metro Manila’s environmental hub, where participants learn about our
            sustainability initiatives. They then visit La Mesa Dam, gaining
            insights into its role in water treatment. The tour culminates at
            our water and wastewater treatment plants, where experts explain the
            processes that ensure safe drinking water and proper wastewater
            treatment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EnvironmentalStewardship;
