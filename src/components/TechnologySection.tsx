import { motion } from "framer-motion";

const technologies = [
  {
    id: "hardware",
    name: "Advanced Drone Hardware",
    description: "Our drones are equipped with cutting-edge sensors, high-resolution cameras, and extended battery life for efficient operation in any environment.",
    features: [
      "Carbon-fiber construction for maximum durability",
      "Up to 60-minute flight time on a single charge",
      "Wind resistance up to 45 km/h for operation in challenging conditions",
      "Waterproof design (IP67 rating) for all-weather operations",
      "Autonomous navigation with obstacle avoidance systems"
    ],
    image: "/technology/drone-hardware.svg"
  },
  {
    id: "imaging",
    name: "Multi-Spectral Imaging",
    description: "Our imaging systems capture data across multiple spectral bands, enabling everything from thermal analysis to vegetation health assessment.",
    features: [
      "8K ultra-high-definition RGB camera system",
      "Thermal imaging with 0.05°C sensitivity",
      "Multispectral sensors for agricultural analysis",
      "LiDAR with 2mm accuracy for 3D mapping",
      "Night vision capabilities with low-light sensors"
    ],
    image: "/technology/imaging-systems.svg"
  },
  {
    id: "software",
    name: "Intelligent Analysis Software",
    description: "Our proprietary AI-powered software converts raw drone data into actionable insights through advanced machine learning algorithms.",
    features: [
      "Automated object detection and classification",
      "AI-powered change detection between surveys",
      "Real-time data processing and analysis",
      "Cloud-based storage with enterprise-grade security",
      "Custom reporting tools with exportable formats"
    ],
    image: "/technology/software-platform.svg"
  }
];

export function TechnologySection() {
  return (
    <section id="technology" className="py-16 bg-[#0f1623]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-white">Our Drone Technology</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The perfect fusion of cutting-edge hardware, advanced imaging systems, and intelligent software that sets our drones apart.
          </p>
        </div>
        
        <div className="mt-16 space-y-24">
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-[#1e293b] rounded-xl overflow-hidden h-64 md:h-80 relative shadow-xl">
                  <img 
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60"></div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-[#121827] p-6 rounded-xl border border-[#1e293b] shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                    <div className="w-2 h-8 bg-primary mr-3"></div>
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{tech.description}</p>
                  
                  <ul className="space-y-3">
                    {tech.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2 flex-shrink-0 mt-1">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 