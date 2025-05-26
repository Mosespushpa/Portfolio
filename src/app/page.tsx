import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SummaryGeneratorSection } from '@/components/sections/SummaryGeneratorSection';
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
        <SummaryGeneratorSection />
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
