// Write your Pizza Builder JavaScript in this file.

var btnPep = $('.btn-pepperonni');
var btnMush = $('.btn-mushrooms');
var btnPeppers = $('.btn-green-peppers');
var btnSauce = $('.btn-sauce');
var btnCrust = $('.btn-crust');


$(document).ready(function() {
  $('.pep').hide();
  $('.mushroom').hide();
  $('.green-pepper').hide();
  $('.sauce-white').removeClass('sauce-white');
  btnPeppers.toggleClass('active');
  btnMush.toggleClass('active');
  btnPep.toggleClass('active');
  btnSauce.toggleClass('active');
  btnCrust.toggleClass('active');
  $(".price li:nth-child(5)").css("display", "none");
  $(".price li:nth-child(1)").css("display", "none");
  $(".price li:nth-child(2)").css("display", "none");
  $(".price li:nth-child(3)").css("display", "none");
  $(".price li:nth-child(4)").css("display", "none");
  $('.crust').toggleClass('crust-gluten-free');
    btnPep.click(function(e) {
    $('.pep').toggle('pep');
    btnPep.toggleClass('active');
    $(".price li:nth-child(1)").removeAttr( "style" );
    var totalPay = updatePrice($(".price > strong").text(), 1,$(this).hasClass("active"));
    $(".price > strong").text(totalPay);
  });
    btnMush.click(function(e) {
    $('.mushroom').toggle('mushroom');
    btnMush.toggleClass('active');
    $(".price li:nth-child(2)").removeAttr( "style" );
    var totalPay = updatePrice($(".price > strong").text(), 1,$(this).hasClass("active"));
    $(".price > strong").text(totalPay);
  });
    btnPeppers.click(function(e) {
      $('.green-pepper').toggle('green-pepper');
      btnPeppers.toggleClass('active');
      $(".price li:nth-child(3)").removeAttr( "style" );
      var totalPay = updatePrice($(".price > strong").text(), 1,$(this).hasClass("active"));
      $(".price > strong").text(totalPay);
    }); 
    btnSauce.click(function(e) {
      $('.sauce').toggleClass('sauce-white');
      btnSauce.toggleClass('active');
      $(".price li:nth-child(4)").removeAttr( "style" );
      var totalPay = updatePrice($(".price > strong").text(), 1,$(this).hasClass("active"));
      $(".price > strong").text(totalPay);
    }); 
    btnCrust.click(function(e) {
        console.log("entro");
        $('.crust').toggleClass('crust-gluten-free');
        btnCrust.toggleClass('active');
        $(".price li:nth-child(5)").removeAttr( "style" );
        var totalPay = updatePrice($(".price > strong").text(), 1,$(this).hasClass("active"));
        $(".price > strong").text(totalPay);
    });
  });

  function updatePrice(price, counter, flag) {
    var price = parseInt(price.slice(1));
    if (!flag) {
      return "$" + (price - counter).toString();
    }
    else {
      return "$" + (price + counter).toString();
    }
  }




  

