'use client';

import Header from '@/components/header';
import { useFont } from '@/context/FontContext';

export default function Home() {
  const { selectedFont } = useFont();
  return (
    <main
      className={`${selectedFont.className} flex max-w-[736px] flex-col justify-center`}
    >
      <Header />
    </main>
  );
}
