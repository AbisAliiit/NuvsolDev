'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Zap, Shield, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton';

const problems = [
  'Multiple insurer portals',
  'Manual code checks',
  'Limitations, frequencies & waiting periods',
  'Past claim history',
  'Manual re-entry into practice software',
];

const solutions = [
  'Retrieves insurance benefit data',
  'Extracts procedure-level coverage',
  'Interprets frequencies & limitations',
  'Analyzes claims history',
  'Summarizes everything into a clean, ready-to-use report',
];

const features = [
  {
    icon: Zap,
    title: 'Universal multi-insurer verification engine',
    description: 'Works with all major dental insurance providers.',
  },
  {
    icon: FileText,
    title: 'AI interpretation of CDT/CPT procedure codes',
    description: 'Automatically understands and interprets dental procedure codes.',
  },
  {
    icon: Clock,
    title: 'Real-time eligibility + coverage insights',
    description: 'Get instant verification results and coverage details.',
  },
  {
    icon: Shield,
    title: 'Automated workflow mapping',
    description: 'Seamlessly integrates into your existing practice workflow.',
  },
  {
    icon: FileText,
    title: 'Export-friendly verification summary',
    description: 'Clean, ready-to-use reports for your practice software.',
  },
  {
    icon: Zap,
    title: 'Future: direct Dentrix/Oryx/Curve integration',
    description: 'Coming soon - direct integration with popular practice management systems.',
  },
];

export default function VerifiDentPage() {
  return (
    <>
      <Hero
        title="VerifiDent"
        subtitle="AI-Powered Dental Insurance Verification"
        description="Transforming slow, manual insurance workflows into intelligent, automated processes that support same-day treatment decisions."
        primaryCTA={{ text: 'Join the Waitlist', href: '/contact' }}
        secondaryCTA={{ text: 'Get a Demo', href: '/contact' }}
        showParticles={false}
      />

      {/* The Problem */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="The Problem"
              subtitle="Dental clinics spend 20–40 minutes per patient verifying insurance"
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
              <div className="space-y-3 mb-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-500">{problem}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-500 leading-relaxed">
                This causes delays, administrative burnout, and lost treatment opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="The VerifiDent Solution"
              subtitle="VerifiDent automates the full verification workflow"
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
              <div className="space-y-4 mb-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500 text-lg">{solution}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl font-semibold text-gray-900">
                Same-day treatment approvals become simple.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Key Features"
              subtitle="Everything you need for seamless insurance verification"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-primary/10 rounded-full">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Pilot Program
              </h2>
              <p className="text-xl text-gray-500 mb-4 leading-relaxed">
                We are currently piloting VerifiDent with leading dental practices to refine workflows, 
                accuracy, and efficiency.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Become an early adopter and shape the future of dental automation.
              </p>
              <Link href="/contact">
                <PrimaryButton className="group/btn">
                  Apply for Pilot Access
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </PrimaryButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

