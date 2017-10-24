$(document).ready(function() {

  var mush = $(".btn-mushrooms");
  mush.click(function() {
    $('#pizza .mushroom').toggle('mushroom');
    $('.btn-mushrooms').toggleClass('active');
      if ($('.btn-mushrooms').hasClass('active')) {
        $('.price ul li:nth-child(2)').show();
      }else {
        $('.price ul li:nth-child(2)').hide();
      }
});

  var greenp = $(".btn-green-peppers");
  greenp.click(function() {
    $('#pizza .green-pepper').toggle('green-pepper');
    $('.btn-green-peppers').toggleClass('active');
    if ($('.btn-green-peppers').hasClass('active')) {
      $('.price ul li:nth-child(3)').show();
    }else {
      $('.price ul li:nth-child(3)').hide();
    }
  });

  var pepper = $(".btn-pepperonni");
  pepper.click(function() {
    $('#pizza .pep').toggle('pep');
    $('.btn-pepperonni').toggleClass('active');
    if ($('.btn-pepperonni').hasClass('active')) {
      $('.price ul li:nth-child(1)').show();
    }else {
      $('.price ul li:nth-child(1)').hide();
    }
  });

  var crust = $(".btn-crust");
  crust.click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $('.btn-crust').toggleClass('active');
    if ($('.btn-crust').hasClass('active')) {
      $('.price ul li:nth-child(5)').show();
    }else {
      $('.price ul li:nth-child(5)').hide();
    }
  });
  var sauce = $(".btn-sauce");
  sauce.click(function(){
    $(".sauce").toggleClass("sauce-white");
    $('.btn-sauce').toggleClass('active');
    if ($('.btn-sauce').hasClass('active')) {
      $('.price ul li:nth-child(4)').show();
    }else {
      $('.price ul li:nth-child(4)').hide();
    }
  });

});








// Write your Pizza Builder JavaScript in this file.
