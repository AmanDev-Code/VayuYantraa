import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Truck, Leaf, Construction, Clipboard } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface SolutionTabProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

function SolutionTab({ icon, title, description, features, image }: SolutionTabProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button>Learn More</Button>
      </div>
      
      <div className="rounded-lg overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-80 object-cover object-center rounded-lg" 
        />
      </div>
    </div>
  );
}

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("delivery");
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const tabInfo = [
    {
      id: "delivery",
      icon: <Truck className="h-5 w-5" />,
      title: "Rapid Delivery",
      shortTitle: "Delivery",
      description: "Revolutionize your logistics with autonomous drone delivery systems that reduce costs and delivery times.",
      features: [
        "Secure cargo pods with temperature control",
        "Intelligent route planning and obstacle avoidance",
        "Up to 15kg payload capacity",
        "Real-time tracking and delivery confirmation"
      ],
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "agriculture",
      icon: <Leaf className="h-5 w-5" />,
      title: "Precision Agriculture",
      shortTitle: "Agriculture",
      description: "Optimize farm operations with drone-based monitoring, planting, and crop management solutions.",
      features: [
        "High-precision AI-controlled spraying systems",
        "Multispectral imaging for crop health analysis",
        "Automated planting and seeding modules",
        "Integration with farm management software"
      ],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "inspection",
      icon: <Construction className="h-5 w-5" />,
      title: "High-Rise Inspection & Cleaning",
      shortTitle: "Inspection",
      description: "Safely inspect and maintain tall structures without scaffolding or human risk.",
      features: [
        "Advanced LiDAR and thermal imaging systems",
        "AI-powered defect detection technology",
        "Specialized façade cleaning attachments",
        "3D modeling and structural analysis"
      ],
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "research",
      icon: <Clipboard className="h-5 w-5" />,
      title: "Custom R&D Partnerships",
      shortTitle: "R&D",
      description: "Partner with our engineering team to develop specialized drone solutions for your unique challenges.",
      features: [
        "Collaborative design and development process",
        "Custom payload and sensor integration",
        "Specialized flight control algorithms",
        "Full IP ownership options available"
      ],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=500"
    }
  ];

  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From logistics to agriculture, our drones are transforming industries with smart autonomous solutions.
          </p>
        </div>

        {/* Mobile tab buttons - grid layout instead of horizontal scroll */}
        <div className="md:hidden mb-8">
          <div className="grid grid-cols-2 gap-2">
            {tabInfo.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center justify-center space-x-2 rounded-lg py-3 text-sm font-medium transition-all",
                  activeTab === tab.id 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted hover:bg-muted/80 text-foreground/70"
                )}
              >
                <span className="flex-shrink-0">{tab.icon}</span>
                <span>{tab.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full hidden md:block">
          <TabsList className="grid w-full md:w-fit mx-auto grid-cols-4 mb-12">
            {tabInfo.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                {tab.icon}
                <span>{tab.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="glass-card p-6 md:p-8">
            {tabInfo.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <SolutionTab 
                  icon={tab.icon}
                  title={tab.title}
                  description={tab.description}
                  features={tab.features}
                  image={tab.image}
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Mobile content */}
        <div className="md:hidden">
          <div className="glass-card p-6">
            {tabInfo.map((tab) => (
              <div 
                key={tab.id} 
                className={cn(
                  "transition-opacity duration-300",
                  activeTab === tab.id ? "block" : "hidden"
                )}
              >
                <SolutionTab 
                  icon={tab.icon}
                  title={tab.title}
                  description={tab.description}
                  features={tab.features}
                  image={tab.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
