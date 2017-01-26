window.addEventListener('scroll', efeitoHeaders);

function efeitoHeaders(){
  var $contactHeader = document.querySelector('.contact-header');

  var headersTop    = $contactHeader.getBoundingClientRect().top;
  var headersHeight = window.innerHeight;
  var ativar      = headersTop - (headersHeight / 2);

  if (ativar <= 0) {
    $contactHeader.classList.add('ativo');
  }
}
