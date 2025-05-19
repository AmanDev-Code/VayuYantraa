import { motion } from "framer-motion";
import { IconCalendar, IconTag } from "./IconsComponents";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export function BlogPreviewSection() {
  return (
    <section id="blog" className="py-16 bg-muted/10">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Drone Industry Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay up-to-date with the latest trends, technology advancements, and industry news in the world of drone solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl overflow-hidden shadow-sm border border-border flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="block h-48 bg-muted relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </Link>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
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
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                </Link>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-sm font-medium text-primary hover:text-primary/80 flex items-center"
                  >
                    Read more
                    <svg 
                      className="ml-1 h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-muted/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest drone industry news, technology updates, and exclusive insights delivered directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 