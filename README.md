# Shopify Custom Sections Collection

A collection of 4 custom-designed Shopify sections fully compatible with Online Store 2.0. Each section is optimized for performance and easy to implement.

## Available Sections

### 1. Hero Banner
A versatile hero section featuring:
- Customizable background image
- Flexible text alignment
- Call-to-action button
- Responsive design

### 2. Featured Products Grid
A dynamic product grid with:
- Flexible grid layout (2-4 columns)
- Adjustable number of products
- Optional vendor display
- Price display options

### 3. Newsletter Signup
A modern newsletter signup form with:
- Two layout options (centered/horizontal)
- Customizable colors
- Success message handling
- Form validation

### 4. Image with Text Overlay
A flexible promotional section with:
- Image overlay effects
- Adjustable overlay opacity
- Flexible text positioning
- Three height options

## Local Development

### Prerequisites
```bash
- Node.js
- npm
```

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shopify-sections
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The server will start at http://localhost:3000

### Available URLs

- Homepage: http://localhost:3000
- Individual Sections:
  - http://localhost:3000/sections/hero-banner
  - http://localhost:3000/sections/featured-products
  - http://localhost:3000/sections/newsletter-signup
  - http://localhost:3000/sections/image-text-overlay

## Project Structure

```
shopify-sections/
├── sections/               # Liquid Section Templates
│   ├── hero-banner.liquid
│   ├── featured-products.liquid
│   ├── newsletter-signup.liquid
│   └── image-text-overlay.liquid
├── schemas/               # Section Configurations
│   ├── hero-banner.json
│   ├── featured-products.json
│   ├── newsletter-signup.json
│   └── image-text-overlay.json
├── assets/               # Static Assets
│   ├── theme.css
│   └── theme.js
├── templates/            # Liquid Templates
│   └── index.liquid
├── layout/              # Layout Templates
│   └── theme.liquid
└── server.js            # Development Server
```

## Section Configurations

### Hero Banner
- Heading
- Description
- Button text and link
- Background image
- Text alignment

### Featured Products
- Title
- Number of products (4-12)
- Grid layout (2-4 columns)
- Price and vendor display

### Newsletter Signup
- Title and description
- Button text
- Color scheme
- Layout style

### Image Text Overlay
- Image
- Heading and text
- Overlay opacity
- Text positioning
- Section height

## Implementation in Shopify

1. Copy desired section files from the `sections/` folder into your Shopify theme
2. Sections will be available in the theme editor under "Add section"
3. Sections can be placed and configured via drag & drop

## Development

### Adding New Sections

1. Create a new .liquid file in `sections/`
2. Create corresponding schema file in `schemas/`
3. Add section to `templates/index.liquid`
4. Test section locally

### Editing Existing Sections

1. Edit the .liquid file in `sections/`
2. Update schema in `schemas/` if needed
3. Development server will automatically refresh

## Best Practices

- Responsive design for all screen sizes
- Use optimized images
- Semantic HTML
- Reusable components
- Consistent naming conventions

## Support

For questions or issues:
1. Check section documentation
2. Test sections locally
3. Review Shopify theme documentation

## Features

- Fully responsive design
- Mobile-optimized layouts
- Customizable through theme editor
- Performance optimized
- Clean, maintainable code
- Accessible following WCAG guidelines

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## License

This project is licensed under the MIT License - see the LICENSE file for details.
