'use client';

import Header from '@/components/header';
import SearchField from '@/components/search-field';
import { useFont } from '@/context/FontContext';

export default function Home() {
  const { selectedFont } = useFont();
  return (
    <main className={`${selectedFont.className} max-w-[736px]`}>
      <Header />
      <SearchField />
    </main>
  );
}
