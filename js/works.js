window.addEventListener('scroll', mostraPortfolio);

function mostraPortfolio(){
  var $works     = document.querySelector('.works');
  var $worksItem = $works.querySelectorAll('.works-lista-item');

  var worksTop    = $works.getBoundingClientRect().top;
  var worksHeight = $works.getBoundingClientRect().height;
  var ativar      = worksTop - (worksHeight / 2);

  if (ativar <= 0) {
    var contador = 0;

    var intervalo = setInterval(function(){
      $worksItem[contador].classList.add('visivel', 'cresceu');

      if (contador == $worksItem.length - 1) {
        clearInterval(intervalo);
      }

      contador++;
    }, 200);
  }
}
