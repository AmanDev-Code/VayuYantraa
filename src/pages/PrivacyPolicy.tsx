
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Last Updated: May 14, 2025
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                VayuYantra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website, use our drone 
                services, or interact with us in any way.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p>
                <strong>Personal Information:</strong> We may collect personal information that you provide to us, such as your name, 
                email address, phone number, company information, and any other information you choose to provide when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Fill out a contact form</li>
                <li>Request a demo</li>
                <li>Subscribe to our newsletter</li>
                <li>Register for an event</li>
                <li>Apply for a job</li>
              </ul>
              
              <p>
                <strong>Usage Data:</strong> We may automatically collect certain information about how you access and use our 
                website, including your IP address, browser type, device type, operating system, pages visited, time spent on 
                pages, and other similar information.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve, personalize, and expand our website and services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you about our products and services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                <li>Respond to your comments, questions, and requests</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy. 
                We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, please note that no method of 
                transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: privacy@vayuyantra.com<br />
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

export default PrivacyPolicy;
