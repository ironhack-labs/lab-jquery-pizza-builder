// Write your Pizza Builder JavaScript in this file.

$(function(){



  $('.btn-pepperonni').click(function() {

    var isActive = true;

    if(isActive){
      $('.pep').toggle();
      isActive = false;
    }else{
      $('.pep').toggle();
    }
  
  });

  $('.btn-mushrooms').click(function() {
    var isActive = true;

    if(isActive){
      $('.mushroom').toggle();
      isActive = false;
    }else{
      $('.mushroom').toggle();
    }
  });

  $('.btn-green-peppers').click(function() {
    var isActive = true;

    if(isActive){
      $('.green-pepper').toggle();
      isActive = false;
    }else{
      $('.green-pepper').toggle();
    }
  });
  


  $('.btn-crust').click(function() {
   
    $('.crust').toggleClass('crust-gluten-free');

  });

  $('.btn-sauce').click(function() {
   
    $('.sauce').toggleClass('sauce-white');

  });

})