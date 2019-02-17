// Write your Pizza Builder JavaScript in this file.

// to make a tomato sauce as default, toggle it first to OFF:
//to make crust to be dafault
$('.sauce').toggleClass('sauce-white');
$('.crust').toggleClass('crust-gluten-free');
$('.price-wsauce').toggle();
$('.price-glut').toggle();

//price of a plain pizza, displayed in #sum:
var sum = 13;
$('#sum').html(sum);

//pepperoni toggel 
//$(".selector").toggleClass(className)
$('.btn-pepperonni').click(function(){
  $('.pep').toggle();
  $(this).toggleClass("active");
  $('.price-pep').toggle();
  if ($('.btn-pepperonni').hasClass('active')) {
    sum += 1;
  } else {
    sum -=1;
  }
})

//mushroom toggel 
$('.btn-mushrooms').click(function(){
  $('.mushroom').toggle();
  $(this).toggleClass("active");
  $('.price-mush').toggle();
  if ($('.btn-mushrooms').hasClass('active')) {
    sum += 1;
  } else {
    sum -=1;
  }
})

//green-pepper toggel 
$('.btn-green-peppers').click(function(){
  $('.green-pepper').toggle();
  $(this).toggleClass("active");
  $('.price-green').toggle();

  if ($('.btn-green-peppers').hasClass('active')) {
    sum += 1;
  } else {
    sum -=1;
  }
})

// choose white sauce
$('.btn-sauce ').click(function(){
  $('.sauce').toggleClass('sauce-white');
  $(this).toggleClass("active");
  $('.price-wsauce').toggle();
  if ($('.btn-sauce ').hasClass('active')) {
    sum += 3;
  } else {
    sum -=3;
  }
})

// choose gluten-free 
$('.btn-crust').click(function(){
  $('.crust').toggleClass('crust-gluten-free');
  $(this).toggleClass("active");
  $('.price-glut').toggle();
  if ($('.btn-crust').hasClass('active')) {
    sum += 5;
  } else {
    sum -=5;
  }
})
//funtion to calc total sum, on each btn pressing
$('.btn').click(function(){
  $('#sum').html(sum);
})
