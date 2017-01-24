mostraPortfolio();


function mostraPortfolio(){
  var $works     = document.querySelector('.works');
  var $worksItem = $works.querySelectorAll('.works-lista-item');
  var contador   = 0;

  var intervalo = setInterval(function(){
    $worksItem[contador].classList.add('visivel', 'cresceu');

    if (contador == $worksItem.length - 1) {
      clearInterval(intervalo);
    }

    contador++;
  }, 200);
}
