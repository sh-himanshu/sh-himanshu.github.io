'use client';

import { PERSONAL_DETAILS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Zain } from 'next/font/google';
import { useState } from 'react';
import { ModeToggle } from './Theme/ModeToggle';
import { Button } from './ui/button';

const ZainFont = Zain({
  weight: '400',
  variable: '--font-hs',
  style: 'normal',
  subsets: ['latin'],
});

const navbarButtons = ['Work Experience', 'Projects', 'Contact'];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='fixed flex h-16 w-full items-center justify-between border-b px-6 shadow-lg backdrop-blur-md lg:flex-row-reverse'>
      <div>
        <span className='mr-4 hidden lg:inline-block'>
          {navbarButtons.map((name, index) => (
            <Button key={index} variant='ghost'>
              {name}
            </Button>
          ))}
        </span>
        <ModeToggle />
      </div>
      <h4 className={`${ZainFont.variable} font-hs scroll-m-20 text-3xl font-black tracking-tight`}>
        {PERSONAL_DETAILS.fullName}
      </h4>

      <Menu onClick={() => setSidebarOpen(true)} className='h-[1.65rem] w-[1.65rem] lg:hidden' />

      <div
        className={cn(
          'bg-sidebar fixed inset-0 z-50 flex h-screen w-screen flex-col pb-16 transition-transform duration-300 ease-in-out',
          {
            '-translate-x-full': !sidebarOpen,
            'translate-x-0': sidebarOpen,
          }
        )}
      >
        <div className='flex h-16 w-full items-center justify-end px-6'>
          <X onClick={() => setSidebarOpen(false)} className='h-[1.65rem] w-[1.65rem]' />
        </div>
        <span className='mt-20 flex flex-col items-center space-y-8'>
          {navbarButtons.map((name, index) => (
            <Button className='text-2xl' key={index} variant='link'>
              {name}
            </Button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
