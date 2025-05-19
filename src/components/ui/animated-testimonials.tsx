"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, memo, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Image fallback function for when images fail to load
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase();
};

// Simple arrow icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Memoized testimonial item to prevent unnecessary re-renders
const TestimonialItem = memo(({ 
  testimonial, 
  isActive 
}: { 
  testimonial: Testimonial; 
  isActive: boolean;
}) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className={`absolute inset-0 transition-all duration-500 origin-bottom transform ${
      isActive 
        ? "opacity-100 scale-100 z-30" 
        : "opacity-0 scale-95 z-10"
    }`}>
      {!imageError ? (
        <img
          src={testimonial.src}
          alt={testimonial.name}
          width={500}
          height={500}
          loading="lazy"
          draggable={false}
          onError={() => setImageError(true)}
          className="h-full w-full rounded-3xl object-cover object-center shadow-md border border-border"
        />
      ) : (
        <div className="h-full w-full rounded-3xl flex items-center justify-center bg-muted border border-border shadow-md text-4xl font-semibold text-muted-foreground">
          {getInitials(testimonial.name)}
        </div>
      )}
    </div>
  );
});

TestimonialItem.displayName = 'TestimonialItem';

// Memoized content to prevent re-renders
const TestimonialContent = memo(({ 
  testimonial 
}: { 
  testimonial: Testimonial;
}) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-2xl font-bold text-foreground">
        {testimonial.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {testimonial.designation}
      </p>
      <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
        {testimonial.quote}
      </p>
    </div>
  );
});

TestimonialContent.displayName = 'TestimonialContent';

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = useCallback((index: number) => {
    return index === active;
  }, [active]);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  return (
    <div className="mx-auto max-w-sm px-4 py-16 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem 
                key={testimonial.src} 
                testimonial={testimonial} 
                isActive={isActive(index)} 
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <TestimonialContent testimonial={testimonials[active]} />
          
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
              type="button"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
              type="button"
            >
              <ArrowRightIcon />
            </button>
            
            {/* Dots for navigation */}
            <div className="flex items-center ml-2 space-x-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === active ? "true" : "false"}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === active 
                      ? "bg-primary w-3" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 