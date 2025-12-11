'use client';

import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@nuvsol.com',
    link: 'mailto:contact@nuvsol.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Virginia, USA',
    link: null,
  },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:bg-blue-600' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:bg-sky-500' },
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:bg-gray-700' },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Contact Us"
        description="Have questions? Interested in partnering? Want to join our pilot programs? We'd love to connect."
        showParticles={false}
      />

      {/* Contact Info Cards */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:border-cyan/70"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-gradient-to-br from-cyan to-cyan-light rounded-full">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-cyan mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-sm">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <AnimatedSection>
            <SectionTitle
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you within 24 hours"
            />
          </AnimatedSection>

          <ContactForm />
        </div>
      </section>


      {/* Social & Map */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Links */}
            <AnimatedSection>
              <div className="card h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
                <p className="text-gray-400 mb-6">
                  Follow us on social media to stay updated with our latest projects, insights, and company news.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-4 bg-navy-light rounded-lg transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Map Placeholder */}
            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <div className="w-full h-64 bg-navy-dark rounded-lg flex items-center justify-center border border-gray-800">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-cyan mx-auto mb-3" />
                    <p className="text-gray-400">Interactive Map</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Location: Virginia, USA
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Quick answers to common questions"
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. Most projects range from 8-16 weeks from kickoff to launch.',
              },
              {
                q: 'Do you offer ongoing support and maintenance?',
                a: 'Yes! We provide comprehensive maintenance packages to ensure your solution continues to perform optimally.',
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We work across various industries including healthcare, fintech, e-commerce, education, and enterprise SaaS.',
              },
              {
                q: 'Can you work with our existing team?',
                a: 'Absolutely! We offer staff augmentation and can seamlessly integrate with your existing development team.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

