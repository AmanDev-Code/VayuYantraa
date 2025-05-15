
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What industries can benefit from Vayuyantra drones?",
      answer: "Vayuyantra drones are designed to benefit multiple industries including agriculture, construction, security surveillance, emergency response, mining, and infrastructure inspection. Our modular design allows for customization to meet specific industry needs."
    },
    {
      question: "How long can Vayuyantra drones stay in the air?",
      answer: "Our standard drone models offer up to 45 minutes of flight time on a single charge, which is significantly higher than the industry average. For extended operations, our quick-swap battery system allows for minimal downtime between flights."
    },
    {
      question: "Are your drones compliant with regulations?",
      answer: "Yes, all Vayuyantra drones are designed to meet international aviation regulations and standards. We provide comprehensive documentation and assistance for securing necessary permits and authorizations for commercial drone operations in different regions."
    },
    {
      question: "What kind of training do you provide?",
      answer: "We offer comprehensive training programs for drone operators, including basic flight operations, advanced maneuvers, emergency procedures, and specialized training for industry-specific applications. Our training programs can be customized to meet your team's specific needs."
    },
    {
      question: "How does your maintenance program work?",
      answer: "Our maintenance program includes regular scheduled inspections, software updates, hardware maintenance, and emergency repairs. We offer different service plans to ensure your drone fleet remains in optimal operating condition with minimal downtime."
    },
    {
      question: "Can your drones operate in adverse weather conditions?",
      answer: "Our drones are engineered to perform in a wide range of weather conditions. Standard models can operate in light rain and winds up to 25 mph, while our ruggedized versions can handle more extreme conditions. Each drone model has specific environmental tolerances detailed in its specifications."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-xs font-medium rounded-full border bg-muted/50 text-foreground/70 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Frequently Asked Questions
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common <span className="text-gradient">Questions</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most frequently asked questions about our drone technology and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Don't see your question here? <a href="/contact" className="text-primary hover:underline">Contact our team</a> for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
