function adjustHeights(){
  if ($(window).width()<=1000)
  {
    var x = $(window).height();
    $(".image").css("height",x/2);
    $(".name").css("height",x/2);
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
