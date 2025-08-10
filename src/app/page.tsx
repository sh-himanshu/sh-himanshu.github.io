'use client';

import { ModeToggle } from '@/components/dark-mode-toggle';
import FloatingTechCloud from '@/components/floating-tech';
import AboutSection from '@/components/sections/about';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT, EXPERIENCE, NAV_ITEMS, PROJECTS, WORK_START_DATE } from '@/lib/site-data';
import { computeYearsMonths } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
import {
  LuArrowUp as ArrowUp,
  LuX as CloseIcon,
  LuDownload as Download,
  LuGithub as Github,
  LuGlobe as Globe,
  LuLinkedin as Linkedin,
  LuMapPin as MapPin,
  LuMenu as Menu,
} from 'react-icons/lu';

export default function Home() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);
  // Use UTC year to avoid SSR/client timezone drift
  const year = new Date().getUTCFullYear();
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const highlightKeywords = (text: string) => {
    const terms = ['design system', 'performance', 'SSR', 'GraphQL', 'CI', 'full-stack', 'frontend'];
    const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')).join('|')})`, 'gi');
    return text.split(pattern).map((part, i) =>
      terms.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
        <span key={i} className='text-primary font-semibold'>
          {part}
        </span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  return (
    <div className='min-h-svh scroll-smooth'>
      {/* Top nav */}
      <header className='supports-[backdrop-filter]:bg-background/50 fixed inset-x-0 top-0 z-50 border-b backdrop-blur'>
        <nav className='relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4.5'>
          {/* Mobile: left edge dark mode toggle */}
          <div className='md:hidden'>
            <ModeToggle />
          </div>

          {/* Brand: centered on mobile, normal flow on md+ */}
          <div className='absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0'>
            <button
              onClick={() => handleScroll('about')}
              className='font-semibold tracking-tight transition-opacity hover:opacity-80'
              aria-label='Go to About'
            >
              <span className='font-brand tracking-widest md:text-xl'>{CONTACT.name}</span>
            </button>
          </div>

          <div className='hidden items-center gap-1 md:flex'>
            {NAV_ITEMS.map((n) => (
              <Button
                key={n.id}
                variant='ghost'
                onClick={() => handleScroll(n.id)}
                className='text-sm transition-transform hover:scale-[1.03]'
              >
                {n.label}
              </Button>
            ))}
            <Separator orientation='vertical' className='mx-2 h-5' />
            <ModeToggle />
          </div>

          {/* Mobile nav: right edge menu button + full-width dropdown */}
          <div className='md:hidden'>
            <div className='flex items-center gap-2'>
              <DropdownMenu open={mobileOpen} onOpenChange={setMobileOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline' size='icon' aria-label='Toggle menu' className='relative overflow-hidden'>
                    <motion.span
                      key={mobileOpen ? 'close' : 'menu'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                      className='grid place-items-center'
                    >
                      {mobileOpen ? <CloseIcon className='size-4' /> : <Menu className='size-4' />}
                    </motion.span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align='end'
                  className='w-screen max-w-none rounded-none border-0 px-4 py-3 sm:max-w-sm sm:rounded-md sm:border'
                >
                  <div className='grid gap-1.5'>
                    {NAV_ITEMS.map((n) => (
                      <DropdownMenuItem
                        key={n.id}
                        onClick={() => {
                          setMobileOpen(false);
                          handleScroll(n.id);
                        }}
                        className='py-2 text-base'
                      >
                        {n.label}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero / About */}
      <AboutSection />

      {/* Tech Stack */}
      <section id='stack' className='mx-auto max-w-6xl px-4 py-16 md:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-primary font-brand text-2xl font-semibold md:text-3xl'>Tech Stack</h2>
          <p className='text-muted-foreground'>Tools I enjoy using</p>
        </motion.div>
        <div className='relative mb-8 h-[360px] sm:h-[420px]'>
          <FloatingTechCloud className='absolute inset-0' />
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-primary text-2xl font-semibold md:text-3xl'>Tech Stack</h2>
          <p className='text-muted-foreground'>Tools I enjoy using</p>
          <div className='mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            {TECH_STACK.map((name) => {
              const iconMap: Record<string, React.ElementType> = {
                TypeScript: SiTypescript,
                React: SiReact,
                'Next.js': SiNextdotjs,
                Tailwind: SiTailwindcss,
                'Node.js': SiNodedotjs,
                PostgreSQL: SiPostgresql,
                AWS: SiAmazonwebservices,
                Docker: SiDocker,
              };
              const Icon = iconMap[name] ?? SiReact;
              return (
                <Card key={name} className='group transition-transform hover:scale-[1.02]'>
                  <CardHeader>
                    <div className='flex items-center gap-3'>
                      <Icon
                        className='text-primary h-6 w-6 transition-transform duration-200 group-hover:scale-110'
                        aria-hidden
                      />
                      <CardTitle className='text-base leading-none'>{name}</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </motion.div> */}
      </section>

      {/* Experience */}
      <section id='experience' className='mx-auto max-w-6xl px-4 py-16 md:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-primary font-brand text-2xl font-semibold md:text-3xl'>Work Experience</h2>
          <p className='text-muted-foreground'>Over {computeYearsMonths(WORK_START_DATE)} Years of Hands-On Expertise</p>
          <div className='mt-6 grid gap-4'>
            {EXPERIENCE.map((e) => (
              <Card key={e.company} className='border-l-primary border-l-4'>
                <CardHeader className='flex flex-row items-start gap-4'>
                  <img src={e.logo} alt='logo' className='bg-card h-12 w-12 rounded-md border' />
                  <div>
                    <CardTitle>{e.role}</CardTitle>
                    <CardDescription className='mt-1'>
                      {e.company} • {e.dates} • {'location' in e ? e.location : ''}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div
                    className='prose prose-neutral dark:prose-invert text-muted-foreground text-sm'
                    dangerouslySetInnerHTML={{ __html: e.summary }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id='projects' className='mx-auto max-w-6xl px-4 py-16 md:pb-32'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex items-end justify-between gap-4'>
            <div>
              <h2 className='text-primary font-brand text-2xl font-semibold md:text-3xl'>Projects</h2>
              <p className='text-muted-foreground'>Things I’ve Made</p>
            </div>
            <Tabs defaultValue='all' className='hidden sm:flex'>
              <TabsList>
                <TabsTrigger value='all'>All</TabsTrigger>
                <TabsTrigger value='web'>Web</TabsTrigger>
                <TabsTrigger value='ui'>UI</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {(PROJECTS.length > 4 ? PROJECTS.slice(0, 4) : PROJECTS).map((p) => (
              <motion.div key={p.title} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <Card className='overflow-hidden'>
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='bg-muted/30 aspect-video rounded-lg border p-6'>
                      <img src={p.image} alt='preview' className='mx-auto h-full w-auto object-contain' />
                    </div>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {p.tags.map((t) => (
                        <Badge variant='outline' key={t}>
                          #{t}
                        </Badge>
                      ))}
                    </div>
                    <div className='mt-4 flex items-center gap-2'>
                      <Button asChild size='sm' variant='outline'>
                        <a href={p.github} target='_blank' rel='noreferrer' className='flex items-center gap-2'>
                          <Github className='size-4' /> Code
                        </a>
                      </Button>
                      <Button asChild size='sm'>
                        <a href={p.demo} target='_blank' rel='noreferrer' className='flex items-center gap-2'>
                          <Globe className='size-4' /> Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {PROJECTS.length > 4 && !showMore && (
            <div className='mt-8 flex justify-center'>
              <Button onClick={() => setShowMore(true)}>View More</Button>
            </div>
          )}
          {PROJECTS.length > 4 && showMore && (
            <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2'>
              {PROJECTS.slice(4).map((p) => (
                <motion.div key={p.title} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <Card className='overflow-hidden'>
                    <CardHeader>
                      <CardTitle>{p.title}</CardTitle>
                      <CardDescription>{p.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='bg-muted/30 aspect-video rounded-lg border p-6'>
                        <img src={p.image} alt='preview' className='mx-auto h-full w-auto object-contain' />
                      </div>
                      <div className='mt-4 flex flex-wrap gap-2'>
                        {p.tags.map((t) => (
                          <Badge variant='outline' key={t}>
                            #{t}
                          </Badge>
                        ))}
                      </div>
                      <div className='mt-4 flex items-center gap-2'>
                        <Button asChild size='sm' variant='outline'>
                          <a href={p.github} target='_blank' rel='noreferrer' className='flex items-center gap-2'>
                            <Github className='size-4' /> Code
                          </a>
                        </Button>
                        <Button asChild size='sm'>
                          <a href={p.demo} target='_blank' rel='noreferrer' className='flex items-center gap-2'>
                            <Globe className='size-4' /> Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Contact Me (moved last) */}
      <section id='contact' className='mx-auto max-w-6xl px-4 pt-16 pb-28 md:pb-36'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-primary font-brand text-2xl font-semibold md:text-3xl'>Contact Me</h2>
          <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
                <CardDescription>I’ll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className='grid gap-4'>
                  <div className='grid gap-1'>
                    <label htmlFor='name' className='text-sm'>
                      Name
                    </label>
                    <Input id='name' name='name' placeholder='Your name' />
                  </div>
                  <div className='grid gap-1'>
                    <label htmlFor='email' className='text-sm'>
                      Email
                    </label>
                    <Input id='email' type='email' name='email' placeholder='you@example.com' />
                  </div>
                  <div className='grid gap-1'>
                    <label htmlFor='message' className='text-sm'>
                      Message
                    </label>
                    <Textarea id='message' name='message' rows={5} placeholder='How can I help?' />
                  </div>
                  <div>
                    <Button type='submit' className='w-full sm:w-auto'>
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Let's get in touch</CardTitle>
                <CardDescription>Prefer email or socials?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='grid gap-3 text-sm'>
                  <li className='flex items-center gap-2'>
                    <span className='font-medium'>Email:</span>{' '}
                    <a href={`mailto:${CONTACT.email}`} className='underline underline-offset-4'>
                      {CONTACT.email}
                    </a>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Github className='size-4' />{' '}
                    <a
                      href={`https://github.com/${CONTACT.github}`}
                      target='_blank'
                      rel='noreferrer'
                      className='underline underline-offset-4'
                    >
                      github.com/{CONTACT.github}
                    </a>
                  </li>
                  <li className='flex items-center gap-2'>
                    <Linkedin className='size-4' />{' '}
                    <a
                      href={'https://www.linkedin.com/in/' + CONTACT.linkedin}
                      target='_blank'
                      rel='noreferrer'
                      className='underline underline-offset-4'
                    >
                      linkedin.com/in/{CONTACT.linkedin}
                    </a>
                  </li>
                  <li className='flex items-center gap-2'>
                    <MapPin className='size-4' /> {CONTACT.location}
                  </li>
                  <li className='flex items-center gap-2'>
                    <Download className='size-4' />{' '}
                    <a href={CONTACT.resumeUrl} download className='underline underline-offset-4'>
                      Download resume
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
      {/* Scroll to top */}
      {showTop && (
        <Button
          aria-label='Scroll to top'
          size='icon'
          className='fixed right-6 bottom-6 z-50 rounded-full'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp />
        </Button>
      )}

      {/* Footer */}
      <footer className='border-t'>
        <div className='text-muted-foreground mx-auto max-w-6xl px-4 py-6 text-center text-sm'>
          © {year} {CONTACT.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
