'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Code, Shield, Zap, Database, Eye, CheckCircle } from 'lucide-react';

const approachPoints = [
  'Deep workflow mapping',
  'Industry SME guidance',
  'Real users in real environments',
  'Iterative testing and refinement',
];

const technologies = [
  {
    icon: Zap,
    title: 'Workflow automation engines',
    description: 'Intelligent systems that streamline complex processes.',
  },
  {
    icon: Database,
    title: 'API aggregation',
    description: 'Seamlessly connect and integrate multiple data sources.',
  },
  {
    icon: Code,
    title: 'NLP for interpreting coverage descriptions',
    description: 'Natural language processing to understand complex insurance terms.',
  },
  {
    icon: Eye,
    title: 'Computer vision for food recognition',
    description: 'AI-powered image recognition for nutritional analysis.',
  },
  {
    icon: Shield,
    title: 'Secure data architecture',
    description: 'Enterprise-grade security and data protection.',
  },
  {
    icon: CheckCircle,
    title: 'HIPAA-ready frameworks',
    description: 'Compliant infrastructure for healthcare products.',
  },
];

const securityFeatures = [
  'End-to-end encryption',
  'No unnecessary PHI storage',
  'Secure authentication',
  'Audit-ready design',
  'Clear data governance policies',
];

export default function TechnologyPage() {
  return (
    <>
      <Hero
        title="How We Build"
        subtitle="Technology"
        description="Practical, ethical, and intelligent AI solutions built for real-world use."
        primaryCTA={{ text: 'View Our Products', href: '/products' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/contact' }}
        showParticles={false}
      />

      {/* Our Approach */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Our Approach"
              subtitle="We don't build theoretical AI. We build applied AI."
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We build applied AI, grounded in:
              </p>
              <div className="space-y-4 mb-6">
                {approachPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our products are designed to solve the actual pain points professionals face daily.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Core Technologies"
              subtitle="The building blocks of our solutions"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-cyan to-cyan-light rounded-lg">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Security & Compliance"
              subtitle="Enterprise-grade security built into every solution"
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

