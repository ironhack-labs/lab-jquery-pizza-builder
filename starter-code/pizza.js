// Write your Pizza Builder JavaScript in this file.
// $('.green-pepper one').click(() => {

// })
/*--------------------------Toggle 3 main toppings-----------------*/
$('.btn-pepperonni , .btn-mushrooms , .btn-green-peppers').click((e) => $($(e.currentTarget).data('topping')).toggle());
//   console.log(e.currentTarget)
//  console.log( $(e.currentTarget).data('topping'))
//   $($(e.currentTarget).data('topping')).toggle();
// })

// $('.btn-mushrooms').click(() => {
//   $('.mushroom ').toggle();
// })

// $('.btn-green-peppers').click(() => {
//   $('.green-pepper ').toggle();
// })

/*--------------------------Toggle 2 options-----------------*/

$('.btn-sauce').click(() => {
  $('#sauce').toggleClass("sauce-white");
})

$('.btn-crust').click(() => {
  $('#crust').toggleClass("crust-gluten-free");
})

/*--------------------------Toggle Button Active Class------------*/
// $('.btn-pepperonni .btn-mushrooms .btn-green-peppers').click(() => {
//   $('.pep .mushroom .green-pepper ').toggleClass("active")
// })

// $('.btn-pepperonni').click(() => {
//   $('.btn-pepperonni').toggleClass("active");
// })

// $('.btn-mushrooms').click(() => {
//   $('.btn-mushrooms').toggleClass("active")
// })

// $('.btn-green-peppers').click(() => {
//   $('.btn-green-peppers').toggleClass("active")
// })

// $('.btn-sauce').click(() => {
//   $('.btn-sauce').toggleClass("active")
// })

// $('.btn-crust').click(() => {
//   $('.btn-crust').toggleClass("active")
// })

/*--------------------------Calculate/Update Total Price------------*/
let pizzaCost = 13;     //default cheese pizza cost

// if($('.btn-pepperonni').hasClass('active')) {
//   pizzaCost += 1;
// }

// if($('.btn-mushrooms').hasClass('active')) {
//   pizzaCost += 1;
// }

// if($('.btn-green-peppers').hasClass('active')) {
//   pizzaCost += 1;
// }

// if($('.btn-sauce').hasClass('active')) {
//   pizzaCost += 3;
// }

// if($('.btn-crust').hasClass('active')) {
//   pizzaCost += 5;
// }

/*---------------Joint Active Toggle & Price Calculator------------*/
$('strong').text("$" + pizzaCost) //setting default price of pizza to $13


$('.btn-pepperonni').click(() => {
  $('.btn-pepperonni').toggleClass("active");
  if($('.btn-pepperonni').hasClass('active')) {
    $('#p-option').toggleClass('hide')
    pizzaCost += 1;
  } else {
    $('#p-option').toggleClass('hide');
    pizzaCost -= 1;
  }
  $('strong').text("$" + pizzaCost)
})

$('.btn-mushrooms').click(() => {
  $('.btn-mushrooms').toggleClass("active");
  if($('.btn-mushrooms').hasClass('active')) {
    $('#m-option').toggleClass('hide')
    pizzaCost += 1;
  } else {
    $('#m-option').toggleClass('hide');
    pizzaCost -= 1;
  }
  $('strong').text("$" + pizzaCost)
})


$('.btn-sauce').click(() => {
  $('.btn-sauce').toggleClass("active");
  if($('.btn-sauce').hasClass('active')) {
    $('#ws-option').toggleClass('hide')
    pizzaCost += 3;
  } else {
    $('#ws-option').toggleClass('hide');
    pizzaCost -= 3;
  }
  $('strong').text("$" + pizzaCost)
})

$('.btn-crust').click(() => {
  $('.btn-crust').toggleClass("active");
  if($('.btn-crust').hasClass('active')) {
    $('#gf-option').toggleClass('hide')
    pizzaCost += 5;
  } else {
    $('#gf-option').toggleClass('hide');
    pizzaCost -= 5;
  }
  $('strong').text("$" + pizzaCost)
})





