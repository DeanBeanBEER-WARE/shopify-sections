const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const port = 3000;

// Setup LiquidJS engine
const engine = new Liquid({
  root: path.join(__dirname),
  extname: '.liquid',
  cache: false
});

// Helper function to load section schema
async function loadSectionSchema(sectionName) {
  try {
    const schemaPath = path.join(__dirname, 'schemas', `${sectionName}.json`);
    const schemaContent = await fs.readFile(schemaPath, 'utf8');
    return JSON.parse(schemaContent);
  } catch (err) {
    console.error(`Error loading schema for ${sectionName}:`, err);
    return null;
  }
}

// Mock product data
const mockProducts = [
  {
    title: "Sample Product 1",
    price: "99.99",
    featured_image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    url: "#",
    vendor: "Sample Vendor"
  },
  {
    title: "Sample Product 2",
    price: "149.99",
    featured_image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    url: "#",
    vendor: "Sample Vendor"
  },
  {
    title: "Sample Product 3",
    price: "199.99",
    featured_image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    url: "#",
    vendor: "Sample Vendor"
  },
  {
    title: "Sample Product 4",
    price: "299.99",
    featured_image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    url: "#",
    vendor: "Sample Vendor"
  }
];

// Set views directory
app.set('views', __dirname);

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Register LiquidJS as the template engine
app.engine('liquid', engine.express());
app.set('view engine', 'liquid');

// Helper function to wrap section content with layout
const renderWithLayout = async (res, template, data) => {
  try {
    // First render the section
    const sectionContent = await engine.renderFile(template, data);
    
    // Then render the layout with the section content
    res.render('layout/theme', { 
      ...data,
      content_for_layout: sectionContent,
      content_for_header: '',
      page_title: 'Shopify Sections Preview'
    });
  } catch (err) {
    console.error('Render error:', err);
    res.status(500).send(err.message);
  }
};

// Routes for individual sections
app.get('/sections/:section', async (req, res) => {
  const sectionName = req.params.section;
  const templatePath = `sections/${sectionName}`;
  
  try {
    // Load section schema
    const schema = await loadSectionSchema(sectionName);
    if (!schema) {
      throw new Error(`Schema not found for section: ${sectionName}`);
    }

    // Prepare section data
    const sectionData = {
      section: {
        settings: schema.settings
      },
      products: mockProducts
    };

    await renderWithLayout(res, templatePath, sectionData);
  } catch (err) {
    console.error(`Error rendering section ${sectionName}:`, err);
    res.status(404).send(`Section ${sectionName} not found: ${err.message}`);
  }
});

// Route for the home page
app.get('/', async (req, res) => {
  try {
    const sections = ['hero-banner', 'featured-products', 'newsletter-signup', 'image-text-overlay'];
    let allSectionsContent = '';

    // Load and render each section
    for (const sectionName of sections) {
      const schema = await loadSectionSchema(sectionName);
      if (schema) {
        const sectionData = {
          section: {
            settings: schema.settings
          },
          products: mockProducts
        };
        const sectionContent = await engine.renderFile(`sections/${sectionName}`, sectionData);
        allSectionsContent += sectionContent;
      }
    }

    // Render the complete page
    res.render('layout/theme', {
      content_for_layout: allSectionsContent,
      content_for_header: '',
      page_title: 'Shopify Sections Preview'
    });
  } catch (err) {
    console.error('Error rendering home page:', err);
    res.status(500).send(`Error rendering template: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`
Server running at http://localhost:${port}

Available sections:
- http://localhost:${port}/sections/hero-banner
- http://localhost:${port}/sections/featured-products
- http://localhost:${port}/sections/newsletter-signup
- http://localhost:${port}/sections/image-text-overlay

Home page:
- http://localhost:${port}/
`);
});
