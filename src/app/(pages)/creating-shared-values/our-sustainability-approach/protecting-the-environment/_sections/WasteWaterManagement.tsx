import Image from 'next/image';

function WasteWaterManagement() {
  return (
    <section className='pt-12' id='wastewater-management'>
      <h2 className='text-2xl font-bold text-secondary mb-3'>
        Wastewater Management
      </h2>
      <p className='text-xs'>GRI:2018 303-2, 303-4 | SASB IF-WU-140b.2</p>
      <div className='mt-8'>
        <p className='mb-4'>
          Effective wastewater treatment is essential for protecting water
          resources, ensuring ecological balance, and mitigating climate change.
          Properly treated wastewater prevents water pollution, curbs algal
          blooms and eutrophication, and promotes the health and biodiversity of
          aquatic ecosystems. Additionally, it helps reduce greenhouse gas
          emissions by avoiding methane generation in anaerobic conditions.
        </p>
        <p className='mb-4'>
          As part of our commitment to sustainable water management, we treat
          wastewater before being safely discharged into water bodies. In 2024,
          we operate 79 wastewater treatment facilities, collectively treating
          66.39 million cubic meters of wastewater.
        </p>

        <table className='bg-[#BFE7F2] w-full mb-7'>
          <thead>
            <tr className='border-b-2 border-blue'>
              <th align='left' className='py-1 px-4'>
                Wastewater
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
                Wastewater treated, mcm
              </td>
              <td align='left' className='py-1 px-4'>
                76.38
              </td>
              <td align='left' className='py-1 px-4'>
                76.76
              </td>
              <td align='left' className='py-1 px-4'>
                66.39
              </td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td align='left' className='py-1 px-4'>
                Organic pollutants removed, metric tons BOD
              </td>
              <td align='left' className='py-1 px-4'>
                7,995.10
              </td>
              <td align='left' className='py-1 px-4'>
                8,079.46
              </td>
              <td align='left' className='py-1 px-4'>
                8,363.11
              </td>
            </tr>
          </tbody>
        </table>
        <p className='mb-4'>
          We adhere rigorously to the effluent standards set by the DENR through
          DAO 2016-08 and DAO 2021-19, consistently meeting or exceeding the
          required water quality standards for receiving bodies. In 2024, we
          achieved full compliance with all wastewater- related permits and
          regulations, underscoring our dedication to environmental stewardship
          and public health.
        </p>
        <div className='flex flex-col md:flex-row gap-7 items-center pt-4'>
          <p className='basis-[45%]'>
            To further enhance our wastewater management capabilities, Manila
            Water and the University of the Philippines Diliman entered into a
            memorandum of agreement in 2024 for a research program focused on
            the Removal of Excess Nitrogen and Endocrine Disruptors from
            Wastewater (RENEW). Project RENEW aims to improve the removal of
            nitrogen and endocrine-disrupting compounds (EDCs) from wastewater,
            addressing the significant environmental and public health risks
            posed by EDCs. A key component of this project involves developing
            microbial solutions to enhance wastewater treatment, specifically
            Biological Nutrient Removal (BNR) for nitrogen and the degradation
            of EDCs.
          </p>
          <div className='flex-1'>
            <figure>
              <Image
                src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-6.jpg'
                alt='helping communities thrive banner'
                width={0}
                height={0}
                className='w-full h-auto'
              />
              <figcaption className='mt-4 italic text-sm'>
                Signing of the Memorandum of Agreement with the University of
                the Philippines for Project RENEW
              </figcaption>
            </figure>
          </div>
        </div>
        <p className='mb-6 mt-4'>
          In the East Zone, our annual target with the Metropolitan Waterworks
          and Sewerage System (MWSS) is to achieve 100% wastewater coverage
          through a combination of sewer systems and sanitation services,
          including septic tank desludging in unsewered areas. Wastewater
          collected via sewer lines and combined-sewer drainage is treated in
          sewage treatment plants (STPs), while septage from septic tanks is
          processed in septage treatment facilities. Our regulator-approved 2023
          Service Improvement Plan outlines our three-river system master plan
          through 2047. By constructing new STPs and expanding sewer networks,
          we target to increase sewer coverage in the East Zone from 33% in 2024
          to 88% by 2047, with the remaining12% achieved through sanitation
          services.
        </p>

        <p className='mb-4 font-bold text-xl'>Ongoing Wastewater Projects</p>
        <Image
          src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-7.jpg'
          alt='helping communities thrive banner'
          width={0}
          height={0}
          className='w-full h-auto'
        />
      </div>
    </section>
  );
}

export default WasteWaterManagement;
