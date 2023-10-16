'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Meaning, WordInfo, SubmitErrors } from '@/lib/types';
import SearchResult from './search-result';
import iconSearch from '../public/icons/icon-search.svg';
import WordNotFound from './word-not-found';

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<WordInfo | null>(null);
  const [searchError, setSearchError] = useState<string>('');

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSearchResult(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
      );
      if (response.ok) {
        const data: WordInfo[] = await response.json();
        setSearchResult(data[0]);
      } else {
        console.error('Failed to fetch data from the API');
        if (searchQuery.length) {
          setSearchError(SubmitErrors.WordNotFound);
        }
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setSearchError('');
    setSearchQuery(event.target.value);
  };

  const handleSubmitErrors = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (!searchQuery.length) {
      setSearchError(SubmitErrors.EmptySearchField);
    }
  };

  const getMeaningList = () => {
    const result: Meaning[] = [];

    if (searchResult) {
      searchResult.meanings.map((meaning) => {
        result.push(meaning);
      });
    }

    return result;
  };

  const getAudioFile = () => {
    const result: string[] = [];

    searchResult?.phonetics.map((phon) => {
      if (phon.audio.length > 0) {
        result.push(phon.audio);
      }
    });

    return result;
  };

  const playAudioFile = () => {
    const audio = new Audio(getAudioFile()[0]);
    audio.play();
  };

  return (
    <>
      <form
        className='flex flex-col gap-2'
        onSubmit={handleFormSubmit}
        name='searchField'
      >
        <label htmlFor='searchField' className='sr-only'>
          Search for any word:
        </label>
        <div className='relative'>
          <input
            type='text'
            className='h-12 w-full rounded-2xl bg-gray-2 pl-6 pr-12 text-[16px] font-bold outline-none dark:bg-gray-7 md:h-16 md:text-[20px]'
            placeholder='Search for any word...'
            value={searchQuery}
            onChange={handleInputChange}
            onInvalid={handleSubmitErrors}
            required
          />
          <button
            type='submit'
            className='absolute right-6 top-1/2 -translate-y-1/2'
          >
            <Image src={iconSearch} alt='magnifying glass' />
          </button>
        </div>
        {searchError === SubmitErrors.EmptySearchField && (
          <span className='text-[16px] text-red-main md:text-[20px]'>
            {searchError}
          </span>
        )}
      </form>

      {searchResult && (
        <SearchResult
          searchResult={searchResult}
          playAudioFile={playAudioFile}
          meaningList={getMeaningList()}
        />
      )}

      {searchError === SubmitErrors.WordNotFound && <WordNotFound />}
    </>
  );
};

export default SearchField;
