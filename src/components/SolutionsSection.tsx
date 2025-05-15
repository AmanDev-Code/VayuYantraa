
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Truck, Leaf, Construction, Clipboard } from 'lucide-react';
import { Button } from './ui/button';

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
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From logistics to agriculture, our drones are transforming industries with smart autonomous solutions.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full md:w-fit mx-auto grid-cols-2 md:grid-cols-4 mb-12">
            <TabsTrigger value="delivery" className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span className="hidden md:inline">Rapid Delivery</span>
            </TabsTrigger>
            <TabsTrigger value="agriculture" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span className="hidden md:inline">Precision Agriculture</span>
            </TabsTrigger>
            <TabsTrigger value="inspection" className="flex items-center gap-2">
              <Construction className="h-4 w-4" />
              <span className="hidden md:inline">High-Rise Inspection</span>
            </TabsTrigger>
            <TabsTrigger value="research" className="flex items-center gap-2">
              <Clipboard className="h-4 w-4" />
              <span className="hidden md:inline">Custom R&D</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="glass-card p-6 md:p-8">
            <TabsContent value="delivery" className="mt-0">
              <SolutionTab 
                icon={<Truck className="h-5 w-5" />}
                title="Rapid Delivery"
                description="Revolutionize your logistics with autonomous drone delivery systems that reduce costs and delivery times."
                features={[
                  "Secure cargo pods with temperature control",
                  "Intelligent route planning and obstacle avoidance",
                  "Up to 15kg payload capacity",
                  "Real-time tracking and delivery confirmation"
                ]}
                image="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&h=500"
              />
            </TabsContent>
            
            <TabsContent value="agriculture" className="mt-0">
              <SolutionTab 
                icon={<Leaf className="h-5 w-5" />}
                title="Precision Agriculture"
                description="Optimize farm operations with drone-based monitoring, planting, and crop management solutions."
                features={[
                  "High-precision AI-controlled spraying systems",
                  "Multispectral imaging for crop health analysis",
                  "Automated planting and seeding modules",
                  "Integration with farm management software"
                ]}
                image="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=500"
              />
            </TabsContent>
            
            <TabsContent value="inspection" className="mt-0">
              <SolutionTab 
                icon={<Construction className="h-5 w-5" />}
                title="High-Rise Inspection & Cleaning"
                description="Safely inspect and maintain tall structures without scaffolding or human risk."
                features={[
                  "Advanced LiDAR and thermal imaging systems",
                  "AI-powered defect detection technology",
                  "Specialized façade cleaning attachments",
                  "3D modeling and structural analysis"
                ]}
                image="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=500"
              />
            </TabsContent>
            
            <TabsContent value="research" className="mt-0">
              <SolutionTab 
                icon={<Clipboard className="h-5 w-5" />}
                title="Custom R&D Partnerships"
                description="Partner with our engineering team to develop specialized drone solutions for your unique challenges."
                features={[
                  "Collaborative design and development process",
                  "Custom payload and sensor integration",
                  "Specialized flight control algorithms",
                  "Full IP ownership options available"
                ]}
                image="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=500"
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
