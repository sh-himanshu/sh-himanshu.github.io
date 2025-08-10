'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/site-data';
import { motion } from 'framer-motion';
import { LuDownload as Download, LuGithub as Github, LuLinkedin as Linkedin, LuMapPin as MapPin } from 'react-icons/lu';

export default function AboutSection() {
  return (
    <section id='about' className='about-gradient relative mx-auto min-h-[80svh] max-w-6xl px-4 pt-32 pb-16 md:pt-36 md:pb-24'>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex flex-col items-center text-center'
      >
        <Avatar className='size-32 border shadow-sm md:size-36'>
          <AvatarImage src='/profile.png' alt='Profile' />
          <AvatarFallback>HN</AvatarFallback>
        </Avatar>
        <h1 className='mt-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl'>
          Hi, I’m <span className='text-primary font-brand'>{CONTACT.firstName}</span>. I craft delightful web experiences. 🍦
        </h1>
        <p className='text-muted-foreground mt-4 max-w-2xl md:max-w-3xl'>
          Frontend-focused full-stack engineer, shipping with modern tooling and{' '}
          <span className='rainbow-text font-semibold'>AI-assisted</span> workflows. I keep pace with the latest best practices in
          performance, DX, and design systems.
        </p>
        <div className='mt-6 flex flex-wrap items-center justify-center gap-3'>
          <Button variant='outline' asChild>
            <a href={'https://github.com/' + CONTACT.github} target='_blank' rel='noreferrer' className='flex items-center gap-2'>
              <Github className='size-4' /> GitHub
            </a>
          </Button>
          <Button variant='outline' asChild>
            <a
              href={'https://www.linkedin.com/in/' + CONTACT.linkedin}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2'
            >
              <Linkedin className='size-4' /> LinkedIn
            </a>
          </Button>
          <Button asChild className='rounded-full'>
            <a href={CONTACT.resumeUrl} target='_blank' rel='noreferrer' download className='flex items-center gap-2'>
              <Download className='size-4' /> Resume
            </a>
          </Button>
        </div>
        <div className='text-muted-foreground mt-5 flex flex-wrap items-center justify-center gap-3 text-sm'>
          <span className='inline-flex items-center gap-1'>
            <MapPin className='size-4' /> {CONTACT.location}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
