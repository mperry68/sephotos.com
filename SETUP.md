# sephoto Website Setup Guide

## Quick Start

1. **Update Google Maps Embed**
   - Open `public/contact.html`
   - Go to [Google Maps](https://www.google.com/maps)
   - Search for "B7-186 Pl. Sutton, Beaconsfield, QC H9W 5S3"
   - Click "Share" > "Embed a map"
   - Copy the iframe code and replace the one in `contact.html`

2. **Update Contact Phone Number**
   - Search for `(514) 123-4567` in all HTML files
   - Replace with your actual phone number

3. **Add Your Images**
   - Portfolio images are already in `public/images/portfolio/`
   - Add more images as needed
   - The portfolio page will automatically display them

## File Structure

```
public/
├── index.html          # Homepage
├── portfolio.html      # Portfolio with mosaic layout
├── pricing.html        # Pricing packages
├── about.html          # About us page
├── contact.html        # Contact page with Google Maps
├── assets/
│   ├── css/
│   │   ├── fonts.css   # Font declarations
│   │   ├── main.css    # Main stylesheet
│   │   └── portfolio.css # Portfolio-specific styles
│   └── js/
│       ├── portfolio.js # Portfolio filtering
│       └── contact.js   # Contact form handling
└── images/
    └── portfolio/      # Your portfolio images
```

## Features

✅ Responsive design matching Magenta Photo style
✅ Portfolio page with interactive mosaic layout
✅ Filter functionality for portfolio categories
✅ Google Maps integration on contact page
✅ Contact form (ready for backend integration)
✅ Bilingual structure (EN/FR folders ready)
✅ Modern typography with Playfair Display + Inter

## Customization

### Colors
Edit CSS variables in `public/assets/css/main.css`:
```css
:root {
    --color-primary: #d4a574;      /* Main brand color */
    --color-primary-dark: #b8935f;  /* Darker shade */
    --color-secondary: #2c2c2c;     /* Text color */
}
```

### Fonts
Fonts are configured in `public/assets/css/fonts.css`. Currently using:
- **Headings**: Playfair Display
- **Body**: Inter

To change fonts, see `FONTS.md` for instructions.

## Deployment to Cloudflare Pages

1. Push your code to a Git repository
2. Connect to Cloudflare Pages
3. Set build command: (leave empty for static site)
4. Set output directory: `public`
5. Deploy!

## Next Steps

- [ ] Update Google Maps embed URL
- [ ] Update phone number
- [ ] Add French language versions (create `fr/` folder with translated pages)
- [ ] Set up contact form backend (if needed)
- [ ] Add more portfolio images
- [ ] Customize colors/branding
- [ ] Add analytics (Google Analytics, etc.)

## Notes

- The contact form currently shows an alert. You'll need to set up a backend to actually send emails.
- Google Maps requires either an API key or use the embed code from Google Maps directly.
- All images should be optimized for web (use tools like TinyPNG or ImageOptim).

