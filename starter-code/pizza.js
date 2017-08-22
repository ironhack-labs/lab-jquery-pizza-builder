// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  var startPizza = (function(){
    $(".green-pepper, .pep, .mushroom, .sauce-white, .cost").hide();
    $(".active").removeClass("active");
    $(".total-cost").html("10$");
  })();

   function addIngredient(){
     if($(this).hasClass("btn-pepperonni")){
       $(".pep, .pep-cost").toggle();
       $(".btn-pepperonni").toggleClass("active");
       console.log($(".btn-pepperonni").classList);

     } else if($(this).hasClass("btn-mushrooms")){
       $(".mushroom, .mush-cost").toggle();
       $(".btn-mushrooms").toggleClass("active");

     } else if($(this).hasClass("btn-green-peppers")){
       $(".green-pepper, .green-cost").toggle();
       $(".btn-green-peppers").toggleClass("active");

     } else if($(this).hasClass("btn-sauce")){
       $(".sauce-white, .white-cost").toggle();
       $(".btn-sauce").toggleClass("active");
    }  else if($(this).hasClass("btn-crust")){
      $(".gluten-cost").toggle();
      $(".btn-crust").toggleClass("active");
      $(".crust").toggleClass("crust-gluten-free");
   }
    var totalCost = 10;
    for (i = 0; i < $(".cost:visible").length; i++){
      totalCost += parseInt($(".cost:visible")[i].innerHTML.slice(1));
      console.log(parseInt($(".cost:visible")[i].innerHTML.slice(1)));
      console.log(totalCost);
    }
    $(".total-cost").text(totalCost+"$");
  }

$(".btn").on("click", addIngredient);



});


// $(".btn").on("click", function() {
//   var newTask = prompt("Add new task");
//   var formattedTask = ("<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> </li>");
//   $( "#tasks" ).append( formattedTask );
// });
