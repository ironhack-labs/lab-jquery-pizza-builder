// Write your Pizza Builder JavaScript in this file.

$('.pep, .mushroom, .green-pepper').toggle();
$('aside li').toggle();

$('.btn-pepperonni').click(function(){
  $(this).toggleClass("active")
  $('.pep').toggle()
  $('aside li:first-child').toggle()
  let currentPrice = $('span')
  if ($(this).hasClass('active')) {
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) + 1;
  }
  else{
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) - 1;
  }
})

$('.btn-mushrooms').click(function(){
  $(this).toggleClass("active")
  $('.mushroom').toggle()
  $('aside li:nth-child(2)').toggle()
  let currentPrice = $('span')
  if ($(this).hasClass('active')) {
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) + 1;
  }
  else{
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) - 1;
  }
})

$('.btn-green-peppers').click(function(){
  $(this).toggleClass("active")
  $('.green-pepper').toggle()
  $('aside li:nth-child(3)').toggle()
  let currentPrice = $('span')
  if ($(this).hasClass('active')) {
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) + 1;
  }
  else{
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) - 1;
  }
})

$('.btn-sauce').click(function(){
  $(this).toggleClass("active")
  $('.sauce').toggleClass('sauce-white')
  $('aside li:nth-child(4)').toggle()
  let currentPrice = $('span')
  if ($(this).hasClass('active')) {
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) + 3;
  }
  else{
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) - 3;
  }
})

$('.btn-crust').click(function(){
  $(this).toggleClass("active")
  $('.crust').toggleClass('crust-gluten-free')
  $('aside li:last-child').toggle()
  let currentPrice = $('span')
  if ($(this).hasClass('active')) {
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) + 5;
  }
  else{
    currentPrice[0].innerHTML = Number(currentPrice[0].innerHTML) - 5;
  }
})

