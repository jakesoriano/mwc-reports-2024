import React from 'react';
import { DataTableProps } from '../_types/table.type';

interface Props extends DataTableProps {
  hideBorders?: boolean;
  equalColumnsWidth?: boolean;
}

const DataTable: React.FC<Props> = ({
  columns,
  data,
  headClass,
  hideBorders = false,
  equalColumnsWidth = false,
}) => {
  return (
    <table
      className={`w-full border-collapse ${
        equalColumnsWidth ? 'table-fixed' : ''
      }`}
    >
      <thead>
        <tr className='bg-blue text-white'>
          {columns.map((col) => (
            <th
              key={col.key}
              className={`px-4 py-2 text-center ${headClass || ''}`}
              dangerouslySetInnerHTML={{ __html: col.label }}
            />
          ))}
        </tr>
      </thead>

      <tbody className='border border-blue'>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='group'>
            {columns.map((col) => (
              <td
                key={col.key}
                className={`px-3 py-1.5 text-gray-600 relative align-top border-blue ${
                  hideBorders ? '' : 'border'
                }`}
              >
                <div dangerouslySetInnerHTML={{ __html: row[col.key] || '' }} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
