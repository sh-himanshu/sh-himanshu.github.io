'use client';

import BirdeyeLogo from '@/asset/images/birdeye-logo.jpeg';
import OorjanLogo from '@/asset/images/oorjan-logo.jpeg';
import RaftLabsLogo from '@/asset/images/raftlabs-logo.jpeg';
import { EMPLOYMENT_TYPE } from '@/lib/constants';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './SectionHeading';

const COMPANIES = [
  {
    name: 'Birdeye',
    role: 'Software Developer Engineer',
    employmentType: EMPLOYMENT_TYPE.fullTime,
    location: 'Remote',
    startDate: 'Jul 2024',
    endDate: '',
    isCurrent: true,
    logo: BirdeyeLogo,
  },
  {
    name: 'Oorjan',
    role: 'Software Developer Engineer',
    employmentType: EMPLOYMENT_TYPE.fullTime,
    location: 'Mumbai, Maharashtra',
    startDate: 'Sep 2022',
    endDate: 'Jul 2024',
    isCurrent: false,
    logo: OorjanLogo,
  },
  {
    name: 'RaftLabs',
    role: 'Software Developer Engineer',
    employmentType: EMPLOYMENT_TYPE.intern,
    location: 'Remote',
    startDate: 'Jan 2022',
    endDate: 'May 2022',
    isCurrent: false,
    logo: RaftLabsLogo,
  },
];

const WorkExperience = () => {
  return (
    <div className='mt-20'>
      <SectionHeading value='Work Experience' />
      <VerticalTimeline lineColor='var(--muted-foreground)'>
        {COMPANIES.map((company, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work'
            iconStyle={{
              boxShadow: '0 0 0 4px var(--muted-foreground)',
            }}
            contentStyle={{
              background: 'var(--secondary)',
              color: 'var(--card-foreground)',
              borderRadius: '1rem',
            }}
            contentArrowStyle={{ borderRight: '7px solid  var(--secondary)' }}
            date={`${company.startDate} - ${company.isCurrent ? 'Present' : company.endDate}`}
            icon={
              <div className='flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white'>
                <Image className='h-7 w-7 lg:h-9 lg:w-9' src={company.logo} alt='birdeye.com' />
              </div>
            }
          >
            <h3 className='vertical-timeline-element-title text-lg font-bold'>{company.name}</h3>
            <h3 className='vertical-timeline-element-title'>{company.role}</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              {company.location} - {company.employmentType}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
