document.addEventListener('DOMContentLoaded', function () {
  const elementos = document.querySelectorAll('.card');

  function actualizarOpacidad() {
    const container = document.querySelector('.slider');
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    elementos.forEach((elemento) => {
      const rect = elemento.getBoundingClientRect();
      const elementCenter = rect.left + rect.width / 2;

      // Verificar si el centro del elemento está dentro del centro del contenedor
      if (
        elementCenter >= containerCenter - rect.width / 2 &&
        elementCenter <= containerCenter + rect.width / 2
      ) {
        elemento.style.opacity = '1';
        elemento.style.zIndex = '999';
        elemento.style.transform = 'scale(1)';
      } else {
        elemento.style.opacity = '0.5';
        elemento.style.zIndex = '0';
        elemento.style.transform = 'scale(.7)';
      }
    });
  }

  document
    .querySelector('.slider')
    .addEventListener('scroll', actualizarOpacidad);
  actualizarOpacidad();
});
