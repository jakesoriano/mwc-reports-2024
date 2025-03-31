import React from 'react';
type Props = {
  children: React.ReactNode;
  bgColor?: string;
  padding?: string;
  border?: string;
  fullHeight?: boolean;
};
function Box({
  children,
  bgColor = 'bg-[#EEEFEF]',
  padding = 'p-4',
  border = 'border border-[#58595B]',
  fullHeight = false,
}: Props) {
  return (
    <div
      className={`rounded-xl ${bgColor} ${padding} ${border} ${
        fullHeight ? 'h-full' : ''
      }`}
    >
      {children}
    </div>
  );
}

export default Box;
