$(document).ready(function() {
var basePrice=10;
// PEPPERONI BUTTON
$(".btn-pepperonni").click(function() {
  $('.pep').toggle();
  $('#pepper').toggle();
  $(this).toggleClass("active");
  calculatePrice();
});
  // if ($(this).hasClass('active')) {
  //   totalPrice=Number(totalPrice) + 1;
  //   document.getElementById('finalPrice').innerHTML=(totalPrice);
  // } else {
  //   totalPrice=Number(totalPrice) - 1;
  //   if (totalPrice<10) {
  //     document.getElementById('finalPrice').innerHTML=(basePrice);
  // } else {
  //     document.getElementById('finalPrice').innerHTML=(totalPrice);
  // }
// }});


  //  if ($(".btn-pepperonni").hasClass('active')) {
  //    $('#pepper').show();
  //    currentPrice=basePrice+1;
  //    document.getElementById('finalPrice').innerHTML=(currentPrice);
  //    $('finalPrice').innerHTML().replaceWith($(currentPrice));
  //
  // } else {$('#pepper').hide();
  //    newPrice=currentPrice-1;
  //    document.getElementById('finalPrice').innerHTML=(newPrice);
  //    }

// MUSHROOM button

$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  $("#shroom").toggle();
  $(this).toggleClass("active");
  calculatePrice();});
  // if ($(this).hasClass('active')) {
  //   totalPrice=Number(totalPrice) + 1;
  //   document.getElementById('finalPrice').innerHTML=(totalPrice);
  // } else {
  //   totalPrice=Number(totalPrice) - 1;
  //   if (totalPrice<10) {
  //     document.getElementById('finalPrice').innerHTML=(basePrice);
  // } else {
  //     document.getElementById('finalPrice').innerHTML=(totalPrice);
  // }}});
//   if ($(".btn-mushrooms").hasClass('active')) {
//     $('#shroom').show();
//     currentPrice=basePrice+1;
//     document.getElementById('finalPrice').innerHTML=(currentPrice);
//
//  } else {$('#shroom').hide();
//    newPrice=currentPrice-1;
//    document.getElementById('finalPrice').innerHTML=(newPrice);}
// }
// );

$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  $(this).toggleClass("active");
  $("#greenpep").toggle();
  calculatePrice();});
//   if ($(".btn-green-peppers").hasClass('active')) {
//     $('#greenpep').show();
//     currentPrice=currentPrice+1;
//     document.getElementById('finalPrice').innerHTML=(currentPrice);
//     $('finalPrice').innerHTML().replaceWith($(currentPrice));
//  } else {$('#greenpep').hide();}
//
//  newPrice=currentPrice-1;
//  document.getElementById('finalPrice').innerHTML=(newPrice);}
// );

 $('.btn-sauce').click(function() {
  $('#whitesauce').toggle();
  $('.sauce-white').toggle();
  $(this).toggleClass("active");
  calculatePrice();}
//   if ($(this).hasClass('active')) {
//     totalPrice=Number(totalPrice) + 3;
//   } else {
//     totalPrice=Number(totalPrice) - 3;
//   }
// });
//   if ($(".btn-sauce").hasClass('active')) {
//     $('#whitesauce').show();
//     currentPrice=currentPrice+3;
//     document.getElementById('finalPrice').innerHTML=(currentPrice);
//     $('finalPrice').innerHTML().replaceWith($(currentPrice));
//  } else {$('#whitesauce').hide();}
//   newPrice=currentPrice-3;
//   if (newPrice<=10) {
//   document.getElementById('finalPrice').innerHTML=(basePrice);}
// else {document.getElementById('finalPrice').innerHTML=(currentPrice);}});
);
$('.btn-crust').click(function() {
  $('.crust').toggle();
  $('#gfoption').toggle();
  $(this).toggleClass("active");
  calculatePrice();}
//   if ($(".btn-crust").hasClass('active')) {
//     $('#gfoption').show();
//     totalPrice=Number(totalPrice) + 3;
//
//  } else {$('#gfoption').hide();
//  totalPrice=Number(totalPrice) - 3;}
// });

// function TotalPrice() {
//   var basePrice=10;
//     if ($(".btn-pepperonni").hasClass('active')) {
//     basePrice=basePrice+1;}
//     if ($(".btn-mushrooms").hasClass('active')) {
//     basePrice=basePrice+1;}
//     else {basePrice=basePrice};
//     if ($(".btn-green-peppers").hasClass('active')) {
//      basePrice=basePrice+1;}
//     if ($(".btn-sauce").hasClass('active')) {
//      basePrice=basePrice+3;}
//     if ($(".btn-crust").hasClass('active')) {
//      basePrice=basePrice+5;}
//
//      return basePrice;
//
// }
//
// console.log(TotalPrice());

// function TotalPrice() {
// var basePrice = 10;
// var total = 0;
// if ($(".btn-crust").hasClass('active')) {
//   total= basePrice+1;
//   } else {
//     total= total;}
// }
// console.log(TotalPrice);
// function CalculateTotal() {
//          var numberOP = document.getElementById('pepper').value;
//          var total = 10+numberOP;
//          document.getElementById('totalPrice').innerHTML = 'Total: ' + total;
//          document.getElementById('total').value = total;
//        }
);

function calculatePrice () {
    var basePrice=10;
    if ($('.btn-pepperonni').hasClass('active')) {
       basePrice+=1;
       }
     if ($('.btn-mushrooms').hasClass('active')) {
      basePrice+=1;
      }
     if ($('.btn-green-peppers').hasClass('active')) {
       basePrice+=1;
       }
     if ($('.btn-sauce').hasClass('active')) {
      basePrice+=3;
       }
     if ($(".btn-crust").hasClass('active')) {
        basePrice+=5;
       }
 document.getElementById('finalPrice').innerHTML=basePrice;
     }
  //  $('.btn').click(calculatePrice());
        // $('.btn').click(function() {


});
// document.getElementById('finalPrice').innerHTML=(totalPrice);
