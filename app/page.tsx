'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Zap, Shield, Users, TrendingUp, Settings, Brain, ShieldCheck, Layers } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import Image from 'next/image';

const whyNuvsol = [
  {
    icon: Users,
    title: 'Built in partnership with industry experts',
    description: 'We collaborate closely with SMEs to ensure accuracy and real-world impact.',
  },
  {
    icon: Zap,
    title: 'Practical AI designed for real-world operations',
    description: 'Our solutions solve actual pain points professionals face daily.',
  },
  {
    icon: TrendingUp,
    title: 'Strong focus on workflow intelligence',
    description: 'Deep workflow mapping and automation to streamline processes.',
  },
  {
    icon: Shield,
    title: 'Scalable architecture for enterprise growth',
    description: 'Built to scale with your business needs and growth.',
  },
  {
    icon: CheckCircle,
    title: 'Ethical, reliable, and transparent technology',
    description: 'Built with integrity, security, and compliance in mind.',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Intelligent AI Solutions for Real-World Problems"
        description="Nuvsol builds practical AI-powered applications that eliminate manual workflows, improve efficiency, and empower professionals across industries like healthcare, food services, and operations."
        primaryCTA={{ text: 'Explore Our Products', href: '/products' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/contact' }}
        // Carousel is enabled by default with brain/AI images
        // To use a single image, uncomment: heroImage="/ai-hero.jpg"
        // To use video, uncomment: heroVideo="/ai-hero-video.mp4"
      />

      {/* Featured Solutions Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Header - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              WHAT WE DO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              We turn complex, outdated workflows into intelligent, automated systems. Across many industries, professionals are still burdened by repetitive tasks, fragmented systems, and inefficient processes. At Nuvsol, we use applied AI and workflow automation to streamline these challenges—saving time, reducing errors, and enabling better outcomes.
            </p>
          </motion.div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Brain,
                title: 'MealMind',
                description: 'A home-cooking marketplace enhanced by AI-powered cravings, nutritional analysis, and health personalization.',
                href: '/products/mealmind',
              },
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {solution.description}
                </p>

                {/* Learn More Link */}
                <Link
                  href={solution.href || '#'}
                  className="text-primary font-medium text-sm hover:text-primary-dark transition-colors inline-flex items-center gap-1 mt-auto"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* How We Deliver Excellence */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              How we deliver excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                text: 'We start by understanding your business, goals, and challenges through in-depth consultation.',
              },
              {
                number: '02',
                text: 'Our team develops a comprehensive strategy and roadmap tailored to your specific needs.',
              },
              {
                number: '03',
                text: 'We build your solution using agile methodologies, ensuring quality at every stage.',
              },
              {
                number: '04',
                text: 'Rigorous testing and quality assurance to ensure flawless performance and reliability.',
              },
              {
                number: '05',
                text: 'Smooth launch and deployment with minimal disruption to your operations.',
              },
              {
                number: '06',
                text: 'Ongoing maintenance, updates, and support to ensure continued success.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Large Number in Top-Right */}
                <div className="absolute top-4 right-4">
                  <span className="text-6xl md:text-7xl font-bold text-primary/20 leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <p className="text-gray-900 text-sm leading-relaxed relative z-10 pr-8">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nuvsol */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Why Nuvsol"
              subtitle="What sets us apart in the world of applied AI"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyNuvsol.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s build the future of intelligent automation — together.
            </h2>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:bg-gray-50"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

