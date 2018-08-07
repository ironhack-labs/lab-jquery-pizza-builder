// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  var btnArr = [1, 1, 1, 1, 1]
  toggleWhiteSauce()
  toggleGlutenFree()
  calcPrice()

  $('.btn-pepperonni').click(function() {
    $(this).toggleClass('active');
    $("li:contains('$1 pepperonni')").toggle();
    $('.pep').toggle();
    btnArr[0] === 1 ? btnArr[0] = 0 : btnArr[0] = 1;
  })

  $('.btn-mushrooms').click(function() {
    $(this).toggleClass('active');
    $("li:contains('$1 mushrooms')").toggle();
    $('.mushroom').toggle();
    btnArr[1] === 1 ? btnArr[1] = 0 : btnArr[1] = 1;
  })

  $('.btn-green-peppers').click(function() {
    $(this).toggleClass('active');
    $("li:contains('$1 green peppers')").toggle();
    $('.green-pepper').toggle();
    btnArr[2] === 1 ? btnArr[2] = 0 : btnArr[2] = 1;
  })

  function toggleWhiteSauce() {
    $('.btn-sauce').toggleClass('active');
    $("li:contains('$3 white sauce')").toggle();
    $('.sauce').toggleClass('sauce-white');
    btnArr[3] === 1 ? btnArr[3] = 0 : btnArr[3] = 1;
  }
  $('.btn-sauce').click(toggleWhiteSauce)

  function toggleGlutenFree() {
    $('.btn-crust').toggleClass('active');
    $("li:contains('$5 gluten-free crust')").toggle();
    $('.crust').toggleClass('crust-gluten-free');
    btnArr[4] === 1 ? btnArr[4] = 0 : btnArr[4] = 1;
  }
  $('.btn-crust').click(toggleGlutenFree)

  function calcPrice() {
    var price = 10;
    price += btnArr[0] + btnArr[1] + btnArr[2] + btnArr[3]*3 + btnArr[4]*5
    $('strong').text(price)
  }
  $('.btn').click(calcPrice)
})