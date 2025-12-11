'use client';

import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = ['All', 'AI/ML', 'Web', 'Mobile', 'Cloud', 'Blockchain'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <>
      <Hero
        title="Our Portfolio"
        subtitle="Our Work"
        description="Explore our diverse portfolio of successful projects across industries. From AI solutions to mobile apps, see how we transform ideas into reality."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ text: 'Our Services', href: '/services' }}
        showParticles={false}
      />

      {/* Filter */}
      <section className="py-12 bg-navy">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan to-cyan-light text-white shadow-lg shadow-cyan/30'
                    : 'bg-navy-light text-gray-400 hover:text-cyan border border-gray-800'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* Stats */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold gradient-text mb-2">150+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-400">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold gradient-text mb-2">25+</div>
                <div className="text-gray-400">Industries Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold gradient-text mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Technologies We Master</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TensorFlow',
              'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'GraphQL'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <div className="text-cyan font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

