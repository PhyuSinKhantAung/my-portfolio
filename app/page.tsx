'use client';
import AboutMe from '@/components/AboutMe';
import backgroundImage from '../public/natural-light-white-background.jpg';
import about from '@/data/about.json';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { globalVariants } from '@/animation';
import { motion } from 'framer-motion';
import NavData from '@/data/nav.json';
import Navbar from '@/components/layout/Navbar';
import SocialsData from '@/data/socials.json';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';

interface Social {
  id: string;
  name: string;
  link: string;
}

export default function Home() {
  return (
    <>
      <Navbar navData={NavData.data} />

      <div
        className={`w-full h-screen relative 
        dark:bg-[#2b4162] dark:bg-[linear-gradient(315deg,#2b4162_0%,#12100e_74%)]
        bg-[#c8cace] bg-[linear-gradient(315deg,#c8cace_0%,#2d323d_74%)]
        `}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-full mx-auto text-center">
          <motion.h1
            variants={globalVariants.leftComeInVariants}
            className="scroll-m-20 sm:text-3xl text-[2.6rem] leading-[2.6rem] font-extrabold tracking-tight lg:text-4xl"
          >
            {about.data.title}
          </motion.h1>
          <motion.h2
            variants={globalVariants.leftComeInVariants}
            className="text-lg font-semibold pt-5"
          >
            {about.data.subtitle}
          </motion.h2>

          <ul className="my-10 list-disc [&>li]:mt-2 flex gap-x-4 justify-center">
            {SocialsData.data.map((social: Social) => (
              <a href={social.link} target="_blank" key={social.id}>
                {social.name === 'Facebook' && <Facebook size={18} />}
                {social.name === 'Instagram' && <Instagram size={18} />}
                {social.name === 'Github' && <Github size={18} />}
                {social.name === 'Linkedin' && <Linkedin size={18} />}
              </a>
            ))}
          </ul>
        </div>
      </div>

      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
