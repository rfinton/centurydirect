$(document).ready(function() {
  var fullsize = function() {
    var container = $('.container-fluid');
    var nyvid = $('#nyvid');

    if(innerHeight > innerWidth) {
      nyvid.css({
        width: 'auto',
        height: innerHeight + 'px'
      });
    }
    else {
      nyvid.css({
        width: '100%',
        height: 'auto'
      });
    }

    if(container.outerHeight() < innerHeight) {
      container.css('height', innerHeight + 'px');
    }
  }

  $('#email').click(function() {
    if(this.checked) {
      $('.input-group').eq(0).css('display', 'table');
    }
    else {
      $('.input-group').eq(0).css('display', 'none');
    }
  });

  $('#phone').click(function() {
    if(this.checked) {
      $('.input-group').eq(1).css('display', 'table');
    }
    else {
      $('.input-group').eq(1).css('display', 'none');
    }
  });

  window.addEventListener('resize', fullsize);
  window.addEventListener('load', function() {
    fullsize();

    if($('#email').prop('checked')) {
      $('.input-group').eq(0).css('display', 'table');
    }
    if($('#phone').prop('checked')) {
      $('.input-group').eq(1).css('display', 'table');
    }
  });
});