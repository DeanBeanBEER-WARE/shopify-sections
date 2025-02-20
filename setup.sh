#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Setting up Shopify Theme development environment...${NC}"

# Create necessary directories if they don't exist
echo -e "${BLUE}Ensuring theme structure...${NC}"
mkdir -p assets config layout sections snippets templates

# Create settings_data.json if it doesn't exist
if [ ! -f config/settings_data.json ]; then
    echo -e "${BLUE}Creating settings_data.json...${NC}"
    echo '{
  "current": {
    "sections": {
      "hero-banner": {
        "type": "hero-banner",
        "settings": {
          "heading": "Welcome to our store",
          "description": "Shop our latest collection",
          "button_text": "Shop Now",
          "text_alignment": "text-center"
        }
      },
      "featured-products": {
        "type": "featured-products",
        "settings": {
          "title": "Featured Products",
          "products_to_show": 8,
          "grid_layout": "grid-4",
          "show_price": true,
          "show_vendor": true
        }
      },
      "newsletter-signup": {
        "type": "newsletter-signup",
        "settings": {
          "title": "Subscribe to our newsletter",
          "description": "Stay updated with our latest news",
          "button_text": "Subscribe",
          "layout": "centered"
        }
      },
      "image-text-overlay": {
        "type": "image-text-overlay",
        "settings": {
          "heading": "Your Story Here",
          "text": "<p>Share your message with your customers</p>",
          "button_label": "Learn More",
          "text_position": "center",
          "section_height": "medium",
          "overlay_opacity": 50
        }
      }
    }
  }
}' > config/settings_data.json
fi

# Start local development server
echo -e "${GREEN}Setup complete! To start the development server, run:${NC}"
echo -e "${BLUE}theme serve --port 3000${NC}"
echo ""
echo -e "${GREEN}This will start a local server at:${NC}"
echo -e "${BLUE}http://localhost:3000${NC}"
echo ""
echo -e "${GREEN}The sections will be available at:${NC}"
echo -e "${BLUE}http://localhost:3000/sections/hero-banner${NC}"
echo -e "${BLUE}http://localhost:3000/sections/featured-products${NC}"
echo -e "${BLUE}http://localhost:3000/sections/newsletter-signup${NC}"
echo -e "${BLUE}http://localhost:3000/sections/image-text-overlay${NC}"

# Start the theme server
theme serve --port 3000
