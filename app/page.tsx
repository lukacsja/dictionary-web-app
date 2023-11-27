'use client';

import Header from '@/components/header';
import SearchField from '@/components/search-field';
import { useFont } from '@/context/FontContext';

export default function Home() {
  const { selectedFont } = useFont();

  return (
    <main
      className={`${selectedFont.font.className} w-full min-w-[240px] max-w-[737px] p-6 md:px-10 md:py-14`}
    >
      <Header />
      <SearchField />
    </main>
  );
}
