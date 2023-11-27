import { FontContextProvider } from '@/context/FontContext';
import './globals.css';
import type { Metadata } from 'next';
import ThemeContextProvider from '@/context/ThemeContext';
import Header from '@/components/header';

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
        className={`select-[#a445ed] flex min-h-screen w-full min-w-[240px] max-w-[737px] flex-col bg-white p-6 text-gray-6 selection:bg-[#a445ed] selection:text-white dark:bg-gray-8 dark:text-white md:px-10 md:py-14`}
      >
        <ThemeContextProvider>
          <FontContextProvider>
            <Header />
            {children}
          </FontContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
