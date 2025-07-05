import { SOCIAL_IDS } from '@/lib/constants';
import { SiGithub, SiLeetcode, SiLinkedin, SiX } from 'react-icons/si';

const Socials = () => {
  return (
    <div className='bg-secondary my-auto space-x-4 divide-x-2 divide-neutral-300 rounded-full border px-6 py-4 shadow-md dark:divide-neutral-700'>
      <a href={SOCIAL_IDS.linkedin}>
        <SiLinkedin className='mr-4 inline-block h-6 w-6 text-[#0A66C2]' />
      </a>
      <a href={SOCIAL_IDS.github}>
        <SiGithub className='mr-4 inline-block h-6 w-6 text-[#181717] dark:text-white' />
      </a>
      <a href={SOCIAL_IDS.x}>
        <SiX className='mr-4 inline-block h-6 w-6 text-black dark:text-white' />
      </a>
      <a href={SOCIAL_IDS.leetcode}>
        <SiLeetcode className='inline-block h-6 w-6 text-black dark:text-white' />
      </a>
    </div>
  );
};

export default Socials;
