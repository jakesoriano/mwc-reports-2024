import Image from 'next/image';

function EnergyManagement() {
  return (
    <section>
      <h2 className='text-2xl font-bold text-secondary mb-3'>
        Energy Management
      </h2>
      <p className='text-xs mb-6'>
        GRI 2016: 302-1, 302-3, 302-4 | SASB IF-WU-130a.1
      </p>
      <p className='mb-4'>
        Delivering water and wastewater services require significant amount of
        energy. To address this demand, we are dedicated to optimizing our
        operations, enhancing energy efficiency, and minimizing our
        environmental impact. Programs to reduce energy consumption are in place
        not only manage operational costs but also contribute to a reduction in
        greenhouse gas emissions.
      </p>
      <table className='bg-[#BFE7F2] w-full mb-7'>
        <thead>
          <tr className='border-b-2 border-blue'>
            <th align='left' className='py-1 px-4'>
              Energy consumption
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
              Fuel, Gigajoules (GJ)
            </td>
            <td align='left' className='py-1 px-4'>
              178,284.99
            </td>
            <td align='left' className='py-1 px-4'>
              74,054.64
            </td>
            <td align='left' className='py-1 px-4'>
              94,813.91
            </td>
          </tr>
          <tr className='border-b-2 border-blue'>
            <td align='left' className='py-1 px-4'>
              Electricity, GJ
            </td>
            <td align='left' className='py-1 px-4'>
              834,013.30
            </td>
            <td align='left' className='py-1 px-4'>
              888,247.46
            </td>
            <td align='left' className='py-1 px-4'>
              933,933.29
            </td>
          </tr>
          <tr>
            <td align='left' className='py-1 px-4'>
              Total, GJ
            </td>
            <td align='left' className='py-1 px-4'>
              1,012,298.29
            </td>
            <td align='left' className='py-1 px-4'>
              962,302.10
            </td>
            <td align='left' className='py-1 px-4'>
              1,028,747.20
            </td>
          </tr>
        </tbody>
      </table>
      <p className='mb-7'>
        Increased energy consumption and intensity in 2024 resulted from
        heightened demand-driven production, necessitating the activation of new
        facilities. The company is now focused on ensuring sustainable supply
        while managing diverse water parameters and conditions across these
        locations that contribute to overall higher energy intensity.
      </p>
      <table className='bg-[#BFE7F2] w-full mb-7'>
        <thead>
          <tr className='border-b-2 border-blue'>
            <th align='left' className='py-1 px-4'>
              Energy Intensity
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
              Enterprise Energy Intensity, GJ/ PHP billion revenue
            </td>
            <td align='left' className='py-1 px-4'>
              44,401.03
            </td>
            <td align='left' className='py-1 px-4'>
              31,334.61
            </td>
            <td align='left' className='py-1 px-4'>
              27,834.07
            </td>
          </tr>
          <tr className='border-b-2 border-blue'>
            <td align='left' className='py-1 px-4'>
              Energy Intensity for Water Supply, GJ/mcm billed volume
            </td>
            <td align='left' className='py-1 px-4'>
              1,385.74
            </td>
            <td align='left' className='py-1 px-4'>
              1,250.67
            </td>
            <td align='left' className='py-1 px-4'>
              1,276.17
            </td>
          </tr>
          <tr>
            <td align='left' className='py-1 px-4'>
              Energy Intensity for Wastewater, GJ/mcm wastewater treated
            </td>
            <td align='left' className='py-1 px-4'>
              1,742.42
            </td>
            <td align='left' className='py-1 px-4'>
              1,705.68
            </td>
            <td align='left' className='py-1 px-4'>
              1,786.32
            </td>
          </tr>
        </tbody>
      </table>
      <p className='mb-4'>
        Increased energy consumption and intensity in 2024 resulted from
        heightened demand-driven production, necessitating the activation of new
        facilities. The company is now focused on ensuring sustainable supply
        while managing diverse water parameters and conditions across these
        locations that contribute to overall higher energy intensity.
      </p>
      <p className='mb-7'>
        Through energy efficiency projects in 2024, the company avoided 4,421 GJ
        in energy consumption, relative to a business-as-usual scenario. This
        yielded approximately Php 14 million in cost avoidance, thereby
        partially offsetting rising overall consumption costs.
      </p>
      <figure>
        <Image
          src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-8.jpg'
          alt='helping communities thrive banner'
          width={0}
          height={0}
          className='w-full h-auto'
        />
        <div className='w-full md:w-[38%]'>
          <figcaption className='font-bold mx-auto mt-4 text-center md:text-right'>
            Energy Pyramid
          </figcaption>
        </div>
      </figure>
      <div className='bg-[#D9F0F7] p-6 flex flex-col md:flex-row gap-8 mt-8'>
        <div className='flex-1'>
          <h3 className='font-bold mb-6'>TAGUMpay Energy Efficiency Program</h3>
          <p>
            An example of these efforts is Tagum Water, which was recognized
            with the Department of Energy’s 2024 Energy Excellence Award in the
            Small and Medium Industry Category. A key innovation contributing to
            this recognition is the Riverbank Filtration and Artificial Recharge
            Technology. This technology replaces the conventional
            energy-intensive deepwell abstraction process by utilizing natural
            filtration methods to extract raw water. As a result, it has reduced
            energy consumption and improved raw water quality. Over the past
            three years, the technology has resulted in estimated energy savings
            of 18,720 GJ and a cost avoidance amounting to more than PhP 60
            million.
          </p>
        </div>
        <div className='flex-1'>
          <Image
            src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-9.jpg'
            alt='helping communities thrive banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </div>
      </div>
      <div className='p-6 flex flex-col md:flex-row gap-8 mt-8'>
        <div className='flex-1'>
          <h3 className='font-bold mb-6'>Renewable Energy Transition</h3>
          <p className='mb-4'>
            To support our decarbonization efforts, we are transitioning to
            renewable energy (RE) sources. Our strategy includes onsite RE
            installations and sourcing renewable energy through the
            government&apos;s existing programs.
          </p>
          <p>
            We remain committed to increasing our renewable energy capacity,
            further reducing greenhouse gas emissions, and strengthening our
            reliance on clean energy.
          </p>
        </div>
        <div className='flex-1'>
          <Image
            src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-10.jpg'
            alt='helping communities thrive banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
        </div>
      </div>
      <div className='bg-[url("/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-11.jpg")] bg-cover bg-center bg-no-repeat px-10 py-20'>
        <div className='w-full md:w-[70%] flex flex-col md:flex-row gap-7 text-white p-6 bg-[#051937]/80 rounded-2xl'>
          <div className='flex-1'>
            <p className='font-bold mb-8'>Existing installed RE:</p>
            <div className='mb-5'>
              <p className='font-bold text-3xl'>531 kWp</p>
              <span>
                in <strong>9</strong> facilities
              </span>
            </div>
            <div className='mb-5'>
              <p className=''>that generated</p>
              <span className='font-bold text-3xl'>
                4,688 <span className='text-lg'>GJ</span>{' '}
                <span className='font-normal text-base'>in 2024</span>
              </span>
            </div>
            <div className='mb-5'>
              <p className=''>and avoided GHG Emmision of</p>
              <span className='font-bold text-3xl'>
                900{' '}
                <span className='text-lg font-semibold'>
                  Metric Tons of CO<sub className='text-xs'>2</sub>e
                </span>
              </span>
            </div>
          </div>
          <div className='flex-1'>
            <p className='font-bold mb-8'>Solar Projects in the Pipeline:</p>
            <div className='mb-5'>
              <p className='font-bold text-3xl'>6,800 kWp</p>
              <span>to about</span>
            </div>
            <div className='mb-5'>
              <p className='font-bold text-3xl'>
                36,000 <span className='text-lg'>GJ/year</span>
              </p>
              <span className='font-normal text-base'>
                in 13 facilities with
              </span>
            </div>
            <div className='mb-5'>
              <span className='font-bold text-3xl'>
                6,900{' '}
                <span className='text-lg font-semibold'>
                  Metric Tons of CO<sub className='text-xs'>2</sub>e
                </span>
              </span>
              <p className='font-normal text-base'>potential GHG avoidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnergyManagement;
