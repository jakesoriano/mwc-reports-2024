import React from 'react';

function WasteManagement() {
  return (
    <section>
      <h2 className='text-2xl font-bold text-secondary mb-3'>
        Waste Management
      </h2>
      <p className='text-xs mb-6'>
        GRI 2020: 306-1, 306-2, 306-3, 306-4, 306-5
      </p>
      <p className='mb-4'>
        We adhere to the waste management hierarchy of avoidance, recycling,
        resource recovery, and safe disposal to handle waste responsibly and
        minimize environmental impact. Our waste streams include non-hazardous
        waste such as sludge, biosolids, grits, screenings, and office waste, as
        well as hazardous wastes generated from our operations and laboratories.
      </p>

      <table className='bg-[#BFE7F2] w-full mb-7'>
        <thead>
          <tr className='border-b-2 border-blue'>
            <th align='left' className='py-1 px-4'>
              Wastes generated per type, metric tons
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
              Non-hazardous wastes
            </td>
            <td align='left' className='py-1 px-4'>
              32,650.77
            </td>
            <td align='left' className='py-1 px-4'>
              19,761.57
            </td>
            <td align='left' className='py-1 px-4'>
              19,181.94
            </td>
          </tr>
          <tr className='border-b-2 border-blue'>
            <td align='left' className='py-1 px-4'>
              Hazardous wastes
            </td>
            <td align='left' className='py-1 px-4'>
              142.10
            </td>
            <td align='left' className='py-1 px-4'>
              468.31
            </td>
            <td align='left' className='py-1 px-4'>
              516.27
            </td>
          </tr>
          <tr>
            <td align='left' className='py-1 px-4'>
              Total
            </td>
            <td align='left' className='py-1 px-4'>
              32,792.88
            </td>
            <td align='left' className='py-1 px-4'>
              20,229.88
            </td>
            <td align='left' className='py-1 px-4'>
              19,698.21
            </td>
          </tr>
        </tbody>
      </table>

      <div className='md:columns-2 mt-8 gap-6'>
        <p className='mb-4'>
          Sludge generated from water treatment is hauled and landfilled by
          third-party service providers. Biosolids or sludge from wastewater
          treatment, which accounts for 87% of non-hazardous wastes, are managed
          differently across locations: in the East Zone and Boracay Water, they
          are hauled by third parties, composted, and used as soil conditioners;
          in Laguna Water and Estate Water, they are utilized as raw materials
          for Waste-to-Energy facilities; and in Clark Water, they are stored in
          onsite drying beds. 88% of waste is diverted from disposal through
          off-site recycling.
        </p>
        <p className='mb-4'>
          Wastewater grits and screenings are properly landfilled, while office
          wastes are collected by local government units (LGUs). Some LGUs
          segregate the wastes at Materials Recovery Facilities to recover
          recyclables, and the residual wastes are landfilled. Hazardous wastes
          are transported, treated, and safely disposed of by the Department of
          Environment and Natural Resources (DENR)-accredited service providers.
        </p>
        <p>
          Through these measures, we ensure that all waste is managed
          responsibly, reflecting our commitment to environmental stewardship
          and regulatory compliance.
        </p>
      </div>
    </section>
  );
}

export default WasteManagement;
