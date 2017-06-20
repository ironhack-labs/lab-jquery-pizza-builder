// Write your Pizza Builder JavaScript in this file.

  $('.btn-pepperonni').click(function(){
    $('.btn-pepperonni').toggleClass('active')
    if( $('.pep').css('display') === 'none'){
      $('.pep').css('display', 'block')
      $('ul > li:contains(pepperonni)').css('display', 'list-item')

    } else {
      $('.pep').css('display', 'none')
      $('ul > li:contains(pepperonni)').css('display', 'none')
    }
    updatePrice()
  });

  $('.btn-green-peppers').click(function(){
    $('.btn-green-peppers').toggleClass('active')
    if( $('.green-pepper').css('display') === 'none'){
      $('.green-pepper').css('display', 'block')
      $('ul > li:contains(green)').css('display', 'list-item')

    } else {
      $('.green-pepper').css('display', 'none')
      $('ul > li:contains(green)').css('display', 'none')
    }
updatePrice()
  });

  $('.btn-mushrooms').click(function(){
    $('.btn-mushrooms').toggleClass('active')

    if( $('.mushroom').css('display') === 'none'){
      $('.mushroom').css('display', 'block')
      $('ul > li:contains(mushroom)').css('display', 'list-item')
    } else {
      $('.mushroom').css('display', 'none')
      $('ul > li:contains(mushroom)').css('display', 'none')
updatePrice()
    }

  });


    $('.btn-crust').click(function(){
      $('.btn-crust').toggleClass('active')

      if( $('.cheese').css('display') === 'none'){
        $('.cheese').css('display', 'block')
        $('ul > li:contains(gluten-free crust)').css('display', 'list-item')
      } else {
        $('.cheese').css('display', 'none')
        $('ul > li:contains(gluten-free crust)').css('display', 'none')
      }
      updatePrice()
    });

    $('.btn-sauce').click(function(){
      $('.btn-sauce').toggleClass('active')

      if( $('.sauce').css('display') === 'none'){
        $('.sauce').css('display', 'block')
        $('ul > li:contains(white sauce)').css('display', 'list-item')
      } else {
        $('.sauce').css('display', 'none')
        $('ul > li:contains(white sauce)').css('display', 'none')
      }
      updatePrice()
    });

    function updatePrice () {
      var total = 10
      var ul = $($('.panel.price')).children('ul')

      $(ul).children().toArray().map(function (li, index) {
        if($(li).css('display') === 'list-item'){
          total += parseInt(($(li).html().match(/\d+/)[0]))
        }
      })
      $($('.panel.price')).children('strong').html('$' + total)

    }
