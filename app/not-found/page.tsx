import React from 'react';
import Image from 'next/image';
import sadEmote from '@/public/icons/sad-emote.svg';
import { SubmitErrors } from '@/lib/types';

const WordNotFound = () => {
  return (
    <div className='mt-12 flex flex-col items-center justify-center text-center md:mt-24'>
      <Image
        className='md:h-16 md:w-16'
        src={sadEmote}
        alt='sad face emoji'
        width={32}
        height={32}
        priority
      />
      <h2 className='mt-4 text-[20px] font-bold md:mt-10'>
        No Definitions Found
      </h2>
      <p className='mt-3 text-[18px] text-gray-4 md:mt-6'>
        {SubmitErrors.WordNotFound}
      </p>
    </div>
  );
};

export default WordNotFound;
