
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About VayuYantra</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                VayuYantra is revolutionizing industries with cutting-edge autonomous drone technology for logistics, 
                agriculture, infrastructure maintenance, and high-rise inspection.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              <p>
                At VayuYantra, we believe in harnessing the power of aerial technology to solve complex logistical 
                and operational challenges. Our mission is to create autonomous drone solutions that are safe, 
                reliable, and transformative for businesses across sectors.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
              <p>
                Founded by a team of aerospace engineers and robotics specialists, VayuYantra began with a simple 
                vision: to make aerial autonomy accessible and practical for everyday business operations. 
                What started as a research project has evolved into a comprehensive suite of drone solutions
                serving clients globally.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Technology</h2>
              <p>
                Our proprietary flight control systems and AI-powered navigation technologies allow our drones to 
                operate safely in complex environments. We've developed advanced collision avoidance, precision 
                landing, and autonomous pathfinding capabilities that set new standards in the industry.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
              <p>
                VayuYantra brings together experts from aerospace engineering, artificial intelligence, 
                mechanical design, and business operations. Our diverse team shares a passion for innovation 
                and a commitment to excellence in everything we build.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Join Our Journey</h2>
              <p>
                We're always looking for talented individuals to join our team and partners who share our 
                vision for the future of aerial automation. Whether you're interested in our technology, 
                seeking career opportunities, or exploring partnership possibilities, we'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
