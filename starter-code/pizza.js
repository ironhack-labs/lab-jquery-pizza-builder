// Write your Pizza Builder JavaScript in this file.

let price = $("strong").html()
price = parseInt(price.replace(/\W/g, ''))
let ogPrice = 13;
//$( "strong" ).html("$" + ogPrice)
//Add/Remove Peperoni
$(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $( "li:contains('pepperonni')").toggle()

  if($('.pep').length < 0){
    price -+ 1;
} else if($('.pep').css('display') == 'block'){
  price += 1;
} else {
  price -= 1;
}
$( "strong" ).html("$" + price)
});

//Add/Remove Mushrooms
$(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $( "li:contains('mushrooms')").toggle()

  if($('.mushroom:hidden').length < 0){
    price -+ 1;
} else if($('.mushroom').css('display') == 'block'){
  price += 1;
} else {
  price -= 1;
}
$( "strong" ).html("$" + price)
});

//Add/Remove Green Peppers
$(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $( "li:contains('green peppers')").toggle()
  
  if($('.green-pepper:hidden').length < 0){
    price -+ 1;
} else if($('.green-pepper').css('display') == 'block'){
  price += 1;
} else {
  price -= 1;
}
$( "strong" ).html("$" + price)
});

//Hide & Toggle Gluten free criust
$( "li:contains('gluten-free crust')").hide()
$( "section" ).removeClass( "crust-gluten-free" )
$( ".btn-crust" ).removeClass( "active" )

$(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $( "li:contains('gluten-free crust')").toggle()
  if($('.crust-gluten-free').length > 0){
    price += 5;
  }else {
    price -=5;
  }
  $( "strong" ).html("$" + price)
});

//Hide and toggle white sauce
$( "li:contains('white sauce')").hide()
$( ".btn-sauce" ).removeClass( "active" )
$( "section" ).removeClass( "sauce-white" )

$(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $( "li:contains('white sauce')").toggle()
  if($('.sauce-white').length > 0){
    price += 3;
  }else {
    price -=3;
  }
  $( "strong" ).html("$" + price)
});

//Default Total Price'




