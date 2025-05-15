import { Card, CardContent } from './ui/card';

export function PartnersSection() {
  // Array of partner/client logos and names
  const partners = [
    { name: "TechCorp", logo: "/techcorp-logo.svg" },
    { name: "InnovateTech", logo: "/innovatetech-logo.svg" },
    { name: "SkyScape", logo: "/skyscape-logo.svg" },
    { name: "AeroVision", logo: "/aerovision-logo.svg" },
    { name: "FutureDrone", logo: "/futuredrone-logo.svg" },
    { name: "SkyWatch", logo: "/skywatch-logo.svg" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-xs font-medium rounded-full border bg-muted/50 text-foreground/70 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Trusted Partnerships
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Trusted Partners</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading organizations across industries rely on Vayuyantra's drone technology for their critical operations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="border border-primary/10 bg-muted/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="max-w-full max-h-full" />
                </div>
                <p className="text-center font-medium">{partner.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Join the growing list of organizations transforming their operations with Vayuyantra</p>
        </div>
      </div>
    </section>
  );
}
