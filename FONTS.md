# Font Setup Guide for sephoto Studio

This guide will help you set up beautiful typography for your photography studio website.

## Quick Start

### Option 1: Google Fonts (Easiest - Recommended)

1. **Choose a font combination:**
   - **Elegant & Modern**: Playfair Display + Inter
   - **Bold & Contemporary**: Bebas Neue + Open Sans
   - **Minimalist**: Poppins
   - **Sophisticated**: Cormorant Garamond + Montserrat

2. **Add to your HTML `<head>`:**
   - See `public/assets/css/fonts-google.html` for ready-to-use `<link>` tags
   - Copy the one you like and uncomment it

3. **Update CSS variables:**
   - Edit `public/assets/css/fonts.css`
   - Update the `--font-heading` and `--font-body` variables to match your chosen fonts

### Option 2: Custom Fonts

1. **Download font files:**
   - Get `.woff2` files (best format)
   - Place them in `public/assets/fonts/`

2. **Add @font-face declarations:**
   - Edit `public/assets/css/fonts.css`
   - Uncomment and configure the `@font-face` examples

3. **Update CSS variables:**
   - Set `--font-heading` and `--font-body` to your font names

## Recommended Font Combinations

### 🎨 Elegant Photography Studio
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, clean, readable)
- **Best for**: High-end, artistic, sophisticated brand

### 🎯 Modern & Bold
- **Headings**: Bebas Neue (display, bold)
- **Body**: Open Sans (sans-serif, friendly)
- **Best for**: Contemporary, energetic, dynamic brand

### ✨ Minimalist & Clean
- **All text**: Poppins (sans-serif, modern)
- **Best for**: Clean, minimal, modern aesthetic

### 🏛️ Sophisticated & Classic
- **Headings**: Cormorant Garamond (serif, elegant)
- **Body**: Montserrat (sans-serif, professional)
- **Best for**: Traditional, luxury, timeless brand

## Using the Fonts

### In HTML:
```html
<h1 class="font-heading">Studio Title</h1>
<p class="font-body">Body text content</p>
<div class="studio-title">SEPHOTO</div>
```

### In CSS:
```css
.my-heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
}
```

## Font Files Location

- **Custom fonts**: `public/assets/fonts/`
- **Font CSS**: `public/assets/css/fonts.css`
- **Google Fonts examples**: `public/assets/css/fonts-google.html`

## Performance Tips

1. **Use `font-display: swap`** - Ensures text is visible during font load
2. **Preconnect to Google Fonts** - Speeds up font loading
3. **Limit font weights** - Only load weights you actually use (400, 700 are usually enough)
4. **Use WOFF2 format** - Best compression for custom fonts

## Current Setup

The project is configured with CSS variables for easy font management:
- `--font-heading` - For headings (h1-h6)
- `--font-body` - For body text
- `--font-display` - For large display text (studio name, etc.)

All typography scales and utilities are ready to use in `fonts.css`.

