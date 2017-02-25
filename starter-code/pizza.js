// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){


  // ingredients

  var sum = 21;

  function sender(toppings, toppingsPrice){
    if ($(toppings).hasClass('off')) {
      sum -= toppingsPrice;
      console.log('subtracted');
    } else {
      sum += toppingsPrice;
      console.log('added');
    }
    $('strong').text("$" + sum);
  }

  $('.btn-pepperonni').on('click',function(){
    $('.pep').toggle();
    $('.pep').toggleClass('off');
    sender('.pep', pep);
    $('.price li').eq(0).toggle();
  });

  $('.btn-mushrooms').on('click',function(){
    $('.mushroom').toggle();
    $('.mushroom').toggleClass('off');
    sender('.mushroom', mushrooms);
    $('.price li').eq(1).toggle();
  });

  $('.btn-green-peppers').on('click',function(){
    $('.green-pepper').toggle();
    $('.green-pepper').toggleClass('off');
    sender('.green-pepper', greenPepper);
    $('.price li').eq(2).toggle();
  });

  $('.btn-sauce').on('click',function(){
    $('.sauce').toggle();
    $('.sauce').toggleClass('off');
    sender('.sauce', sauce);
    $('.price li').eq(3).toggle();
  });

  $('.btn-crust').on('click',function(){
    $('.crust').toggle();
    $('.crust').toggleClass('off');
    sender('.crust', crust);
    $('.price li').eq(4).toggle();
  });
// end ingredients

  var pep = 1,
    mushrooms = 1,
    greenPepper = 1,
    sauce = 3,
    crust = 5;

    // var toppingsArray = [];
    //
    // function pushArray(num) {
    //   toppingsArray.push(num);
    //   sum();
    // }


});
