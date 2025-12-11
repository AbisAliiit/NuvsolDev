'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PrimaryButton from './Buttons/PrimaryButton';
import SecondaryButton from './Buttons/SecondaryButton';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  showParticles?: boolean;
}

export default function Hero({ 
  title, 
  subtitle,
  description, 
  primaryCTA, 
  secondaryCTA,
  showParticles = true 
}: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-dark via-navy to-navy-light">
      {/* Animated Background */}
      {showParticles && mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan rounded-full opacity-20"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
              }}
              animate={{
                y: [null, Math.random() * dimensions.height],
                x: [null, Math.random() * dimensions.width],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-light/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle Badge */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyan/30 rounded-full bg-cyan/10 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-sm text-cyan font-medium">{subtitle}</span>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            {title.split(' ').map((word, index) => (
              <span key={index}>
                {index % 2 === 0 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  <span className="text-white"> {word}</span>
                )}{' '}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <PrimaryButton className="group">
                  {primaryCTA.text}
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </PrimaryButton>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <SecondaryButton>{secondaryCTA.text}</SecondaryButton>
              </Link>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan/50 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-cyan rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

