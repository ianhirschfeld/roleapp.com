var $window = $(window);
var $body = $('body');
var $pageHeader = $('.page-header');
var $pageContent = $('.page-content');

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

function stickyStep() {
  var winScrollTop = $window.scrollTop();
  var height = $pageHeader.outerHeight() + parseInt($pageContent.css('paddingTop'), 10);
  $body.toggleClass('sticky-active', winScrollTop >= height - 20);
}

$(document).ready(function(){
  $('img.lazy').unveil(100);

  if ($('body.press').length > 0) {
    $('.press-nav a').click(function(event){
      event.preventDefault()
      $a = $(this)
      var $section = $($a.attr('href'))
      var offset = $section.offset().top - 20
      $('html, body').animate({
        scrollTop: offset
      }, 500);
    });

    $window.scroll(function(){
      stickyStep();
    });
  }
});
