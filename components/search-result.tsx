import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Meaning, WordInfo } from '@/lib/types';
import SectionDivider from './section-divider';
import PlayIcon from './icons/play-icon';
import newWindowIcon from '../public/icons/icon-new-window.svg';

interface SearchResultProps {
  searchResult: WordInfo;
  playAudioFile: () => void;
  meaningList: Meaning[];
}

const SearchResult: React.FC<SearchResultProps> = ({
  searchResult,
  playAudioFile,
  meaningList,
}) => {
  return (
    <div className='mt-6 md:mt-12'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-2 md:gap-3'>
          <h1 className='text-[32px] font-bold md:text-[64px]'>
            {searchResult.word}
          </h1>
          <h2 className='text-body-m text-purple-main'>
            {searchResult.phonetic}
          </h2>
        </div>
        <button className='group' onClick={playAudioFile}>
          <PlayIcon
            outerClass='fill-[#a445ed] opacity-25 group-hover:opacity-100'
            innerClass='fill-[#a445ed] group-hover:fill-white'
          />
        </button>
      </div>

      <div>
        {meaningList.map((meaning) => (
          <div key={meaning.partOfSpeech} className='mb-8 mt-8 md:mt-10'>
            <div className='flex items-center gap-4 md:gap-8'>
              <h3 className='text-[18px] font-bold italic'>
                {meaning.partOfSpeech}
              </h3>
              <SectionDivider direction='horizontal' />
            </div>

            <h4 className='mt-8 text-[16px] text-gray-4 md:mt-11'>Meaning</h4>

            <ul className='mt-4 list-disc text-[15px] leading-6 marker:text-purple-main md:mt-8'>
              {meaning.definitions.map((def) => (
                <li className='mb-3 ml-4' key={def.definition}>
                  {def.definition}
                </li>
              ))}
            </ul>

            {meaning.synonyms.length > 0 && (
              <div>
                <h4 className='mt-6 text-[16px] text-gray-4 md:mt-10'>
                  Synonyms
                </h4>
                <div>
                  {meaning.synonyms.map((syn) => (
                    <span className='font-bold text-purple-main' key={syn}>
                      {`${syn}, `}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <SectionDivider direction='horizontal' />
        <div className='mt-6 flex flex-col gap-2.5 md:flex-row md:gap-6'>
          <span className='text-body-s text-gray-4'>Source</span>
          <Link
            href={searchResult.sourceUrls[0]}
            target='_blank'
            className='text-body-s flex items-center gap-2.5 underline'
          >
            <span>{searchResult.sourceUrls[0]}</span>
            <Image src={newWindowIcon} alt='new window' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
