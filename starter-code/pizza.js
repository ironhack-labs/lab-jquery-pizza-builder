// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){

  /*INITIAL SETTINGS */

  $('.green-pepper').hide();
  $('.mushroom').hide();
  $('.pep').hide();


  /*ITERATION 1*/

  $('.btn-pepperonni').click(function(){
    $('.pep').toggleClass('show');
    $(".panel.price li:nth-child(1)").toggleClass("show");
  });
  $('.btn-mushrooms').click(function(){
    $('.mushroom').toggleClass('show');
    $(".panel.price li:nth-child(2)").toggleClass("show");
  });
  $('.btn-green-peppers').click(function(){
    $('.green-pepper').toggleClass('show');
    $(".panel.price li:nth-child(3)").toggleClass("show");
  });

  /*ITERATION 2 */

  $('.crust-gluten-free').removeClass("crust-gluten-free");
  $('.sauce-white').removeClass("sauce-white");

  $('.btn-sauce').click(function(){
    $('.sauce').toggleClass("sauce-white");
    $(".panel.price li:nth-child(4)").toggleClass("show");
  });

  $('.btn-crust').click(function(){
    $('.crust').toggleClass("crust-gluten-free");
    $(".panel.price li:nth-child(5)").toggleClass("show");
  });

  /*ITERATION 3 */

  $('.btn').removeClass('active');
  
  $(".btn").click(function(){
    $(this).toggleClass('active');
  });

  /*ITERATION 4 */

  $(".panel.price li").hide();

  /* ITERATION 5 */

  $(".panel.price strong").text("$10");




});