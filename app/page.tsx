import { AboutSection } from "@/components/sections/about";
import { Background } from "@/components/sections/background";
import { ContactSection } from "@/components/sections/contact";
import {
    ExperienceCards,
    ExperienceToggle,
} from "@/components/sections/experience";
import { ExperienceExpandedProvider } from "@/components/sections/experience-context";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { ProjectsSection } from "@/components/sections/projects";

import { PAGE_GRID_CLASS, PageSection } from "@/components/ui/page-section";
import { RevealContainer } from "@/components/ui/reveal-container";

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden text-zinc-800 selection:bg-[#0078d4]/40 selection:text-white dark:text-zinc-200">
            <Background />

            <Navbar />

            <main className="relative z-10 mx-auto w-full max-w-6xl px-(--page-gutter) pt-[calc(var(--nav-offset)+2.5rem)] pb-24 sm:pb-32">
                <RevealContainer>
                    <section
                        id="hero"
                        aria-labelledby="hero-heading"
                        className="relative isolate scroll-mt-32"
                    >
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

                    <PageSection
                        id="projects"
                        title="02. Selected Works"
                        gridClassName="!grid-cols-1 !auto-rows-auto md:!grid-cols-2 lg:!grid-cols-3"
                    >
                        <ProjectsSection />
                    </PageSection>

                    <ExperienceExpandedProvider>
                        <PageSection id="experience" title="03. Experience">
                            <ExperienceCards />
                        </PageSection>
                        <ExperienceToggle />
                    </ExperienceExpandedProvider>

                    <PageSection id="contact" title="04. Connect">
                        <ContactSection />
                    </PageSection>
                </RevealContainer>
            </main>

            <Footer />
        </div>
    );
}
