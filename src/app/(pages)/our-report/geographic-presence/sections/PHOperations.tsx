import React from 'react';

function PHOperations() {
  return (
    <section className='mb-12'>
      <h2 className='text-2xl text-secondary font-bold mt-8'>
        Philippine Operations
      </h2>
      <p>Market presence with operations across the Philippines</p>
      <div className='flex flex-col md:flex-row gap-x-6 mt-7'>
        <div className='flex-1'>
          <div className='mb-6'>
            <h3 className='text-blue uppercase font-bold'>East Zone</h3>
            <p>
            (7.76 million customers,
~500+ million cubic meters
annual water demand)
            </p>
          </div>
          <div className='mb-6'>
            <h3 className='text-blue uppercase font-bold'>North Luzon</h3>
            <ol className='styled-list' start={1}>
              <li>Ilagan (Isabela) Water</li>
              <li>Calasiao (Pangasinan) Water</li>
              <li>North Luzon (Pangasinan) Water</li>
              <li>Malasiqui (Pangasinan) Water</li>
              <li>San Jose (Nueva Ecija) Concession</li>
            </ol>
          </div>
          <div>
            <h3 className='text-blue uppercase font-bold'>CENTRAL LUZON</h3>
            <ol className='styled-list' start={6}>
              <li>Clark (Pampanga) Water</li>
              <li>Bulacan (Bulacan) Aqua Estates</li>
            </ol>
          </div>
        </div>
        <div className='flex-1'>
          <div className='mb-6'>
            <h3 className='text-blue uppercase font-bold'>SOUTH Luzon</h3>
            <ol className='styled-list' start={8}>
              <li>Laguna (Laguna) Water</li>
              <li>South Luzon (Batangas) Water</li>
            </ol>
          </div>
          <div className='mb-6'>
            <h3 className='text-blue uppercase font-bold'>Visayas-Mindanao</h3>
            <ol className='styled-list' start={10}>
              <li>Boracay (Aklan) Water</li>
              <li>Calbayog (Samar) Water</li>
              <li>Cebu (Cebu) Water</li>
              <li>Tagum (Davao) Water</li>
            </ol>
          </div>
          <div>
            <h3 className='text-blue uppercase font-bold'>Others (B2B)</h3>
            <ol className='styled-list' start={14}>
              <li>Estate Water
              Partnership with Property Developers</li>
              <li>
              Manila Water Total Solutions EPCM,
              Product Innovation and Development
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PHOperations;
