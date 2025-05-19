import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';
import { FeaturesSection } from '../components/FeaturesSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { CookieConsent } from '../components/CookieConsent';
import { TechnologySection } from '../components/TechnologySection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { IndustryApplicationsSection } from '../components/IndustryApplicationsSection';
import { TeamSection } from '../components/TeamSection';
import { BlogPreviewSection } from '../components/BlogPreviewSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <TechnologySection />
        <IndustryApplicationsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <TeamSection />
        <BlogPreviewSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
