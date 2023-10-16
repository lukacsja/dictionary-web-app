'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useFont } from '@/context/FontContext';
import { choosableFonts } from '@/lib/data';
import { Font } from '@/lib/types';
import arrowdown from '../public/icons/icon-arrow-down.svg';

const FontSelector: React.FC = () => {
  const { changeFont, selectedFont } = useFont();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleFontsChange = (font: Font) => {
    changeFont(font);
    setIsMenuOpen(false);
  };

  return (
    <div className='relative z-10 text-[14px] font-bold leading-[24px] md:text-[18px]'>
      <button
        className='flex h-6 w-[120px] items-center justify-between'
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className='capitalize'>{selectedFont.label}</span>
        <Image src={arrowdown} alt='arrow down' />
      </button>

      {isMenuOpen && (
        <ul className='absolute right-0 top-8 flex w-[180px] flex-col rounded-2xl bg-white p-4 capitalize shadow-lg dark:bg-gray-7 dark:shadow-purple-main'>
          {choosableFonts.map((font) => (
            <li
              key={font.label}
              className={`cursor-pointer p-2 transition-all duration-300 hover:text-purple-main ${font.font.className}`}
              onClick={() => handleFontsChange(font)}
            >
              {font.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontSelector;
