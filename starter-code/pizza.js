// Write your Pizza Builder JavaScript in this file.

function main() {


  function bindIngredientClick(buttonSelector, ingridientSelector, ingridient) {
    $(buttonSelector).click(function() {
      $(ingridientSelector).toggle();
      $(buttonSelector).toggleClass('active');
      $("li:contains('" + ingridient + "')").toggle();
    });
  }

  bindIngredientClick('.btn-pepperonni', '.pep', 'pepperonni');

  $('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $("li:contains('green peppers')").toggle();
  });

  $('.btn-mushrooms').click(function() {
    $('.cap').toggle();
    $('.stem').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $("li:contains('mushrooms')").toggle();
  });

  $('.sauce-white').attr('class', 'sauce');

  $('.btn-sauce').click(function() {
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $("li:contains('white sauce')").toggle();
  });

  $('.crust-gluten-free').attr('class', 'crust');

  $('.btn-crust').click(function() {
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $("li:contains('gluten-free crust')").toggle();
  });


  //for calculating the whole price:
  // $("li:contains('gluten-free crust')").text()[1]

}




$(main);
