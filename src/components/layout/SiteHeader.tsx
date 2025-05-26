import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react'; // Using Sparkles as a generic logo icon

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Persona Canvas
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:space-x-6">
          {/* Placeholder for future nav items if needed */}
          {/* <Link href="#projects" legacyBehavior passHref><Button variant="link" className="text-foreground/70 hover:text-foreground">Projects</Button></Link> */}
          {/* <Link href="#contact" legacyBehavior passHref><Button variant="link" className="text-foreground/70 hover:text-foreground">Contact</Button></Link> */}
        </nav>
        <div className="flex items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
