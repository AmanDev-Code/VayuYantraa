
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Last Updated: May 14, 2025
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using VayuYantra's website, products, and services, you accept and agree to be bound by these 
                Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Services</h2>
              <p>
                Our drone technology and services are provided for commercial and industrial purposes. When using our products and services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Comply with all applicable laws and regulations regarding drone operations</li>
                <li>Obtain necessary permits and authorizations for drone flights in restricted areas</li>
                <li>Use our products and services only for their intended purposes</li>
                <li>Not reverse engineer, modify, or tamper with our hardware or software</li>
                <li>Maintain proper safety protocols during drone operations</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of VayuYantra 
                and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative 
                works without our express written permission.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
              <p>
                VayuYantra and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages arising from your use of our website, products, or services. Our liability is limited to the maximum extent 
                permitted by applicable law.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Warranty Disclaimer</h2>
              <p>
                Our products and services are provided "as is" without warranties of any kind, either express or implied, including 
                but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], 
                without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon 
                posting on our website. Your continued use of our website and services after any changes indicates your acceptance 
                of the modified terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="mt-2">
                Email: legal@vayuyantra.com<br />
                Address: 123 Drone Street, Tech City, 12345
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
