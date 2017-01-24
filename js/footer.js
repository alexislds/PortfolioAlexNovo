var $body   = document.querySelector('body');
var $footer = $body.querySelector('.footer');

window.addEventListener('scroll', function(){
  efeitoFooter();
});


function efeitoFooter(){
  var bodyAltura   = $body.getBoundingClientRect().height;
  var janelaAltura = window.innerHeight;
  var precisaRolar = bodyAltura - janelaAltura;
  var rolado       = window.pageYOffset;

  if (rolado >= precisaRolar) {
    if ($footer.classList.contains('visivel')) {
      return;
    }
    else {
      $footer.classList.add('visivel');
    }
  }
  else {
    if ($footer.classList.contains('visivel')) {
      $footer.classList.remove('visivel');
    }
    else {
      return;
    }
  }
}
