// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  var peppero = $("aside>ul li:nth-child(1)").text()[1];
  var mush = $("aside>ul li:nth-child(2)").text()[1];
  var peper =  $("aside>ul li:nth-child(3)").text()[1];
  var sauce = $("aside>ul li:nth-child(4)").text()[1];
  var gluten = $("aside>ul li:nth-child(5)").text()[1];
  var total = 13;
  $("aside.price strong").text("$" + total);

  $('.btn-pepperonni').on('click', function() {
    $('.pep').toggle();
    $('button.btn-pepperonni').toggleClass('active');
    $("aside>ul li:nth-child(1)").toggle();
    if ($(this).hasClass('active')){
      var a =$("aside.price strong").text("$" + (total+=parseInt(peppero)));
    }else{
      $("aside.price strong").text("$" + (total-=parseInt(peppero)));
    }
    return total;
  });
  $('.btn-mushrooms').on('click', function() {
    $('.mushroom').toggle();
    $('button.btn-mushrooms').toggleClass('active');
    $("aside>ul li:nth-child(2)").toggle();
    if ($(this).hasClass('active')){
      var a =$("aside.price strong").text("$" + (total+=parseInt(mush)));
    }else{
      $("aside.price strong").text("$" + (total-=parseInt(mush)));
    }
    return total;
  });
  $('.btn-green-peppers').on('click', function() {
    $('.green-pepper').toggle();
    $('button.btn-green-peppers').toggleClass('active');
    $("aside>ul li:nth-child(3)").toggle();
    if ($(this).hasClass('active')){
      var a =$("aside.price strong").text("$" + (total+=parseInt(peper)));
    }else{
      $("aside.price strong").text("$" + (total-=parseInt(peper)));
    }
    return total;
  });
  $('section.crust-gluten-free').removeClass("crust-gluten-free");
  $('section.sauce-white').removeClass("sauce-white");

  $('.btn-sauce').on('click', function(){
    $('section.sauce').toggleClass('sauce-white');
    $("button.btn-sauce").toggleClass("active");
    $("aside>ul li:nth-child(4)").show();
    if ($(this).hasClass('active')){
      var a =$("aside.price strong").text("$" + (total+=parseInt(sauce)));
    }else{
      $("aside.price strong").text("$" + (total-=parseInt(sauce)));
    }
    return total;
  });
  $('.btn-crust').on('click', function(){
    $('section.crust').toggleClass('crust-gluten-free');
    $("button.btn-crust").toggleClass("active");
    $("aside>ul li:nth-child(5)").show();
    if ($(this).hasClass('active')){
      var a =$("aside.price strong").text("$" + (total+=parseInt(gluten)));
    }else{
      $("aside.price strong").text("$" + (total-=parseInt(gluten)));
    }
    return total;
  });
  $("button.btn-sauce").removeClass("active");
    $('button.btn-crust').removeClass("active");

  $("aside>ul li:nth-child(4)").hide();
  $("aside>ul li:nth-child(5)").hide();
});
