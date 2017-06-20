// Write your Pizza Builder JavaScript in this file.

  $('.btn-pepperonni').click(function(){
    $('.btn-pepperonni').toggleClass('active')
    if( $('.pep').css('display') === 'none'){
      $('.pep').css('display', 'block')
    } else {
      $('.pep').css('display', 'none')
    }

  });

  $('.btn-green-peppers').click(function(){
    $('.btn-green-peppers').toggleClass('active')
    if( $('.green-pepper').css('display') === 'none'){
      $('.green-pepper').css('display', 'block')
    } else {
      $('.green-pepper').css('display', 'none')
    }

  });

  $('.btn-mushrooms').click(function(){
    $('.btn-mushrooms').toggleClass('active')

    if( $('.mushroom').css('display') === 'none'){
      $('.mushroom').css('display', 'block')
    } else {
      $('.mushroom').css('display', 'none')
    }

  });


    $('.btn-crust').click(function(){
      $('.btn-crust').toggleClass('active')

      if( $('.cheese').css('display') === 'none'){
        $('.cheese').css('display', 'block')
      } else {
        $('.cheese').css('display', 'none')
      }
    });

    $('.btn-sauce').click(function(){
      $('.btn-sauce').toggleClass('active')

      if( $('.sauce').css('display') === 'none'){
        $('.sauce').css('display', 'block')
      } else {
        $('.sauce').css('display', 'none')
      }
    });
