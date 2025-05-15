
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';
import { FeaturesSection } from '../components/FeaturesSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PartnersSection } from '../components/PartnersSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { CookieConsent } from '../components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <ProcessSection />
        <PartnersSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
