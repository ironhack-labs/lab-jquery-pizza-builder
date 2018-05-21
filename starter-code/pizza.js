// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
   clickMushrooms();
   clickPepperonni();
   clickPeppers();
   clickSauce();
   clickCrust();   
});
/*

PRIMER INTENTO DEL EJERCICIO. FRAN ME DIJO QUE LO HICIESE EN JQUERY Y NO USANDO REDUCE Y OBJETOS.

var ingredients = [
  { ingredient: "Pepperonni",
    price: 1,
    isActive: true,
  },
  { ingredient: "Mushrooms",
    price: 1,
    isActive: true,
  },
  { ingredient: "Peppers",
    price: 1,
    isActive: true,
  },
  { ingredient: "Sauce",
    price: 3,
    isActive: true,
  },
  { ingredient: "gluten",
    price: 5,
    isActive: true
  },
  ];

var finalPrice = 0;
$(".btn").click(function(){
    finalPrice = ingredients.reduce(function(acc, ingredient){   
        console.log('Acumulador: ', acc, ' Current: ', ingredient)
        console.log("=========================================")
        return ingredient.isActive ? acc + ingredient.price : acc
  }, 10);
$("aside strong").text("$" + finalPrice)  
});

*/
// 21$ PORQUÉ SALE TODO PUESTO DE INICIO
var price = 21;

function clickPepperonni() {
   $('.btn-pepperonni').click(function () {
       $('.btn-pepperonni').toggleClass('active');
       if ($('.btn-pepperonni').hasClass('active')) {
           $('.pep').toggle();
           price = price + 1;
           $("aside strong").text("$" + price);  
       } else {
           price = price - 1;
           $('.pep').toggle();
           $("aside strong").text("$" + price);
       }
   })
}
function clickMushrooms() {
  $('.btn-mushrooms').click(function () {
      $('.btn-mushrooms').toggleClass('active');
      if ($('.btn-mushrooms').hasClass('active')) {
          $('.mushroom').toggle();
          price = price + 1;
          $("aside strong").text("$" + price);
      } else {
          $('.mushroom').toggle();
          price = price - 1;
          $("aside strong").text("$" + price);
      }
  })
}
function clickPeppers() {
  $('.btn-green-peppers').click(function () {
      $('.btn-green-peppers').toggleClass('active');
      if ($('.btn-green-peppers').hasClass('active')) {
          $('.green-pepper').toggle();
          price = price + 1;
          $("aside strong").text("$" + price);
      } else {
          $('.green-pepper').toggle();
          price = price - 1;
          $("aside strong").text("$" + price);
      }
  })
}
function clickSauce() {
  $('.btn-sauce').click(function () {
      $('.btn-sauce').toggleClass('active');
      if ($('.btn-sauce').hasClass('active')) {
          $('.sauce-white').toggle();
         price = price + 3;
         $("aside strong").text("$" + price);
      } else {
          $('.sauce-white').toggle();
          price = price - 3;
          $("aside strong").text("$" + price);
      }
  })
}
function clickCrust() {
  $('.btn-crust').click(function () {
      $('.btn-crust').toggleClass('active');
      if ($('.btn-crust').hasClass('active')) {  
          price = price + 5;
          $("aside strong").text("$" + price);
      } else {
        price = price - 5;
        $("aside strong").text("$" + price);
      }
  })
}