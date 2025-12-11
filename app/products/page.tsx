'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from 'next/image';

const products = [
  {
    name: 'MealMind',
    title: 'AI-Enhanced Home Cooking Marketplace',
    description: 'MealMind connects home cooks with customers through a smart marketplace powered by cravings-based bidding, nutritional AI, and health personalization.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    href: '/products/mealmind',
    color: 'from-cyan-light to-blue-400',
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="Our Products"
        subtitle="AI-Powered Solutions"
        description="AI-powered solutions designed to simplify real-world operations."
        primaryCTA={{ text: 'Partner With Us', href: '/contact' }}
        secondaryCTA={{ text: 'Learn How We Build', href: '/technology' }}
        showParticles={false}
      />

      {/* Products Grid */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group overflow-hidden hover:border-cyan/70"
              >
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold gradient-text mb-3">{product.name}</h3>
                  <p className="text-gray-300 text-lg mb-2 font-semibold">{product.title}</p>
                  <p className="text-gray-400 leading-relaxed">{product.description}</p>
                </div>
                <Link href={product.href}>
                  <PrimaryButton className="group/btn">
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </PrimaryButton>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Products */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Future Products</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are actively developing new solutions in healthcare, clinical research, operations, and 
                workflow automation.
              </p>
              <Link href="/contact">
                <PrimaryButton className="group/btn">
                  Partner With Us
                  <Sparkles className="inline-block ml-2 w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                </PrimaryButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

