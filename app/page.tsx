'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AboutPage from './about/page';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <AboutPage />
      <Projects />
      <Contact />
    </>
  );
}
