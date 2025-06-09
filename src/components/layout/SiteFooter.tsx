import { Linkedin, Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const email = "moses.chinnappan.work@gmail.com"; 
  const linkedinUrl = "https://www.linkedin.com/in/moses-chinnappan-b96640219";
  const githubUrl = "https://github.com/mosesC29";


  return (
    <footer className="py-8 md:px-8 md:py-6 border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-6 md:h-24 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Moses Chinnappan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS, and ShadCN UI.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex space-x-3">
            <a href={`mailto:${email}`} aria-label="Email Moses Chinnappan">
              <Button variant="ghost" size="icon" className="transform transition-transform duration-200 hover:scale-125">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Button>
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Moses Chinnappan's LinkedIn Profile">
              <Button variant="ghost" size="icon" className="transform transition-transform duration-200 hover:scale-125">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Button>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Moses Chinnappan's GitHub Profile">
              <Button variant="ghost" size="icon" className="transform transition-transform duration-200 hover:scale-125">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Button>
            </a>
          </div>
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-primary hover:underline transform transition-transform duration-200 hover:scale-105"
          >
            Follow me on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
