// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  /*Por defecto la pizza es sin gluten-free y sin sauce-white*/
  $('.crust').removeClass('crust-gluten-free');
  $('.sauce').removeClass('sauce-white');
  $('.btn-crust').removeClass('active');
  $('.btn-sauce').removeClass('active');
  price();



  addRemIngredients('.btn-pepperonni','.pep');
  addRemIngredients('.btn-green-peppers','.green-pepper');
  addRemIngredients('.btn-mushrooms','.mushroom');
  addRemIngredients('.btn-sauce','.sauce','sauce-white');
  addRemIngredients('.btn-crust','.crust','crust-gluten-free');

});

/*
Función que añade o quita los ingredientes.
*/
function addRemIngredients(btn,target,toggle){
  $(btn).click(function(){
    $(this).toggleClass("active");

    if(toggle){
      $(target).toggleClass(toggle);
    }else{
      $(target).toggle();
    }
    price();
  });
}

function price(){
  var total = 10;
  $(".price li").hide();


 $.each($(".btn.active"), function(index, btn) {
   var ingredient = $(btn).text().toLowerCase();
   var $listElement = $("li:contains('" + ingredient + "')");

   var ingredientPrice = parseInt(
      $listElement.text().split(" ")[0].replace("$", "")
    );

    total += ingredientPrice;


    $listElement.show();
 });

 $(".price strong").text("$" + total);


}
