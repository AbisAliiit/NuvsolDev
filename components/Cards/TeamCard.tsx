'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  index: number;
}

export default function TeamCard({ name, role, image, bio, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card text-center group"
    >
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cyan/20 group-hover:border-cyan transition-colors">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-cyan text-sm mb-3">{role}</p>
      <p className="text-gray-400 text-sm mb-4">{bio}</p>
      <div className="flex justify-center gap-3">
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="p-2 bg-navy rounded-full hover:bg-cyan transition-colors cursor-pointer"
        >
          <Linkedin className="w-4 h-4" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="p-2 bg-navy rounded-full hover:bg-cyan transition-colors cursor-pointer"
        >
          <Twitter className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

