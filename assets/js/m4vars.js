if(industry.toLowerCase() == 'finance') {
  // Faux Pen
  $('.faux .lead').html("Resonate your message by transforming boring fonts into handwritten words. You're clients will take notice and heed what you're saying.");

  // IMB Tracking
  $('.imb .lead').html("Deliver your mail with a world class tracking system. Our facility is SSAE-16 certified so you can rest assured your sensitive documents are never at risk.");

  // Custom envelopes
  $('.envelope .lead').html("Stationery doesn't have to be static. Express your brand with customized envelopes as diverse as your investment portfolio.");

  // Call to action
  $('form h4').html("See it in action, " + fn + ". Complete the form below and we'll rush some samples to you. There is nothing to lose and much to gain. Grab this opportunity by the bullhorns!");
}
else if(industry.toLowerCase() == 'healthcare') {
  // Faux Pen
  $('.faux .lead').html("Resonate your message by transforming boring fonts into handwritten words. It expresses emotion and caring at a human level.");

  // IMB Tracking
  $('.imb .lead').html("Deliver your mail with a world class tracking system. Our facility is HIPAA compliant so you can rest assured your sensitive documents are never at risk.");

  // Custom envelopes
  $('.envelope .lead').html("Stationery doesn't have to be static. Express your brand with customized envelopes as diverse as a provider network.");

  // Call to action
  $('form h4').html("See it in action, " + fn + ". Complete the form below and we'll rush some samples to you&mdash;STAT! Marketing isn't open heart surgery, but it can get intricate. We're here to help, so let's get prepped!");
}
else {
  // Faux Pen
  $('.faux .lead').html("Resonate your message by transforming boring fonts into handwritten words. Useful for quickly capturing a reader's attention.");

  // IMB Tracking
  $('.imb .lead').html("Deliver your mail with a world class tracking system. Our facility is SSAE-16 certified so you can rest assured your mail is never at risk.");

  // Custom envelopes
  $('.envelope .lead').html("Stationery doesn't have to be static. Express your brand with customized envelopes as diverse as the audience you want to reach.");

  // Call to action
  $('form h4').html("See it in action, " + fn + ". Complete the form below and we'll rush some samples to you. The era of personalized marketing is only beginning. Let's make this journey together!");
}