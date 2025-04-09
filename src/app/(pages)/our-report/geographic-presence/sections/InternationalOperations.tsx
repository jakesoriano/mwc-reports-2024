import Image from 'next/image';

function InternationalOperations() {
  return (
    <section className='mb-6'>
      <div className='w-full lg:w-[80%] mx-auto'>
        <Image
          src='/images/our-report/geographic-presence/international-map.svg'
          alt='geographic presence'
          width={0}
          height={0}
          sizes='80vw'
          className='w-full h-auto'
        />
      </div>
      <h2 className='text-2xl text-secondary font-bold mt-8'>
        International Operations
      </h2>
      <p>Present in ASEAN and Kingdom of Saudi Arabia (KSA)</p>
      <div className='flex flex-col md:flex-row gap-x-6 mt-7'>
        <div className='flex-1'>
          <h3 className='text-blue uppercase font-bold'>1. Vietnam</h3>
          <ul className='styled-list styled-list-primary'>
            <li>
              <span className='font-bold'>Thu Duc Water</span>
              <br />
              (50-year 300 MLD Bulk Water Contract with SAWACO)
            </li>
            <li>
              <span className='font-bold'>Kenh Dong Water</span>
              <br />
              (20-year 200 MLD Bulk Water Contract with SAWACO, SGW)
            </li>
            <li>
              <span className='font-bold'>Saigon Water</span>
              <br />
              (38% in a holding company with multiple investments in water value
              chain)
            </li>
            <li>
              <span className='font-bold'>Cu Chi Water</span>
              <br />
              (Concession Agreement under Saigon Water)
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <div className='mb-6'>
            <h3 className='text-blue uppercase font-bold'>2. Thailand</h3>
            <ul className='styled-list styled-list-primary'>
              <li>
                <span className='font-bold'>East Water</span>
                <br />
                (18.72% stake in raw water business in Eastern Economic
                Corridor, Thailand)
              </li>
            </ul>
          </div>
          <div className='mb-6'>
            <h3 className='text-blue uppercase font-bold'>3. Indonesia</h3>
            <ul className='styled-list styled-list-primary'>
              <li>
                <span className='font-bold'>PT STU</span>
                <br />
                (20% in a Bulk Water supply company in Indonesia)
              </li>
            </ul>
          </div>
          <div className='mb-6'>
            <h3 className='text-blue uppercase font-bold'>
              4. Kingdom of Saudi Arabia (KSA)
            </h3>
            <ul className='styled-list styled-list-primary'>
              <li>
                <span className='font-bold'>Northwest Cluster KSA O&M</span>
                <br />
                (1,000 MLD MOM Contract in North West Cluster)
              </li>
              <li>
                <span className='font-bold'>Eastern Cluster KSA O&M</span>
                <br />
                (1,800 MLD MOM Contract in Eastern Cluster)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternationalOperations;
