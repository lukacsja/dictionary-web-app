'use client';

import React, { createContext, useContext, useState } from 'react';
import { choosableFonts } from '@/lib/data';
import { NextFont } from 'next/dist/compiled/@next/font';

interface FontContextProviderProps {
  children: React.ReactNode;
}

interface FontContextProps {
  selectedFont: NextFont;
  setSelectedFont: React.Dispatch<React.SetStateAction<NextFont>>;
  changeFont: (font: NextFont) => void;
}

const FontContext = createContext<FontContextProps | null>(null);

export function FontContextProvider({ children }: FontContextProviderProps) {
  const [selectedFont, setSelectedFont] = useState<NextFont>(
    choosableFonts[0].font
  );

  const changeFont = (newFont: NextFont) => {
    setSelectedFont(newFont);
  };

  return (
    <FontContext.Provider value={{ selectedFont, setSelectedFont, changeFont }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);

  if (context === null) {
    throw new Error('useFont muse be used within a FontContextProvider');
  }
  return context;
}
