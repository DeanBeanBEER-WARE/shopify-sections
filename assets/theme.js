// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all sections
  initializeSections();
});

function initializeSections() {
  // Newsletter Form Handling
  const newsletterForms = document.querySelectorAll('.newsletter__form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', handleNewsletterSubmit);
  });

  // Featured Products Grid - Lazy Loading
  const productImages = document.querySelectorAll('.product-card__image');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('fade-in');
          observer.unobserve(img);
        }
      });
    });

    productImages.forEach(img => imageObserver.observe(img));
  }

  // Hero Banner - Background Image Loading
  const heroBanners = document.querySelectorAll('.hero-banner-section');
  heroBanners.forEach(banner => {
    const img = banner.querySelector('.hero-banner__background img');
    if (img) {
      img.onload = () => banner.classList.add('loaded');
    }
  });
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value;
  const successMessage = form.parentNode.querySelector('.newsletter__success');
  
  // Simulate form submission
  if (validateEmail(email)) {
    form.style.display = 'none';
    if (successMessage) {
      successMessage.style.display = 'block';
    }
    
    // Reset form after delay
    setTimeout(() => {
      form.reset();
      form.style.display = 'flex';
      if (successMessage) {
        successMessage.style.display = 'none';
      }
    }, 3000);
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle responsive navigation
const handleResize = debounce(() => {
  // Add responsive handling if needed
}, 250);

window.addEventListener('resize', handleResize);
