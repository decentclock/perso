function adjustHeights(){
  if ($(window).width()<=1000)
  {
    var x = $(window).height();
    $(".image").css("height",2/3*$(window).width());
    $(".name").css("height",2/3*$(window).width());
  } else {
    var x = $(window).height();
    $(".image").css("height",x);
    $(".name").css("height",x);
  }
}

adjustHeights();

$(window).resize(function(){
  adjustHeights();
});
