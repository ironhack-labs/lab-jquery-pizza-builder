
// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  var total_price=0;
//$(".btn-pepperonni, .btn-mushrooms, .btn-green-peppers").toggleClass("active");
// $('#pepPrice').toggleClass("pricebt");
    $(".btn-pepperonni").on("click", function() {
        $(".pep").toggle();
        $(".btn-pepperonni").toggleClass("active");
        console.log($(".btn-pepperonni"));
        $("#pepPrice").fadeToggle();
        $('#pepPrice').toggleClass("pricebt");
        });



// $(".btn-mushrooms").toggleClass("active");
    $(".btn-mushrooms").on("click", function() {
        $(".mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active");
        $('#mushPrice').fadeToggle();
        $("#mushPrice").toggleClass("pricebt");
      });


// $(".btn-green-peppers").toggleClass("active");
    $(".btn-green-peppers").on("click", function() {
        $(".green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
        $('#greenPrice').fadeToggle();
        $("#greenPrice").toggleClass("pricebt");
      });



    $(".sauce").toggleClass("sauce-white");
    $('#whitePrice').toggle();
    $('#whitePrice').toggleClass("pricebt");
    $(".btn-sauce").toggleClass("active");

    $(".btn-sauce").on("click", function() {
        $(".sauce").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $('#whitePrice').fadeToggle();
        $('#whitePrice').toggleClass("pricebt");

    });



    $(".crust").toggleClass("crust-gluten-free");
    $('#glutenPrice').toggle();
    $(".btn-crust").toggleClass("active");
    $('#glutenPrice').toggleClass("pricebt");

    $(".btn-crust").on("click", function() {
        $(".crust").toggleClass("crust-gluten-free");
        $(".btn-crust").toggleClass("active");
        // console.log($(".btn-crust"));
        $('#glutenPrice').fadeToggle();
        $('#glutenPrice').toggleClass("pricebt");

    });


    $(".btn").on("click", function() {
      total_price=10;
    $(".pricebt").each(function(){
total_price += parseFloat($(this).val());
console.log(this);

});
});
$(".btn").on("click", function() {
  $("#totalPrice").html(total_price);
  console.log(total_price);
  console.log("hi");
});



});
