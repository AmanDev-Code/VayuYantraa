
import { useState, useCallback, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  stat?: string;
  statLabel?: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi Sharma",
    position: "Director of Operations",
    company: "GlobalLogistics",
    testimonial: "VAYUYANTRA's autonomous drones have transformed our warehouse operations. The precision and speed with which they conduct inventory checks has reduced our audit time by 40%, allowing us to reallocate staff to more strategic roles.",
    stat: "40%",
    statLabel: "reduction in audit time",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Head of Agriculture Innovation",
    company: "AgriTechCo",
    testimonial: "The precision agriculture capabilities of VAYUYANTRA's drones have been a game-changer for our farming operations. We've seen an 18% increase in crop yield through optimized spraying and better resource allocation based on their detailed aerial maps.",
    stat: "18%",
    statLabel: "increase in crop yield",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Amir Khan",
    position: "Chief Technology Officer",
    company: "SkyClean Inc.",
    testimonial: "Implementing VAYUYANTRA's high-rise cleaning drones has reduced our operational costs by 35% while improving safety metrics across the board. Their LiDAR technology ensures precise navigation even in challenging weather conditions.",
    stat: "35%",
    statLabel: "reduction in operational costs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "Infrastructure Manager",
    company: "CityInspect",
    testimonial: "Our municipal bridge inspections used to take weeks and pose significant safety risks. With VAYUYANTRA's inspection drones, we complete comprehensive assessments in days, not weeks, detecting issues we would have missed with traditional methods.",
    stat: "75%",
    statLabel: "faster inspection times",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const handlePrevious = useCallback(() => {
    setActiveIndex(current => (current === 0 ? testimonials.length - 1 : current - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex(current => (current === testimonials.length - 1 ? 0 : current + 1));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg">
            See how our drone technology is transforming businesses across industries
          </p>
        </div>
        
        <div 
          ref={testimonialRef}
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <Card className="border-none bg-gradient-to-b from-muted/50 to-muted shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            ))}
                          </div>
                          
                          <blockquote className="text-lg font-medium mb-6">
                            "{testimonial.testimonial}"
                          </blockquote>
                          
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <AspectRatio ratio={1} className="bg-muted">
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.name} 
                                  className="object-cover"
                                  loading="lazy"
                                />
                              </AspectRatio>
                            </div>
                            <div>
                              <div className="font-semibold">{testimonial.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {testimonial.position}, {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-6 md:p-8 flex items-center justify-center">
                        {testimonial.stat && (
                          <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                              {testimonial.stat}
                            </div>
                            <div className="text-sm md:text-base font-medium uppercase">
                              {testimonial.statLabel}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleIndicatorClick(i)}
                className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? 'bg-primary' : 'bg-primary/30'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 border shadow-sm rounded-full p-2 hover:bg-background"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 border shadow-sm rounded-full p-2 hover:bg-background"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
