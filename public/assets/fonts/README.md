# Fonts for sephoto Studio

This directory contains custom font files for the photography studio website.

## Recommended Fonts for Photography Studios

### Option 1: Elegant & Modern (Recommended)
- **Headings**: Playfair Display, Cormorant, or Cinzel (elegant serif)
- **Body**: Inter, Montserrat, or Lato (clean sans-serif)

### Option 2: Bold & Contemporary
- **Headings**: Bebas Neue, Oswald, or Raleway (bold display)
- **Body**: Open Sans, Roboto, or Source Sans Pro (readable sans-serif)

### Option 3: Minimalist & Clean
- **Headings**: Poppins, Work Sans, or Space Grotesk
- **Body**: System fonts stack or Inter

## Using Google Fonts

The easiest way is to use Google Fonts. Add the font links to your HTML head:

```html
<!-- Example: Playfair Display + Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

## Using Custom Fonts

1. Place font files (`.woff2`, `.woff`, `.ttf`) in this directory
2. Update `fonts.css` with `@font-face` declarations
3. Reference the fonts in your CSS using the font-family names

## Font File Formats

- **WOFF2** (recommended) - Best compression, modern browsers
- **WOFF** - Good compression, wider browser support
- **TTF/OTF** - Fallback for older browsers

## Current Setup

See `fonts.css` for current font declarations and usage examples.

