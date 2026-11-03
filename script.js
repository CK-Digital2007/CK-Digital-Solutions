
// ===================================
// 1. MOBILE NAVIGATION
// ===================================

const menu = document.getElementById("menu");
const links = document.getElementById("links");

if (menu && links) {

  menu.addEventListener("click", () => {

    const isOpen = links.classList.toggle("open");

    menu.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Close menu after clicking a navigation link

  links.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      links.classList.remove("open");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// ===================================
// 2. SCROLL REVEAL ANIMATION
// ===================================

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(

    (entries, obs) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          obs.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


  revealItems.forEach(item => {

    observer.observe(item);

  });

} else {

  revealItems.forEach(item => {

    item.classList.add("visible");

  });

}


// ===================================
// 3. DYNAMIC COPYRIGHT YEAR
// ===================================

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


// ===================================
// 4. WHATSAPP CONTACT FORM
// ===================================

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", event => {

    event.preventDefault();

    // Validate form fields

    if (!form.reportValidity()) {
      return;
    }


    // Get form information

    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const service = data.get("service");
    const message = data.get("message");


    // Create WhatsApp message

    const whatsappMessage = `
Hello CK Digital Solutions!

Name: ${name}

Email: ${email}

Service Required: ${service}

Project Details:
${message}
    `.trim();


    // Your WhatsApp number

    const phoneNumber = "919665815139";


    // Create WhatsApp URL

    const whatsappURL =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);


    // Open WhatsApp

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });

}
