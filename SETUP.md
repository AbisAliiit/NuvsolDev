# NUVSOL Website - Quick Setup Guide

This guide will help you get the NUVSOL website up and running in minutes.

## Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js 18 or higher** ([Download here](https://nodejs.org/))
- ✅ **npm** (comes with Node.js) or **yarn**
- ✅ A code editor (VS Code recommended)

## Quick Start (3 Steps)

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- TypeScript
- Lucide React (icons)

**Expected time:** 2-3 minutes

### Step 2: Run Development Server

Start the development server:

```bash
npm run dev
```

You should see:
```
▲ Next.js 15.x.x
- Local:        http://localhost:3000
- Ready in xxxms
```

**Expected time:** 5-10 seconds

### Step 3: Open in Browser

Navigate to **http://localhost:3000** in your web browser.

You should now see the NUVSOL homepage! 🎉

## Project Overview

### Pages Available

The website includes 6 fully functional pages:

1. **Home** (`/`) - Landing page with hero, services, portfolio, testimonials
2. **About** (`/about`) - Company info, mission, team, timeline
3. **Services** (`/services`) - Service details and process
4. **Portfolio** (`/portfolio`) - Project showcase
5. **Careers** (`/careers`) - Job openings and benefits
6. **Contact** (`/contact`) - Contact form and office locations

### Key Features

✨ **Animations:** Smooth Framer Motion animations throughout
🎨 **Responsive:** Works perfectly on mobile, tablet, and desktop
⚡ **Fast:** Optimized Next.js 15 with App Router
🎯 **SEO Ready:** Meta tags and semantic HTML
♿ **Accessible:** WCAG compliant components

## File Structure Quick Reference

```
├── app/                    # Pages (Next.js App Router)
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [page]/page.tsx    # Other pages
│
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation (sticky with scroll effect)
│   ├── Footer.tsx        # Footer with links
│   ├── Hero.tsx          # Hero section component
│   ├── Buttons/          # Button components
│   └── Cards/            # Card components
│
├── tailwind.config.ts    # Tailwind configuration (NUVSOL colors)
└── package.json          # Project dependencies
```

## Customization Guide

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    DEFAULT: '#0A0F24',    // Your primary color
    dark: '#060A18',
    light: '#141B35',
  },
  cyan: {
    DEFAULT: '#00AEEF',    // Your accent color
    light: '#00D4FF',
    dark: '#0089C2',
  },
}
```

### Update Content

All content is in the page files:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- etc.

Just edit the text directly in these files!

### Add/Change Images

Currently using placeholder images from Unsplash. Replace URLs in:
- Portfolio cards: `components/PortfolioGrid.tsx`
- Team members: `app/about/page.tsx`
- Testimonials: `app/page.tsx`

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter

# Package Management
npm install          # Install all dependencies
npm install [pkg]    # Add new package
```

## Troubleshooting

### Port 3000 Already in Use

If you see "Port 3000 is already in use", try:

```bash
# Windows
npx kill-port 3000

# Mac/Linux
lsof -ti:3000 | xargs kill
```

Or run on a different port:

```bash
npm run dev -- -p 3001
```

### Module Not Found Errors

Try:

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### TypeScript Errors

The project uses TypeScript. If you see type errors:

```bash
# Check TypeScript
npx tsc --noEmit
```

### Styling Issues

If Tailwind styles aren't applying:

```bash
# Rebuild Tailwind
npm run dev
```

Then hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Next Steps

### For Development

1. **Update Content:** Replace placeholder text with real company info
2. **Add Images:** Replace placeholder images with actual photos
3. **Configure Forms:** Connect contact form to email service
4. **Add Analytics:** Integrate Google Analytics or similar
5. **SEO Optimization:** Update metadata in each page file

### For Production

1. **Build:** `npm run build`
2. **Test:** `npm start` to test production build locally
3. **Deploy:** Push to Vercel, Netlify, or your hosting platform

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## Need Help?

- Check the main [README.md](./README.md) for detailed information
- Review the [Next.js documentation](https://nextjs.org/docs)
- Contact: info@nuvsol.com

---

**You're all set!** Start building your amazing NUVSOL website. 🚀

