// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

var precio = $(".panel.price > strong").html("$13");
$(".panel.price > ul > li:nth-child(5)").hide();
$(".panel.price > ul > li:nth-child(4)").hide();
  $(".btn-pepperonni").on("click", function() {
  var precio = $(".panel.price > strong").html();
  precio = precio.substring(1);
  precio = parseInt(precio);
      if ($(this).hasClass('active')) {
        $(".pep").hide();
        $(".panel.price > ul > li:nth-child(1)").hide();
        $(".panel.price > strong").html("$" + (precio - 1));
      } else {
        $(".pep").show();
        $(".panel.price > ul > li:nth-child(1)").show();
        $(".panel.price > strong").html("$" + (precio + 1));
      }
      $(this).toggleClass('active');
    }
  );

  $(".btn-mushrooms").on("click", function() {
    var precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
      if ($(this).hasClass('active')) {
        $(".mushroom").hide();
        $(".panel.price > ul > li:nth-child(2)").hide();
        $(".panel.price > strong").html("$" + (precio - 1));
      } else {
        $(".mushroom").show();
        $(".panel.price > ul > li:nth-child(2)").show();
        $(".panel.price > strong").html("$" + (precio + 1));
      }
      $(this).toggleClass('active');
    }
  );
  $(".btn-green-peppers").on("click", function() {
    var precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
      if ($(this).hasClass('active')) {
        $(".green-pepper").hide();
        $(".panel.price > ul > li:nth-child(3)").hide();
        $(".panel.price > strong").html("$" + (precio - 1));
      } else {
        $(".green-pepper").show();
        $(".panel.price > ul > li:nth-child(3)").show();
        $(".panel.price > strong").html("$" + (precio + 1));
      }
      $(this).toggleClass('active');
    }
  );

  $(".btn-crust").removeClass('active');
  $(".crust").removeClass("crust-gluten-free");


  $(".btn-crust").on("click", function() {
    var precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
    if ($(this).hasClass('active')) {
      $(".panel.price > ul > li:nth-child(5)").hide();
      $(".panel.price > strong").html("$" + (precio - 5));
    } else {
      $(".panel.price > ul > li:nth-child(5)").show();
      $(".panel.price > strong").html("$" + (precio + 5));
    }
      $(".crust").toggleClass("crust-gluten-free");
      $(this).toggleClass('active');

    }
  );

  $(".btn-sauce").removeClass('active');
  $(".sauce").removeClass("sauce-white");

  $(".btn-sauce").on("click", function() {
    var precio = $(".panel.price > strong").html();
    precio = precio.substring(1);
    precio = parseInt(precio);
    if ($(this).hasClass('active')) {
      $(".panel.price > ul > li:nth-child(4)").hide();
      $(".panel.price > strong").html("$" + (precio - 3));
    } else {
      $(".panel.price > ul > li:nth-child(4)").show();
      $(".panel.price > strong").html("$" + (precio + 3));
    }
      $(".sauce").toggleClass("sauce-white");
      $(this).toggleClass('active');
    }
  );




});
