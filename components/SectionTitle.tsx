'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-16 ${alignClass}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

