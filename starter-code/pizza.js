// Write your Pizza Builder JavaScript in this file.
function init() {
$(".btn").toggle(function() {
  if($(".pep").attr("style")){
    $(".pep").css("display", "");
  }else{
    $(".pep").css("display", "none");
  }
});
// $(".btn .btn-pepperonni:active").removeClass("green-pepper two");
}

$(document).ready(init);
