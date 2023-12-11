document.addEventListener('DOMContentLoaded', function () {
  const elementos = document.querySelectorAll('.elemento');

  function alternarClases() {
    const elementos = document.querySelectorAll('.elemento');
    let izquierda = true;

    elementos.forEach((elemento, index) => {
      if (izquierda) {
        elemento.classList.add('izquierda');
      } else {
        elemento.classList.add('derecha');
      }
      izquierda = !izquierda;
    });
  }

  alternarClases();

  function mostrarElementos() {
    elementos.forEach((elemento, index) => {
      if (elemento.getBoundingClientRect().top < window.innerHeight) {
        setTimeout(() => {
          elemento.style.opacity = '1';
          elemento.style.transform = 'translateX(0)';
        }, index * 100);
      }
    });
  }

  window.addEventListener('scroll', mostrarElementos);

  mostrarElementos();
});
