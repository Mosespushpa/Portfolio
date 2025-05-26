
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sparkles, Home, Lightbulb, Briefcase, Award, GraduationCap, Mail } from 'lucide-react'; // Added Award, GraduationCap

const navItems = [
  { href: '/#hero', label: 'Home', icon: <Home className="h-4 w-4" /> },
  { href: '/#projects', label: 'Projects', icon: <Briefcase className="h-4 w-4" /> },
  { href: '/#skills', label: 'Skills', icon: <Lightbulb className="h-4 w-4" /> },
  { href: '/#achievements', label: 'Achievements', icon: <Award className="h-4 w-4" /> },
  { href: '/#education', label: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
  { href: '/#contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Portfolio
          </span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} legacyBehavior passHref>
              <Button variant="ghost" className="text-sm font-medium text-foreground/70 hover:text-foreground px-3 py-2 flex items-center gap-2">
                {/* {item.icon} // Icons are present but commented out for a cleaner look, can be re-enabled */}
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2 md:flex-none">
          <ThemeToggle />
          {/* Mobile Menu Trigger (optional, can be added later) */}
          {/* <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </header>
  );
}
