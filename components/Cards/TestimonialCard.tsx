'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  index: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  image, 
  testimonial, 
  index 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card relative"
    >
      <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/20" />
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-primary">{role}</p>
          <p className="text-xs text-gray-400">{company}</p>
        </div>
      </div>
      <p className="text-gray-300 italic leading-relaxed">
        &quot;{testimonial}&quot;
      </p>
    </motion.div>
  );
}

