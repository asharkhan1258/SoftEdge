const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nBusiness: ${data.get('company')}\nService: ${data.get('service')}\n\n${data.get('message')}`;
  window.location.href = 'mailto:hello@softedge.example?subject=' + encodeURIComponent('Project Inquiry — SoftEdge Systems LLC') + '&body=' + encodeURIComponent(body);
  document.getElementById('form-status').textContent = 'Review and send the draft in your email application. If it does not open, contact us manually using the email address above.';
});
// Progressive enhancement: content remains visible without JavaScript.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.service-card, .value, .process > div, .cta, .rounded-photo, .policy-content section, .contact-form').forEach((element) => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
}
