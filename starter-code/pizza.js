// Write your Pizza Builder JavaScript in this file.
$(document).on("ready", function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");
  $(".price ul li:nth-child(4)").hide();
  $(".price ul li:nth-child(5)").hide();
  $(".price ul li:first-child").addClass("suma");
  $(".price ul li:nth-child(2)").addClass("suma");
  $(".price ul li:nth-child(3)").addClass("suma");

  $(".btn-pepperonni").on("click", function(e){
      $(".pep").fadeToggle();
      $(".price ul li:first-child").toggle();
      $(".price ul li:first-child").toggleClass("suma");
  });
  $(".btn-mushrooms").on("click", function(e){
      $(".mushroom").fadeToggle();
      $(".price ul li:nth-child(2)").toggle();
      $(".price ul li:nth-child(2)").toggleClass("suma");
  });
  $(".btn-green-peppers").on("click", function(e){
      $(".green-pepper").fadeToggle();
      $(".price ul li:nth-child(3)").toggle();
      $(".price ul li:nth-child(3)").toggleClass("suma");
  });
  $(".btn-sauce").on("click", function(e){
      $(".sauce").toggleClass("sauce-white");
      $(".price ul li:nth-child(4)").toggle();
      $(".price ul li:nth-child(4)").toggleClass("suma");
  });
  $(".btn-crust").on("click", function(e){
      $(".crust").toggleClass("crust-gluten-free");
      $(".price ul li:nth-child(5)").toggle();
      $(".price ul li:nth-child(5)").toggleClass("suma");
  });
  $(".btn-pepperonni").on("click", function(e){
      $(".btn-pepperonni").toggleClass("active");
  });
  $(".btn-mushrooms").on("click", function(e){
      $(".btn-mushrooms").toggleClass("active");
  });
  $(".btn-green-peppers").on("click", function(e){
      $(".btn-green-peppers").toggleClass("active");
  });
  $(".btn-crust").on("click", function(e){
      $(".btn-crust").toggleClass("active");
  });
  $(".btn-sauce").on("click", function(e){
      $(".btn-sauce").toggleClass("active");
  });

  $(".btn").click(function(e){
  var arr = jQuery.makeArray($(".price ul li[class~='suma']"));
  var arr2 = [];
  for (var i=0;i<arr.length;i++){
    arr2[i] = parseInt((arr[i].textContent).charAt(1));
  }
  var sum = 0;
  for (var i=0;i<arr2.length;i++){
    sum += arr2[i];
  }
  $(".price strong").text("$"+(sum+10));
});



});
//
// if($(".pep").attr("display") === "none"){
// $(".pep").show();
// } else {
// $(".pep").hide();
