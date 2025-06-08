
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  "Full Stack Development", "Cloud (AWS, GCP)", "Gen AI", "DevOps", 
  "React", "Next.js", "Node.js", "Python", "Java", "TypeScript", 
  "Docker", "Kubernetes", "Terraform", "SQL", "NoSQL"
];

export function HeroSection() {
  return (
    <section id="hero" className="container mx-auto py-20 md:py-32">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-primary">Moses Chinnappan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Full Stack Engineer specializing in building modern web applications and exploring the frontiers of Generative AI.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {skills.slice(0, 5).map(skill => ( // Show first 5 prominent skills
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
            ))}
          </div>
          <div className="flex space-x-4 mb-8">
            <Button asChild size="lg">
              <a href="#contact">
                Get in Touch <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"> {/* Placeholder for resume */}
                Download CV <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/moses-chinnappan-b96640219" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Button variant="ghost" size="icon"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" /></Button>
            </a>
            <a href="https://github.com/mosesC29" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"> {/* Placeholder GitHub */}
              <Button variant="ghost" size="icon"><Github className="h-6 w-6 text-muted-foreground hover:text-primary" /></Button>
            </a>
          </div>
        </div>
        <div className="relative group flex justify-center order-1 md:order-2">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image
            src="/profile-moses.jpg"
            alt="Moses Chinnappan"
            width={300}
            height={300}
            priority
            className="rounded-full shadow-2xl relative z-10 border-4 border-background"
            data-ai-hint="professional headshot"
          />
        </div>
      </div>
    </section>
  );
}
