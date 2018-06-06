// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
  
   //total bill
  var total = 21;
  //$('.price strong').html('$' + total);

  //change default
  $('.btn-sauce').toggleClass('active');
  $('.sauce').removeClass('.sauce-white');
  $('.btn-crust').toggleClass('active');
  $('.crust').removeClass('.crust-gluten-free');

  //pepperonni
  $('.btn-pepperonni').click(function () {
    //toggle btn on/off
    $('.btn-pepperonni').toggleClass('active');
    //toggle image
    $('.pep').toggle(); 
    //toggle from the list price
    $('.price ul li:contains("pepperonni")').toggle();
    //if ($('.pep').is(':visible') )
    if ($('.btn-pepperonni').hasClass('active')) {
      total++;
      $('.price strong').html('$' + total)
    } else {
      total--;
      $('.price strong').html('$' + total)
    }
  });

  //mushrooms
  $('.btn-mushrooms').click(function () {
    $('.btn-mushrooms').toggleClass('active');
    $('.mushroom').toggle();
    $('.price ul li:contains("mushrooms")').toggle();
      
    if ($('.btn-mushrooms').hasClass('active')) {
      total++;
      $('.price strong').html('$' + total)
    } else {
      total--;
      $('.price strong').html('$' + total)
    }
  });

  //green peppers
  $('.btn-green-peppers').click(function () {
    $('.btn-green-peppers').toggleClass('active');
    $('.green-pepper').toggle();
    $('.price ul li:contains("green peppers")').toggle();

    if ($('.btn-green-peppers').hasClass('active')) {
      total++;
      $('.price strong').html('$' + total)
    } else {
      total--;
      $('.price strong').html('$' + total)
    }
  });

  //sauce
  $('.btn-sauce').click(function () {
    $('.btn-sauce').toggleClass('active')
    $('.sauce').toggle();
    $('.price ul li:contains("white sauce")').toggle();

    if ($('.btn-sauce').hasClass('active')) {
      total -=3;
      $('.price strong').html('$' + total)
    } else {
      total +=3;
      $('.price strong').html('$' + total)
    }
  });

  //gluten-free
  $('.btn-crust').click(function () {
    $('.btn-crust').toggleClass('active')
    $('.crust').toggle();
    $('.price ul li:contains("gluten-free crust")').toggle();

    if ($('.btn-crust').hasClass('active')) {
      total -=5;
      $('.price strong').html('$' + total)
    } else {
      total +=5;
      $('.price strong').html('$' + total)
    }
  });

})

//intentar hacer each?

// $('.price ul li').each(function () {
  
// })

