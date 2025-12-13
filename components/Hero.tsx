'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  showParticles?: boolean;
  heroImage?: string;
  heroVideo?: string;
  carouselImages?: string[];
}

// AI & Data Science themed images - Using local images from public/carousel/ folder
const defaultCarouselImages = [
  '/carousel/carousel-image-1.jpg',
  '/carousel/carousel-image-2.jpg',
  '/carousel/carousel-image-3.jpg',
  '/carousel/carousel-image-4.jpg',
];

export default function Hero({ 
  title, 
  subtitle,
  description, 
  primaryCTA, 
  secondaryCTA,
  showParticles = true,
  heroImage,
  heroVideo,
  carouselImages = defaultCarouselImages
}: HeroProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || heroVideo || heroImage) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length, heroVideo, heroImage]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 174, 239, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 174, 239, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary opacity-60" />
      <div className="absolute top-32 left-1/2 w-2 h-8 bg-primary/40 opacity-40" />
      <div className="absolute top-24 right-20 w-8 h-8 border border-primary rounded-full opacity-30" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary to-blue text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                  >
                    {primaryCTA.text}
                  </motion.button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/50"
                  >
                    {secondaryCTA.text}
                  </motion.button>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right Side - AI Image/Video/Carousel */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-2xl"
            >
              {/* Carousel Mode - Multiple Images */}
              {!heroVideo && !heroImage && carouselImages.length > 0 ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="relative w-full aspect-video">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={carouselImages[currentSlide]}
                          alt={`AI Technology ${currentSlide + 1}`}
                          fill
                          className="object-cover"
                          priority={currentSlide === 0}
                          unoptimized={carouselImages[currentSlide].startsWith('http')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                        {/* Animated Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-blue/20 animate-pulse" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6 text-primary" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentSlide
                            ? 'w-8 bg-primary'
                            : 'w-2 bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Slide Counter */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full z-10">
                    {currentSlide + 1} / {carouselImages.length}
                  </div>

                  {/* Floating AI Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
                  <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue rounded-full animate-pulse" />
                  <div className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-primary-light rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                </div>
              ) : heroVideo ? (
                /* Video Section */
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {!isVideoPlaying ? (
                    <>
                      {/* Video Thumbnail/Poster */}
                      {heroImage && (
                        <div className="relative w-full aspect-video">
                          <Image
                            src={heroImage}
                            alt="AI Technology"
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                        </div>
                      )}
              {/* Play Button Overlay */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group z-10"
              >
                        <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                {/* Concentric Circles */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-dashed border-primary rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute inset-0 border-2 border-dashed border-primary rounded-full"
                />
              </motion.button>
                    </>
                  ) : (
                    /* Video Player */
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-2xl"
                      onPlay={() => setIsVideoPlaying(true)}
                    >
                      <source src={heroVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ) : heroImage ? (
                /* Image Section */
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={heroImage}
                      alt="AI & Machine Learning Technology"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    {/* Animated Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-blue/20 animate-pulse" />
                  </div>
                  {/* Floating AI Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-ping" />
                  <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue rounded-full animate-pulse" />
                  <div className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-primary-light rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                </div>
              ) : (
                /* Fallback: Animated AI Visualization */
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-navy-light to-navy border border-primary/30 shadow-2xl">
                  {/* Animated Neural Network */}
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#00AEEF', stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: '#0066FF', stopOpacity: 0.9 }} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Neural Network Connections */}
                    <g stroke="#00AEEF" strokeWidth="2" opacity="0.3">
                      <line x1="100" y1="150" x2="300" y2="200" />
                      <line x1="100" y1="150" x2="300" y2="300" />
                      <line x1="200" y1="100" x2="300" y2="200" />
                      <line x1="200" y1="100" x2="300" y2="300" />
                      <line x1="300" y1="200" x2="500" y2="250" />
                      <line x1="300" y1="200" x2="500" y2="350" />
                      <line x1="300" y1="300" x2="500" y2="250" />
                      <line x1="300" y1="300" x2="500" y2="350" />
                      <line x1="500" y1="250" x2="700" y2="200" />
                      <line x1="500" y1="250" x2="700" y2="400" />
                      <line x1="500" y1="350" x2="700" y2="200" />
                      <line x1="500" y1="350" x2="700" y2="400" />
                    </g>
                    
                    {/* Neural Network Nodes */}
                    <circle cx="100" cy="150" r="12" fill="url(#nodeGradient)" filter="url(#glow)" className="animate-pulse" />
                    <circle cx="200" cy="100" r="12" fill="url(#nodeGradient)" filter="url(#glow)" style={{ animationDelay: '0.2s' }} className="animate-pulse" />
                    <circle cx="300" cy="200" r="15" fill="url(#nodeGradient)" filter="url(#glow)" style={{ animationDelay: '0.4s' }} className="animate-pulse" />
                    <circle cx="300" cy="300" r="15" fill="url(#nodeGradient)" filter="url(#glow)" style={{ animationDelay: '0.6s' }} className="animate-pulse" />
                    <circle cx="500" cy="250" r="18" fill="url(#nodeGradient)" filter="url(#glow)" style={{ animationDelay: '0.8s' }} className="animate-pulse" />
                    <circle cx="500" cy="350" r="18" fill="url(#nodeGradient)" filter="url(#glow)" style={{ animationDelay: '1s' }} className="animate-pulse" />
                    <circle cx="700" cy="200" r="12" fill="url(#nodeGradient)" filter="url(#glow)" style={{ animationDelay: '1.2s' }} className="animate-pulse" />
                    <circle cx="700" cy="400" r="12" fill="url(#nodeGradient)" filter="url(#glow)" style={{ animationDelay: '1.4s' }} className="animate-pulse" />
                  </svg>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        initial={{
                          x: Math.random() * 800,
                          y: Math.random() * 600,
                          opacity: 0
                        }}
                        animate={{
                          y: [null, Math.random() * 600],
                          x: [null, Math.random() * 800],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
