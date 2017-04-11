// Write your Pizza Builder JavaScript in this file.

$ (document).ready(function(){


  $(".btn-sauce").removeClass("active");
  $('.price li:contains(sauce)').toggle();
  $(".btn-crust").removeClass("active");
  $('.price li:contains(crust)').toggle();

  function operation(){

    var ingredientes=10;

    if ($(".btn-pepperonni").hasClass("active")) {
       ingredientes += 1;
    }
    if ($(".btn-mushrooms").hasClass("active")) {
       ingredientes += 1;
    }
    if ($(".btn-green-peppers").hasClass("active")){
       ingredientes += 1;
    }
    if ($(".btn-sauce").hasClass("active")) {
       ingredientes += 3;
    }
    if ($(".btn-crust").hasClass("active")){
       ingredientes += 5;
    }

    precioTotal= '$' + ingredientes;

    $('.price strong').html(precioTotal);

  }
    $('.price strong').ready(operation());

        $('.btn-pepperonni').click(function(){
          $('.pep').toggle();
          $('.price li:contains(pepperonni)').toggle();

          if ($(".btn-pepperonni").hasClass("active")) {
              $(".btn-pepperonni").removeClass("active");
            } else {
              $(".btn-pepperonni").addClass("active");
            }
          // $('.btn').toggleClass('inactive');
          operation();
        });
        $('.btn-mushrooms').click(function(){
          $('.mushroom').toggle();
          $('.price li:contains(mushrooms)').toggle();
          if ($(".btn-mushrooms").hasClass("active")) {
              $(".btn-mushrooms").removeClass("active");
            } else {
              $(".btn-mushrooms").addClass("active");
            }
          operation();
        });
        $('.btn-green-peppers').click(function(){
          $('.green-pepper').toggle();
          $('.price li:contains(peppers)').toggle();

          if ($(".btn-green-peppers").hasClass("active")) {
              $(".btn-green-peppers").removeClass("active");
            } else {
              $(".btn-green-peppers").addClass("active");
            }
            operation();
        });
        $('.btn-sauce').click(function(){
          $('.sauce-white').toggle();
          $('.price li:contains(sauce)').toggle();
          if ($(".btn-sauce").hasClass("active")) {
              $(".btn-sauce").removeClass("active");
            } else {
              $(".btn-sauce").addClass("active");
            }
            operation();
        });
        $('.btn-crust').click(function(){
          $('.crust').toggleClass('crust-gluten-free');
          $('.price li:contains(crust)').toggle();

          if ($(".btn-crust").hasClass("active")) {
              $(".btn-crust").removeClass("active");
            } else {
              $(".btn-crust").addClass("active");
            }
            operation();
        });


        $('.sauce').toggle();
        $('.crust').toggleClass('crust-gluten-free');




});
