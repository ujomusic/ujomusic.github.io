require('./sass/ujo.scss');
var validator = require("email-validator");

$('body').hide();

$( document ).ready(function() {
  $('body').show();

  // Setup http://davist11.github.io/jQuery-One-Page-Nav/
  $('#nav').onePageNav();

  // SET UP THE CONTACT US FORM
  $('#ujo-contact-form').on('submit', function( evt ) {
    var email = $('#ujo-contact-form').find('#email').val();
    if (validator.validate(email)) {
      if ($('#mailchimp-checkbox').is(':checked')) {
        mailchimpSignup(email);
      }
      $.ajax({
        url: "https://formspree.io/info@ujomusic.com", 
        method: "POST",
        data: {
          Email: email,
          Identity: $('#ujo-contact-form').find('#user-identity').val(),
          Message: $('#ujo-contact-form').find('#message-body').val(),
        },
        dataType: "json",
        success: function() {
          $('#error-indicator').hide();
          $('#sent-indicator').show();

          // reset values
          $('#ujo-contact-form').find('#email').val('')
          $('#ujo-contact-form').find('#message-body').val('')
        }
      });
    } else {
      $('#sent-indicator').hide();
      $('#error-indicator').show();
      $('#error-message').text('Invalid email address');
    }
    return false;
  });

  $('#down-button').click(function () {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });
});

function mailchimpSignup(emailAddress) {
  var protocol = (window.location.protocol != "https:" ? "http://" : "https://");
  var maichimpURL = protocol + "wtf.us11.list-manage1.com/subscribe/post-json?u=5b0868a9cb58b8b0f36aacd90&id=4002d0fa0e&c=?";

  $.ajax({
    type: "GET",
    url: maichimpURL,
    data: {'EMAIL':emailAddress},
    cache: false,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    error: function (err) {
      // SQUASH :(
    },
    success: function (data) {
      // SQUASH :(
    }
  });

}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68390837-1', 'auto');
ga('send', 'pageview');
