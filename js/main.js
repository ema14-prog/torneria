// Slider (galeria.html)
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));
  setInterval(() => showSlide(index + 1), 5000);
}

// Formulario de contacto (contacto.html)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingresa un email válido.");
      return;
    }

    // Simulación de envío (podés integrar EmailJS o backend real)
    alert("¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto pronto.");
    form.reset();
  });
}

// Lightbox para galería
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

const galeriaImgs = document.querySelectorAll('.galeria-img');

if (galeriaImgs.length > 0) {
  galeriaImgs.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
      caption.innerHTML = img.alt;
    });
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
  });
}

window.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


// Menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}


