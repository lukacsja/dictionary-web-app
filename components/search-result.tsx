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
        <div className='flex flex-col gap-2 md:gap-3 lg:gap-1'>
          <h1 className='font-h1'>{searchResult.word}</h1>
          <h2 className='font-phonetic text-purple-main'>
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

      {meaningList.map((meaning) => (
        <div key={meaning.partOfSpeech} className='mb-8 mt-8 md:mt-10 lg:mt-11'>
          <div className='flex items-center gap-4 md:gap-6'>
            <h3 className='font-partOfSpeech'>{meaning.partOfSpeech}</h3>
            <SectionDivider direction='horizontal' />
          </div>

          <h4 className='font-h4 mt-8 text-gray-4 md:mt-11 lg:mt-10'>
            Meaning
          </h4>

          <ul className='font-list mt-4 list-disc marker:text-purple-main md:mt-7'>
            {meaning.definitions.map((def) => (
              <li className='mb-3 ml-4 md:ml-12' key={def.definition}>
                {def.definition}
              </li>
            ))}
          </ul>

          {meaning.synonyms.length > 0 && (
            <div className='mt-6 flex items-center gap-6 md:mt-10 md:gap-10 lg:gap-6'>
              <h4 className='font-h4 text-gray-4'>Synonyms</h4>
              <div>
                {meaning.synonyms.map((syn, index) => (
                  <span
                    className='font-h4 font-bold text-purple-main'
                    key={syn}
                  >
                    {index === meaning.synonyms.length - 1
                      ? `${syn}`
                      : `${syn}, `}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <SectionDivider direction='horizontal' />
      <div className='font-h5 mt-6 flex flex-col gap-2.5 md:flex-row md:gap-6'>
        <h5 className='text-gray-4'>Source</h5>
        <Link
          href={searchResult.sourceUrls[0]}
          target='_blank'
          className='flex items-center gap-2.5 underline'
        >
          <span>{searchResult.sourceUrls[0]}</span>
          <Image src={newWindowIcon} alt='new window' />
        </Link>
      </div>
    </div>
  );
};

export default SearchResult;
