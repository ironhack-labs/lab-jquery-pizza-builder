// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  var totalPrice = 13;
  $('.btn-pepperonni').click(function(){
    $('.pep').toggleClass('hidden');
    $('.btn-pepperonni').toggleClass('active');
    $('.pepperonni-price').toggleClass('hidden');
    if ($('.btn-pepperonni').hasClass('active') == true) {
        updatePriceAdd('pepperonni');
        $('.total-price').replaceWith('$ ' + totalPrice);
    } else {
        updatePriceSubtract('pepperonni');
        $('.total-price').replaceWith('$ ' + totalPrice);
    }
  });
  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggleClass('hidden');
    $('.btn-mushrooms').toggleClass('active');
    $('.mushroom-price').toggleClass('hidden');
    if ($('.btn-mushrooms').hasClass('active') == true) {
        updatePriceAdd('mushrooms');
        $('.total-price').replaceWith('$ ' + totalPrice);
    } else {
        updatePriceSubtract('mushrooms');
        $('.total-price').replaceWith('$ ' + totalPrice);
    }
  });
  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggleClass('hidden');
    $('.btn-green-peppers').toggleClass('active');
    $('.green-pepper-price').toggleClass('hidden');
    if ($('.btn-green-peppers').hasClass('active') == true) {
        updatePriceAdd('greenpeppers');
        $('.total-price').replaceWith('$ ' + totalPrice);
    } else {
        updatePriceSubtract('greenpeppers');
        $('.total-price').replaceWith('$ ' + totalPrice);
    }
  });
  $('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.sauce-price').toggleClass('hidden');
    if ($('.btn-sauce').hasClass('active') == true) {
        updatePriceAdd('whitesauce');
        $('.total-price').replaceWith('$ ' + totalPrice);
    } else {
        updatePriceSubtract('whitesauce');
        $('.total-price').replaceWith('$ ' + totalPrice);
    }
  });
  $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.crust-price').toggleClass('hidden');
    if ($('.btn-crust').hasClass('active') == true) {
        updatePriceAdd('glutenfreecrust');
        $('.total-price').replaceWith('$ ' + totalPrice);
    } else {
        updatePriceAdd('glutenfreecrust');
        $('.total-price').replaceWith('$ ' + totalPrice);
    }
  });
  function updatePriceAdd(topping){
    totalPrice = 13;
    switch(topping) {
      case 'pepperonni':
      totalPrice += 1;
      break;
      case 'mushrooms':
      totalPrice += 1;
      break;
      case 'greenpeppers':
      totalPrice += 1;
      break;
      case 'whitesauce':
      totalPrice += 3;
      break;
      case 'glutenfreecrust':
      totalPrice += 5;
      break;
    }
    return totalPrice;
  }
  function updatePriceSubtract(topping){
    totalPrice = 13;
    switch(topping) {
      case 'pepperonni':
      totalPrice -= 1;
      break;
      case 'mushrooms':
      totalPrice -= 1;
      break;
      case 'greenpeppers':
      totalPrice -= 1;
      break;
      case 'whitesauce':
      totalPrice -= 3;
      break;
      case 'glutenfreecrust':
      totalPrice -= 5;
      break;
    }
    return totalPrice;
  }
});

// if ($('.btn-pepperonni').hasClass('active')) {
//     updatePriceAdd('pepperonni');
//     $('.total-price').replaceWith(totalPrice);
// } else {
//     updatePriceSubtract('pepporonni');
//     $('.total-price').replaceWith(totalPrice);
// }


// function updatePriceAdd(topping){
//   totalPrice = 13;
//   if ('pepperonni' || 'mushrooms' || 'greenpeppers') {
//     totalPrice += 1;
//   } else if ('whitesauce') {
//     totalPrice += 3;
//   } else if ('glutenfreecrust') {
//     totalPrice += 5;
//   }
//   return totalPrice;
// }

//if .btn-pepperonni has class active then add
//if .btn-pepperonni doesn't have class active then subtract

//function that changes the price and call it per each button toggle


// if class is active then we want to add to total price
// if class in negative we want to subtract from total price
// then we want to go thru the swtich to determine what amount needs to be added

//check if adding or removing and then if adding
//check what paramenter is being used
//Then ww update price based of adding
//Then update the total price HTML



//use check class in order to see if add or subtract
