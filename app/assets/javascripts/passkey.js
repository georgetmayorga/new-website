function showPasskey() {
  $('.input-area')[0].setAttribute("style", "display: inline-block;");
};

$('#passkey').keydown(function(event) {
  if ( event.which == 13 ) {
    if ( event.target.value === window.PASSKEY ) {
      window.location = "/posts"
    } else {
      event.target.value = "";
      $('.input-area')[0].setAttribute("style", "display: none;");
      $('#show-passkey')[0].setAttribute("style", "display: block;");
  };
 }
});
