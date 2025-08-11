
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutMeSection } from '@/components/sections/AboutMeSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactFormSection'; // Corrected import path
import { AnimatedSection } from '@/components/AnimatedSection';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection>
        <AboutMeSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection>
        <AchievementsSection />
      </AnimatedSection>

      <AnimatedSection>
        <EducationSection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </div>
  );
}
