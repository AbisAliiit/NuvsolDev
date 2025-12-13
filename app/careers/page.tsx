'use client';

import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Heart, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

const benefits = [
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work with talented professionals in a supportive, team-oriented environment.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'Use the latest technologies and tools to build innovative solutions.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible hours, remote options, and generous time off to maintain balance.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Continuous learning opportunities and clear paths for advancement.',
  },
];

const openings = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco, CA',
    type: 'Full-Time',
    description: 'We\'re looking for an experienced full-stack developer to join our engineering team and build scalable web applications.',
    requirements: [
      '5+ years of experience with React, Node.js, and TypeScript',
      'Strong understanding of modern web architectures',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Excellent problem-solving and communication skills',
    ],
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'Hybrid / New York, NY',
    type: 'Full-Time',
    description: 'Join our AI team to develop cutting-edge machine learning models and solutions for enterprise clients.',
    requirements: [
      'MS/PhD in Computer Science, AI, or related field',
      'Strong experience with TensorFlow, PyTorch, or similar frameworks',
      'Knowledge of NLP, computer vision, or reinforcement learning',
      'Published research or significant ML project portfolio',
    ],
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / Los Angeles, CA',
    type: 'Full-Time',
    description: 'Create beautiful, intuitive user experiences for our diverse portfolio of products and clients.',
    requirements: [
      '3+ years of experience in UX/UI design',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating design thinking',
      'Experience with user research and testing',
    ],
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Austin, TX',
    type: 'Full-Time',
    description: 'Build and maintain scalable infrastructure and CI/CD pipelines for our products.',
    requirements: [
      '4+ years of DevOps or SRE experience',
      'Expertise in Kubernetes, Docker, and cloud platforms',
      'Strong scripting skills (Python, Bash, etc.)',
      'Experience with monitoring and observability tools',
    ],
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Hybrid / Boston, MA',
    type: 'Full-Time',
    description: 'Drive product strategy and execution for our flagship AI products.',
    requirements: [
      '5+ years of product management experience',
      'Technical background or strong technical understanding',
      'Experience with B2B SaaS products',
      'Excellent leadership and communication skills',
    ],
  },
  {
    title: 'Mobile Developer (iOS/Android)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Develop native mobile applications that delight users and deliver exceptional performance.',
    requirements: [
      '3+ years of mobile development experience',
      'Proficiency in Swift/Kotlin or React Native/Flutter',
      'Experience with mobile app architecture and best practices',
      'Portfolio of published apps',
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Join NUVSOL"
        subtitle="Careers"
        description="Build the future with us. We're always looking for talented, passionate individuals to join our team and make an impact."
        primaryCTA={{ text: 'View Open Positions', href: '#openings' }}
        secondaryCTA={{ text: 'Learn About Us', href: '/about' }}
        showParticles={false}
      />

      {/* Why Join Us */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Why Join NUVSOL?"
              subtitle="More than just a job - it's a career you'll love"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-primary to-purple rounded-full">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-black-light">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle title="Perks & Benefits" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '🏥 Comprehensive Health Insurance',
              '🏖️ Unlimited PTO',
              '💰 Competitive Salary',
              '🏠 Remote Work Options',
              '📚 Learning Budget',
              '🎯 Stock Options',
              '🍕 Free Meals & Snacks',
              '🎉 Team Events & Retreats',
              '💻 Latest Tech Equipment',
              '🏋️ Gym Membership',
              '👶 Parental Leave',
              '🚀 Career Development',
            ].map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card"
              >
                <p className="text-white font-medium">{perk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section-padding bg-black">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Open Positions"
              subtitle={`${openings.length} opportunities to make an impact`}
            />
          </AnimatedSection>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:border-primary/70 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {job.type}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{job.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary">Requirements:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary group/btn"
                      >
                        Apply Now
                        <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-purple">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and let&apos;s talk!
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all"
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

