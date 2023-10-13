import React from 'react';
import Image from 'next/image';
import logo from '../public/icons/logo.svg';
import SectionDivider from './section-divider';
import FontSelector from './font-selector';
import { useTheme } from '@/context/ThemeContext';
import MoonLogo from './icons/moon-logo';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='mb-6 flex h-8 w-full items-center justify-between md:mb-[54px] lg:mb-[60px]'>
      <Image src={logo} alt='logo' priority />
      <div className='flex h-full items-center gap-4'>
        <FontSelector />
        <SectionDivider direction='vertical' />
        <div className='flex items-center gap-3'>
          <button
            className='relative flex h-5 w-10 items-center rounded-[10px] bg-gray-4 transition-all duration-500 dark:bg-purple-main'
            onClick={toggleTheme}
          >
            <div
              className={`absolute h-[14px] w-[14px] rounded-full bg-white ${
                theme === 'light' ? 'left-[3px]' : 'right-[3px]'
              } transition-all duration-300`}
            />
          </button>
          <MoonLogo stroke={theme === 'light' ? '#757575' : '#a445ed'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
