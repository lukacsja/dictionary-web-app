import React from 'react';
import iconSearch from '../public/icons/icon-search.svg';
import Image from 'next/image';

const SearchField = () => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form
      className='bg-gray-2 dark:bg-gray-7 flex h-12 w-full items-center justify-between gap-2 rounded-2xl px-6 md:h-16'
      onSubmit={handleFormSubmit}
    >
      <label htmlFor='searchField' className='sr-only'>
        Search for any word:
      </label>
      <input
        type='text'
        className='h-full w-full bg-inherit outline-none'
        placeholder='Search for any word...'
      />
      <button type='submit' className=''>
        <Image src={iconSearch} alt='magnifying glass' />
      </button>
    </form>
  );
};

export default SearchField;
