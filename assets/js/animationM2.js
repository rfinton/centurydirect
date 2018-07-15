window.onload = function() {
  var h = $('.container-fluid').outerHeight();

  if(h < innerHeight) {
    $('.container-fluid').css('min-height', innerHeight + 'px');
    $('.page-footer').css({
      position: 'absolute',
      bottom: 0
    });
  }
  

  $('h1')
    .velocity({ opacity: [1,0] }, { duration: 1000, queue: false })
    .velocity({ translateX: ['0%', '-100%'] }, { duration: 1500, queue: false });
};