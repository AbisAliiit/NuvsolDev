'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Zap, Shield, Users, TrendingUp } from 'lucide-react';
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
    title: 'Ethical, reliable, and transparent technology',
    description: 'Built with integrity, security, and compliance in mind.',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Intelligent AI Solutions for Real-World Problems"
        subtitle="🚀 Practical AI-Powered Applications"
        description="Nuvsol builds practical AI-powered applications that eliminate manual workflows, improve efficiency, and empower professionals across industries like healthcare, food services, and operations."
        primaryCTA={{ text: 'Explore Our Products', href: '/products' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/contact' }}
      />

      {/* What We Do Section */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="What We Do"
              subtitle="Transforming complex workflows into intelligent, automated systems"
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We turn complex, outdated workflows into intelligent, automated systems.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Across many industries, professionals are still burdened by repetitive tasks, fragmented 
                systems, and inefficient processes.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                At Nuvsol, we use applied AI and workflow automation to streamline these 
                challenges—saving time, reducing errors, and enabling better outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Featured Solutions"
              subtitle="AI-powered products that transform real-world operations"
            />
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            {/* MealMind */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card group hover:border-cyan/70"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold gradient-text mb-3">MealMind</h3>
                <p className="text-gray-300 text-lg mb-4">
                  A home-cooking marketplace enhanced by AI-powered cravings, nutritional analysis, and 
                  health personalization.
                </p>
              </div>
              <Link href="/products/mealmind">
                <PrimaryButton className="group/btn">
                  Learn More
                  <Sparkles className="inline-block ml-2 w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                </PrimaryButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Nuvsol */}
      <section className="section-padding bg-navy-light">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan to-cyan-light rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan to-cyan-light">
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
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your workflows? Get in touch and let&apos;s discuss how we can help.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cyan font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all"
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

