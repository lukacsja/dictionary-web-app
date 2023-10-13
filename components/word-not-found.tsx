import React from 'react';
import Image from 'next/image';
import sadEmote from '../public/icons/sad-emote.svg';
import { Errors } from '@/lib/types';

const WordNotFound = () => {
  return (
    <div className='mt-6 flex flex-col items-center justify-center text-center md:mt-12'>
      <Image
        className='md:h-16 md:w-16'
        src={sadEmote}
        alt='sad face emote'
        width={32}
        height={32}
        priority
      />
      <h2 className='mt-4 text-[20px] font-bold md:mt-10'>
        No Definitions Found
      </h2>
      <p className='text-body-m mt-3 text-gray-4 md:mt-6'>
        {Errors.WordNotFound}
      </p>
    </div>
  );
};

export default WordNotFound;
