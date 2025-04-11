import Image from 'next/image';
import Link from 'next/link';

function ResourceManagement() {
  return (
    <section className='pt-12' id='resource-management'>
      <h2 className='text-2xl font-bold text-secondary mb-3'>
        Resource Management
      </h2>
      <p>
        As highlighted in the 2024 World Economic Forum Global Risks Report,
        natural resource shortages are identified as the fourth most significant
        global risk over the next decade. This underscores the urgency of
        adopting effective resource management. Our approach to resource
        management includes operating our facilities efficiently, reducing
        non-revenue water (NRW), and implementing reuse and recycling programs.
      </p>
      <div className='mt-6'>
        <h3 className='text-lg font-bold mb-3'>Water source development</h3>
        <p className='text-xs'>
          GRI 2018: 303-1, 303-3 | SASB IF-WU-440a.1, IF-WU-440a.3
        </p>
        <p className='mb-4'>
          Water is a finite and shared resource vital for hydropower generation,
          irrigation, aquaculture, water utilities, and the daily needs of
          communities. To ensure its sustainable use, we source water
          responsibly from groundwater, rivers, lakes, and dams. In 2024, we
          utilized a total of 777.64 million cubic meters (mcm) of freshwater
          for potable water production.
        </p>
        <p className='mb-4'>
          Surface water is the primary source for our business units in the East
          Zone, Boracay, Calbayog, Cebu, and Tagum, while the Laguna, Clark, and
          other non-East Zone units rely predominantly on groundwater. We
          conduct regular monitoring and studies to ensure sustainable
          withdrawal practices and responsible management of water usage.
        </p>

        <table className='bg-[#BFE7F2] w-full md:w-[800px] mx-auto'>
          <thead>
            <tr className='border-b-2 border-blue'>
              <th align='left' className='py-1 px-4'>
                Water Withdrawal by Sources
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
                Groundwater, mcm
              </td>
              <td align='left' className='py-1 px-4'>
                112.74
              </td>
              <td align='left' className='py-1 px-4'>
                123.26
              </td>
              <td align='left' className='py-1 px-4'>
                119.39
              </td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td className='py-1 px-4'>Third-party Groundwater, mcm</td>
              <td className='py-1 px-4'>0.35</td>
              <td className='py-1 px-4'>0.65</td>
              <td className='py-1 px-4'>0.51</td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td className='py-1 px-4'>Surface water, mcm</td>
              <td className='py-1 px-4'>619.09</td>
              <td className='py-1 px-4'>641.44</td>
              <td className='py-1 px-4'>653.84</td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td className='py-1 px-4'>Potable water delivered, mcm</td>
              <td className='py-1 px-4'>1,254</td>
              <td className='py-1 px-4'>1,267</td>
              <td className='py-1 px-4'>1,287</td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td className='py-1 px-4'>Third-party Surface water, mcm</td>
              <td className='py-1 px-4'>5.09</td>
              <td className='py-1 px-4'>4.93</td>
              <td className='py-1 px-4'>3.90</td>
            </tr>
            <tr>
              <td className='py-1 px-4'>Total</td>
              <td className='py-1 px-4'>737.27</td>
              <td className='py-1 px-4'>770.27</td>
              <td className='py-1 px-4'>777.64</td>
            </tr>
          </tbody>
        </table>
        <div className='md:columns-2 mt-8 mb-4 gap-6'>
          <p className='mb-4'>
            The landscape of water resource management is constantly evolving.
            Due to increasing demand and environmental factors, the World
            Resources Institute (WRI) Aqueduct, in its recent update, identified
            the Angat watershed, one of our key watershed areas, as a
            high-stress region. This change underscores the importance of
            diversifying our water sources and focusing on water efficiency
            measures.
          </p>
          <p className='mb-4'>
            To proactively address water stress risks and ensure a secure water
            future, we are strategically investing in a diversified portfolio of
            water sources. In the East Zone, we have the 4-Water System
            Masterplan sourcing raw water from various water sources. Please
            refer to{' '}
            <Link
              href='/creating-shared-values/our-sustainability-approach/helping-communities-thrive'
              className='link'
            >
              Helping Build Communities Thrive
            </Link>{' '}
            for more information.
          </p>
          <p className='mb-4'>
            Our comprehensive approach to addressing water stress includes water
            efficiency. We are actively implementing backwash recycling and
            exploring water reuse strategies for non-potable applications, when
            applicable. Complementing these efforts, we promote water
            conservation and efficient usage among our customers.
          </p>
        </div>
        <figure>
          <Image
            src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-0.jpg'
            alt='helping communities thrive banner'
            width={0}
            height={0}
            className='w-full h-auto'
          />
          <figcaption className='mt-4 italic text-sm'>
            We regularly release #WaterWais or wise water use bulletins on our
            social media platform.
          </figcaption>
        </figure>
      </div>
      <div className='mt-8'>
        <h3 className='text-lg font-bold mb-3'>Water Recycling</h3>
        <p className='text-xs'>
          GRI 2018: 303-1, 303-3 | SASB IF-WU-440a.1, IF-WU-440a.3
        </p>
        <div className='flex flex-col md:flex-row gap-10 mt-5'>
          <div className='flex-1'>
            <p className='mb-4'>
              In 2024, despite the increase in water demand, water withdrawals
              were tempered by our initiative to recycle backwash water in
              several facilities. This enabled us to recover a total of 7.57
              mcm, 17% higher than previous year. This resource recovery
              initiative has been beneficial in ensuring a steady supply of
              water, anticipating the impacts of El Nino. Furthermore, it has
              allowed the company to extend cross-border water sharing to fellow
              concessionaire Maynilad Water Services, Inc.
            </p>
            <p>
              We also initiated water reuse for non-potable applications. Four
              purple fire hydrants using treated wastewater were installed in
              2024, translating to 137 cubic meters of recycled water used in
              firefighting.
            </p>
          </div>
          <div className='flex-1'>
            <p className='font-bold mb-4'>Water Reuse, mcm</p>
            <Image
              src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-1.jpg'
              alt='helping communities thrive banner'
              width={0}
              height={0}
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <h3 className='text-lg font-bold mb-3'>Non-Revenue Water Reduction</h3>
        <p className='text-xs'>SASB IF-WU-140a.2</p>
        <div className='flex flex-col md:flex-row gap-10 mt-5'>
          <p className='mb-4'>
            Our non-revenue water (NRW) reduction program is essential for
            optimizing operational efficiency, improving cost management, and
            conserving valuable resources. Its importance is further amplified
            by our ongoing service area expansion and the integration of new
            business units, some of which present significant NRW challenges.
            For 2024, our consolidated NRW remains at less than 15%.
          </p>
        </div>
        <table className='bg-[#BFE7F2] w-full md:w-[800px] mx-auto'>
          <thead>
            <tr className='border-b-2 border-blue'>
              <th align='left' className='py-1 px-4'>
                Non-Revenue Water
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
                % NRW, end-of-period
              </td>
              <td align='left' className='py-1 px-4'>
                14.1%
              </td>
              <td align='left' className='py-1 px-4'>
                15.1%
              </td>
              <td align='left' className='py-1 px-4'>
                14.6%
              </td>
            </tr>
            <tr className='border-b-2 border-blue'>
              <td className='py-1 px-4'>NRW losses, mld</td>
              <td className='py-1 px-4'>288.12</td>
              <td className='py-1 px-4'>303.94</td>
              <td className='py-1 px-4'>296.08</td>
            </tr>
            <tr>
              <td className='py-1 px-4'>NRW losses, mcm</td>
              <td className='py-1 px-4'>103.21</td>
              <td className='py-1 px-4'>117.56</td>
              <td className='py-1 px-4'>107.77</td>
            </tr>
          </tbody>
        </table>
        <div className='bg-[#BFE7F2] w-full md:w-[800px] mx-auto p-6 mt-7 mb-4'>
          <p className='font-bold mb-4'>
            East Zone Non-Revenue Water Reduction
          </p>
          <Image
            src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-2.jpg'
            alt='helping communities thrive banner'
            width={0}
            height={0}
            className='md:w-[500px] h-auto mx-auto mb-4'
          />
          <p>
            A key success of our Public-Private Partnership in the water
            industry in the Philippines has been the dramatic improvement of
            Manila Water in water distribution efficiency. In the East Zone, our
            NRW program has achieved a remarkable reduction, from 63%
            pre-privatization to below 15% today. This translates to recovering
            approximately 750 MLD of water—equivalent to the capacity of a
            medium-sized dam. Building on this success, we are replicating this
            best-practice NRW management across our non-East Zone business
            units, employing people-driven initiatives, process refinements, and
            innovative technologies.
          </p>
        </div>
        <p className='mb-4'>
          With NRW Reduction as a competitive advantage, our subsidiary, Manila
          Water Infratech Solutions, further extends this expertise by offering
          NRW management consultancy and related services.
        </p>

        <div>
          <h3 className='text-lg font-bold mb-3 w-full md:w-[800px] mx-auto'>
            Holistic Approach to NRW Management
          </h3>

          <table className='w-full md:w-[800px] mx-auto table-fixed'>
            <thead>
              <tr>
                <th align='left' className='py-1 px-4 bg-[#FFC840]'>
                  People
                </th>
                <th align='left' className='py-1 px-4 bg-[#94D1B2]'>
                  Process
                </th>
                <th align='left' className='py-1 px-4 bg-[#94BDD3]'>
                  Technology
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td align='left' className='py-1 px-4'>
                  Demand monitoring areas formation
                </td>
                <td align='left' className='py-1 px-4'>
                  Active leakage control
                </td>
                <td align='left' className='py-1 px-4'>
                  Network pressure management
                </td>
              </tr>
              <tr className=''>
                <td className='py-1 px-4'>
                  Kasangga (Partnership) system with communities
                </td>
                <td className='py-1 px-4'>
                  Immediate leak repairs
                  <br />
                  <p className='mt-3'>Calibration of meters</p>
                </td>
                <td className='py-1 px-4'>
                  Installation of Pressure Regulating Valves with automated
                  controller
                </td>
              </tr>
              <tr className=''>
                <td className='py-1 px-4'>
                  NRW eduction as a key performance metric of employees
                </td>
                <td className='py-1 px-4'>
                  Regular meter replacement
                  <br />
                  <p className='mt-3'>Asset management</p>
                </td>
                <td className='py-1 px-4'>
                  Pump automation
                  <br />
                  <p className='mt-3'>Use of leak detection technologies</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-8'>
        <h3 className='text-lg font-bold mb-3'>Material Use</h3>
        <p className='text-xs mb-5'>GRI 2016:301-1</p>
        <p className='mb-4'>
          Water quality is a non-negotiable priority in the delivery of our
          service. We employ carefully managed chemical treatment processes to
          guarantee the safety and quality of our water, as well as the
          compliance of our wastewater effluent.
        </p>
        <p className='mb-4'>
          In 2024, we addressed raw water quality fluctuations that influenced
          our chemical usage. The El Niño and La Niña weather patterns presented
          distinct challenges such as increased manganese levels and high
          turbidity. These fluctuating conditions required adjustments to our
          chemical treatment to maintain the required drinking water standards.
        </p>
        <p className='mb-4'>
          We intend to continue our proactive approach to treatment and resource
          management, remaining mindful of quality of our service. Across the
          enterprise, various business units already demonstrated continuous
          improvement in chemical management, achieving reductions through
          initiatives like chlorine dosing optimization, supply-demand
          management, and non-revenue water reduction. On the other hand,
          similar efficiencies were achieved in our wastewater operations
          through lower flows, improved influent quality, and the use of
          higher-quality polymers.
        </p>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-1'>
            <h4 className='font-bold text-lg mb-4'>
              Chemical Consumption (mcm)
            </h4>
            <Image
              src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-3.jpg'
              alt='Chemical Consumption'
              width={0}
              height={0}
              className='w-full h-auto'
            />
          </div>
          <div className='flex-1'>
            <h4 className='font-bold text-lg mb-4'>
              Chemical Intensity of Water Supply and Wastewater (mcm)
            </h4>
            <Image
              src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-4.jpg'
              alt='Chemical Intensity of Water Supply and Wastewater'
              width={0}
              height={0}
              className='w-full h-auto'
            />
          </div>
        </div>

        <figure className='mt-7'>
          <Image
            src='/images/shared-values/our-sustainability-approach/protecting-the-environment/pte-img-5.jpg'
            alt='processes to reduce our resource consumption'
            width={0}
            height={0}
            className='w-full h-auto'
          />
          <figcaption className='mt-4 italic text-sm'>
            We continuously improve our processes to reduce our resource
            consumption without compromising the quality of drinking water and
            effluent.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ResourceManagement;
