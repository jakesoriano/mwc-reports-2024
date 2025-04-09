import React from 'react';
import Image from 'next/image';

export default function ESGTable() {
  const data = [
    {
      types: ['social'],
      category: 'Water Security',
      target: 'At least 15% raw water supply buffer',
      values: ['28%', '24%', '23%'],
      status: '✔',
      sdgs: [6],
    },
    {
      types: ['environment'],
      category: 'Climate Change and Greenhouse Gas Reduction',
      target:
        '60% reduction and avoidance through renewable energy and wastewater treatment',
      values: ['36%', '42%', '44%'],
      status: '→',
      sdgs: [9, 7, 13],
    },
    {
      types: ['social'],
      category: 'Economic Contribution',
      target:
        'Building infrastructure sufficient to satisfy service commitments and improvements',
      values: ['Php 22 Bn', 'Php 20 Bn', 'Php 26 Bn'],
      status: '✔',
      sdgs: [6, 9],
    },
    {
      types: ['environment', 'social'],
      category: 'Resource Efficiency',
      target: '< 15% NRW level for Manila Concession',
      values: ['12.1%', '13.5%', '13.8%'],
      status: '✔',
      sdgs: [6],
    },
    {
      types: ['environment'],
      category: 'Biodiversity',
      target: '1,000 has. of watershed area reforested since 2022',
      values: ['430 has.', '680 has.', '975 has.'],
      status: '→',
      sdgs: [13, 15],
    },
    {
      types: ['environment'],
      category: 'Biodiversity',
      target: '580,000 trees planted and nurtured since 2022',
      values: ['207k', '311k', '442k'],
      status: '→',
      sdgs: [13, 15],
    },
    {
      types: ['social'],
      category: 'Water Quality',
      target: '100% compliance to national drinking water standards',
      values: ['99.9%', '99.9%', '99.6%'],
      status: '→',
      sdgs: [6],
    },
    {
      types: ['social'],
      category: 'Health and Safety',
      target: 'Zero Lost Time Injury Rate',
      values: ['0.38', '0.46', '0'],
      status: '✔',
      sdgs: [3],
    },
  ];

  const renderedCategories = new Set();

  return (
    <>
      <div className='overflow-x-auto border border-gray-200 rounded-lg'>
        <table className='min-w-[1090px] text-left text-sm'>
          <thead>
            <tr className='bg-cyan-100 text-cyan-900 font-semibold text-sm'>
              <th className='p-3'>ESG Targets²</th>
              <th className='p-3'>2022</th>
              <th className='p-3'>2023</th>
              <th className='p-3'>2024</th>
              <th className='p-3'>Status³</th>
              <th className='p-3'>UN SDG</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              const isCategoryRendered = renderedCategories.has(item.category);
              if (!isCategoryRendered) {
                renderedCategories.add(item.category);
              }

              return (
                <React.Fragment key={idx}>
                  {!isCategoryRendered && (
                    <tr>
                      <td className='p-3 font-semibold bg-cyan-50' colSpan={6}>
                        {item.category}
                      </td>
                    </tr>
                  )}
                  {item.target && (
                    <tr key={`${idx}-sub`}>
                      <td className='p-3 align-top text-cyan-700'>
                        <div className='flex gap-x-7'>
                          <div className='flex gap-x-2'>
                            {item.types?.map((type) => (
                              <Image
                                key={`icon-${type}`}
                                src={`/images/creating-shared-value/our-sustainability-approach/icon-${type}.svg`}
                                alt={type}
                                width={40}
                                height={40}
                              />
                            ))}
                          </div>
                          {item.target}
                        </div>
                      </td>
                      {item.values.map((val, i) => (
                        <td key={`${idx}-value-${i}`} className='p-3'>
                          {val}
                        </td>
                      ))}
                      <td className='p-3'>{item.status}</td>
                      <td className='p-3 flex gap-1'>
                        {item.sdgs.map((num) => (
                          <img
                            key={`sdg-${num}-${idx}`}
                            src={`/images/creating-shared-value/our-sustainability-approach/sdg-${num}.png`}
                            alt={`SDG ${num}`}
                            className='w-10 h-10 inline-block'
                          />
                        ))}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-10 justify-between mt-8'>
        <div className='self-end'>
          <p className='text-xs italic mb-2'>
            <sup>2</sup> All targets apply group-wide, except resource
            efficiency for East Zone NRW and economic contribution
            <br />
            for the concession business
          </p>
          <p className='text-xs italic'>
            <sup>3</sup> Progress of latest year vs. target
          </p>
        </div>
        <div>
          <p className='pb-4 mb-4 border-b border-black'>Legends:</p>
          <div className='flex justify-between md:justify-normal gap-7 px-6'>
            <div>
              <div className='inline-block text-center mr-5'>
                <Image
                  src={`/images/creating-shared-value/our-sustainability-approach/icon-environment.svg`}
                  alt='environment'
                  width={40}
                  height={40}
                  className='mx-auto'
                />
                <p>Environment</p>
              </div>
              <div className='inline-block text-center'>
                <Image
                  src={`/images/creating-shared-value/our-sustainability-approach/icon-social.svg`}
                  alt='social'
                  width={40}
                  height={40}
                  className='mx-auto'
                />
                <p>Social</p>
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <p>Maintaining Progress ✔</p>
              <p>Making Progress →</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
