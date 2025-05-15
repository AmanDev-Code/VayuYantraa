
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "./ui/sonner";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleComingSoonClick = () => {
    toast.info("Coming Soon!", {
      description: "This feature will be available soon.",
    });
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? 'backdrop-blur-lg bg-background/80 shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-xl md:text-2xl font-bold tracking-tight text-gradient">
              VAYUYANTRA
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/90 hover:text-primary transition-colors">Features</a>
            <a href="#solutions" className="text-foreground/90 hover:text-primary transition-colors">Solutions</a>
            <a href="#process" className="text-foreground/90 hover:text-primary transition-colors">How it Works</a>
            <a href="#testimonials" className="text-foreground/90 hover:text-primary transition-colors">Success Stories</a>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Link to="/contact">
                <Button size="sm" variant="outline" className="ml-2">
                  Contact
                </Button>
              </Link>
              <Button size="sm" className="ml-2" onClick={handleComingSoonClick}>
                Request Demo
              </Button>
            </div>
          </nav>

          {/* Mobile navigation */}
          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 p-2 rounded-md text-foreground/80 hover:bg-primary/10 hover:text-primary transition"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-card rounded-lg my-2">
              <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary">Features</a>
              <a href="#solutions" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary">Solutions</a>
              <a href="#process" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary">How it Works</a>
              <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary">Success Stories</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/contact">
                  <Button variant="outline" className="w-full">Contact</Button>
                </Link>
                <Button className="w-full" onClick={handleComingSoonClick}>Request Demo</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
