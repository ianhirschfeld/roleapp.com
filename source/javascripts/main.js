var $window = $(window);
var $body = $('body');
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

function stickyStep() {
  var winScrollTop = $window.scrollTop();
  var height = $('#page-header').outerHeight() + 50;
  $body.toggleClass('sticky-active', winScrollTop >= height - 20);
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
  if ($window.width() <= 400) {
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

$('.press-nav a').click(function(event){
  event.preventDefault()
  $a = $(this)
  var $section = $($a.attr('href'))
  var offset = $section.offset().top - 20
  $('html, body').animate({
    scrollTop: offset
  }, 500);
});

$(document).ready(function(){
  if ($window.width() >= 768) {
    new WOW({
      mobile: false
    }).init();
  }

  if ($window.width() <= 400) {
    $email.attr('placeholder', 'Sign up now!');
  }

  $('img.lazy').unveil(100, function(){
    $(this).load(function() {
        this.style.opacity = 1;
      });
  });

  if ($('#press-page').length > 0) {
    $window.scroll(function(){
      stickyStep();
    });
  }
});
