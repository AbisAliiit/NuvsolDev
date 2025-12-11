# Component Documentation

This document provides a comprehensive overview of all components in the NUVSOL website.

## Table of Contents

1. [Global Components](#global-components)
2. [Layout Components](#layout-components)
3. [UI Components](#ui-components)
4. [Card Components](#card-components)
5. [Section Components](#section-components)
6. [Animation Patterns](#animation-patterns)

---

## Global Components

### Navbar

**Location:** `components/Navbar.tsx`

**Description:** Sticky navigation bar with scroll effects and mobile menu.

**Features:**
- Transparent background that becomes solid on scroll
- Active page indicator with smooth animation
- Responsive mobile menu
- Smooth transitions

**Props:** None (uses Next.js router internally)

**Usage:**
```tsx
import Navbar from '@/components/Navbar';

<Navbar />
```

---

### Footer

**Location:** `components/Footer.tsx`

**Description:** Comprehensive footer with links, contact info, and social media.

**Features:**
- Multi-column layout (responsive)
- Contact information
- Social media links with hover animations
- Organized link sections

**Props:** None

**Usage:**
```tsx
import Footer from '@/components/Footer';

<Footer />
```

---

## Layout Components

### Hero

**Location:** `components/Hero.tsx`

**Description:** Animated hero section with gradient text and CTAs.

**Props:**
- `title` (string) - Main heading
- `subtitle?` (string) - Optional badge text
- `description` (string) - Subheading text
- `primaryCTA?` (object) - `{ text: string, href: string }`
- `secondaryCTA?` (object) - `{ text: string, href: string }`
- `showParticles?` (boolean) - Show animated particles (default: true)

**Features:**
- Animated background particles
- Gradient text effects
- Scroll indicator
- Animated CTAs

**Usage:**
```tsx
<Hero
  title="Innovation Meets Excellence"
  subtitle="🚀 Cutting-Edge Technology"
  description="Transform your business..."
  primaryCTA={{ text: 'Get Started', href: '/contact' }}
  secondaryCTA={{ text: 'Learn More', href: '/about' }}
/>
```

---

### AnimatedSection

**Location:** `components/AnimatedSection.tsx`

**Description:** Wrapper component for scroll-triggered animations.

**Props:**
- `children` (ReactNode) - Content to animate
- `className?` (string) - Additional CSS classes
- `delay?` (number) - Animation delay in seconds (default: 0)

**Features:**
- Fade-in and slide-up animation
- Triggers once when scrolling into view
- Customizable delay

**Usage:**
```tsx
<AnimatedSection delay={0.2}>
  <YourContent />
</AnimatedSection>
```

---

### SectionTitle

**Location:** `components/SectionTitle.tsx`

**Description:** Reusable section heading component.

**Props:**
- `title` (string) - Main heading
- `subtitle?` (string) - Optional subtitle
- `align?` ('left' | 'center' | 'right') - Text alignment (default: 'center')

**Features:**
- Gradient text effect
- Consistent styling
- Animated entrance

**Usage:**
```tsx
<SectionTitle
  title="Our Services"
  subtitle="What we offer"
  align="center"
/>
```

---

## UI Components

### PrimaryButton

**Location:** `components/Buttons/PrimaryButton.tsx`

**Description:** Main CTA button with gradient background.

**Props:**
- `children` (ReactNode) - Button text/content
- `onClick?` (function) - Click handler
- `type?` ('button' | 'submit' | 'reset') - Button type (default: 'button')
- `className?` (string) - Additional classes
- `disabled?` (boolean) - Disabled state (default: false)

**Features:**
- Gradient background
- Scale animation on hover/click
- Shadow effects

**Usage:**
```tsx
<PrimaryButton onClick={handleClick}>
  Click Me
</PrimaryButton>
```

---

### SecondaryButton

**Location:** `components/Buttons/SecondaryButton.tsx`

**Description:** Outline button for secondary actions.

**Props:** Same as PrimaryButton

**Features:**
- Border-only style
- Fills with color on hover
- Scale animation

**Usage:**
```tsx
<SecondaryButton onClick={handleClick}>
  Learn More
</SecondaryButton>
```

---

### ContactForm

**Location:** `components/ContactForm.tsx`

**Description:** Contact form with validation and feedback.

**Props:** None

**Features:**
- Form validation
- Success/error messages
- Animated feedback
- Accessible inputs

**State Management:**
- Uses React `useState` for form data
- Simulated submission (replace with real API)

**Usage:**
```tsx
<ContactForm />
```

**To Connect Real API:**

Replace the simulated API call in `handleSubmit`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      // Reset form
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Card Components

### ServiceCard

**Location:** `components/Cards/ServiceCard.tsx`

**Description:** Card for displaying service information.

**Props:**
- `icon` (LucideIcon) - Icon component
- `title` (string) - Service name
- `description` (string) - Service description
- `index` (number) - For stagger animation

**Features:**
- Icon with gradient background
- Hover lift effect
- Staggered entrance animation

**Usage:**
```tsx
import { Code } from 'lucide-react';

<ServiceCard
  icon={Code}
  title="Web Development"
  description="Modern web apps..."
  index={0}
/>
```

---

### PortfolioCard

**Location:** `components/Cards/PortfolioCard.tsx`

**Description:** Card for portfolio/project showcase.

**Props:**
- `title` (string) - Project name
- `description` (string) - Project description
- `image` (string) - Image URL
- `tags` (string[]) - Technology tags
- `index` (number) - For stagger animation

**Features:**
- Image with overlay
- Hover zoom effect
- Tag badges
- External link icon on hover

**Usage:**
```tsx
<PortfolioCard
  title="E-Commerce Platform"
  description="Full-stack shopping app"
  image="https://..."
  tags={['React', 'Node.js', 'MongoDB']}
  index={0}
/>
```

---

### TeamCard

**Location:** `components/Cards/TeamCard.tsx`

**Description:** Card for team member profiles.

**Props:**
- `name` (string) - Team member name
- `role` (string) - Job title
- `image` (string) - Profile image URL
- `bio` (string) - Short biography
- `index` (number) - For stagger animation

**Features:**
- Circular profile image
- Social media links
- Hover effects

**Usage:**
```tsx
<TeamCard
  name="John Doe"
  role="CEO"
  image="https://..."
  bio="Visionary leader..."
  index={0}
/>
```

---

### TestimonialCard

**Location:** `components/Cards/TestimonialCard.tsx`

**Description:** Card for client testimonials.

**Props:**
- `name` (string) - Client name
- `role` (string) - Job title
- `company` (string) - Company name
- `image` (string) - Profile image URL
- `testimonial` (string) - Quote text
- `index` (number) - For stagger animation

**Features:**
- Quote icon
- Client profile
- Styled quotation

**Usage:**
```tsx
<TestimonialCard
  name="Jane Smith"
  role="CTO"
  company="TechCorp"
  image="https://..."
  testimonial="Amazing work!"
  index={0}
/>
```

---

## Section Components

### ServicesSection

**Location:** `components/ServicesSection.tsx`

**Description:** Complete services section with grid.

**Props:** None

**Features:**
- Predefined services array
- Responsive grid layout
- Section title included

**Usage:**
```tsx
<ServicesSection />
```

**To Customize Services:**

Edit the `services` array in the component:

```tsx
const services = [
  {
    icon: YourIcon,
    title: 'Your Service',
    description: 'Description...',
  },
  // ...
];
```

---

### PortfolioGrid

**Location:** `components/PortfolioGrid.tsx`

**Description:** Complete portfolio section with project grid.

**Props:** None

**Features:**
- Predefined projects array
- Responsive grid layout
- Section title included

**Usage:**
```tsx
<PortfolioGrid />
```

**To Add Projects:**

Edit the `projects` array in the component:

```tsx
const projects = [
  {
    title: 'Project Name',
    description: 'Description...',
    image: 'https://...',
    tags: ['Tech1', 'Tech2'],
  },
  // ...
];
```

---

## Animation Patterns

### Common Framer Motion Patterns Used

#### 1. Fade In & Slide Up

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {content}
</motion.div>
```

#### 2. Scale on Hover

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Button
</motion.button>
```

#### 3. Stagger Animation

```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    {item}
  </motion.div>
))}
```

#### 4. Entrance Animation

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {content}
</motion.div>
```

---

## Styling Conventions

### Tailwind Utility Classes

Custom utilities defined in `globals.css`:

- `.container-custom` - Standard container with padding
- `.gradient-text` - Cyan gradient text
- `.btn-primary` - Primary button styles
- `.btn-secondary` - Secondary button styles
- `.card` - Card base styles
- `.section-padding` - Consistent section spacing

### Color Classes

- `bg-navy` - Primary background
- `bg-navy-dark` - Darker background
- `bg-navy-light` - Lighter background
- `text-cyan` - Accent color
- `bg-gradient-cyan` - Cyan gradient background

---

## Best Practices

### 1. Component Organization

- One component per file
- Related components in subdirectories
- Export default for main component

### 2. Props Interface

Always define TypeScript interfaces for props:

```tsx
interface ComponentProps {
  title: string;
  optional?: boolean;
}

export default function Component({ title, optional = false }: ComponentProps) {
  // ...
}
```

### 3. Animation Performance

- Use `viewport={{ once: true }}` to prevent re-animations
- Apply `will-change` CSS for complex animations
- Use `transform` and `opacity` for best performance

### 4. Responsive Design

- Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Test on multiple screen sizes
- Mobile-first approach

---

## Extending Components

### Adding a New Card Type

1. Create file in `components/Cards/`
2. Follow existing card patterns
3. Include required props
4. Add hover effects
5. Include stagger animation support

Example:

```tsx
'use client';

import { motion } from 'framer-motion';

interface YourCardProps {
  title: string;
  description: string;
  index: number;
}

export default function YourCard({ title, description, index }: YourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card"
    >
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
```

---

## Component Hierarchy

```
App Layout
├── Navbar
├── Main Content
│   ├── Hero
│   ├── AnimatedSection
│   │   ├── SectionTitle
│   │   └── Content
│   ├── ServicesSection
│   │   └── ServiceCard[]
│   ├── PortfolioGrid
│   │   └── PortfolioCard[]
│   └── ContactForm
└── Footer
```

---

## Performance Tips

1. **Image Optimization:** Use Next.js `<Image>` component for all images
2. **Code Splitting:** Pages are automatically code-split by Next.js
3. **Animation Performance:** Limit simultaneous animations
4. **Bundle Size:** Import only needed icons from Lucide React

---

## Accessibility

All components follow WCAG 2.1 AA standards:

- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ ARIA labels where needed
- ✅ Color contrast ratios
- ✅ Focus indicators

---

For more information, refer to the main [README.md](./README.md) or [SETUP.md](./SETUP.md).

