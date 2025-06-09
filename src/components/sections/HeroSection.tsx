
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  "Python", "Java","Machine Learning", "Cloud (AWS, GCP)", "Gen AI", "DevOps", 
  "React", "SQL", "NoSQL"
];

// Simple LeetCode SVG Icon Component
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M13.483 4.497l-2.4-1.483-7.566 4.666v7.42h2.048V9.917l5.518-3.399v10.8l-2.444-1.483-.99.611 3.434 2.113 3.434-2.113-.99-.611-2.444 1.483V6.199l5.518 3.399v6.583h2.048V9.083l-7.566-4.586z" />
  </svg>
);


export function HeroSection() {
  return (
    <section id="hero" className="container mx-auto py-20 md:py-32">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-primary">Moses Chinnappan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
          Turning data into decisions. Creating AI-driven solutions with impact. Aspiring Data Scientist & Full-Stack Developer | Innovating at the intersection of technology and purpose.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {skills.slice(0, 5).map(skill => ( 
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
            ))}
          </div>
          <div className="flex space-x-4 mb-8">
            <Button asChild size="lg">
              <a href="#contact" className="flex items-center">
                Get in Touch <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center"> 
                Download CV <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/moses-chinnappan-b96640219" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Button variant="ghost" size="icon"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" /></Button>
            </a>
            <a href="https://github.com/Mosespushpa" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Button variant="ghost" size="icon"><Github className="h-6 w-6 text-muted-foreground hover:text-primary" /></Button>
            </a>
            <a href="https://leetcode.com/u/Moses_Chinnappan/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile"> {/* Replace with your actual LeetCode URL */}
              <Button variant="ghost" size="icon"><LeetCodeIcon className="h-6 w-6 text-muted-foreground hover:text-primary" /></Button>
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
