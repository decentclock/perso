function adjustHeights(){
  if ($(window).width()<=1000)
  {
    var x = $(window).height();
    $(".image").css("height","350px");
    $(".name").css("height",4*x/3);
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
