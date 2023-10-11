import { NextFont } from 'next/dist/compiled/@next/font';

export type Font = {
  family: string;
  font: NextFont;
};

export type Theme = 'light' | 'dark';
