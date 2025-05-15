
import { 
  Shield, 
  Zap, 
  ArrowRight, 
  Leaf,
  Upload,
  Navigation,
  Eye,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { AspectRatio } from './ui/aspect-ratio';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, gradient = "from-primary/20 to-primary/5", delay = 0 }: FeatureCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden border-primary/10 bg-gradient-to-br", 
      gradient,
      "hover:border-primary/30 transition-all duration-500 group"
    )} data-aos="fade-up" data-aos-delay={delay * 100}>
      <CardHeader className="pb-2">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:ring-primary/30 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="group">
          Learn more{" "}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-xs font-medium rounded-full border bg-muted/50 text-foreground/70 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Cutting-edge Drone Technology
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-gradient">Vayuyantra</span>?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our autonomous drones combine cutting-edge AI with robust engineering 
            to deliver unparalleled solutions for modern business and industrial challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Shield className="h-6 w-6" />}
            title="Safety-First Design"
            description="Built with redundant systems, advanced obstacle avoidance, and weather-adaptive technology to ensure reliable operation in any condition."
            gradient="from-primary/20 to-primary/5"
            delay={0}
          />
          <FeatureCard 
            icon={<Zap className="h-6 w-6" />}
            title="Unmatched Efficiency"
            description="Increase operational efficiency by up to 70% with AI-optimized flight paths and task automation that reduce human error and labor costs."
            gradient="from-secondary/20 to-secondary/5"
            delay={1}
          />
          <FeatureCard 
            icon={<Upload className="h-6 w-6" />}
            title="Plug-and-Play Versatility"
            description="Modular design allows quick adaptation to different mission profiles with interchangeable payloads and easy integration with existing systems."
            gradient="from-accent/20 to-accent/5"
            delay={2}
          />
          <FeatureCard 
            icon={<Leaf className="h-6 w-6" />}
            title="Eco-Responsible"
            description="Green operations with electric propulsion, optimized energy consumption, and recyclable components designed for minimal environmental impact."
            gradient="from-green-500/20 to-green-500/5"
            delay={3}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-muted/30 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10" data-aos="fade-right">
            <AspectRatio ratio={16/9} className="bg-muted">
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="drone-animation">
                    <div className="drone-body"></div>
                    <div className="drone-propeller left-front"></div>
                    <div className="drone-propeller right-front"></div>
                    <div className="drone-propeller left-back"></div>
                    <div className="drone-propeller right-back"></div>
                    <div className="drone-camera"></div>
                    <div className="drone-shadow"></div>
                  </div>
                </div>
              </div>
            </AspectRatio>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">Real-time data processing and analysis with our advanced drone technology</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-primary mr-2" />
                  <span>Thermal Imaging</span>
                </div>
                <div className="flex items-center">
                  <Navigation className="h-5 w-5 text-primary mr-2" />
                  <span>Precision Navigation</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-primary mr-2" />
                  <span>Data Analytics</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <span>Secure Transmission</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4" data-aos="fade-left">
            <Card className="flex-1 bg-gradient-to-br from-secondary/20 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-xl">Industry Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-secondary mr-2"></div>
                    <span>Agriculture & Crop Monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-secondary mr-2"></div>
                    <span>Construction & Site Surveys</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-secondary mr-2"></div>
                    <span>Security & Surveillance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-secondary mr-2"></div>
                    <span>Emergency Response & Search</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="flex-1 bg-gradient-to-br from-accent/20 to-accent/5">
              <CardHeader>
                <CardTitle className="text-xl">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Flight Time</p>
                    <p className="font-medium">Up to 45 minutes</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Max Speed</p>
                    <p className="font-medium">72 km/h</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Range</p>
                    <p className="font-medium">7 km</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Payload</p>
                    <p className="font-medium">Up to 2.5 kg</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
