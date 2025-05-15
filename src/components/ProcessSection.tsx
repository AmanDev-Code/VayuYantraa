
import { CheckIcon } from "lucide-react";

const steps = [
  {
    title: "Consult & Plan",
    description: "We begin with a comprehensive needs assessment, analyzing your operational requirements and challenges to design a tailored drone solution.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Deploy & Train",
    description: "Our team handles the full deployment process, integrating the drone system with your operations and training your staff on its use.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Monitor & Optimize",
    description: "We provide ongoing support and performance analytics, continuously optimizing your drone operations for maximum efficiency and ROI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures a smooth transition to autonomous drone operations
            with minimal disruption to your existing workflow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline for desktop */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/60 via-secondary/60 to-accent/60"></div>

            {steps.map((step, index) => (
              <div key={index} className={`flex items-center mb-20 last:mb-0 ${index % 2 === 0 ? 'justify-start' : 'flex-row-reverse justify-start'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className={`glass-card p-6 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <div className="mb-3">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-background bg-primary/90 flex items-center justify-center z-10">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Vertical timeline for mobile */}
          <div className="md:hidden relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/60 via-secondary/60 to-accent/60"></div>

            {steps.map((step, index) => (
              <div key={index} className="ml-12 mb-10 last:mb-0 relative">
                <div className="absolute left-[-2.5rem] w-8 h-8 rounded-full border-4 border-background bg-primary/90 flex items-center justify-center z-10">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>

                <div className="glass-card p-6">
                  <div className="mb-3">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
