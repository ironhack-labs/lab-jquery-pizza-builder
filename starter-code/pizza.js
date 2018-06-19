// Write your Pizza Builder JavaScript in this file.

var price = 13;


$('.sauce').removeClass("sauce-white");
$('.price ul li:nth-child(4)').hide();

$('.crust').removeClass('crust-gluten-free');
$('.price ul li:nth-child(5)').hide();

$('.btn-sauce').removeClass('active');

$('.btn-crust').removeClass('active');

$('strong').html(price);


$(".btn-pepperonni").click(function(){
  if($(".pep").is(":visible")){
    $(".pep").hide();
    $('.price ul li:nth-child(1)').hide();
    price -= 1;
  }else{
    $('.pep').show();
    $('.price ul li:nth-child(1)').show();
    price += 1
  }

  $(".btn-pepperonni").toggleClass("active");

  $('strong').html(price);
})


$(".btn-mushrooms").click(function(){
  if($(".mushroom").is(":visible")){
    $(".mushroom").hide();
    $('.price ul li:nth-child(2)').hide();
    price -= 1;
  }else{
    $('.mushroom').show();
    $('.price ul li:nth-child(2)').show();
    price += 1;
  }
  $(".btn-mushrooms").toggleClass("active");
  $('strong').html(price);
})


$(".btn-green-peppers").click(function(){
  if($(".green-pepper").is(":visible")){
    $(".green-pepper").hide();
    $('.price ul li:nth-child(3)').hide();
    price -= 1;
  }else{
    $('.green-pepper').show();
    $('.price ul li:nth-child(3)').show();
    price += 1;
  }
  $(".btn-green-peppers").toggleClass("active");
  $('strong').html(price);
})

$(".btn-sauce").click(function(){
  $('.sauce').toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");

  if($(".sauce-white").is(":visible")){
    $('.price ul li:nth-child(4)').show();
    price += 3;
  }else{
    $('.price ul li:nth-child(4)').hide();
    price -= 3;
  }
  $('strong').html(price);
})

$(".btn-crust").click(function(){
  $('.crust').toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");

  if($(".crust-gluten-free").is(":visible")){
    $('.price ul li:nth-child(5)').show();
    price += 5;
  }else{
    $('.price ul li:nth-child(5)').hide();
    price -= 5;
  }
  $('strong').html(price);
})

