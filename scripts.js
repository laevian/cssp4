
// closure
$(document).ready(function(){

  $(".s").on("click", function(){

    $(this).append("<div data-role='popup' id='myPopup' class='popup'><p>720x, turn on<br>the lights</p></div>");

  $(location).attr('href', '#myPopup');

  });

  $(".s").on("tap", function(){

    $(this).append("<div data-role='popup' id='myPopup' class='popup'><p>720x, turn on<br>the lights</p></div>");

  $(location).attr('href', '#myPopup');

  });

$("#site").on("swiperight", function(){
  $(location).attr('href', '#premise');
})

$("#site").on("swipeleft", function(){
  $(location).attr('href', '#solution');
})

$("#premise").on("swipeleft", function(){
  $(location).attr('href', '#site');
})

$("#solution").on("swiperight", function(){
  $(location).attr('href', '#site');
})


$(".brute").click(function(){

  $(".sortable").show("blind", 1000);

})

$(".sortable").sortable();
$(".sortable").disableSelection();


}); // end of ready function, do not delete (again)
