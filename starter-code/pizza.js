// $(document).ready(function(){ **********************************ASK WHEN THIS IS NECESSARY
var total = 0,
  pep = 1,
  mus = 1,
  greenPepper = 1,
  whiteSauce = 3,
  glutenFree = 5,
  cheesePizza = 10;

//Default items. Just with pep, mushrooms & green peppers. Not sauce and crust selected.
$(".crust").removeClass("crust-gluten-free");
$(".sauce").removeClass("sauce-white");
$(".price>ul>li:nth-child(4)").hide();
$(".price>ul>li:nth-child(5)").hide();
$(".btn-crust").removeClass("active");
$(".btn-sauce").removeClass("active");

$(".value-cheese-pizza").html(cheesePizza);
$(".value-pep").html(pep);
$(".value-mus").html(mus);
$(".value-green-pepper").html(greenPepper);
$(".value-white-sauce").html(whiteSauce);
$(".value-gluten-free").html(glutenFree);
$(".value-total").html(calculateTotal());


function calculateTotal() {
  total = cheesePizza;
  if (($(".price>ul>li:nth-child(1)").is(":visible"))) {
    total += pep;
  }
  if (($(".price>ul>li:nth-child(2)").is(":visible"))) {
    total += mus;
  }
  if (($(".price>ul>li:nth-child(3)").is(":visible"))) {
    total += greenPepper;
  }
  if (($(".price>ul>li:nth-child(4)").is(":visible"))) {
    total += whiteSauce;
  }
  if (($(".price>ul>li:nth-child(5)").is(":visible"))) {
    total += glutenFree;
  }
  return total + "$";
}

$(".btn-pepperonni").click(function() {
  $(this).toggleClass('active'); //toggle button press up/down
  $('.pep').toggle(); //toggle Pepperoni icons
  $(".price>ul>li:nth-child(1)").toggle();
  // $("[attribute*='value']") **********************ASK HOW CAN I SELECT 'Pepperoni' not with nth-child
  $(".value-total").html(calculateTotal()); //calculate when it show or hide
});

$(".btn-mushrooms").click(function() {
  $(this).toggleClass('active');
  $(".mushroom").toggle();
  $(".price>ul>li:nth-child(2)").toggle();
  $(".value-total").html(calculateTotal());

});

$(".btn-green-peppers").click(function() {
  $(this).toggleClass('active');
  $(".green-pepper").toggle();
  //  $(".price>ul>li:nth-child(3)").toggle() //easier
  if ($(this).hasClass('active')) $(".price>ul>li:nth-child(3)").show(); //toggle alternative
  else $(".price>ul>li:nth-child(3)").hide();
  $(".value-total").html(calculateTotal());

});


$(".btn-sauce").click(function() {
  $(this).toggleClass('active');
  $(".sauce").toggleClass("sauce-white");
  $(".price>ul>li:nth-child(4)").toggle();
  $(".value-total").html(calculateTotal());

});


$(".btn-crust").click(function() {
  $(this).toggleClass('active');
  $(".crust").toggleClass("crust-gluten-free");
  $(".price>ul>li:nth-child(5)").toggle();
  $(".value-total").html(calculateTotal());
});
