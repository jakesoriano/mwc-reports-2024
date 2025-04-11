import Image from 'next/image';

function GovernanceCompliance() {
  return (
    <section className='pt-12' id='governance-and-compliance'>
      <h2 className='text-2xl font-bold text-secondary mb-3 mt-10'>
        Governance and compliance
      </h2>
      <p className='text-xs mb-5'>GRI 2016:418-2; 2021:2-25,2-26</p>
      <div className='md:columns-2 mt-8 gap-6'>
        <p className='mb-4'>
          Manila Water’s Code of Business Conduct and Ethics guides all our
          actions and decisions, reflecting our unwavering commitment to ethical
          conduct. We maintain a zero-tolerance policy for fraud and corruption,
          prioritizing responsible and transparent disclosures to keep our
          stakeholders fully informed. This commitment to integrity
        </p>
        <p className='mb-4'>
          Our Whistleblower Policy empowers directors, officers, employees, and
          third parties to report concerns about illegal or unethical practices
          without fear of retaliation. The Whistleblower Committee ensures
          independent investigation and appropriate follow-up actions,
          accessible primarily through the Whistleblower hotline. As of December
          31, 2024, we addressed nine whistleblower reports received through our
          channels, none of which involved customer data breaches.
        </p>
        <p className='mb-4'>
          Building on this foundation, we recognize that protecting sensitive
          data and ensuring the integrity of our systems is crucial for
          maintaining stakeholder trust.
        </p>
        <p className='mb-4'>
          This focus on security is vital as we advance our digital
          transformation. To further optimize operations and enhance efficiency,
          we are implementing several systems improvements and automation,
          including transitioning to a new generation tool for data automation
          of planning, analysis, and reporting.
        </p>
        <p className='mb-4'>
          Compliance is integral to our operations and a key component of
          building stakeholder trust. We adhere to all applicable regulations,
          including those governing environmental permits, water quality
          standards, safety regulations, and employee rights. Our 2024
          performance, marked by zero incidents of significant non-compliance
          with socio-economic and environmental regulations, exemplifies this
          commitment.
        </p>
        <p>
          Our responsible practices extend throughout our supply chain. The
          Corporate Procurement Group rigorously oversees vendor accreditation
          and reaccreditation, including environmental and social assessments.
          We require vendors to submit all necessary permits and documentation
          before engagement, utilizing Ariba to automate and streamline the
          accreditation process.
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-7 my-8'>
        <div className='flex-1 px-10 flex flex-col justify-center'>
          <Image
            src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-14.jpg'
            alt='CDP'
            width={0}
            height={0}
            className='w-[100px] h-auto mx-auto mb-4'
          />
          <p className='font-bold text-xl'>A, Leadership for Water</p>
          <p className='font-bold text-xl'>B, Management for Climate Change</p>
        </div>
        <div className='flex-1 border-l border-black px-10  flex flex-col justify-center'>
          <Image
            src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-15.jpg'
            alt='Sustainalitics'
            width={0}
            height={0}
            className='w-full h-auto mb-4'
          />
          <p className='font-bold text-xl'>22.6 , Medium Risk Rating</p>
        </div>
        <div className='flex-1 border-l border-black px-10  flex flex-col justify-center'>
          <Image
            src='/images/shared-values/our-sustainability-approach/building-a-culture/bcct-img-16.jpg'
            alt='MSCI'
            width={0}
            height={0}
            className='w-full h-auto mb-4'
          />
          <p className='font-bold text-xl'>BB, Average ESG Rating</p>
        </div>
      </div>
      <p>
        Our dedication to responsible operations is further validated by our
        performance across various ESG indicators and rating agencies. By
        consistently upholding the highest standards of governance and
        compliance, Manila Water reinforces its commitment to sustainable and
        ethical business practices.
      </p>
    </section>
  );
}

export default GovernanceCompliance;
