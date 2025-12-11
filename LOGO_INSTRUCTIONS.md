# How to Add Your NUVSOL Logo

## Step 1: Add Your Logo File

1. Create a `public` folder in your project root (if it doesn't exist)
2. Place your logo file in the `public` folder
   - Recommended formats: `.png`, `.svg`, or `.jpg`
   - Recommended name: `logo.png` or `logo.svg`
   - Recommended size: 120-200px wide, transparent background preferred

## Step 2: Update the Navbar Component

Open `components/Navbar.tsx` and you'll see three options:

### Option 1: Logo Image Only
Uncomment this code (remove the `/* */` comments):
```tsx
<Image
  src="/logo.png"
  alt="NUVSOL Logo"
  width={120}
  height={40}
  className="h-8 w-auto"
  priority
/>
```

### Option 2: Logo Image + Text
Uncomment this code if you want both logo and text:
```tsx
<Image
  src="/logo.png"
  alt="NUVSOL"
  width={32}
  height={32}
  className="h-8 w-8"
  priority
/>
<span className="text-2xl font-bold gradient-text">NUVSOL</span>
```

### Option 3: Text Only (Current)
This is what's currently active. Remove this when you add your logo.

## Step 3: Adjust Logo Size (if needed)

If your logo is too large or small, adjust these values:
- `width={120}` - Change the width
- `height={40}` - Change the height
- `className="h-8 w-auto"` - Adjust height (h-8 = 32px, h-10 = 40px, h-12 = 48px)

## Example File Structure

```
NuvSolDev/
├── public/
│   └── logo.png          ← Your logo file here
├── components/
│   └── Navbar.tsx       ← Update this file
└── ...
```

## Logo Recommendations

- **Format**: PNG with transparent background (best) or SVG
- **Size**: 120-200px wide
- **Colors**: Should work on dark background (navy)
- **Style**: Horizontal logo works best for navbar

## Also Add Logo to Footer (Optional)

You can also add the logo to the Footer component at `components/Footer.tsx` in a similar way.

