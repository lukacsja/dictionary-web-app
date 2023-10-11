import { Inconsolata, Inter, Lora } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const inconsolata = Inconsolata({ subsets: ['latin'] });
export const lora = Lora({ subsets: ['latin'] });

export const choosableFonts = [
  { label: 'mono', font: inconsolata },
  { label: 'serif', font: lora },
  { label: 'sans serif', font: inter },
];
