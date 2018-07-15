$('.container-fluid').css('min-height', innerHeight + "px");

$('input[type=submit]').click(function() {
  mySubmit();
});

var mySubmit = function() {
  document.querySelector('body').classList.remove('transition-1');
  document.querySelector('form').submit();
};