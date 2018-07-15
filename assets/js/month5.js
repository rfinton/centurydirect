function setFontSize() {
  if(innerWidth > innerHeight) {
    document.body.style.fontSize = innerWidth * 0.01 + 'pt';
  }
  else {
    document.body.style.fontSize = innerHeight * 0.02 + 'pt';
  }
}

function setVideoDimensions() {
  if((innerWidth / innerHeight) < 1.7) {
    $('#bg-video').css({
      width: 'auto',
      height: innerHeight + 'px'
    });
  }
  else {
    $('#bg-video').css({
      width: '100%',
      height: 'auto'
    });
  }
}

function setFooter() {
  if($('.container-fluid').outerHeight() < innerHeight) {
    $('.container-fluid').css('min-height', innerHeight + 'px');
    $('.footer').css({
      position: 'absolute',
      bottom: 0,
      left: '15px',
      width: '100%'
    });
  }
}

function trackClick(ev) {
  $('input[type="checkbox"]').prop('checked', false);
  var s = ev.currentTarget.id;

  switch(s) {
    case "data":
      $('input[value="Data-Management"]').prop('checked', true);
      break;
    case "digital":
      $('input[value="Digital-Printing"]').prop('checked', true);
      break;
    case "mail":
      $('input[value="Mailing-Services"]').prop('checked', true);
      break;
    case "hand":
      $('input[value="Hand-Assembly"]').prop('checked', true);
      break;
    default:
      $('input[type="checkbox"]').prop('checked', true);
  }
}

window.onresize = function() {
  setFontSize();
};

$(document).ready(function() {
  setFontSize();
  setVideoDimensions();
  setFooter();
  $('.velocity-icon, .learn-more').click(trackClick);

  if(contact.purl == "") {
    $('.col-right p').html("At Century Direct, we are known for so much more than just our printing capabilities. We also manage the security and integrity of your data so you can sleep comfortably at night knowing your data is safe with us.");
  }
});