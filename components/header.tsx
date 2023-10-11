import React from 'react';
import Image from 'next/image';
import logo from '../public/icons/logo.svg';
import SectionDivider from './section-divider';
import FontSelector from './font-selector';
import { useTheme } from '@/context/ThemeContext';
import MoonLogo from './icons/moon-logo';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const applyIconColors = () => {
    return theme === 'light' ? '#757575' : '#a445ed';
  };

  return (
    <header className='flex h-8 w-full items-center justify-between'>
      <Image src={logo} alt='logo' priority />
      <div className='flex h-full items-center gap-4'>
        <FontSelector />
        <SectionDivider direction='vertical' />
        <div className='flex items-center gap-3'>
          <button
            className='bg-gray-4 dark:bg-purple-main relative flex h-5 w-10 items-center rounded-[10px] transition-all duration-500'
            onClick={toggleTheme}
          >
            <div
              className={`absolute h-[14px] w-[14px] rounded-full bg-white ${
                theme === 'light' ? 'left-[3px]' : 'right-[3px]'
              } transition-all duration-300`}
            />
          </button>
          <MoonLogo stroke={applyIconColors()} />
        </div>
      </div>
    </header>
  );
};

export default Header;
