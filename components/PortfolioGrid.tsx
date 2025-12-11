'use client';

import PortfolioCard from './Cards/PortfolioCard';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Enterprise-grade analytics platform with real-time insights and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['AI/ML', 'React', 'Python', 'TensorFlow'],
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'Feature-rich shopping app with AR try-on and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    tags: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive patient management and telemedicine platform for modern healthcare.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Django', 'PostgreSQL'],
  },
  {
    title: 'Smart City IoT Dashboard',
    description: 'Real-time monitoring and control system for urban infrastructure and services.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
    tags: ['IoT', 'React', 'AWS', 'GraphQL'],
  },
  {
    title: 'Blockchain Payment Gateway',
    description: 'Secure, decentralized payment solution with multi-currency support.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    tags: ['Blockchain', 'Solidity', 'Web3.js'],
  },
  {
    title: 'AI Content Generator',
    description: 'GPT-powered content creation tool for marketing and creative professionals.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['OpenAI', 'Next.js', 'TypeScript'],
  },
];

export default function PortfolioGrid() {
  return (
    <section className="section-padding bg-navy-light">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title="Our Portfolio"
            subtitle="Showcasing innovation and excellence in every project"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

