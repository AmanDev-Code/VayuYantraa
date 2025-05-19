import { useEffect } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Testimonials data isolated to avoid repeated re-creation
const testimonials = [
  {
    quote:
      "VAYUYANTRA's drones reduced our audit time by 40%, allowing us to focus on strategic operations.",
    name: "Ravi Sharma",
    designation: "Director at GlobalLogistics",
    src: "/testimonials/ravi-sharma.svg",
  },
  {
    quote:
      "Their drone technology has revolutionized our site inspections. We've seen a 50% reduction in safety incidents since implementation.",
    name: "Priya Mehta",
    designation: "Safety Manager at ConstructWorks",
    src: "/testimonials/priya-mehta.svg",
  },
  {
    quote:
      "The analytics capabilities built into VAYUYANTRA's platform have transformed how we approach agricultural monitoring and planning.",
    name: "Alex Chen",
    designation: "Head of Operations at AgriTech Solutions",
    src: "/testimonials/alex-chen.svg",
  },
  {
    quote:
      "Implementing VAYUYANTRA's drone fleet has improved our inventory management accuracy by 35% and cut operational costs significantly.",
    name: "Samantha Wilson",
    designation: "Supply Chain Director at Logistics Plus",
    src: "/testimonials/samantha-wilson.svg",
  },
  {
    quote:
      "The automated flight paths and real-time data transmission have made our infrastructure inspections faster, safer, and more accurate.",
    name: "Rajiv Patel",
    designation: "CTO at InfraTech Inspections",
    src: "/testimonials/rajiv-patel.svg",
  },
];

export default function AnimatedTestimonialsDemo() {
  // Preload SVG images on component mount to avoid load delay
  useEffect(() => {
    testimonials.forEach(testimonial => {
      const img = new Image();
      img.src = testimonial.src;
    });
  }, []);

  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
} 