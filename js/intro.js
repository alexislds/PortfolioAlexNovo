efeitoType();

function efeitoType() {
  var $intro         = document.querySelector('.intro');
  var $introTexto    = $intro.querySelectorAll('.intro-header-texto');
  var textoNovo      = '';
  var contadorLetras = 0;
  var contadorTexto  = 0;

  var texto;
  var textoDividido;

  pegaLetras();
  escreveTexto();

  function pegaLetras() {
    texto = $introTexto[contadorTexto].textContent.trim();
    textoDividido = texto.split('');
  }


  function escreveTexto() {
    var intervalo = setInterval(function(){

      textoNovo = textoNovo + textoDividido[contadorLetras];
      contadorLetras++;
      poeTexto();

      if (contadorTexto == $introTexto.length - 1 && contadorLetras == texto.length) {
        clearInterval(intervalo);
      }

      if (contadorLetras == texto.length && contadorTexto < $introTexto.length - 1) {

        contadorTexto++;
        contadorLetras = 0;
        textoNovo = '';

        setTimeout(function(){
          pegaLetras();
          escreveTexto();
        }, 2000);

        clearInterval(intervalo);
      }
    }, 140);
  }


  function poeTexto() {
    if (contadorTexto > 0) {
      $introTexto[contadorTexto - 1].classList.add('invisivel');
    }

    $introTexto[contadorTexto].classList.remove('invisivel');
    $introTexto[contadorTexto].textContent = textoNovo;
  }
}
