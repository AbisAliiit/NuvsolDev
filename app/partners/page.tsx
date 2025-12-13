'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Users, Code, Heart, ArrowRight, Handshake } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

const partnerTypes = [
  {
    icon: Code,
    title: 'Senior solution architects',
    description: 'Technical experts who help design scalable, robust systems.',
  },
  {
    icon: Users,
    title: 'AI/ML engineers',
    description: 'Specialists in machine learning and artificial intelligence.',
  },
  {
    icon: Heart,
    title: 'Domain SMEs across healthcare and food industries',
    description: 'Industry experts who ensure our solutions solve real problems.',
  },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="Partners & Advisors"
        subtitle="Trusted Collaboration"
        description="At Nuvsol, we work closely with industry leaders and SMEs to ensure accuracy, relevance, and real-world impact."
        primaryCTA={{ text: 'Partner With Us', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Products', href: '/products' }}
        showParticles={false}
      />

      {/* Technology Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Technology Partners"
              subtitle="Working with the best in the industry"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">
                  <partner.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.title}</h3>
                <p className="text-gray-500">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-primary/10 rounded-full">
                <Handshake className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Join Us as a Partner
              </h2>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                We welcome collaborations with clinics, home cooks, health professionals, and 
                organizations seeking innovative automation.
              </p>
              <Link href="/contact">
                <PrimaryButton className="group/btn">
                  Partner With Us
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

