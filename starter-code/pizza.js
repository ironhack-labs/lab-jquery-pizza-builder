// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  // Handler for .ready() called.

removeThings();
SumElements()
// calculate(Price);

});


  // console.log(greenPepper);


  // console.log(mushroom);

  function SumElements(){
    // get pizza base price
    // get ingridients price
    // sum all the prices
    // assing the new price
    /*var basePrice = $("aside.panel b").attr("data-price");
    var sum = 10;
    $("aside.panel li").each(function(index, element){
      if($(this).css("display") != "none"){
        
        sum += element; 
        ($("aside strong").html(sum))
      }
    }) 

    return sum;*/
    var price = 10;
 if($(".btn-crust").hasClass("active")) price+=5;
 if($(".btn-sauce").hasClass("active")) price+=3;
 if($(".btn-green-peppers").hasClass("active")) price+=1;
 if($(".btn-mushrooms").hasClass("active")) price+=1;
 if($(".btn-pepperonni").hasClass("active")) price+=1;

 $(".price strong").replaceWith("<strong>$"+ price +"</strong>");


  }

  // console.log(peperoni);

  function removeThings() {

    $(".btn-green-peppers").on("click", function() {
      // $(this).remove();
      var greenPepper = $(".green-pepper");
      greenPepper.toggle();
      $(this).toggleClass("active") //"this" comes from .btn-green-pepper class/elelemnt
      $("aside ul li:nth(2)").toggle();
      SumElements()
    })

    $(".btn-mushrooms").on("click", function() {
      var mushroom = $(".mushroom");
      mushroom.toggle();
      $(this).toggleClass("active")
      $("aside ul li:nth(1)").toggle();
      SumElements()

    })

    $(".btn-pepperonni").on("click", function() {
      // $(this).remove();
      var pepperonni = $(".pep");
      pepperonni.toggle();
      $(this).toggleClass("active")
      $("aside ul li:first").toggle();
      SumElements()

    })

    $(".btn-sauce").on("click", function() {

      //var btnSauce = $(".btn-sauce").html("White Sauce");

      $(this).text($(this).text() == 'Regular Sauce' ? 'White Sauce' : 'Regular Sauce');
      $(this).toggleClass("active");
      $("aside ul li:nth(3)").toggle();
      SumElements()

    })

    $(".btn-crust").on("click", function() {

      $(this).text($(this).text() == 'Normal Crust' ? 'Gluten Free Crust' : 'Normal Crust');
      $(this).toggleClass("active");
      $("aside ul li:last").toggle();
      SumElements()

    })

  };


function calculatePrice() {
  // var pepperonni = 
  var price1 = str.charAt(1);
  var total = $("aside strong").html()
}
  // function deleteElement(){
  //
  //     $("#listTask").on("click", ".fa", function(){
  //       $(this).parent().remove()
  //   });
