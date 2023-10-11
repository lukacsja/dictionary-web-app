'use client';

import React from 'react';
import { useFont } from '@/context/FontContext';
import { choosableFonts } from '@/lib/data';
import { inter, inconsolata, lora } from '@/lib/data';
import Image from 'next/image';
import arrowdown from '../public/icons/icon-arrow-down.svg';

const FontSelector: React.FC = () => {
  const { changeFont } = useFont();

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFont = event.target.value;
    switch (selectedFont) {
      case 'serif':
        changeFont(lora);
        break;
      case 'mono':
        changeFont(inconsolata);
        break;
      case 'sans serif':
        changeFont(inter);
        break;
      default:
        changeFont(inter);
        break;
    }
  };

  return (
    <div className='relative flex  items-center'>
      <select
        name='font-style'
        className='reset-select min-w-[100px] p-1 dark:bg-inherit'
        onChange={handleFontChange}
      >
        {choosableFonts.map((font) => (
          <option
            key={font.label}
            value={font.label}
            className='dark:bg-gray-8'
          >
            {font.label}
          </option>
        ))}
      </select>
      <Image
        src={arrowdown}
        alt='arrow down'
        className='absolute right-[5px]'
      />
    </div>
  );
};

export default FontSelector;
