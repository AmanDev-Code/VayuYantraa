
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Play, ArrowRight, Download } from 'lucide-react';
import { toast } from "./ui/sonner";

export function CTASection() {
  const handleComingSoonClick = () => {
    toast.info("Coming Soon!", {
      description: "This feature will be available soon.",
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Operations?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join the aerial revolution with Vayuyantra's autonomous drone solutions and transform how your business operates.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" onClick={handleComingSoonClick}>
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                Contact Sales
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Button>
            </Link>
            <Button size="lg" variant="ghost" className="gap-2" onClick={handleComingSoonClick}>
              Download Brochure
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
