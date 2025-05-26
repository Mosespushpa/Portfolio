import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection'; // New import
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactFormSection } from '@/components/sections/ContactFormSection';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <SkillsSection /> {/* Replaced SummaryGeneratorSection */}
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <ContactFormSection />
      </AnimatedSection>
    </div>
  );
}
