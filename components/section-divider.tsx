import React from 'react';

interface SectionDividerProps {
  direction: 'horizontal' | 'vertical';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ direction }) => {
  return (
    <div
      className={`bg-gray-3 ${
        direction === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
      }`}
    />
  );
};

export default SectionDivider;
