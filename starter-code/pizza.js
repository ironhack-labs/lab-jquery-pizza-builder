// Write your Pizza Builder JavaScript in this file.

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
});

$('.btn-sauce.active').click(function() {
  if ($(this).hasClass('active')) {
    $('.sauce-white').hide();
    $(this).removeClass('active');
    $('.panel>ul>li:contains($3 white sauce)').hide();
  } else {
    $('.sauce-white').show();
    $(this).addClass('active');
    $('.panel>ul>li:contains($3 white sauce)').show();
  }
});

$('.btn-crust.active').click(function() {
  if ($(this).hasClass('active')) {
    $('.crust').removeClass('crust-gluten-free');
    $(this).removeClass('active');
    $('.panel>ul>li:contains($5 gluten-free crust)').hide();
  } else {
    $('.crust').addClass('crust-gluten-free');
    $(this).addClass('active');
    $('.panel>ul>li:contains($5 gluten-free crust)').show();
  }
});

// addClass()
// removeClass()
// toggleClass()

// show()
// hide()
// toggle()

// hasClass()

// text()
