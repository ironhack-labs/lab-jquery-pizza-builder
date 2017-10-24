// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  var pepperoni = $(".pep");
  var greenPepper = $(".green-pepper");
  var mushroom = $(".mushroom");
  var whiteSauce = $(".sauce-white");
  var crustGlutenFree = $(".crust-gluten-free");


  whiteSauce.toggle();
  $('.btn-sauce').toggleClass("active");
  $('.price > ul > li:nth-child(4)').toggle();
  crustGlutenFree.toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass("active");
  $('.price > ul > li:nth-child(5)').toggle();
  calculation();
  $('.btn-pepperonni').click(function() {
    pepperoni.toggle();
    $('.btn-pepperonni').toggleClass("active");
    $('.price > ul > li:first').toggle();
    calculation();
  });
  $('.btn-mushrooms').click(function() {
    mushroom.toggle();
    $('.btn-mushrooms').toggleClass("active");
    $('.price > ul > li:nth-child(2)').toggle();
    calculation();
  });
  $('.btn-green-peppers').click(function() {
    greenPepper.toggle();
    $('.btn-green-peppers').toggleClass("active");
    $('.price > ul > li:nth-child(3)').toggle();
    calculation();
  });
  $('.btn-sauce').click(function() {
    whiteSauce.toggle();
    $('.btn-sauce').toggleClass("active");
    $('.price > ul > li:nth-child(4)').toggle();
    calculation();
  });
  $('.btn-crust').click(function() {
    crustGlutenFree.toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass("active");
    $('.price > ul > li:nth-child(5)').toggle();
    calculation();
  });

  function calculation() {
    var subtotal = 10;
    var list = $('.price > ul li:visible');
    list.each(function() {
      subtotal += Number($(this).html()[1]);
    });
    $(".price strong").html("$" + subtotal);
  }
});
