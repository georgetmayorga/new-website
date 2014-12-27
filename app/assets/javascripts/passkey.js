function showPasskey() {
  $('.input-area')[0].setAttribute("style", "display: inline-block;");
};

$('#passkey').keydown(function(event) {
  if ( event.which == 13 ) {
    if ( event.target.value === "password") {
      $('#output-container').fadeOut(2000);
      $(this).fadeOut(2000);
      openSesame();
    } else {
      event.target.value = "";
      $('.input-area')[0].setAttribute("style", "display: none;");
      $('#show-passkey')[0].setAttribute("style", "display: block;");
  };
 }
});

function openSesame() {
  $('body.lobby.lobby-show')[0].setAttribute("style", "background-color:black; width: 100vw; height: 100vh;");
  $('body').html(
    "<div class='secret-text'>This should be some words</div>"
  );
};
