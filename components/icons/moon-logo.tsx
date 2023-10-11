import React from 'react';

interface MoonLogoProps {
  stroke: string;
}

const MoonLogo: React.FC<MoonLogoProps> = ({ stroke }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      viewBox='0 0 22 22'
    >
      <path
        fill='none'
        stroke={stroke}
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z'
      />
    </svg>
  );
};

export default MoonLogo;
