// Write your Pizza Builder JavaScript in this file.

$.getScript('./toword.js');

$('#clear').click(function() {
  $('#pizza').empty();
  var base = '<section class="crust crust-regular"><section class="cheese"></section><section class="sauce sauce-regular"></section></section>'
  $('#pizza').append(base);

});

if ($('.green-pepper').length === 0) {
  $('#green-pepper').removeClass('active');
};
if ($('.mushroom').length === 0) {
  $('#mushroom').removeClass('active');
};
if ($('.pep').length === 0) {
  $('#pep').removeClass('active');
};


$('.btn-topping').click(function(e) {
  $(this).addClass('active');
  var ingr = $(this).attr("id");
  if ($('.' + ingr).length === 0) {
    var firstIngr = '<section class="' + ingr + ' one">1</section>';
    $("#pizza").prepend(firstIngr);
  } else {
    var ingrArray = $('.' + ingr);
    var lastIngrNumber = parseInt(ingrArray.last()[0].innerHTML);
    var nextIngrNumber = lastIngrNumber + 1;
    var stupidMushroom = '<section class="' + ingr + ' ' + inWords(nextIngrNumber) + '">' + nextIngrNumber + '<div class="cap"></div><div class="stem"></div></section>';
    var newIngr = '<section class="' + ingr + ' ' + inWords(nextIngrNumber) + '">' + nextIngrNumber + '</section>';
    if (ingr === "mushroom") {
      ingrArray.last().after(stupidMushroom);
    } else {
      ingrArray.last().after(newIngr);
    }
  }
  calcPrices();

});


$('.btn-crust').click(function() {
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  calcPrices();

});

$('.btn-sauce').click(function() {
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  calcPrices();

});

function calcPrices() {
  var pepCount = $('.pep').length;
  $('#pep-total').text((pepCount * 0.1).toFixed(2));
  var mushCount = $('.mushroom').length;
  $('#mush-total').text((mushCount * 0.2).toFixed(2));
  var greenCount = $('.green-pepper').length;
  $('#green-total').text((greenCount * 0.3).toFixed(2));
  var sauceAddon = $('.btn-sauce').hasClass('active') ? 2 : 0;
  $('#sauce-total').text(sauceAddon);
  var crustAddon = $('.btn-crust').hasClass('active') ? 1.5 : 0;
  $('#crust-total').text(crustAddon);


  var pizzaPx = (10 + (pepCount * 0.1) + (greenCount * 0.3) + (mushCount * 0.2) + sauceAddon + crustAddon).toFixed(2);
  $('#pizza-total').text(pizzaPx);
};

calcPrices();
