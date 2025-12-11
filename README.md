# NUVSOL - Company Website

A modern, production-ready company website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ⚡ **Next.js 15** with App Router for optimal performance
- 🎨 **Tailwind CSS** for modern, responsive styling
- 🎭 **Framer Motion** for smooth, engaging animations
- 📱 Fully responsive design across all devices
- 🎯 SEO optimized with metadata
- 🔥 Fast page loads and smooth navigation
- ♿ Accessible and user-friendly

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel, Netlify, or any hosting platform

## 🎨 Design System

### Brand Colors

```css
Primary Navy: #0A0F24
Navy Dark: #060A18
Navy Light: #141B35
Cyan: #00AEEF
Cyan Light: #00D4FF
```

### Key Features

- Dark, elegant UI with futuristic theme
- Cyan/blue gradient accents
- Smooth scroll animations
- Hover effects and transitions
- Card-based layouts
- Gradient text and buttons

## 📁 Project Structure

```
NUVSOL/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/page.tsx       # About page
│   ├── services/page.tsx    # Services page
│   ├── portfolio/page.tsx   # Portfolio page
│   ├── careers/page.tsx     # Careers page
│   └── contact/page.tsx     # Contact page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   ├── AnimatedSection.tsx  # Animation wrapper
│   ├── SectionTitle.tsx     # Reusable section title
│   ├── ServicesSection.tsx  # Services grid
│   ├── PortfolioGrid.tsx    # Portfolio grid
│   ├── ContactForm.tsx      # Contact form
│   ├── Buttons/
│   │   ├── PrimaryButton.tsx
│   │   └── SecondaryButton.tsx
│   └── Cards/
│       ├── ServiceCard.tsx
│       ├── PortfolioCard.tsx
│       ├── TeamCard.tsx
│       └── TestimonialCard.tsx
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd NuvSolDev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Available Pages

- **Home (`/`):** Landing page with hero, services, portfolio preview, testimonials
- **About (`/about`):** Company story, mission, vision, values, team, timeline
- **Services (`/services`):** Detailed service offerings, process, features
- **Portfolio (`/portfolio`):** Project showcase with filtering and categories
- **Careers (`/careers`):** Job openings, benefits, company culture
- **Contact (`/contact`):** Contact form, office locations, social links

## 🎯 Key Components

### Global Components

- **Navbar:** Sticky navigation with scroll effect and mobile menu
- **Footer:** Complete footer with links, contact info, and social media
- **Hero:** Animated hero section with gradient text and CTAs

### Reusable Components

- **AnimatedSection:** Wrapper for scroll-triggered animations
- **SectionTitle:** Consistent section headings
- **Buttons:** Primary and secondary styled buttons
- **Cards:** Service, Portfolio, Team, and Testimonial cards

### Page-Specific Components

- **ServicesSection:** Grid of service offerings
- **PortfolioGrid:** Filterable project showcase
- **ContactForm:** Form with validation and feedback

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  navy: {
    DEFAULT: '#0A0F24',
    dark: '#060A18',
    light: '#141B35',
  },
  cyan: {
    DEFAULT: '#00AEEF',
    light: '#00D4FF',
    dark: '#0089C2',
  },
}
```

### Modify Content

- Update text content in individual page files (`app/*/page.tsx`)
- Change images by replacing URLs in component files
- Adjust animations in component files using Framer Motion

### Add New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/Navbar.tsx`

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

### Deploy to Vercel

The easiest way to deploy is using Vercel:

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://nuvsol.com
# Add other environment variables as needed
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Features to Add (Optional)

- [ ] Blog section with MDX support
- [ ] Case studies with detailed project pages
- [ ] Dark/light mode toggle
- [ ] Multi-language support (i18n)
- [ ] Analytics integration (Google Analytics, Mixpanel)
- [ ] CMS integration (Contentful, Sanity)
- [ ] Email service integration (SendGrid, Mailgun)
- [ ] Animation performance optimization
- [ ] A/B testing setup

## 📞 Support

For issues or questions, contact the NUVSOL team:
- Email: info@nuvsol.com
- Website: [nuvsol.com](https://nuvsol.com)

## 📄 License

© 2024 NUVSOL. All rights reserved.

---

Built with ❤️ by NUVSOL Team

