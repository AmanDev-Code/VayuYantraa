import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckIcon } from "lucide-react";

export default function TimelineDemo() {
  const data = [
    {
      title: "Consult & Plan",
      content: (
        <div className="glass-card p-6 md:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Consult & Plan</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            We begin with a comprehensive needs assessment, analyzing your operational requirements and challenges to design a tailored drone solution.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>Detailed operational analysis</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>Custom solution design</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>ROI and efficiency projections</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Deploy & Train",
      content: (
        <div className="glass-card p-6 md:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Deploy & Train</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Our team handles the full deployment process, integrating the drone system with your operations and training your staff on its use.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>On-site installation and setup</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>Comprehensive staff training</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>Software integration with existing systems</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Monitor & Optimize",
      content: (
        <div className="glass-card p-6 md:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Monitor & Optimize</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            We provide ongoing support and performance analytics, continuously optimizing your drone operations for maximum efficiency and ROI.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>Real-time performance monitoring</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>Quarterly optimization reviews</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>Ongoing technical support</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
} 