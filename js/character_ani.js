var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(document).ready(function(){
    if (isMobile){
      $('body').append('<script type=\"text\/javascript\" src=\'js\/character_ani_touch.js\'><\/script>');
    }
    else {
      $('body').append('<script type=\"text\/javascript\"  src=\'js\/character_ani_mouse.js\'><\/script>');
    }
});
