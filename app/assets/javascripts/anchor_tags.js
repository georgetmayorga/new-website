var pArray = $('.post-body p');
var addAnchor = function($array) {
  $(this).attr('id', 'p'+$array);
  $(this).prepend('<a class="anchor" target="_self" href="#p'+$array+ '" style="color: #CBFAD8;">#</a>')
};

$.each(pArray, addAnchor)
