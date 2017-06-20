$(document).ready(function() {

  $(".pep").hide();
  //$(".pep").first().hide();
  $(".mushroom").hide();
  $(".green-pepper").hide();
  $(".cheese").show();
  $(".sauce-white").hide();

  $(".price>ul>li").hide();
  var value = 10;
  var $cash = $("strong");
  $cash.text("$"+value);

  $(".btn-mushrooms, .btn-sauce, .btn-crust,.btn-green-peppers, .btn-pepperonni").toggleClass("active");

  function upPrice(nameOfTheFood) {
    if ($(nameOfTheFood).hasClass("active")) {
      $cash.text("$"+(value+=1));
    } else {
      $cash.text("$"+(value-=1));
    }
  }



  // var $numItems = $('.pep').length;

  $('.btn-pepperonni').click(
      function () {
        $(".pep").toggle();
        $(".btn-pepperonni").toggleClass("active");
        $(".price>ul>li:eq(0)").toggle();
        upPrice('.btn-pepperonni');

  });

  $('.btn-mushrooms').click(
      function () {
        $(".mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active");
        $(".price>ul>li:eq(1)").toggle();
        upPrice('.btn-mushrooms');
  });

  $('.btn-green-peppers').click(
      function () {
        $(".green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
        $(".price>ul>li:eq(2)").toggle();
        // var $p = $('.btn-green-peppers');
        upPrice('.btn-green-peppers');
  });

  $('.btn-crust').click(
        function () {
          $(".cheese").toggle();
          $(".btn-crust").toggleClass("active");
          $(".price>ul>li:eq(4)").toggle();
          function upupPrice() {
            if ($('.btn-crust').hasClass("active")) {
              $cash.text("$"+(value+=3));
            } else {
              $cash.text("$"+(value-=3));
            }
          }
          upupPrice();
    });
  $('.btn-sauce').click(
        function () {
          $(".sauce-white").toggle();
          $(".btn-sauce").toggleClass("active");
          $(".price>ul>li:eq(3)").toggle();
          function upupPrice() {
            if ($('.btn-sauce').hasClass("active")) {
              $cash.text("$"+(value+=5));
            } else {
              $cash.text("$"+(value-=5));
            }
          }
          upupPrice();
    });















}); // DOCUMENT STUFF












/*

  for (var i = 1; i <= $numItems; i++) {
    console.log("i = "+i);
    $(".pep").eq(0+i).show();

  //}
  //showTheThing();

  */
