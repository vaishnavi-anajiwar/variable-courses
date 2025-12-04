// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
mobileToggle.addEventListener('click', () => {
  const open = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = open ? 'none' : 'flex';
});

// Intersection Observer to reveal fade-up elements (simple AOS-like)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } // we keep them visible once active
  });
}, { threshold: 0.15 });

// observe all elements with class fade-up
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
