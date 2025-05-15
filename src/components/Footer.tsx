
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from "./ui/sonner";

export function Footer() {
  const handleComingSoonClick = () => {
    toast.info("Coming Soon!", {
      description: "This feature will be available soon.",
    });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold text-gradient mb-4 inline-block">VAYUYANTRA</Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing industries with autonomous drone technology for logistics, agriculture, 
              infrastructure maintenance and high-rise inspection.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="p-2 rounded-full hover:bg-muted/30 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-muted/30 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full hover:bg-muted/30 text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Rapid Delivery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Precision Agriculture</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">High-Rise Inspection</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Custom R&D</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vayuyantra. All rights reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm">Privacy</Link>
              <Link to="/terms-conditions" className="text-muted-foreground hover:text-foreground text-sm">Terms</Link>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Cookies</a>
            </div>
            
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
