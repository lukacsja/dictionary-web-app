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
        className={`select-[#a445ed] flex min-h-screen justify-center bg-white text-gray-6 selection:bg-[#a445ed] selection:text-white dark:bg-gray-8 dark:text-white`}
      >
        <ThemeContextProvider>
          <FontContextProvider>{children}</FontContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
