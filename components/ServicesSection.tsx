'use client';

import { Brain, Code, Smartphone, Cloud, Database, Zap } from 'lucide-react';
import ServiceCard from './Cards/ServiceCard';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Harness the power of AI with custom machine learning models, natural language processing, and computer vision solutions.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies and best practices for optimal performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services powered by AWS, Azure, and Google Cloud Platform.',
  },
  {
    icon: Database,
    title: 'Data Analytics & Services',
    description: 'Transform raw data into actionable insights with advanced analytics, data visualization, business intelligence, and comprehensive data services.',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation consulting to modernize your business processes and technology stack.',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive solutions tailored to your business needs"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

