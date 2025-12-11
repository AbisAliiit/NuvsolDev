'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Building meaningful, forward-thinking solutions.',
  },
  {
    icon: Target,
    title: 'Simplicity',
    description: 'Making technology easy to adopt and use.',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'Focusing on solving painful, unaddressed problems.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Ethical, responsible, and transparent AI.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with experts and clients to refine what we build.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Nuvsol"
        subtitle="Who We Are"
        description="We are a team of technologists, innovators, and problem-solvers dedicated to transforming real-world workflows using intelligent automation."
        primaryCTA={{ text: 'View Our Products', href: '/products' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        showParticles={false}
      />

      {/* Our Story */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Our Story"
              subtitle="Founded on a simple belief"
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
              <h3 className="text-3xl font-bold gradient-text mb-6">
                AI should solve real problems, not create new ones.
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We noticed that across industries like dentistry, healthcare, and food services, professionals 
                still relied on slow, outdated, manual processes. So we set out to build applications 
                grounded in:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Real workflow analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Industry SME collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Practical automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Ethical and reliable AI tooling</span>
                </li>
              </ul>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, our mission is to bring modern intelligence to underserved sectors where innovation 
                is long overdue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="card h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-cyan to-cyan-light rounded-full">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To design and deliver AI-powered solutions that eliminate operational bottlenecks, reduce 
                  manual effort, and empower professionals to perform at their best.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-cyan to-cyan-light rounded-full">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become a global leader in applied artificial intelligence by creating tools that bring clarity, 
                  efficiency, and transformation to real-world industries.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Our Values"
              subtitle="The principles that guide everything we do"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-cyan to-cyan-light rounded-full">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
