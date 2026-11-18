const menu = document.getElementById('menu');
const links = document.getElementById('links');

if (menu && links) {
  menu.setAttribute('aria-controls', links.id);

  const navigation = links.closest('nav');
  if (navigation) {
    navigation.setAttribute('aria-label', 'Primary navigation');
  }

  links.querySelectorAll('a.active').forEach((link) => {
    link.setAttribute('aria-current', 'page');
  });

  const closeMenu = () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  };

  menu.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && links.classList.contains('open')) {
      closeMenu();
      menu.focus();
    }
  });
}

document.querySelectorAll('.footer-inner > span:first-child').forEach((footer) => {
  footer.textContent = `© ${new Date().getFullYear()} CK Digital Solutions`;
});

const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const message = [
      'Hello CK Digital Solutions!',
      `Name: ${String(formData.get('name')).trim()}`,
      `Email: ${String(formData.get('email')).trim()}`,
      `Service: ${String(formData.get('service')).trim()}`,
      `Message: ${String(formData.get('message')).trim()}`,
    ].join('\n');
    const whatsappUrl = new URL('https://wa.me/919665815139');

    whatsappUrl.searchParams.set('text', message);
    window.open(whatsappUrl.toString(), '_blank', 'noopener,noreferrer');
  });
}
