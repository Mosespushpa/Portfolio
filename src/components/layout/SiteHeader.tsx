
'use client'; // Required for useState

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sparkles, Home, Lightbulb, Briefcase, Award, GraduationCap, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/#hero', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '/#projects', label: 'Projects', icon: <Briefcase className="h-5 w-5" /> },
  { href: '/#skills', label: 'Skills', icon: <Lightbulb className="h-5 w-5" /> },
  { href: '/#achievements', label: 'Achievements', icon: <Award className="h-5 w-5" /> },
  { href: '/#education', label: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
  { href: '/#contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-4 flex items-center space-x-2" onClick={closeMobileMenu}>
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Portfolio
          </span>
        </Link>
        
        {/* Desktop Navigation: Centered using mx-auto */}
        <nav className="hidden md:flex items-center justify-center space-x-1 mx-auto">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} legacyBehavior passHref>
              <Button variant="ghost" className="text-sm font-medium text-foreground/70 hover:text-foreground px-3 py-2">
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Right aligned items: Theme Toggle and Mobile Menu Trigger, pushed by ml-auto */}
        <div className="flex items-center space-x-2 ml-auto"> 
          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Appears below the header */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg border-t border-border/40">
          <div className="container py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link key={`${item.label}-mobile`} href={item.href} legacyBehavior passHref>
                  <a
                    onClick={closeMobileMenu} // Close menu on link click
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
