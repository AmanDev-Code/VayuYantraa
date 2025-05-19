export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "drone-regulations-2023",
    title: "Navigating Drone Regulations in 2023: What You Need to Know",
    excerpt: "Stay compliant with the latest drone regulations across different regions. Our comprehensive guide covers licensing, flight restrictions, privacy concerns, and more.",
    image: "/blog/drone-regulations.svg",
    date: "June 15, 2023",
    category: "Regulations",
    readTime: "8 min read"
  },
  {
    id: "thermal-imaging-agriculture",
    title: "How Thermal Imaging Drones Are Revolutionizing Agriculture",
    excerpt: "Discover how thermal imaging technology is helping farmers detect crop health issues, optimize irrigation, and increase yields through early problem detection.",
    image: "/blog/thermal-imaging.svg",
    date: "May 22, 2023",
    category: "Agriculture",
    readTime: "6 min read"
  },
  {
    id: "ai-drone-analytics",
    title: "The Future of AI in Drone Analytics: Beyond Simple Imagery",
    excerpt: "Artificial intelligence is transforming how we interpret drone data. Learn how machine learning algorithms can automatically detect objects, analyze patterns, and predict outcomes.",
    image: "/blog/ai-analytics.svg",
    date: "April 10, 2023",
    category: "Technology",
    readTime: "10 min read"
  }
]; 