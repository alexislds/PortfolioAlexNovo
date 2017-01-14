efeitoIntro();

function efeitoIntro(){
  var $intro        = document.querySelector('.intro');
  var $introDiv     = $intro.querySelectorAll('.intro-div');
  var $sobreAlvo    = $intro.querySelectorAll('.efeito-sobre-alvo');
  var $trabalhoAlvo = $intro.querySelectorAll('.efeito-trabalho-alvo');
  var turno         = 0;

  comportamentoBackground($intro, turno);
  comportamentoDiv($introDiv, turno);
  comportamentoSobre($sobreAlvo, turno);


  var intervalAnimacao = setInterval(function(){
    turno++;
    comportamentoBackground($intro, turno);
    comportamentoDiv($introDiv, turno);
    comportamentoTrabalho($trabalhoAlvo, turno);

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

      console.log(target);
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

      console.log(target);
      if(target == alvo.length) {
        clearInterval(intervalSobre);
      }
    },500);
  }
}
