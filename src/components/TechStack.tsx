'use client';

import { useTheme } from 'next-themes';
import {
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { Card, CardContent } from './ui/card';
const TECH_STACK = [
  {
    label: 'React',
    icon: <SiReact />,
    brandColor: '#61DAFB',
    brandColorDark: '#21A1C4',
  },
  {
    label: 'Next.js',
    icon: <SiNextdotjs />,
    brandColor: '#000000',
    brandColorDark: '#ffffff',
  },
  {
    label: 'JavaScript',
    icon: <SiJavascript />,
    brandColor: '#F7DF1E',
    brandColorDark: '#FFD600',
  },
  {
    label: 'TypeScript',
    icon: <SiTypescript />,
    brandColor: '#3178C6',
    brandColorDark: '#1A5DA0',
  },
  {
    label: 'Tailwind',
    icon: <SiTailwindcss />,
    brandColor: '#06B6D4',
    brandColorDark: '#0E7490',
  },
  {
    label: 'Shadcn',
    icon: <SiShadcnui />,
    brandColor: '#000000',
    brandColorDark: '#ffffff',
  },
  {
    label: 'HTML',
    icon: <SiHtml5 />,
    brandColor: '#E34F26',
    brandColorDark: '#F06529',
  },
  {
    label: 'SCSS',
    icon: <SiSass />,
    brandColor: '#CC6699',
    brandColorDark: '#EB379B',
  },
  {
    label: 'Node.js',
    icon: <SiNodedotjs />,
    brandColor: '#339933',
    brandColorDark: '#5FAF5F',
  },
];

const TechStack = () => {
  const { theme } = useTheme();
  return (
    <div className='px-2'>
      <SectionHeading value='Tech Stack' />
      <div className='grid grid-cols-3 gap-3'>
        {TECH_STACK.map((item, index) => {
          return (
            <Card key={index}>
              <CardContent className='flex flex-col items-center justify-center'>
                <span
                  className='text-3xl'
                  style={{
                    color:
                      theme === 'dark' ? item.brandColorDark || item.brandColor : item.brandColor,
                  }}
                >
                  {item.icon}
                </span>
                <p className='mt-2.5 text-center text-sm font-medium'>{item.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
