import { IconArrowRight } from "./IconsComponents";
import { motion } from "framer-motion";
import { IconBuilding, IconPlant, IconRoad, IconWind } from "./IconsComponents";

const caseStudies = [
  {
    id: "construction",
    title: "Modern Construction Monitoring",
    description: "How VAYUYANTRA's drones revolutionized progress tracking at a 35-story commercial tower development in Mumbai, reducing reporting time by 75%.",
    icon: <IconBuilding className="h-8 w-8 text-primary" />,
    image: "/case-studies/construction-site.svg",
    metrics: [
      "3D modeling accuracy within 2cm",
      "75% faster progress reporting",
      "12% reduction in material waste",
    ],
    link: "/case-studies/construction"
  },
  {
    id: "agriculture",
    title: "Precision Agriculture Solutions",
    description: "Helping a 1200-acre farm in Punjab optimize crop management using thermal and multispectral imaging, resulting in 18% yield increase.",
    icon: <IconPlant className="h-8 w-8 text-primary" />,
    image: "/case-studies/agriculture-field.svg",
    metrics: [
      "18% increase in crop yield",
      "22% reduction in pesticide usage",
      "Water usage optimization of 15%",
    ],
    link: "/case-studies/agriculture"
  },
  {
    id: "infrastructure",
    title: "Highway Bridge Inspection",
    description: "Modernizing inspection procedures for a 145-kilometer highway project, making hard-to-reach areas accessible and reducing inspection time.",
    icon: <IconRoad className="h-8 w-8 text-primary" />,
    image: "/case-studies/bridge-inspection.svg",
    metrics: [
      "Infrastructure assessment in 2 days vs 3 weeks",
      "85% cost reduction in inspection process", 
      "Enhanced safety with zero workplace incidents",
    ],
    link: "/case-studies/infrastructure"
  },
  {
    id: "energy",
    title: "Wind Farm Maintenance",
    description: "Transforming maintenance operations for a 50-turbine wind farm, enabling efficient blade inspection and thermal anomaly detection.",
    icon: <IconWind className="h-8 w-8 text-primary" />,
    image: "/case-studies/wind-farm.svg",
    metrics: [
      "Inspection time reduced from 5 days to 6 hours",
      "Early detection of 12 potential failure points",
      "Maintenance cost reduction of 35%",
    ],
    link: "/case-studies/energy"
  }
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Real-World Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our drone solutions deliver measurable results across diverse industries with these detailed case studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl overflow-hidden shadow-md border border-border"
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute top-3 left-3 bg-background bg-opacity-80 rounded-full p-2">
                  {study.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                
                <div className="mt-4 mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Key Metrics</h4>
                  <ul className="space-y-2">
                    {study.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={study.link} 
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  View Full Case Study 
                  <IconArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 