import React from 'react';
import { DataTableProps } from '../_types/table.type';

const DashedTable: React.FC<DataTableProps> = ({
  columns,
  data,
  headClass,
}) => {
  return (
    <table className='w-full border-collapse'>
      <thead>
        <tr className='bg-blue text-white'>
          {columns.map((col) => (
            <th
              key={col.key}
              className={`px-3 py-5 text-center ${headClass || ''}`}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='group'>
            {columns.map((col) => (
              <td
                key={col.key}
                className='px-8  text-gray-600 first:border-dashed border-blue first:border-r-3 relative align-top'
              >
                <div className='group-first:hidden h-[1px] bg-gray-500 w-full ' />
                <div
                  className='py-10'
                  dangerouslySetInnerHTML={{ __html: row[col.key] || '' }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashedTable;
