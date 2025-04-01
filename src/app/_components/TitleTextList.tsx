import React from 'react';

type Props = {
  head: string;
  headBgColor?: string;
  title: string;
  listItems: string[];
};

function TitleTextList({
  head,
  headBgColor = 'bg-blue',
  title,
  listItems,
}: Props) {
  return (
    <div>
      <div
        className={`${headBgColor} rounded-tr-lg w-fit py-2 px-4 text-white mb-4`}
      >
        {head}
      </div>
      <p className='font-bold mb-4'>{title}</p>
      <ul className='styled-list styled-list-secondary'>
        {listItems.map((item, index) => (
          <li key={index} className='mb-2'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TitleTextList;
