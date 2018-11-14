// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){


  function buttonIngredient(buttonClass, ingredientClass, classToToggle){
      $(buttonClass).click(function(){
          $(this).toggleClass('active');
          if(!classToToggle){
             $(ingredientClass).toggle();
          } else {
              $(ingredientClass).toggleClass(classToToggle);
          }
          updatePrice();    
        })
  }
  
      buttonIngredient('.btn-pepperonni', '.pep');
      buttonIngredient('.btn-mushrooms', '.mushroom');
      buttonIngredient('.btn-green-peppers', '.green-pepper');
  
      $('.btn-sauce').toggleClass('active');
      $('.sauce').toggleClass('sauce-white');
      $('.btn-crust').toggleClass('active');
      $('.crust').toggleClass('crust-gluten-free');
  
      buttonIngredient('.btn-sauce', '.sauce', 'sauce-white');
      buttonIngredient('.btn-crust', '.crust', 'crust-gluten-free');
  
      function updatePrice (){
      $(".price li").hide();
      var total = 10;
      if ($('.btn-pepperonni').hasClass('active')){
          $("li:contains('$1 pepperonni')").show();
          total++;
      }
      if ($('.btn-mushrooms').hasClass('active')){
          $('li:contains("$1 mushrooms")').show();
          total++;
      }
      if ($('.btn-green-peppers').hasClass('active')){
          $('li:contains("$1 green peppers")').show();
          total++;
      }
      if ($('.btn-sauce').hasClass('active')){
          $('li:contains("$3 white sauce")').show();
          total+=3;
      }
      if ($('.btn-crust').hasClass('active')){
          $('li:contains("$5 gluten-free crust")').show();
          total+=5;
      }
      $('.price strong').text(total+'$');
  }
  updatePrice();
  
  })
  