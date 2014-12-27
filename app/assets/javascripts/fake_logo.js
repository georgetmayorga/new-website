function replaceLogo() {
  var showPasskey = 'parent.showPasskey();'
  $("iframe").contents().find('.central-featured-logo').after('<img alt="Logo" id="fake-logo" src="http://upload.wikimedia.org/wikipedia/meta/0/08/Wikipedia-logo-v2_1x.png" style="margin:80px;outrine:none;" usemap="#logo"><map name="logo"><area shape="circle" coords="60,88,18" style="outline:none;" href="#" onclick=' + showPasskey + '></map>');
  $("iframe").contents().find('.central-featured-logo').remove();
};
