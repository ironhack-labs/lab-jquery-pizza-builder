// Write your Pizza Builder JavaScript in this file.

/////////////////////////////default stats

$('.btn-crust').removeClass("active");
$("crust-gluten-free").removeClass("crust-gluten-free");

$('.btn-sauce').removeClass("active");
$('.sauce').removeClass("sauce-white ");

//////////////////////////////////////////////// panel price default
$("#saucePrice").toggle("#saucePrice");
$("#crustPrice").toggle("#crustPrice");

geTotalPrice();

//////////////////////////////////////////////// peporoni
let peppeRoniBtn = $(".btn-pepperonni");

peppeRoniBtn.click(function(e){

  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("#pepPrice").toggle("#pepPrice");
  geTotalPrice();
})
//////////////////////////////////////////////// Mashrums
let mashrumsBtn = $(".btn-mushrooms");

mashrumsBtn.click(function(e){

  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("#shroomPrice").toggle("#shroomPrice");
  geTotalPrice();
})

//////////////////////////////////////////////// pappers
let pepperBtn = $(".btn-green-peppers");

pepperBtn.click(function(e){

  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("#pepperPrice").toggle("#pepperPrice");
  geTotalPrice();
})

//////////////////////////////////////////////// souce
let sauceBtn = $(".btn-sauce");

sauceBtn.click(function(e){

  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("#saucePrice").toggle("#saucePrice");
  geTotalPrice();
})

// //////////////////////////////////////////////// crust
let crustBtn = $(".btn-crust");

crustBtn.click(function(e){

  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("#crustPrice").toggle("#crustPrice");
  geTotalPrice();
})
//////////////////////////////////////////////// Total Price

 function geTotalPrice() {
     
    // let pepPrice = Number($('#pepPrice > span:visible').html());
    // let shroomPrice = Number($('#shroomPrice > span:visible').html());
    // let pepperPrice = Number($('#pepperPrice > span:visible').html());
    // let saucePrice = Number($('#saucePrice > span:visible').html());
    // let crustPrice = Number($('#crustPrice > span:visible').html());
    

    // let priceArray = [pepPrice, shroomPrice, pepperPrice, saucePrice, crustPrice];

    // priceArray.forEach(price => {
    //   if (price) {
    //     totalPrice += price;
    //   //} else { totalPrice 
    // }
      
    // });

    let totalPrice = Number($('#default-pizza-price').html());

    if($(".btn-pepperonni").hasClass("active")) {
       totalPrice += Number($('#pepPrice > span:visible').html());
     } if ($(".btn-mushrooms").hasClass("active")) {
       totalPrice += Number($('#shroomPrice > span:visible').html());
      } if ($(".btn-green-peppers").hasClass("active")) {
       totalPrice += Number($('#pepperPrice > span:visible').html());
      } if ($(".btn-sauce").hasClass("active")) {
       totalPrice += Number($('#saucePrice > span:visible').html());
      } if ($(".btn-crust").hasClass("active")) {
       totalPrice += Number($('#crustPrice > span:visible').html());
      }
    

    let TotalPricePath = $('body > aside > strong');
    TotalPricePath.html(totalPrice);
}



