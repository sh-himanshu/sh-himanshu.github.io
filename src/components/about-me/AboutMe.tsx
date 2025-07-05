import Avatar from '@/asset/images/avatar.png';
import { PERSONAL_DETAILS, WORK } from '@/lib/constants';
import { House } from 'lucide-react';
import Image from 'next/image';
import OpenToWork from './OpenToWork';
import Socials from './Socials';

const AboutMe = () => {
  return (
    <div className='flex min-h-[calc(100vh-4rem)] flex-col items-center pt-16'>
      <Image
        className='pointer-events-none mt-16 h-42 w-42 rounded-full'
        src={Avatar}
        alt='profile picture'
      />
      {WORK.openToWork && <OpenToWork />}
      <h3 className='mt-6 scroll-m-20 text-3xl font-semibold tracking-tight'>
        Hey, I'm {PERSONAL_DETAILS.firstName}.
      </h3>
      <h4 className='mt-0 scroll-m-20 text-2xl tracking-tight text-neutral-700 dark:text-neutral-400'>
        I'm a {WORK.jobTitle}.
      </h4>
      <a href={`https://www.google.com/maps/place/${PERSONAL_DETAILS.address}`}>
        <span className='mt-2 flex items-center justify-center space-x-1.5'>
          <House className='h-5 w-5' />
          <span>{PERSONAL_DETAILS.address}</span>
        </span>
      </a>
      <Socials />
    </div>
  );
};

export default AboutMe;
