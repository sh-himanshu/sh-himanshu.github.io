'use client';

import { ModeToggle } from '@/components/Theme/ModeToggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Zain } from 'next/font/google';
import { useState } from 'react';
import { Button } from './ui/button';

const ZainFont = Zain({
  weight: '400',
  variable: '--font-hs',
  style: 'normal',
});

const navbarButtons = ['Work Experience', 'Projects', 'Contact'];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='relative flex h-14 items-center justify-between border-b px-4'>
      <div>
        <span className='mr-4 hidden md:inline-block'>
          {navbarButtons.map((name, index) => (
            <Button key={index} variant='ghost'>
              {name}
            </Button>
          ))}
        </span>
        <ModeToggle />
      </div>
      <h4 className={`${ZainFont.variable} font-hs scroll-m-20 text-2xl tracking-tight`}>
        Himanshu Sharma
      </h4>

      <Button variant='ghost' size='icon' onClick={() => setSidebarOpen(true)}>
        <Menu className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all' />
      </Button>

      <div
        className={cn(
          'bg-sidebar fixed inset-0 z-50 flex h-screen w-screen flex-col transition-transform duration-300 ease-in-out',
          {
            '-translate-x-full': !sidebarOpen,
            'translate-x-0': sidebarOpen,
          }
        )}
      >
        <div className='flex h-14 w-full items-center justify-end px-4'>
          <X onClick={() => setSidebarOpen(false)} className='h-[1.2rem] w-[1.2rem]' />
        </div>
        <span className='mt-10 flex flex-col items-center space-y-4'>
          {navbarButtons.map((name, index) => (
            <Button className='text-lg' key={index} variant='link'>
              {name}
            </Button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
