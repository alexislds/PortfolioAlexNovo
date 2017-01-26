window.addEventListener('scroll', mostraPortfolio);
window.addEventListener('scroll', efeitoHeaders);

function efeitoHeaders(){
  var $worksHeader = document.querySelector('.works-header');

  var headersTop    = $worksHeader.getBoundingClientRect().top;
  var headersHeight = window.innerHeight;
  var ativar      = headersTop - (headersHeight / 2);

  if (ativar <= 0) {
    $worksHeader.classList.add('ativo');
  }
}

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
