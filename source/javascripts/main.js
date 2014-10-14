var $email = $('.email');

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$email.keyup(function(){
  var $this = $(this)
  delay(function(){
    if (validateEmail($this.val())) {
      $this.closest('form').addClass('is-valid');
    } else {
      $this.closest('form').removeClass('is-valid');
    }
  }, 500);
});

$('.email-submit').hover(function(){
  $(this).closest('form').addClass('is-hovering')
}, function(){
  $(this).closest('form').removeClass('is-hovering')
});

$('.sign-up').click(function(event){
  event.preventDefault()
  var $signup = $($email[0])
  var offset = $signup.offset().top
  if ($(window).width() <= 400) {
    offset -= 320
  } else {
    offset -= 220
  }
  $('html, body').animate({
    scrollTop: offset
  }, 500, function(){
    $signup.focus()
  });
});

$(document).ready(function(){
  new WOW({
    mobile: false
  }).init();

  if ($(window).width() <= 400) {
    $email.attr('placeholder', 'Sign up now!');
  }
});
