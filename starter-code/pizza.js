// Write your Pizza Builder JavaScript in this file.
//works with one button
$('.btn-pepperonni').click(function() {
  if ( $('.pep').css('visibility') == 'hidden' )
    $('.pep').css('visibility','visible');
  else
    $('.pep').css('visibility','hidden');
})
$('.btn-green-peppers').click(function() {
  
  if ( $('.green-pepper').css('visibility') == 'hidden' )
    $('.green-pepper').css('visibility','visible');
  else
    $('.green-pepper').css('visibility','hidden');
})
$('.btn-mushrooms').click(function() {
 
  if ( $('.mushroom').css('visibility') == 'hidden' )
    $('.mushroom').css('visibility','visible');
  else
    $('.mushroom').css('visibility','hidden');
})

$('.btn').click(function() {
  $(this).toggleClass('active')
})

$('.btn-sauce').click(function() {
  $('.sauce').toggleClass('sauce-white')
})
$('.btn-crust').click(function() {
  $('.crust').toggleClass('crust-gluten-free')
})

let buttons = [...document.getElementsByClassName('btn')]

$('.btn').click(function() {  
  $('.price > ul').html('');
  let sum = 10;
  for(let i = 0; i < buttons.length; i++) {
    if(buttons[i].classList.contains('active')) {
      let whatToAppend = '';
      
      if(buttons[i].innerHTML == 'Pepperonni') {
        whatToAppend = '<li>$1 Pepperonni</li>'
        sum += 1;
      } else if (buttons[i].innerHTML == 'Mushrooms') {
        whatToAppend = '<li>$1 Mushrooms</li>'
        sum += 1;
      } else if (buttons[i].innerHTML == 'Green peppers') {
        whatToAppend = '<li>$1 Green peppers</li>'
        sum += 1;
      } else if (buttons[i].innerHTML == 'White sauce') {
        whatToAppend = '<li>$3 White sauce</li>'
        sum += 3;
      } else if (buttons[i].innerHTML == 'Gluten-free crust') {
        whatToAppend = '<li>$5 Gluten-free crust</li>'
        sum += 5;
      }
      $('.price > ul').eq(0).append(whatToAppend)
  }

  }
  $('.price > strong').html(`$${sum}`)
  }
)