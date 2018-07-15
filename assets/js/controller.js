$(document).ready(function() {
  audioPreload = false;

  // trigger microsite visited email notification
  if(location.href.search(/thanks/g) == -1) {
    var url = 'http://52.91.158.44/CenturyDirect/trigger_notifications/visited.php';
    $.post(url, contact);
  }

  // set the text based on industry
  switch(contact.industry) {
    case 'Healthcare':
      $('.compliance').html('HIPAA');
      $('.industry').html('healthcare');
      break;
    case 'Financial':
      $('.compliance').html('SSAE 16');
      $('.industry').html('financial');
      break;
    default:
      $('.compliance').html('SSAE 16');
      $('.industry').html('business');
  }

  // set the text in the submit button (LIVE version)
  switch(contact.list) {
    case 'cdPurchProspectWBox':
      $('input[type="submit"]').val('Send me my $5 iTunes card.');
      $('.gift').html("and we'll send you a $5 iTunes card.");
      break;
    default:
      $('input[type="submit"]').val('Send me my earbuds');
      $('.gift').html("and we'll send you some earbuds so you can hear our symphony better.");
      $('#plugin').hide();
  }

  // set the text in the submit button (DEMO version)
  switch(contact.purl) {
    case 'ShannaVollmer':
      $('input[type="submit"]').val('Send me my $5 iTunes card.');
      $('.gift').html("and we'll send you a $5 iTunes card.");
      break;
    case 'CraigBigby':
      $('input[type="submit"]').val('Send me my earbuds');
      $('.gift').html("and we'll send you some earbuds so you can hear our symphony better.");
      $('#plugin').hide();
      break;
    case 'RayFinton':
      $('input[type="submit"]').val('Send me my $5 iTunes card.');
      $('.gift').html("and we'll send you a $5 iTunes card.");
      break;
    case 'CarrieHill':
      $('input[type="submit"]').val('Send me my earbuds');
      $('.gift').html("and we'll send you some earbuds so you can hear our symphony better.");
      $('#plugin').hide();
      break;
    default:
  }

  // event handler to check if form completed
  $('input[type="submit"]').click(function(ev) {
    ev.preventDefault();
    var dataRequired = document.querySelector('.data-required');
    var msgHTML = '';
    var firstnameValid = (document.forms[0]['firstname'].value).search(/[a-zA-Z]{3,}/g);
    var lastnameValid = (document.forms[0]['lastname'].value).search(/[a-zA-Z]{3,}/g);
    var emailValid = (document.forms[0]['email'].value).search(/[a-zA-Z]+@[a-zA-Z0-9]+\./g);

    // verify contact data is complete
    if(firstnameValid == -1) {
      msgHTML += 'Missing first name<br>';}
    if(lastnameValid == -1) {
      msgHTML += 'Missing last name<br>';}
    if(emailValid == -1) {
      msgHTML += 'Missing email<br>';}
    if(msgHTML != '') {
      dataRequired.firstElementChild.innerHTML = msgHTML;
      $('.screen-filter, .data-required').css('display', 'inline-block');
      $('.data-required').css('marginTop', innerHeight/2 - (dataRequired.getBoundingClientRect().height/2) + 'px');
      return;}

    // function to verify form question is complete
    var checkFormResp = function() {
      var input = document.forms[0]['form_resp1'];
      var selected = [];

      for(let x = 0; x < input.length; x++) {
        if(input[x].checked) {
          selected.push(input[x].value);
        }
      }

      if(selected.length == 0) {
        return false;
      } else {
        return selected.toString();
      }
    };
    
    // check the form response data
    var resp = checkFormResp();

    if(resp) {
      $('.screen-filter, .loader-icon').css('display', 'block');
      var img = document.querySelector('.screen-filter img');
      $(img).css('marginTop', innerHeight/2 - (img.getBoundingClientRect().height/2) + 'px');
      $(img).velocity({ rotateZ: [635,275] }, { duration: 1000, loop: true });

      setTimeout(function() {
        document.forms[0].submit();
      }, 3000);
    } else {
      dataRequired.firstElementChild.innerHTML = "You forgot to tell us what you're outsourcing.";
      $('.screen-filter, .data-required').css('display', 'inline-block');
      $('.data-required').css('marginTop', innerHeight/2 - (dataRequired.getBoundingClientRect().height/2) + 'px');
    }
  });

  // click event handler to close message window
  $('#close-message').click(function() {
    $('.screen-filter, .data-required').css('display', 'none');
  });

  // stop the music when window loses focus
  window.onblur = function() {
    try {
      document.querySelector('audio').pause();
    } catch (e) {}
  };

  // resume music when window gains focus
  window.onfocus = function() {
    try {
      if(document.querySelector('p').clientHeight == 0) {
        document.querySelector('audio').play();
      }
    } catch (e) {}
  };

  // trigger notification for pdf download on thank you page
  $('#eBrochure').click(function() {
    var url = "http://52.91.158.44/CenturyDirect/trigger_notifications/download.php";
    contact.filename = "CenturyDirect_Brochure";
    $.post(url, contact);
  });

  // trigger notification for contact submitted form data
  if(location.href.search(/thanks/g) != -1) {
    var url = "http://52.91.158.44/CenturyDirect/trigger_notifications/submit.php";

    if(contact.list == 'cdPurchProspectWBox') {
      contact.cta = "Send iTunes card";}
    else {
      contact.cta = "Send earbuds";}

    $.post(url, contact);
  }
});