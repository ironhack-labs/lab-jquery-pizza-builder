// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $('.btn-pepperonni').on('click', function() {
    $('.pep').toggle();
    $('button.btn-pepperonni').toggleClass('active');
    $("aside>ul li:nth-child(1)").toggle();
  });
  $('.btn-mushrooms').on('click', function() {
    $('.mushroom').toggle();
    $('button.btn-mushrooms').toggleClass('active');
    $("aside>ul li:nth-child(2)").toggle();
  });
  $('.btn-green-peppers').on('click', function() {
    $('.green-pepper').toggle();
    $('button.btn-green-peppers').toggleClass('active');
    $("aside>ul li:nth-child(3)").toggle();
  });
  $('section.crust-gluten-free').removeClass("crust-gluten-free");
  $('section.sauce-white').removeClass("sauce-white");

  $('.btn-sauce').on('click', function(){
    $('section.sauce').toggleClass('sauce-white');
    $("button.btn-sauce").toggleClass("active");
    $("aside>ul li:nth-child(4)").show();
  });
  $('.btn-crust').on('click', function(){
    $('section.crust').toggleClass('crust-gluten-free');
    $("button.btn-crust").toggleClass("active");
    $("aside>ul li:nth-child(5)").show();
  });
  $("button.btn-sauce").removeClass("active");
    $('button.btn-crust').removeClass("active");

  $("aside>ul li:nth-child(4)").hide();
  $("aside>ul li:nth-child(5)").hide();
//prueba para acceder a un valor
  var x =$("aside.price strong").text()[1];
  console.log(x);


});
