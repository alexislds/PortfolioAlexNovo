var $skills = document.querySelector('.skills');
var $skillsItem = $skills.querySelectorAll('.skills-lista-item');

window.addEventListener('scroll', skillsAtivar);
window.addEventListener('scroll', efeitoHeaders);

function efeitoHeaders(){
  var $skillsHeader = $skills.querySelector('.skills-header');

  var headersTop    = $skillsHeader.getBoundingClientRect().top;
  var headersHeight = window.innerHeight;
  var ativar      = headersTop - (headersHeight / 2);

  if (ativar <= 0) {
    $skillsHeader.classList.add('ativo');
  }
}

function skillsAtivar(){
  var rectSkills = $skills.getBoundingClientRect().top;

  if (rectSkills < 10) {
    skillsItemAtivar()

    window.removeEventListener('scroll', skillsAtivar);
  }

  function skillsItemAtivar(){
    var posicao = 0;
    var tempo = 250;

    var intervalSkills = setInterval(function(){
      if (posicao < $skillsItem.length) {
        $skillsItem[posicao].classList.add('skills-lista-item-ativo');
        posicao++;
        tempo = tempo - 40;
      }
      else {
        clearInterval(intervalSkills);
      }
    }, tempo);
  }
}
