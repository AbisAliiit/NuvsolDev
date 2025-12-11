'use client';

import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

const serviceDetails = [
  {
    title: 'AI & Machine Learning',
    description: 'Transform your business with intelligent automation and predictive analytics.',
    features: [
      'Custom ML Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Strategy Consulting',
      'Model Training & Optimization',
    ],
    color: 'from-cyan to-cyan-light',
  },
  {
    title: 'Web Development',
    description: 'Modern, scalable web applications built with the latest technologies.',
    features: [
      'Full-Stack Development',
      'Progressive Web Apps',
      'E-Commerce Solutions',
      'CMS Development',
      'API Development & Integration',
      'Performance Optimization',
    ],
    color: 'from-blue-500 to-cyan',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that users love.',
    features: [
      'iOS & Android Development',
      'React Native & Flutter',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'In-App Payments',
    ],
    color: 'from-cyan-light to-blue-400',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure for modern businesses.',
    features: [
      'Cloud Migration',
      'AWS, Azure, GCP',
      'DevOps & CI/CD',
      'Microservices Architecture',
      'Kubernetes & Docker',
      'Cloud Security',
    ],
    color: 'from-cyan to-blue-500',
  },
  {
    title: 'Data Analytics',
    description: 'Turn data into actionable insights with advanced analytics.',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Big Data Processing',
      'ETL Pipeline Development',
      'Real-Time Analytics',
      'Custom Dashboards',
    ],
    color: 'from-blue-400 to-cyan-light',
  },
  {
    title: 'Digital Transformation',
    description: 'Comprehensive consulting to modernize your technology stack.',
    features: [
      'Technology Assessment',
      'Digital Strategy',
      'Process Automation',
      'Legacy System Modernization',
      'Change Management',
      'Training & Support',
    ],
    color: 'from-cyan-light to-cyan',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and challenges through in-depth consultation.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Our team develops a comprehensive strategy and roadmap tailored to your specific needs.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'We build your solution using agile methodologies, ensuring quality at every stage.',
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Rigorous testing and quality assurance to ensure flawless performance and reliability.',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'Smooth launch and deployment with minimal disruption to your operations.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and support to ensure continued success.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Solutions"
        description="From AI and machine learning to web and mobile development, we offer end-to-end technology solutions tailored to your business needs."
        primaryCTA={{ text: 'Get a Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Portfolio', href: '/portfolio' }}
        showParticles={false}
      />

      {/* Services Grid */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Service Details"
              subtitle="Everything you need to succeed"
            />
          </AnimatedSection>

          <div className="space-y-8">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${service.color} rounded-lg text-white font-bold text-sm mb-4`}>
                      Service {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Our Process"
              subtitle="How we deliver excellence"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card relative"
              >
                <div className="text-6xl font-bold gradient-text opacity-20 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let&apos;s discuss your project and how we can help you achieve your goals.
            </p>
            <Link href="/contact">
              <PrimaryButton className="group">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </PrimaryButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

