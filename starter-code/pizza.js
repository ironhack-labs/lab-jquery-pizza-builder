// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function(){


  // $(".pep").hide();
  // $(".mushroom").hide();
  // $(".green-pepper").hide();
  // $(".sauce").removeClass("sauce-white");
  // $(".crust").removeClass("crust-gluten-free");
  // $(".price li").hide();

  $(".btn-pepperonni").data("price", 1);
  $(".btn-mushrooms").data("price", 1);
  $(".btn-green-pepers").data("price", 1);
  $(".btn-sauce").data("price", 3);
  $(".btn-crust").data("price", 5);

  function calculateTotalPrice(){
    var allTheButtons = $('.btn');
    var totalPrice= 10;

    for(var i = 0; i < $('.btn').length; i++){
      if(allTheButtons[i].hasClass('active')){
        price += allTheButtons.eq(i).data('price');
      }
    }
    $('strong').text('$' + price);
  }

  
$('.btn').click(function(){

  
})


$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $("li:contains(pepperonni)").toggle();
  $(".btn-pepperonni").toggleClass("active");
});

$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains(mushroom)").toggle();  
});

$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("li:contains(green peppers)").toggle();  
});


$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains(white sauce)").toggle();
  
});


$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains(gluten-free crust)").toggle();
  
});



});