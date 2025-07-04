import Avatar from '@/asset/images/avatar.png';
import Image from 'next/image';
import { FaHouseChimney } from 'react-icons/fa6';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const AboutMe = () => {
  return (
    <div className='flex'>
      <Image className='rounded-full' src={Avatar} alt='profile picture' />

      <div>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Hey, I'm Himanshu. I'm a Frontend Software Developer.
        </h3>

        <div>
          <div>
            <FaHouseChimney className='inline-block' />
            <a href='https://www.google.com/maps/place/Gurugram'>Gurugram, India.</a>
          </div>
          <div className='mt-4 space-x-4'>
            <span>
              <SiLinkedin className='inline-block text-[#0A66C2]' /> LinkedIn
            </span>

            <span>
              <SiGithub className='inline-block text-[#181717] dark:text-white' /> GitHub
            </span>

            <span>
              <SiX className='inline-block text-black dark:text-white' /> Twitter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
