// Write your Pizza Builder JavaScript in this file.
$(document).ready( function(){
  console.log('ready');
  changePepperonni();
  changeMushrooms();
  changePeppers();
  addGlutenFree();
  addWhiteSauce();
  defStatus();
  totalPrice();

});

function changePepperonni(){
$(".btn-pepperonni").click (function (){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  if ($(".btn-pepperonni").hasClass("active")) {
      $($(".price li")[0]).show();
     } else {
      $($(".price li")[0]).hide();
     }
     totalPrice();
});
}
function changeMushrooms(){
$(".btn-mushrooms").click (function(){
$(".cap, .stem").toggle();
$(".btn-mushrooms").toggleClass("active");
if ($(".btn-mushrooms").hasClass("active")){
  $($(".price li")[1]).show();
}else{
  $($(".price li")[1]).hide();
}
totalPrice();
});
}
function changePeppers() {
$(".btn-green-peppers").click (function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  if ($(".btn-green-peppers").hasClass("active")) {
      $($(".price li")[2]).show();
     } else {
      $($(".price li")[2]).hide();
     }
     totalPrice();
});
}

function addGlutenFree(){
  $(".btn-crust").click( function(){
  $(".crust").toggleClass("crust-gluten-free")
  $(".btn-crust").toggleClass("active")
  if ( $(this).hasClass( "active" ) ) {
    $(this).text( "Crust" ) && $($(".price li")[4]).show();
  } else {
    $(this).text( "Gluten free crust" ) && $($(".price li")[4]).hide();
  }
  totalPrice();
});
}

function addWhiteSauce(){
  $(".btn-sauce").click( function(){
      $(".sauce").toggleClass("sauce-white");
$(".btn-sauce").toggleClass("active");
if ($(this).hasClass( "active") ){
$(this).text( "Sauce") && $($(".price li")[3]).show();
}else{
   $(this).text("White sauce") && $($(".price li")[3]).hide();
}
totalPrice();
})
}
function defStatus() {
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
 
  $($(".price li")[3]).hide();
  $($(".price li")[4]).hide();
  //$(".panel").hide();
 }

 function totalPrice (){
     var totPrice = 10;
     var ingredientList = $(".price li");
     for (i = 0; i < ingredientList.length; i++){
      if ($(ingredientList[i]).is(":visible")) {
          totPrice += parseInt($(ingredientList[i]).text().replace("$",""));
      }
     }
     $("strong").text(totPrice);
 }