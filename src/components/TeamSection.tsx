import { motion } from "framer-motion";
import { 
  IconBrandLinkedin, 
  IconBrandTwitter, 
  IconMail 
} from "./IconsComponents";

const team = [
  {
    name: "Raj Patel",
    role: "Founder & CEO",
    bio: "Former aerospace engineer with 15+ years of experience in drone technology and aviation systems. Led multiple innovations in autonomous flight systems.",
    image: "/team/raj-patel.svg",
    social: {
      linkedin: "https://linkedin.com/in/rajpatel",
      twitter: "https://twitter.com/rajpatel",
      email: "raj@vayuyantra.com"
    }
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "PhD in Robotics from IIT Delhi with expertise in computer vision and AI. Previously led R&D at a leading robotics firm developing cutting-edge autonomy solutions.",
    image: "/team/priya-sharma.svg",
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
      twitter: "https://twitter.com/priyasharma",
      email: "priya@vayuyantra.com"
    }
  },
  {
    name: "Vikram Singh",
    role: "Head of Operations",
    bio: "Former military drone operator with extensive field experience. Expert in complex mission planning and execution across challenging environments.",
    image: "/team/vikram-singh.svg",
    social: {
      linkedin: "https://linkedin.com/in/vikramsingh",
      twitter: "https://twitter.com/vikramsingh",
      email: "vikram@vayuyantra.com"
    }
  },
  {
    name: "Ananya Desai",
    role: "Chief Product Officer",
    bio: "Product strategist with background in enterprise SaaS development. Passionate about creating intuitive data visualization tools for complex technical data.",
    image: "/team/ananya-desai.svg",
    social: {
      linkedin: "https://linkedin.com/in/ananyadesai",
      twitter: "https://twitter.com/ananyadesai",
      email: "ananya@vayuyantra.com"
    }
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team combines expertise in aerospace engineering, computer vision, AI, and industry-specific knowledge to deliver cutting-edge drone solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl overflow-hidden shadow-sm border border-border"
            >
              <div className="aspect-square bg-muted relative overflow-hidden flex items-center justify-center">
                <div className="bg-primary/10 absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/30">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3 pt-2">
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <IconBrandLinkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <IconBrandTwitter className="h-5 w-5" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <IconMail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals passionate about drone technology, data analytics, and creating innovative solutions for complex challenges.
          </p>
          <a 
            href="/careers" 
            className="inline-flex items-center justify-center py-2 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
          >
            View Career Opportunities
          </a>
        </div>
      </div>
    </section>
  );
} 