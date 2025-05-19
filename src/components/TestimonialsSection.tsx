import AnimatedTestimonialsDemo from './animated-testimonials-demo';

// // Stats data separate from testimonials for better rendering performance
// const statsData = [
//   { value: "40%", label: "Audit time reduction" },
//   { value: "18%", label: "Crop yield increase" },
//   { value: "35%", label: "Cost reduction" },
//   { value: "75%", label: "Faster inspections" }
// ];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Success Stories</h2>
          <p className="text-muted-foreground">
            How our drone technology transforms businesses
          </p>
        </div>
        
        {/* Use our optimized animated testimonials component */}
        <AnimatedTestimonialsDemo />
        
        {/* Stats displays using CSS Grid for performance
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-muted/20 p-3 rounded-lg text-center">
              <div className="text-xl md:text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
