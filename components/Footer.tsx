'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Technology', path: '/technology' },
    { name: 'Partners', path: '/partners' },
  ],
  Products: [
    { name: 'MealMind', path: '/products/mealmind' },
  ],
  Resources: [
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:contact@nuvsol.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">NUVSOL</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Practical AI-powered applications that eliminate manual workflows, improve 
              efficiency, and empower professionals across industries.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan" />
                <span>Virginia, USA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-cyan" />
                <a href="mailto:contact@nuvsol.com" className="hover:text-cyan transition-colors">
                  contact@nuvsol.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-gray-400 hover:text-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NUVSOL. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-2 bg-navy-light rounded-full hover:bg-cyan transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

