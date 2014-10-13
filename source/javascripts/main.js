var $email = $('#mce-EMAIL');

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
    console.log("doinasgasdf asdf")
    console.log($this.val())
    if (validateEmail($this.val())) {
      $this.closest('form').addClass('is-valid');
    } else {
      $this.closest('form').removeClass('is-valid');
    }
  }, 500);
});

$('.sign-up').click(function(event){
  event.preventDefault()
  // Scroll to first form
});
