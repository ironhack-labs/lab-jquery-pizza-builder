// Write your Pizza Builder JavaScript in this file.

// $('document').ready(function(){


  $(".btn-pepperonni").click(function(){
      $('.pep').toggle();
  });

  $(".btn-mushrooms").click(function(){
      $('.mushroom').toggle();
  });

  $(".btn-green-peppers").click(function(){
      $('.green-pepper').toggle();
  });


  $(".btn-sauce").click(function(){
    if ($('.btn-sauce').hasClass('active')){
      console.log('hello1');
      $('.sauce').removeClass('sauce-white');
      $('.btn-sauce').removeClass('active');
    }else{
      console.log('hello2');
      $('.sauce').addClass('sauce-white');
      $('.btn-sauce').addClass('active');
      }
  });


  $(".btn-crust").click(function(){
    if ($('.btn-crust').hasClass('active')){
      console.log('hello1');
      $('.crust').removeClass('scrust-gluten-free');
      $('.btn-crust').removeClass('active');
    }else{
      console.log('hello2');
      $('.crust').addClass('scrust-gluten-free');
      $('.btn-crust').addClass('active');
      }
  });







//});
