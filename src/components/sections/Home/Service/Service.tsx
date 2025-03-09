"use client";

import React from "react";
import {
  Code,
  Layers,
  Database,
  LineChart,
  Code2,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import { SectionTitle } from "@/components/modules/SectionTitle";


const Service: React.FC = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Create stunning, user-friendly fullstack web applications using modern technologies."
    },
    {
      icon: <Layers size={24} />,
      title: "Full-Stack Solutions",
      description: "End-to-end solutions from frontend to backend development, ensuring seamless integration and optimal performance."
    },
    {
      icon: <Database size={24} />,
      title: "Database Management",
      description: "Expert database design, optimization, and management for efficient data storage and retrieval operations."
    },
    {
      icon: <LineChart size={24} />,
      title: "Analytics & SEO",
      description: "Implementing analytics tools and SEO best practices to track performance and improve search engine rankings."
    }
  ];

  return (
    <section id="services" className="py-24 relative">
        <SectionTitle title="Service" description="If you`re looking for reliable and professional support, I’m here to help! I offer a variety of services, including the following" icon={<Code2 />} />
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* CTA */}
        {/* <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-400 to-green-500 animate-border-flow"></div>
            </div>
            <a 
              href="#contact" 
              className="relative inline-block py-3 px-8 bg-neutral-900 text-white font-medium rounded-full z-10"
            >
              Get Started
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Service;
