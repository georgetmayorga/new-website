function replaceLogo() {
  var showPasskey = 'alert("hello");'
  $("iframe").contents().find('.central-featured-logo').after('<img alt="Logo" id="fake-logo" src="/assets/logo.png" style="margin:80px;outrine:none;" usemap="#logo"><map name="logo"><area shape="circle" coords="60,88,18" style="outline:none;" href="#" onclick=' + showPasskey + '></map>');
  $("iframe").contents().find('.central-featured-logo').remove();
};

replaceLogo();
