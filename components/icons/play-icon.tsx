import React from 'react';

interface PlayIconProps {
  outerClass: string;
  innerClass: string;
}

const PlayIcon: React.FC<PlayIconProps> = ({ outerClass, innerClass }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 75 75'
      className='h-[48px] w-[48px] md:h-[75px] md:w-[75px]'
    >
      <g>
        <circle cx='37.5' cy='37.5' r='37.5' className={outerClass} />
        <path d='M29 27v21l21-10.5z' className={innerClass} />
      </g>
    </svg>
  );
};

export default PlayIcon;
