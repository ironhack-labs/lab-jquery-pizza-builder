$(document).ready(function() {

  // $(".sauce").removeClass("sauce-white");
  // $(".crust").removeClass("crust-gluten-free");

  $(".btn-pepperonni").data('price', 1);
  $(".btn-mushrooms").data('price', 1);
  $(".btn-green-peppers").data('price', 1);
  $(".btn-sauce").data('price', 3);
  $(".btn-crust").data('price', 5);

function calculateTotalPrice() {
  var allTheButtons = $('.btn');
  var price = 10;
  
for(var i = 0; i < $('.btn').length; i++) {
  if(allTheButtons.eq(i).hasClass('active')) {
    price += allTheButtons.eq(i).data('price');
  }
}
$('strong').text('$' + price);
}

  $('.btn').click(function() {
    $(this).toggleClass("active");
    calculateTotalPrice();
  })

  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $('.price ul li:first').toggle();
  });
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $('.price ul li:nth-child(2)').toggle();
  });
  $(".btn-green-peppers").click(function() {
      $(".green-pepper").toggle();
      $('.price ul li:nth-child(3)').toggle();
  });
  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $('.price ul li:nth-child(4)').toggle();
    // $(".btn-sauce").toggleClass("active");
  });
  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".price ul li:last").toggle();
    // $('.price ul li:nth-child(5)').toggle();
    // $(".btn-crust").toggleClass("active");
  });
  $(".btn-pepperonni").click();
  $(".btn-mushrooms").click();
  $(".btn-green-peppers").click();
  $(".btn-crust").click();
  $('.btn-sauce').click();
 });

