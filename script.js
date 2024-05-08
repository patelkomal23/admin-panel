

$(".display>div").hide();
$("#dashboard").show();


$("button").on("click",function(){
    $(".display>div").hide();
    $($(this).attr("for")).show();
})
var visible = false;

function sideCustomization() {
  visible = !visible;
  $("#sidebar").toggle(10, function () {
    if (visible) {
      $("#content,#content>div,.slider-icon").css("width", "100%");
    } else {
      $("#content,#content>div,.slider-icon").css("width", "100%");
    }
  });
} 

$(".slider-icon").on("click",function(){
    $(".sidebar").toggle();
    sideCustomization();
})

$("button").on("click",function(){
    $("#sidebar").hide()
    $("#content").css("width","100%")
    $(".slider-icon").css("width","100%")
})