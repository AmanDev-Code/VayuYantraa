import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CookieConsent } from "../components/CookieConsent";
import { motion } from "framer-motion";
import { IconCalendar, IconTag, IconArrowRight } from "../components/IconsComponents";

// Import the blog posts data to access it in this component
// In a real app, this would come from an API or database
import { blogPosts } from "../data/blogData";

export default function BlogPost() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  // Find the current blog post based on the URL parameter
  const currentPost = blogPosts.find(post => post.id === blogId);
  
  // Find related posts (posts in the same category, excluding current)
  const relatedPosts = blogPosts
    .filter(post => post.category === currentPost?.category && post.id !== currentPost?.id)
    .slice(0, 2);
  
  useEffect(() => {
    // If the blog post doesn't exist, redirect to 404
    if (!currentPost && !loading) {
      navigate("/not-found");
    }
    
    // Simulate loading for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentPost, navigate, loading]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1623]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!currentPost) {
    // This shouldn't happen because of the redirect, but just in case
    return null;
  }

  // Table of contents for each blog post
  const getDroneRegulationsTOC = () => (
    <div className="mb-6 p-5 bg-[#121827] border-l-4 border-primary">
      <h4 className="text-lg font-medium mb-4 text-white">Table of Contents</h4>
      <ul className="space-y-2 list-none pl-0">
        <li className="text-sm">
          <a href="#regulatory-landscape" className="block toc-link">Understanding the Current Regulatory Landscape</a>
        </li>
        <li className="text-sm">
          <a href="#licensing-requirements" className="block toc-link">Licensing Requirements for Commercial Operations</a>
        </li>
        <li className="text-sm">
          <a href="#privacy-considerations" className="block toc-link">Privacy Considerations</a>
        </li>
        <li className="text-sm">
          <a href="#international-travel" className="block toc-link">International Travel Considerations</a>
        </li>
        <li className="text-sm">
          <a href="#staying-compliant" className="block toc-link">Staying Compliant</a>
        </li>
      </ul>
    </div>
  );

  const getThermalImagingTOC = () => (
    <div className="mb-6 p-5 bg-[#121827] border-l-4 border-primary">
      <h4 className="text-lg font-medium mb-4 text-white">Table of Contents</h4>
      <ul className="space-y-2 list-none pl-0">
        <li className="text-sm">
          <a href="#agricultural-revolution" className="block toc-link">The Agricultural Revolution from Above</a>
        </li>
        <li className="text-sm">
          <a href="#irrigation-management" className="block toc-link">Optimizing Irrigation Management</a>
        </li>
        <li className="text-sm">
          <a href="#sensing-technologies" className="block toc-link">Integration with Other Sensing Technologies</a>
        </li>
        <li className="text-sm">
          <a href="#implementation-considerations" className="block toc-link">Practical Implementation Considerations</a>
        </li>
      </ul>
    </div>
  );

  const getAIDroneAnalyticsTOC = () => (
    <div className="mb-6 p-5 bg-[#121827] border-l-4 border-primary">
      <h4 className="text-lg font-medium mb-4 text-white">Table of Contents</h4>
      <ul className="space-y-2 list-none pl-0">
        <li className="text-sm">
          <a href="#ai-revolution" className="block toc-link">Beyond Beautiful Images: The AI Revolution in Drone Data</a>
        </li>
        <li className="text-sm">
          <a href="#transformative-applications" className="block toc-link">Transformative Applications Across Industries</a>
        </li>
        <li className="text-sm">
          <a href="#technical-challenges" className="block toc-link">The Technical Challenge of Scale</a>
        </li>
        <li className="text-sm">
          <a href="#future-prediction" className="block toc-link">The Future: From Analysis to Prediction</a>
        </li>
      </ul>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1623] blog-post-dark">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Breadcrumb Navigation */}
        <div className="container px-4 mx-auto mb-4">
          <nav className="flex text-sm text-gray-400">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/#blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{currentPost.title}</span>
          </nav>
        </div>
        
        {/* Blog Header */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="container px-4 mx-auto mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
              <span className="flex items-center">
                <IconCalendar className="h-4 w-4 mr-1" />
                {currentPost.date}
              </span>
              <span className="flex items-center">
                <IconTag className="h-4 w-4 mr-1" />
                {currentPost.category}
              </span>
              <span>{currentPost.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">{currentPost.title}</h1>
            
            <div className="h-56 md:h-72 bg-[#1e2a3b] rounded-lg overflow-hidden mb-6">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Blog Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container px-4 mx-auto mb-16"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Left sidebar with TOC */}
            <div className="md:w-1/4 toc-container">
              {currentPost.id === "drone-regulations-2023" && getDroneRegulationsTOC()}
              {currentPost.id === "thermal-imaging-agriculture" && getThermalImagingTOC()}
              {currentPost.id === "ai-drone-analytics" && getAIDroneAnalyticsTOC()}
            </div>
            
            {/* Main content */}
            <div className="md:w-3/4">
              <article className="prose prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-p:text-gray-300 prose-li:text-gray-300 dark:prose-invert">
                {currentPost.id === "drone-regulations-2023" && (
                  <>
                    <h2 id="regulatory-landscape">Understanding the Current Regulatory Landscape</h2>
                    <p>
                      The drone industry continues to evolve at a rapid pace, and with it, the regulatory framework governing drone operations. In 2023, several key changes have been implemented across different regions, affecting both recreational and commercial drone pilots.
                    </p>
                    
                    <h3>Registration Requirements</h3>
                    <p>
                      Most countries now require drone registration for units weighing over 250 grams. This process typically involves:
                    </p>
                    <ul>
                      <li>Providing personal identification details</li>
                      <li>Registering each drone with a unique identification number</li>
                      <li>Displaying registration numbers visibly on your drone</li>
                      <li>Renewing registrations annually in most jurisdictions</li>
                    </ul>
                    
                    <h3>Flight Restrictions</h3>
                    <p>
                      No-fly zones have expanded in many regions to include:
                    </p>
                    <ul>
                      <li>Airports and heliports (typically 5km radius)</li>
                      <li>Government facilities and military installations</li>
                      <li>Critical infrastructure (power plants, dams, etc.)</li>
                      <li>National parks and wildlife preserves (varies by country)</li>
                      <li>Temporary restrictions during major events or emergencies</li>
                    </ul>
                    
                    <h2 id="licensing-requirements">Licensing Requirements for Commercial Operations</h2>
                    <p>
                      Commercial drone operations now require specialized licensing in most countries. The process typically includes:
                    </p>
                    <ul>
                      <li>Theoretical knowledge examinations covering airspace regulations, weather patterns, and flight safety</li>
                      <li>Practical flight tests demonstrating competency in various operations</li>
                      <li>Background checks and security clearances</li>
                      <li>Proof of insurance coverage specifically for drone operations</li>
                    </ul>
                    
                    <h3>Remote ID Implementation</h3>
                    <p>
                      Remote ID requirements are now being enforced in many regions, functioning as a "digital license plate" for drones. This system broadcasts:
                    </p>
                    <ul>
                      <li>Drone identification number</li>
                      <li>Current location and altitude</li>
                      <li>Take-off location</li>
                      <li>Operator location</li>
                      <li>Emergency status if applicable</li>
                    </ul>
                    
                    <h2 id="privacy-considerations">Privacy Considerations</h2>
                    <p>
                      Data protection laws increasingly address drone operations, particularly regarding:
                    </p>
                    <ul>
                      <li>Capture of images or video of individuals without consent</li>
                      <li>Operations over private property</li>
                      <li>Storage and usage of collected data</li>
                      <li>Potential for surveillance and monitoring</li>
                    </ul>
                    
                    <h2 id="international-travel">International Travel Considerations</h2>
                    <p>
                      Traveling internationally with drones presents additional challenges:
                    </p>
                    <ul>
                      <li>Import/export restrictions in certain countries</li>
                      <li>Temporary permitting requirements</li>
                      <li>Battery transportation regulations</li>
                      <li>Insurance validity across borders</li>
                    </ul>
                    
                    <h2 id="staying-compliant">Staying Compliant</h2>
                    <p>
                      To ensure compliance with the evolving regulatory landscape:
                    </p>
                    <ul>
                      <li>Use apps like B4UFLY, Airmap, or Aloft to check airspace restrictions before flying</li>
                      <li>Maintain documentation of registrations, licenses, and permits</li>
                      <li>Keep detailed flight logs for all operations</li>
                      <li>Stay informed through aviation authority websites and industry publications</li>
                      <li>Join professional associations for regular updates and resources</li>
                    </ul>
                    
                    <p>
                      By staying informed and adhering to regulations, drone operators can avoid penalties and contribute to the safe integration of drones into our airspace.
                    </p>
                    
                    <p>
                      The effort to remain compliant is an investment in the future of this rapidly evolving industry.
                    </p>
                  </>
                )}
                
                {currentPost.id === "thermal-imaging-agriculture" && (
                  <>
                    <h2 id="agricultural-revolution">The Agricultural Revolution from Above</h2>
                    <p>
                      Thermal imaging drones are transforming modern agriculture by providing farmers with unprecedented insights into crop health and field conditions.
                    </p>
                    
                    <p>
                      These advanced systems detect heat signatures that are invisible to the naked eye, revealing critical information about plant stress long before visual symptoms appear.
                    </p>
                    
                    <h3>How Thermal Imaging Works</h3>
                    <p>
                      Thermal cameras measure infrared radiation emitted by objects. In agriculture, this technology enables:
                    </p>
                    <ul>
                      <li>Detection of temperature variations across crop fields</li>
                      <li>Identification of water stress in plants</li>
                      <li>Early detection of disease outbreaks</li>
                      <li>Monitoring of irrigation system efficiency</li>
                      <li>Assessment of soil moisture levels</li>
                    </ul>
                    
                    <h3>Early Detection of Crop Health Issues</h3>
                    <p>
                      One of the most valuable applications is the ability to identify problems weeks before they become visible:
                    </p>
                    <ul>
                      <li>Plants under stress typically show increased temperature patterns</li>
                      <li>Fungal infections can be detected up to 10 days before visual symptoms</li>
                      <li>Pest infestations create distinctive thermal patterns</li>
                      <li>Nutrient deficiencies alter plant thermal signatures</li>
                    </ul>
                    
                    <h2 id="irrigation-management">Optimizing Irrigation Management</h2>
                    <p>
                      Water management is increasingly critical in agriculture, and thermal imaging provides precise data for:
                    </p>
                    <ul>
                      <li>Identifying areas of over- or under-irrigation</li>
                      <li>Detecting leaks or blockages in irrigation systems</li>
                      <li>Implementing variable-rate irrigation techniques</li>
                      <li>Reducing water usage while maintaining or improving yields</li>
                    </ul>
                    
                    <h3>Case Study: Punjab Farm Implementation</h3>
                    <p>
                      A large-scale farm in Punjab implemented thermal drone technology with remarkable results:
                    </p>
                    <ul>
                      <li>18% increase in overall yield across wheat and rice crops</li>
                      <li>22% reduction in pesticide application through targeted treatments</li>
                      <li>Water usage reduced by 15% while maintaining optimal growth</li>
                      <li>Early disease detection prevented potential 30% crop loss in one section</li>
                      <li>Return on investment achieved within the first growing season</li>
                    </ul>
                    
                    <h2 id="sensing-technologies">Integration with Other Sensing Technologies</h2>
                    <p>
                      For comprehensive field analysis, thermal imaging works best when combined with:
                    </p>
                    <ul>
                      <li>Multispectral imaging for vegetation index calculation</li>
                      <li>RGB visual imaging for ground truth validation</li>
                      <li>LiDAR for 3D terrain mapping and water flow analysis</li>
                      <li>Soil sensors for correlation with aerial thermal data</li>
                    </ul>
                    
                    <h2 id="implementation-considerations">Practical Implementation Considerations</h2>
                    <p>
                      Farmers looking to adopt this technology should consider:
                    </p>
                    <ul>
                      <li>Optimal flight times (early morning provides the best thermal contrast)</li>
                      <li>Regular calibration requirements for accurate measurements</li>
                      <li>Data processing capabilities for timely analysis</li>
                      <li>Integration with farm management software</li>
                      <li>Training requirements for staff interpreting thermal data</li>
                    </ul>
                    
                    <p>
                      As climate change and resource constraints continue to challenge agricultural production, thermal imaging drone technology represents a critical tool for sustainable intensification.
                    </p>
                    
                    <p>
                      By detecting problems earlier, targeting interventions more precisely, and optimizing resource usage, farmers can simultaneously improve yields, reduce environmental impact, and enhance profitability.
                    </p>
                  </>
                )}
                
                {currentPost.id === "ai-drone-analytics" && (
                  <>
                    <h2 id="ai-revolution">Beyond Beautiful Images: The AI Revolution in Drone Data</h2>
                    <p>
                      Artificial intelligence is fundamentally transforming how we extract value from drone-captured data.
                    </p>
                    
                    <p>
                      While drone imagery initially provided a novel perspective, the integration of AI enables automatic extraction of actionable insights at unprecedented speed and scale.
                    </p>
                    
                    <h3>The Evolution of Drone Analytics</h3>
                    <p>
                      The progression of drone data processing has evolved dramatically:
                    </p>
                    <ul>
                      <li>First generation: Basic visual inspection of drone imagery</li>
                      <li>Second generation: Manual measurements and annotations</li>
                      <li>Third generation: Photogrammetry and 3D modeling</li>
                      <li>Current generation: AI-powered automatic detection and analysis</li>
                    </ul>
                    
                    <h3>Core AI Technologies Powering Drone Analytics</h3>
                    <p>
                      Several key AI approaches are driving this transformation:
                    </p>
                    <ul>
                      <li>Computer Vision: Identifying objects, measuring dimensions, and detecting defects</li>
                      <li>Machine Learning: Classifying features and predicting outcomes based on historical data</li>
                      <li>Deep Learning: Training neural networks to recognize complex patterns across diverse datasets</li>
                      <li>Edge Computing: Processing data directly on drones for real-time analysis</li>
                    </ul>
                    
                    <h2 id="transformative-applications">Transformative Applications Across Industries</h2>
                    <p>
                      AI-enhanced drone analytics is creating value in numerous sectors:
                    </p>
                    
                    <h3>Construction and Infrastructure</h3>
                    <ul>
                      <li>Automatic progress tracking against BIM models</li>
                      <li>Safety violation detection</li>
                      <li>Equipment utilization analysis</li>
                      <li>Predictive maintenance of infrastructure</li>
                    </ul>
                    
                    <h3>Agriculture</h3>
                    <ul>
                      <li>Crop yield prediction</li>
                      <li>Automatic plant counting and sizing</li>
                      <li>Disease and pest hot-spot identification</li>
                      <li>Harvest timing optimization</li>
                    </ul>
                    
                    <h3>Energy</h3>
                    <ul>
                      <li>Automatic detection of solar panel defects</li>
                      <li>Wind turbine blade damage assessment</li>
                      <li>Powerline corridor vegetation encroachment analysis</li>
                      <li>Thermal anomaly detection in substations</li>
                    </ul>
                    
                    <h2 id="technical-challenges">The Technical Challenge of Scale</h2>
                    <p>
                      Processing drone data with AI presents unique challenges:
                    </p>
                    <ul>
                      <li>Handling extremely large datasets (often terabytes per flight)</li>
                      <li>Training models with limited labeled examples</li>
                      <li>Maintaining accuracy across varying environmental conditions</li>
                      <li>Balancing between edge processing and cloud computing</li>
                      <li>Integrating insights with existing enterprise systems</li>
                    </ul>
                    
                    <h3>Case Study: Road Network Assessment</h3>
                    <p>
                      A recent highway authority implementation demonstrates the power of AI analytics:
                    </p>
                    <ul>
                      <li>500km of roads surveyed in 3 days</li>
                      <li>AI automatically detected and classified 12,000+ defects</li>
                      <li>Pothole prediction algorithm identified high-risk areas</li>
                      <li>Maintenance prioritization based on severity algorithms</li>
                      <li>85% reduction in inspection costs compared to traditional methods</li>
                    </ul>
                    
                    <h2 id="future-prediction">The Future: From Analysis to Prediction</h2>
                    <p>
                      The frontier of AI drone analytics is moving towards:
                    </p>
                    <ul>
                      <li>Predictive analytics based on temporal data</li>
                      <li>Autonomous decision-making and adaptive flight patterns</li>
                      <li>Cross-platform AI models that work across sensor types</li>
                      <li>Simulation capabilities to predict "what-if" scenarios</li>
                      <li>Digital twin integration for complete system monitoring</li>
                    </ul>
                    
                    <p>
                      As AI capabilities continue to advance, the value of drone data will increasingly come not from the imagery itself, but from the insights automatically extracted from it.
                    </p>
                    
                    <p>
                      Organizations that leverage these capabilities will benefit from faster decision-making, reduced costs, and the ability to monitor assets at unprecedented scale and frequency.
                    </p>
                  </>
                )}
              </article>
            </div>
          </div>
        </motion.div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#121827] py-12">
            <div className="container px-4 mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-white">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#0f1623] rounded-lg overflow-hidden shadow-sm border border-[#1e2a3b] flex flex-col"
                  >
                    <Link to={`/blog/${post.id}`} className="block h-48 bg-[#1e2a3b] relative overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </Link>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <IconCalendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <IconTag className="h-4 w-4 mr-1" />
                          {post.category}
                        </span>
                      </div>
                      
                      <Link to={`/blog/${post.id}`} className="group">
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-primary transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-gray-400 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                      
                      <div className="mt-auto pt-4">
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                        >
                          Read more 
                          <IconArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Return to Blog */}
        <div className="container px-4 mx-auto my-12 text-center">
          <Link 
            to="/#blog" 
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            <svg 
              className="mr-2 h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </Link>
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
    </div>
  );
} 