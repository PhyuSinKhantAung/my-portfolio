import type { Metadata } from 'next';
import './globals.css';
import { Alegreya } from 'next/font/google';
import NavData from '@/data/nav.json';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import ContentLayout from '@/components/layout/ContentLayout';

const alegreya = Alegreya({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This site will show about me.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alegreya.className} text-sm `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
