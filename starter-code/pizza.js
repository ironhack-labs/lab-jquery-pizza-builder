// Write your Pizza Builder JavaScript in this file.
 var priceTotal;

$(document).ready(function() {
   priceTotal=10;
  $(".panel.price strong").text(`$${priceTotal}`);
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");
  $(".panel.price li:gt(2)").hide();

  console.log();
});

$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $(".panel.price li:eq(0)").toggle();

    changeButton(".btn-pepperonni",1);
});

$(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".panel.price li:eq(1)").toggle();

    changeButton(".btn-mushrooms",1);
  });

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $(".panel.price li:eq(2)").toggle();

  changeButton(".btn-green-peppers",1);
});


$(".btn-sauce").click(function() {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $(".panel.price li:eq(3)").toggle();

  changeButton(".btn-sauce",3);
});

$(".btn-crust").click(function() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $(".panel.price li:eq(4)").toggle();

  changeButton(".btn-crust",5);
  
});


function changeButton(button,price){

    if($(button).hasClass("active")){
        changePriceTotal("plus",price);
    }else{
      changePriceTotal("minus",price);
    }
  
}

function changePriceTotal(operation, price){
    if(operation === "plus"){
        priceTotal +=price;
    }else{
        priceTotal -=price;
    }

    $(".panel.price strong").text(`$${priceTotal}`);
}

// });
