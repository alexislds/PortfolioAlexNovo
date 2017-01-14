efeitoIntro();

function efeitoIntro(){
  var $intro           = document.querySelector('.intro');
  var $introDiv        = $intro.querySelectorAll('.intro-div');
  var $sobreAlvo       = $intro.querySelectorAll('.efeito-sobre-alvo');
  var $trabalhoAlvo    = $intro.querySelectorAll('.efeito-trabalho-alvo');
  var $habilidadesAlvo = $intro.querySelectorAll('.efeito-habilidades-alvo');
  var $contatoAlvo     = $intro.querySelectorAll('.efeito-contato-alvo');
  var turno            = 0;

  comportamentoBackground($intro, turno);
  comportamentoDiv($introDiv, turno);
  comportamentoSobre($sobreAlvo, turno);


  var intervalAnimacao = setInterval(function(){
    turno++;
    comportamentoBackground($intro, turno);
    comportamentoDiv($introDiv, turno);
    comportamentoTrabalho($trabalhoAlvo, turno);
    comportamentoHabilidas($habilidadesAlvo, turno);
    comportamentoContato($contatoAlvo, turno);

    if (turno == 4){
      clearInterval(intervalAnimacao);
    }
  }, 5000);
}

function comportamentoBackground(alvo, turno){
  switch (turno) {
    case 0:
      alvo.classList.add('efeitoBackgroundA');
      break;
    case 1:
      alvo.classList.remove('efeitoBackgroundA');
      alvo.classList.add('efeitoBackgroundB');
      break;
    case 2:
      alvo.classList.remove('efeitoBackgroundB');
      alvo.classList.add('efeitoBackgroundC');
      break;
    case 3:
      alvo.classList.remove('efeitoBackgroundC');
      alvo.classList.add('efeitoBackgroundD');
      break;
    default:
      break;
  }
}
function comportamentoDiv(alvo, turno){
  switch (turno) {
    case 0:
      alvo[turno].classList.remove('efeitoDiv');
      break;
    case 1:
      alvo[turno - 1].classList.add('efeitoDiv');
      alvo[turno].classList.remove('efeitoDiv');
      break;
    case 2:
      alvo[turno - 1].classList.add('efeitoDiv');
      alvo[turno].classList.remove('efeitoDiv');
      break;
    case 3:
      alvo[turno - 1].classList.add('efeitoDiv');
      alvo[turno].classList.remove('efeitoDiv');
      break;
    default:
      break;
  }
}
function comportamentoSobre(alvo, turno){
  if (turno == 0) {
    var target = 0;

    var intervalSobre = setInterval(function(){
      alvo[target].classList.add('efeitoSobreAtivo');
      target++;

      if(target == alvo.length) {
        clearInterval(intervalSobre);
      }
    },500);
  }
}
function comportamentoTrabalho(alvo, turno){
  if (turno == 1) {
    var target = 0;

    var intervalSobre = setInterval(function(){
      alvo[target].classList.add('efeitoTrabalhoAtivo');
      target++;

      if(target == alvo.length) {
        clearInterval(intervalSobre);
      }
    },500);
  }
}
function comportamentoHabilidas(alvo, turno){
  if (turno == 2) {
    var target = 0;

    var intervalSobre = setInterval(function(){
      alvo[target].classList.add('efeitoHabilidadesAtivo');
      target++;

      if(target == alvo.length) {
        clearInterval(intervalSobre);
      }
    },1500/(alvo.length-1));
  }
}
function comportamentoContato(alvo, turno){
  if (turno == 3) {
    var target = 0;

    var intervalSobre = setInterval(function(){
      alvo[target].classList.add('efeitoContatoAtivo');
      target++;

      if(target == alvo.length) {
        clearInterval(intervalSobre);
      }
    },1500/(alvo.length-1));
  }
}
