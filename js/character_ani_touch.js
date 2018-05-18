var num_of_character = $(".character").length;

$(document).ready(function(){
  $("body").on("touchmove", function(e){
      triggerReactor(e)
  });
});

function triggerReactor(e){
  e = e.originalEvent.changedTouches[0];
  var characters = $(".character");
  for (var i = 0; i < num_of_character; i++) {
    var left = characters[i].offsetLeft;
    var right = left + characters[i].offsetWidth;
    var top = characters[i].offsetTop;
    var bottom = top + characters[i].offsetHeight;
    if (e.clientX > left && e.clientX < right && e.clientY > top && e.clientY < bottom) {
      console.log(characters[i].innerText);
      $("#big_font").text(characters[i].innerText);
    }
  }
}
