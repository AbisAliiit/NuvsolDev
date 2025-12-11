'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { CheckCircle, Utensils, Heart, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton';

const problems = [
  'Home-cooked authenticity',
  'Health-driven personalization',
  'Nutritional accuracy',
  'Ability to request custom meals',
];

const solutions = [
  'Authentic cultural meals',
  'Healthy food prepared at home',
  'Weekly prep meals',
  'Custom cravings',
  'Event or catering requests',
];

const features = [
  {
    icon: Utensils,
    title: 'Set-menu home cook marketplace',
    description: 'Browse meals from verified home cooks in your community.',
  },
  {
    icon: Sparkles,
    title: 'AI food recognition + macro calculation',
    description: 'Automatically calculate nutritional information from photos.',
  },
  {
    icon: Users,
    title: 'Craving-based bidding system',
    description: 'Request custom meals and let cooks bid on your cravings.',
  },
  {
    icon: Heart,
    title: 'Health filters (diabetes, allergies, macro goals)',
    description: 'Find meals that match your dietary needs and health goals.',
  },
  {
    icon: Shield,
    title: 'Secure cook & user profiles',
    description: 'Verified profiles with ratings and reviews for trust and safety.',
  },
  {
    icon: Utensils,
    title: 'Ratings, ordering, delivery tracking',
    description: 'Complete ordering experience with real-time tracking.',
  },
];

export default function MealMindPage() {
  return (
    <>
      <Hero
        title="MealMind"
        subtitle="Eat What You Crave. Powered by AI."
        description="A home-cooking marketplace that allows users to order authentic meals, request custom dishes through AI-supported bidding, and track nutritional goals effortlessly."
        primaryCTA={{ text: 'Explore Meals', href: '/contact' }}
        secondaryCTA={{ text: 'Apply to Cook', href: '/contact' }}
        showParticles={false}
      />

      {/* The Problem */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="The Problem"
              subtitle="People crave authentic food, healthy options, or culturally specific dishes"
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
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                But traditional delivery apps don&apos;t provide:
              </p>
              <div className="space-y-3 mb-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{problem}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Home cooks also lack a stable way to earn income doing what they love.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="The MealMind Solution"
              subtitle="Connecting home cooks with customers"
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
                MealMind connects home cooks with customers seeking:
              </p>
              <div className="space-y-4 mb-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{solution}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                AI features include macro estimation, health preference mapping, and intelligent bidding for 
                personalized orders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Key Features"
              subtitle="Everything you need for a seamless food experience"
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
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-cyan to-cyan-light rounded-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-cyan to-cyan-light rounded-full">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Join as a Home Cook</h3>
                <p className="text-gray-300 mb-6">Earn money doing what you love.</p>
                <Link href="/contact">
                  <PrimaryButton className="group/btn">
                    Apply to Cook
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </PrimaryButton>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-cyan to-cyan-light rounded-full">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Discover Meals</h3>
                <p className="text-gray-300 mb-6">Find authentic, healthy meals made in your community.</p>
                <Link href="/contact">
                  <PrimaryButton className="group/btn">
                    Explore Meals
                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </PrimaryButton>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

