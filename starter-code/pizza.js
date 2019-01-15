// add and remove green-pepper
let basePrice = 13;
let dolar = "$";

$(document).ready (function(){
  $(".btn-green-peppers").click(function(event) {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $(".pep-price").toggle(500);
    if ($(this).hasClass("active")){
      basePrice += 1;
      $("strong").html(dolar + basePrice);  
    } else {
        basePrice -= 1;
      $("strong").html(dolar + basePrice);
    }
  });
});

$(document).ready (function(){
  $(".btn-mushrooms").click(function(event) {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $(".mushroom-price").toggle(500);
    if ($(this).hasClass("active")){
      basePrice += 1;
      $("strong").html(dolar + basePrice);  
    } else {
        basePrice -= 1;
      $("strong").html(dolar + basePrice);
    }
  })
})

$(document).ready (function(){
  $(".btn-pepperonni").click(function(event) {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $(".pepperonni-price").toggle(500);
    if ($(this).hasClass("active")){
      basePrice += 1;
      $("strong").html(dolar + basePrice);  
    } else {
        basePrice -= 1;
      $("strong").html(dolar + basePrice);
    }
  })
})

$(document).ready (function(){
  $(".btn-sauce").click(function(event) {
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    $(".sauce-price").toggle(500);
    if ($(this).hasClass("active")){
      basePrice += 3;
      $("strong").html(dolar + basePrice);  
    } else {
        basePrice -= 3;
      $("strong").html(dolar + basePrice);
    }
  })
})

$(document).ready (function(){
  $(".btn-crust").click(function(event) {
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");
    $(".crust-price").toggle(500);
    if ($(this).hasClass("active")){
      basePrice += 5;
      $("strong").html(dolar + basePrice);  
    } else {
        basePrice -= 5;
      $("strong").html(dolar + basePrice);
    }
  });
})


