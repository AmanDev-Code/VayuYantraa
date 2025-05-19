import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ChevronRight, Home, Layers, Workflow, MessageSquare, Phone, ArrowRight } from 'lucide-react';
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleComingSoonClick = () => {
    toast.info("Coming Soon!", {
      description: "This feature will be available soon.",
    });
  };

  return (
    <>
      {/* Mobile menu overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-[9999] md:hidden",
          isMobileMenuOpen ? "opacity-90" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div 
        className={cn(
          "fixed top-0 bottom-0 right-0 w-[70%] bg-background text-foreground shadow-2xl z-[10000] transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="h-20 border-b border-border flex items-center justify-between px-6">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">VY</span>
              </div>
              <span className="font-semibold text-foreground ml-3">VAYUYANTRA</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full text-foreground/80 hover:bg-foreground/5 hover:text-foreground transition"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Menu items */}
          <div className="p-6 flex flex-col h-[calc(100%-5rem)]">
            <div className="flex flex-col space-y-4 text-left">
              <a 
                href="#features" 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-base font-medium text-foreground">Features</span>
                </div>
                <ChevronRight className="h-4 w-4 text-foreground/40" />
              </a>
              <a 
                href="#solutions" 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                    <Workflow className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-base font-medium text-foreground">Solutions</span>
                </div>
                <ChevronRight className="h-4 w-4 text-foreground/40" />
              </a>
              <a 
                href="#process" 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
                    <Workflow className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="text-base font-medium text-foreground">How it Works</span>
                </div>
                <ChevronRight className="h-4 w-4 text-foreground/40" />
              </a>
              <a 
                href="#testimonials" 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-yellow-500" />
                  </div>
                  <span className="text-base font-medium text-foreground">Success Stories</span>
                </div>
                <ChevronRight className="h-4 w-4 text-foreground/40" />
              </a>
            </div>
            
            <div className="mt-auto space-y-4">
              <div className="rounded-xl bg-muted/80 p-4">
                <p className="text-sm text-muted-foreground mb-3">Ready to explore drone solutions?</p>
                <Link 
                  to="/contact" 
                  className="flex items-center text-primary font-medium text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact us today
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            
              <Button 
                className="w-full justify-center rounded-lg text-base py-6" 
                onClick={() => {
                  handleComingSoonClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          isScrolled ? 'backdrop-blur-lg bg-background/80 dark:bg-background/70 shadow-md' : 'bg-transparent'
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

            {/* Mobile navigation button */}
            <div className="flex md:hidden items-center">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="ml-2 p-2 rounded-md text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition"
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
        </div>
      </header>
    </>
  );
}
