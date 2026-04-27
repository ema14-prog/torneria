// Ejemplo: animación simple al hacer scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});

// Podés agregar validación de formulario o integración con Google Maps API
