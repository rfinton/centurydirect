var loadpage = function() {
  var env = $('.envelopes').css('display');
  var industry = contact.industry.toLowerCase();

  if(env == 'block') { // test condition for mobile
    if(industry == 'healthcare') {
      $('.cust-image').css('display', 'none');
      $('.finance-image').css('display', 'none');
    }

    else if(industry == 'finance' || industry == 'financial') {
      $('.cust-image').css('display', 'none');
      $('.health-image').css('display', 'none');
    }

    else {
      $('.finance-image').css('display', 'none');
      $('.health-image').css('display', 'none');
    }
  }

  else {
    if(industry == 'healthcare') {
      $('#healthcare-bg').css({ display: 'block' });
    }

    else if(industry == 'finance' || industry == 'financial') {
      $('#finance-bg').css({ display: 'block' });
    }

    else {
      $('#customer-bg').css({ display: 'block' });
    }
  }
};

var getQueryParam = function(str) {
  var href = location.href;
  var charLength = str.length;
  var startIndex = href.search(str);

  if(startIndex != -1) {
    startIndex += (charLength + 1);

    for(var i = startIndex; i < href.length; i++) {
      if(href.charAt(i) == '&') {
        contact.origin = href.slice(startIndex, i);
        break;
      }
    }
  }
  
  else {
    contact.origin = 'direct-url';
  }
};

var triggered = function() {
  var i = document.cookie.search('trigger');

  if(i != -1) {
    return true;
  }

  else {
    return false;
  }
};

window.onload = function() {
  loadpage();
  getQueryParam('origin');
  
  var landingpage = location.href.search(/m3_lp/gi);

  if(typeof visitedPageCount === 'undefined') {
    visitedPageCount = 0;
  }

  if(visitedPageCount == 1 && landingpage >= 0) {
    if(!triggered()) {
      document.cookie = 'trigger';
      var url = 'http://52.91.158.44/CenturyDirect/trigger_notifications/visited.php';
      $.post(url, contact);
    }
  }
};

window.addEventListener('orientationchange', function() {
  console.log('changed orientation');
  location.reload();
});