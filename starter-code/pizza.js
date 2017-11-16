// Write your Pizza Builder JavaScript in this file.
function reset() {
  $('.btn').removeClass('active');
  $('.btn-pepperonni').removeClass('active');
  $('.pep').hide();
  $('.mushroom').hide();
  $('.green-pepper').hide();
  $('.sauce').hide();
  $('.crust').removeClass('crust-gluten-free');
  $('.panel>ul>li:contains($1 pepperonni)').hide();
  $('.panel>ul>li:contains($1 mushrooms)').hide();
  $('.panel>ul>li:contains($1 green peppers)').hide();
  $('.panel>ul>li:contains($3 white sauce)').hide();
  $('.panel>ul>li:contains($5 gluten-free crust)').hide();
  $('.panel>strong').text('$10');
}
reset();

$('.btn-pepperonni').click(function() {
  if ($(this).hasClass('active')) {
    $('.pep').hide();
    $(this).removeClass('active');
    $('.panel>ul>li:contains($1 pepperonni)').hide();
  } else {
    $('.pep').show();
    $(this).addClass('active');
    $('.panel>ul>li:contains($1 pepperonni)').show();
  }
  $('.panel>strong').text('$' + totalPizza());
});
$('.btn-mushrooms').click(function() {
  if ($(this).hasClass('active')) {
    $('.mushroom').hide();
    $(this).removeClass('active');
    $('.panel>ul>li:contains($1 mushrooms)').hide();
  } else {
    $('.mushroom').show();
    $(this).addClass('active');
    $('.panel>ul>li:contains($1 mushrooms)').show();
  }
  $('.panel>strong').text('$' + totalPizza());
});
$('.btn-green-peppers').click(function() {
  if ($(this).hasClass('active')) {
    $('.green-pepper').hide();
    $(this).removeClass('active');
    $('.panel>ul>li:contains($1 green peppers)').hide();
  } else {
    $('.green-pepper').show();
    $(this).addClass('active');
    $('.panel>ul>li:contains($1 green peppers)').show();
  }
  $('.panel>strong').text('$' + totalPizza());
});

$('.btn-sauce').click(function() {
  if ($(this).hasClass('active')) {
    $('.sauce-white').hide();
    $(this).removeClass('active');
    $('.panel>ul>li:contains($3 white sauce)').hide();
  } else {
    $('.sauce-white').show();
    $(this).addClass('active');
    $('.panel>ul>li:contains($3 white sauce)').show();
  }
  $('.panel>strong').text('$' + totalPizza());
});

$('.btn-crust').click(function() {
  if ($(this).hasClass('active')) {
    $('.crust').removeClass('crust-gluten-free');
    $(this).removeClass('active');
    $('.panel>ul>li:contains($5 gluten-free crust)').hide();
  } else {
    $('.crust').addClass('crust-gluten-free');
    $(this).addClass('active');
    $('.panel>ul>li:contains($5 gluten-free crust)').show();
  }
  $('.panel>strong').text('$' + totalPizza());
});

totalPizza = function() {
  pizzaPrice = 10;
  if ($('.btn-pepperonni').hasClass('active')) {
    pizzaPrice += 1;
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    pizzaPrice += 1;
  }
  if ($('.btn-green-peppers').hasClass('active')) {
    pizzaPrice += 1;
  }
  if ($('.btn-sauce').hasClass('active')) {
    pizzaPrice += 3;
  }
  if ($('.btn-crust').hasClass('active')) {
    pizzaPrice += 5;
  }
  return pizzaPrice;
};

// addClass()
// removeClass()
// toggleClass()

// show()
// hide()
// toggle()

// hasClass()

// text()
