// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

  $('.price strong').text('$13');
  $('.price li:nth-last-child(-n+2)').toggle();
  $('.btn-sauce').toggleClass('active');
  $('.btn-crust').toggleClass('active');
  togglePepperonni();
  toggleMushroom();
  toggleGreen();
  toggleSauce();
  toggleGluten();

});

function updateTotalPrice() {
  var tmp = 10;
  if ($('.btn-pepperonni').hasClass('active')) {
    tmp += 1;
  }
  if ($('.btn-mushrooms').hasClass('active')) {
    tmp += 1;
  }
  if ($('.btn-green-peppers').hasClass('active')) {
    tmp += 1;
  }
  if ($('.btn-sauce').hasClass('active')) {
    tmp += 3;
  }
  if ($('.btn-crust').hasClass('active')) {
    tmp += 5;
  }
  totalPriceText = '$' + tmp;
  $('.price strong').text(totalPriceText);
  console.log(tmp);

}


function togglePepperonni() {
  $('.btn-pepperonni').click(function() {
    $('.btn-pepperonni').toggleClass('active');
    var pepperoni = $('.pep');
    $('.price li:contains(pepperonni)').toggle();
    pepperoni.toggle();
    updateTotalPrice();
  });
}

function toggleMushroom() {
  $('.btn-mushrooms').click(function() {
    $('.btn-mushrooms').toggleClass('active');
    var mushrooms = $('.mushroom');
    $('.price li:contains(mushroom)').toggle();
    mushrooms.toggle();
    updateTotalPrice();
  });
}
function toggleGreen() {
  $('.btn-green-peppers').click(function() {
    var peppers = $('.green-pepper');
    $('.btn-green-peppers').toggleClass('active');
    $('.price li:contains(green)').toggle();
    peppers.toggle();
    updateTotalPrice();
  });
}

function toggleSauce() {
  $('.btn-sauce').click(function() {
    $('.btn-sauce').toggleClass('active');
    $('.price li:contains(sauce)').toggle();
    updateTotalPrice();
  });
}

function toggleGluten() {
  $('.btn-crust').click(function() {
    $('.btn-crust').toggleClass('active');
    $('.price li:contains(crust)').toggle();
    updateTotalPrice();
  });
}
