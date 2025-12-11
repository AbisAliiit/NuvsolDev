'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

export default function PortfolioCard({ title, description, image, tags, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card group overflow-hidden cursor-pointer"
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
        <div className="absolute top-4 right-4 p-2 bg-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-5 h-5 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-4 text-sm">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-navy border border-cyan/30 text-cyan rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

