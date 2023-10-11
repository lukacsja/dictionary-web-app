import { FontContextProvider } from '@/context/FontContext';
import './globals.css';
import type { Metadata } from 'next';
import ThemeContextProvider from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'dictionary web app',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`dark:bg-gray-8 text-gray-6 h-screen bg-white p-6 dark:text-white md:px-[39px] md:py-[58px]`}
      >
        <ThemeContextProvider>
          <FontContextProvider>{children}</FontContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
