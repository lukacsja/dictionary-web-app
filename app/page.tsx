'use client';

import SearchField from '@/components/search-field';
import { useFont } from '@/context/FontContext';

export default function Home() {
  const { selectedFont } = useFont();

  return (
    <main className={`${selectedFont.font.className}`}>
      <SearchField />
    </main>
  );
}
