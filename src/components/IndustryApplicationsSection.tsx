import { useState } from "react";
import { 
  IconBuilding, 
  IconChartBar, 
  IconFlame, 
  IconHome, 
  IconCamera, 
  IconPlant, 
  IconRoad, 
  IconSatellite 
} from "./IconsComponents";

const industries = [
  {
    id: "agriculture",
    name: "Agriculture",
    icon: <IconPlant className="h-6 w-6" />,
    description: "Revolutionize farming with precision agriculture using drone technology to optimize crop management and increase yields.",
    applications: [
      "Crop health monitoring using NDVI (Normalized Difference Vegetation Index)",
      "Precise variable-rate application of fertilizers and pesticides",
      "Automated irrigation management through thermal imaging",
      "Early pest and disease detection",
      "Yield estimation and harvest planning"
    ],
    stats: {
      yield: "+18%",
      costs: "-22%",
      efficiency: "+35%"
    }
  },
  {
    id: "construction",
    name: "Construction",
    icon: <IconBuilding className="h-6 w-6" />,
    description: "Transform construction site management with real-time monitoring, 3D modeling, and progress tracking via drone surveillance.",
    applications: [
      "3D topographic mapping and earthwork volume calculations",
      "Real-time construction progress monitoring and documentation",
      "Site safety and security surveillance",
      "Building inspection and structural assessment",
      "Equipment tracking and logistics optimization"
    ],
    stats: {
      time: "-30%",
      accuracy: "+40%",
      safety: "+75%"
    }
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: <IconRoad className="h-6 w-6" />,
    description: "Monitor and inspect critical infrastructure efficiently using drone technology to detect issues before they become costly problems.",
    applications: [
      "Bridge and highway inspection and monitoring",
      "Power line and transmission tower inspection",
      "Dam and waterway surveillance and mapping",
      "Railway corridor monitoring and vegetation management",
      "Cell tower structural assessment"
    ],
    stats: {
      speed: "+85%",
      cost: "-65%",
      detection: "+45%"
    }
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: <IconHome className="h-6 w-6" />,
    description: "Elevate property marketing with stunning aerial photography and 3D models that showcase properties from unique perspectives.",
    applications: [
      "Cinematic aerial property videography and photography",
      "3D property models for immersive virtual tours",
      "Land surveying and boundary mapping",
      "Site analysis and development planning",
      "Construction progress documentation for investors"
    ],
    stats: {
      engagement: "+120%",
      sales: "+25%",
      tours: "-40%"
    }
  },
  {
    id: "energy",
    name: "Energy",
    icon: <IconFlame className="h-6 w-6" />,
    description: "Optimize energy infrastructure maintenance and monitoring with drone inspections that improve safety and reduce downtime.",
    applications: [
      "Solar panel thermal inspection and efficiency analysis",
      "Wind turbine blade inspection and damage assessment",
      "Oil and gas pipeline monitoring and leak detection",
      "Power plant thermal analysis and maintenance planning",
      "Flare stack inspection without shutdown"
    ],
    stats: {
      downtime: "-50%",
      safety: "+90%",
      costs: "-35%"
    }
  },
  {
    id: "media",
    name: "Media & Events",
    icon: <IconCamera className="h-6 w-6" />,
    description: "Capture breathtaking aerial footage for films, events, and marketing campaigns with our professional drone cinematography.",
    applications: [
      "Film and television aerial cinematography",
      "Live event coverage and streaming",
      "Sports event tracking and analysis",
      "Corporate brand videos and marketing campaigns",
      "Tourism and destination promotional content"
    ],
    stats: {
      production: "-60%",
      quality: "+85%",
      versatility: "+100%"
    }
  },
  {
    id: "mapping",
    name: "Mapping & Surveying",
    icon: <IconSatellite className="h-6 w-6" />,
    description: "Create highly accurate maps and surveys in a fraction of the time with drone photogrammetry and LiDAR technology.",
    applications: [
      "High-precision topographic mapping and terrain modeling",
      "Volumetric calculation for mining and quarry operations",
      "Cadastral surveying and land management",
      "Flood modeling and watershed analysis",
      "Archaeological site mapping and conservation"
    ],
    stats: {
      accuracy: "+95%",
      speed: "+75%",
      coverage: "+96%"
    }
  },
  {
    id: "analytics",
    name: "Data Analytics",
    icon: <IconChartBar className="h-6 w-6" />,
    description: "Transform raw drone data into actionable insights with our advanced analytics platform powered by machine learning algorithms.",
    applications: [
      "AI-powered object detection and counting",
      "Change detection analysis for monitoring",
      "Predictive maintenance modeling",
      "Environmental impact assessment",
      "Asset management and inventory tracking"
    ],
    stats: {
      insights: "+120%",
      decisions: "+45%",
      roi: "+65%"
    }
  }
];

export function IndustryApplicationsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedIndustry = industries[selectedIndex];
  
  return (
    <section id="industry-applications" className="py-16 bg-muted/10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Industry Applications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our drone solutions are transforming operations across multiple industries with specialized applications tailored to each sector's unique needs.
          </p>
        </div>
        
        {/* Custom tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndex(index)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none
                ${
                  selectedIndex === index
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              <div className="flex items-center space-x-2">
                <span className={selectedIndex === index ? "text-primary-foreground" : "text-primary"}>
                  {industry.icon}
                </span>
                <span>{industry.name}</span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="mt-6">
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="text-primary mr-2">{selectedIndustry.icon}</span>
                  {selectedIndustry.name} Applications
                </h3>
                
                <p className="text-muted-foreground mb-6">{selectedIndustry.description}</p>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Key Applications</h4>
                  <ul className="space-y-2">
                    {selectedIndustry.applications.map((app, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 flex-shrink-0 mt-1">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted/20 rounded-lg p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Performance Metrics</h4>
                
                <div className="space-y-4">
                  {Object.entries(selectedIndustry.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="capitalize">{key}</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${parseInt(value.replace(/[^0-9]/g, '')) * 0.75}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <a 
                    href={`/solutions/${selectedIndustry.id}`}
                    className="block w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg text-center font-medium transition-colors hover:bg-primary/90"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 