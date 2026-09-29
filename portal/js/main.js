/**
 * Eldo Carmo Empreendimentos — Portal
 * Minimal, elegant interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const sides = document.querySelectorAll('.side');

  // Subtle parallax / depth on mouse move (desktop only)
  if (window.matchMedia('(min-width: 769px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;

      sides.forEach((side) => {
        const content = side.querySelector('.side__content');
        if (content) {
          content.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        }
      });
    });
  }

  // Keyboard accessibility
  sides.forEach((side) => {
    side.setAttribute('tabindex', '0');
    side.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        side.click();
      }
    });
  });
});
