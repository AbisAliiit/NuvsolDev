'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import PrimaryButton from './Buttons/PrimaryButton';

interface FormData {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: '',
        message: '',
      });

      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors"
            placeholder="Your Organization"
          />
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
            Type of Inquiry *
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Select an option</option>
            <option value="partnership">Partnership</option>
            <option value="demo">Demo</option>
            <option value="support">Support</option>
            <option value="careers">Careers</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully! We&apos;ll get back to you soon.</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Something went wrong. Please try again.</span>
          </motion.div>
        )}

        <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          className="w-full group"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              Send Message
              <Send className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </PrimaryButton>
      </form>
    </div>
  );
}

