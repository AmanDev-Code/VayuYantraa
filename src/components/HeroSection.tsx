
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Play, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>

        {/* Radial gradients */}
        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--primary)_160%)]"></div>
        
        {/* Animated gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={cn("transition-all duration-1000", isLoaded ? "opacity-100" : "opacity-0 translate-y-8")}>
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs md:text-sm font-medium rounded-full border bg-background/50 text-foreground/90 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Next Generation Drone Technology
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-6">
              <span className="text-gradient">VAYUYANTRA</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-center text-foreground/90 font-light mb-6">
              Revolutionizing Industries from Above
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-foreground/80 text-center">
              Harness the power of autonomous flight to boost efficiency, safety & sustainability
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-lg px-8 animate-pulse-subtle">
                Request a Demo
              </Button>
              
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg px-8 flex items-center gap-2 bg-background/50 backdrop-blur-sm">
                    <Play className="h-4 w-4" />
                    Watch Video
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[825px] p-0 bg-black">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full" 
                      src="https://www.youtube.com/embed/aQd41nbQM-U?autoplay=1" 
                      title="Vayuyantra Drone Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* 3D Drone Animation */}
          <div className="mt-20 relative h-[400px]">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="drone-scene">
                <div className="drone">
                  <div className="drone-frame"></div>
                  <div className="drone-camera"></div>
                  <div className="propeller propeller-1">
                    <div className="propeller-blade"></div>
                    <div className="propeller-blade"></div>
                  </div>
                  <div className="propeller propeller-2">
                    <div className="propeller-blade"></div>
                    <div className="propeller-blade"></div>
                  </div>
                  <div className="propeller propeller-3">
                    <div className="propeller-blade"></div>
                    <div className="propeller-blade"></div>
                  </div>
                  <div className="propeller propeller-4">
                    <div className="propeller-blade"></div>
                    <div className="propeller-blade"></div>
                  </div>
                  <div className="drone-lights left"></div>
                  <div className="drone-lights right"></div>
                  <div className="drone-shadow"></div>
                </div>
                <div className="scan-line"></div>
                <div className="terrain"></div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto transition-all duration-1000", 
            isLoaded ? "opacity-100" : "opacity-0"
          )}>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground">Minutes Flight Time</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-2">2.5kg</div>
              <div className="text-sm text-muted-foreground">Payload Capacity</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-accent mb-2">72km/h</div>
              <div className="text-sm text-muted-foreground">Maximum Speed</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">7km</div>
              <div className="text-sm text-muted-foreground">Control Range</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
