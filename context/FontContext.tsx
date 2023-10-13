'use client';

import React, { createContext, useContext, useState } from 'react';
import { choosableFonts } from '@/lib/data';
import { Font } from '@/lib/types';

interface FontContextProviderProps {
  children: React.ReactNode;
}

interface FontContextProps {
  selectedFont: Font;
  setSelectedFont: React.Dispatch<React.SetStateAction<Font>>;
  changeFont: (font: Font) => void;
}

const FontContext = createContext<FontContextProps | null>(null);

export function FontContextProvider({ children }: FontContextProviderProps) {
  const [selectedFont, setSelectedFont] = useState<Font>(choosableFonts[0]);

  const changeFont = (newFont: Font) => {
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
