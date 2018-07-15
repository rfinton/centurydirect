$(document).ready(function() {
  try {
    $('#submitBtn').click(function() {
      var resp = $('input[type=radio]:checked').val() + ", " + $('input[name=other]').val();
      $('input[name=form_resp2]').val(resp);
      document.forms[0].submit();
    });

    // trigger microsite visited email notification
    if(location.href.search(/thanks/g) == -1) {
      if(visitedPageCount == 1) {
        var url = 'http://52.91.158.44/CenturyDirect/trigger_notifications/visited.php';
        //$.post(url, contact);
      }
    }
    
    // trigger notification for contact submitted form data
    if(location.href.search(/thanks/g) != -1) {
      var url = "http://52.91.158.44/CenturyDirect/trigger_notifications/submit.php";
      //$.post(url, contact);
    }
  } catch(err) {
    console.log(err);
  }
});