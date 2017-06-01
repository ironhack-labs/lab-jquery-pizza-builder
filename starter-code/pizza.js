// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {


  // var menu = $('#menu ul li:first').addClass('selected');
  // // var menu = $('li:first').addClass('selected'); //ok, less restrictive
  //
  // var article = $('section.container article:nth-child(2n)').attr('class','middle');
  // // var article = $('section.container article:nth-child(even)').attr('class','middle');
  // //var article = $('.container article:nth-child(2n)').attr('class','middle'); //ok, less restrictive
  // //var article = $('article:nth-child(2n)').attr('class','middle'); //ok, less restrictive
  //
  // var list = $('#list-container .list-item:odd').addClass('highlighted');
  // // var list = $('.list-item:nth-child(even)').addClass('highlighted');
  //
  // var listLast = $('.list-item:last').css('border', '1px solid red');
  //
  // var focused = $('input:focus').css('border-color', 'red');



  var basePrice = 10;
  var actualPrice = 0;
  var pepperoniPrice = 1;
  var mushroomPrice = 1;
  var greenPepperPrice = 1;
  var whiteSaucePrice = 3;
  var crustGlutenFreePrice = 5;

  function displayPrice(amount){
    $(".price strong").html("$"+amount.toString());
  }

  function returnPrice(){
    var temp = $(".price strong").html();
    return parseInt(temp.substr(1));
  }
  actualPrice = basePrice + pepperoniPrice + mushroomPrice + greenPepperPrice;
  displayPrice(actualPrice);
  //init
  if($('.pep').css('display')==='none')
  {
    $(".btn-pepperonni").toggleClass("active");
  }

  if($('.mushroom').css('display')==='none')
  {
    $(".btn-mushrooms").toggleClass("active");
  }

  if($('.green-pepper').css('display')==='none')
  {
    $(".btn-green-peppers").toggleClass("active");
  }

  if($(".sauce").hasClass("sauce-white"))
  {
    $(".btn-sauce").toggleClass("active");
    $(".price ul li:contains('white sauce')").remove();
  }

  if($(".crust").hasClass("crust-gluten-free"))
  {
    $(".btn-crust").toggleClass("active");
    $(".price ul li:contains('gluten-free crust')").remove();
  }

  //in section 2 to change active class after pressing de buttons

  //pepperoni
  $('.btn-pepperonni').on('click', function(){
    if($('.pep').css('display')==='none')
    {
      $('.pep').css('display','block');
      $(".btn-pepperonni").toggleClass("active");
      var temp = "<li>$1 pepperonni</li>";
      var li = $(temp);
      $(".price ul").append(li);
      actualPrice = returnPrice();
      actualPrice += pepperoniPrice;
      displayPrice(actualPrice);
    }
    else {
      $('.pep').css('display','none');
      $(".btn-pepperonni").toggleClass("active");
      $(".price ul li:contains('pepperonni')").remove();
      actualPrice = returnPrice();
      actualPrice -= pepperoniPrice;
      displayPrice(actualPrice);
    }
  });

  //mushrooms
  $('.btn-mushrooms').on('click', function(){
    if($('.mushroom').css('display')==='none')
    {
      $('.mushroom').css('display','block');
      $(".btn-mushrooms").toggleClass("active");
      var temp = "<li>$1 mushrooms</li>";
      var li = $(temp);
      $(".price ul").append(li);
      actualPrice = returnPrice();
      actualPrice += mushroomPrice;
      displayPrice(actualPrice);
    }
    else {
      $('.mushroom').css('display','none');
      $(".btn-mushrooms").toggleClass("active");
      $(".price ul li:contains('mushrooms')").remove();
      actualPrice = returnPrice();
      actualPrice -= mushroomPrice;
      displayPrice(actualPrice);
    }
  });

  //peppers
  $('.btn-green-peppers').on('click', function(){
    if($('.green-pepper').css('display')==='none')
    {
      $('.green-pepper').css('display','block');
      $(".btn-green-peppers").toggleClass("active");
      var temp = "<li>$1 green peppers</li>";
      var li = $(temp);
      $(".price ul").append(li);
      actualPrice = returnPrice();
      actualPrice += greenPepperPrice;
      displayPrice(actualPrice);
    }
    else {
      $('.green-pepper').css('display','none');
      $(".btn-green-peppers").toggleClass("active");
      $(".price ul li:contains('green peppers')").remove();
      actualPrice = returnPrice();
      actualPrice -= greenPepperPrice;
      displayPrice(actualPrice);
    }
  });

  //sauce
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").on('click', function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");

    if($(".sauce").hasClass("sauce-white"))
    {
      var temp = "<li>$3 white sauce</li>";
      var li = $(temp);
      $(".price ul").append(li);
      actualPrice = returnPrice();
      actualPrice += whiteSaucePrice;
      displayPrice(actualPrice);
    }
    else {
      $(".price ul li:contains('white sauce')").remove();
      actualPrice = returnPrice();
      actualPrice -= whiteSaucePrice;
      displayPrice(actualPrice);
    }
  });

  //crust
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").on('click', function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");

    if($(".crust").hasClass("crust-gluten-free"))
    {
      var temp = "<li>$5 gluten-free crust</li>";
      var li = $(temp);
      $(".price ul").append(li);
      actualPrice = returnPrice();
      actualPrice += crustGlutenFreePrice;
      displayPrice(actualPrice);
    }
    else {
      $(".price ul li:contains('gluten-free crust')").remove();
      actualPrice = returnPrice();
      actualPrice -= crustGlutenFreePrice;
      displayPrice(actualPrice);
    }
  });


});
