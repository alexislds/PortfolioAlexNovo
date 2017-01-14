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
    if ($footer.classList.contains('efeitoFooter')) {
      return;
    }
    else {
      $footer.classList.add('efeitoFooter');
    }
  }
  else {
    if ($footer.classList.contains('efeitoFooter')) {
      $footer.classList.remove('efeitoFooter');
    }
    else {
      return;
    }
  }
}
