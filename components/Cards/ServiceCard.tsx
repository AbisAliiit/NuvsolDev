'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card group cursor-pointer"
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

