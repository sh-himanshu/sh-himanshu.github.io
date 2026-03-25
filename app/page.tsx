import { AboutSection } from "@/components/sections/about";
import { Background } from "@/components/sections/background";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { PAGE_GRID_CLASS, PageSection } from "@/components/ui/page-section";
import { RevealContainer } from "@/components/ui/reveal-container";

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#050505] text-zinc-200 selection:bg-[#0078d4]/40 selection:text-white">
            <Background />
            <Navbar />

            <main className="relative z-10 mx-auto w-full max-w-384 px-(--page-gutter) pt-[calc(var(--nav-offset)+2.5rem)] pb-24 sm:pb-32">
                <RevealContainer>
                    <section
                        id="hero"
                        aria-labelledby="hero-heading"
                        className="relative isolate scroll-mt-32"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-[-0.75rem] top-[-3.5rem] bottom-[-1.5rem] -z-10 overflow-hidden rounded-[2rem] sm:inset-x-[-1.5rem] sm:top-[-4.5rem] sm:rounded-[2.5rem]"
                        >
                            <div className="hero-pattern-surface absolute inset-0" />
                            <div className="hero-pattern-mesh absolute inset-0" />
                            <div className="hero-pattern-rings absolute inset-0" />
                            <div className="hero-pattern-beam absolute inset-0 motion-reduce:hidden" />
                        </div>

                        <h1 id="hero-heading" className="sr-only">
                            Home
                        </h1>
                        <div className={`${PAGE_GRID_CLASS} relative`}>
                            <HeroSection />
                        </div>
                    </section>

                    <PageSection id="about" title="01. About">
                        <AboutSection />
                    </PageSection>

                    <PageSection id="skills" title="02. Technical Arsenal">
                        <SkillsSection />
                    </PageSection>

                    <PageSection id="projects" title="03. Selected Works">
                        <ProjectsSection />
                    </PageSection>

                    <PageSection id="experience" title="04. Experience">
                        <ExperienceSection />
                    </PageSection>

                    <PageSection id="contact" title="05. Connect">
                        <ContactSection />
                    </PageSection>
                </RevealContainer>
            </main>

            <Footer />
        </div>
    );
}
