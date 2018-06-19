// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".btn").removeClass("active");
  $(".crust").removeClass(".crust-gluten-free");
  $(".sauce").removeClass(".sauce-white");
  $(".pep").hide();
  $(".green-pepper").hide();
  $(".mushroom").hide();
  $(".price ul li").hide();
  $("strong").html("$10");

  $(".btn-pepperonni").click(function() {
    var str = $(".price ul li:nth-child(1)").html();
    var p = parseInt(str[1]);
    $(".pep").fadeToggle(700);
    $(this).toggleClass("active");
    var sinDolar = $("strong")
      .html()
      .slice(1);
    var sinDolarInt = parseInt(sinDolar);
    if ($(this).hasClass("active")) {
      $(".price ul li:nth-child(1)").show();
      sinDolarInt = sinDolarInt + p;
    } else {
      $(".price ul li:nth-child(1)").hide();
      sinDolarInt = sinDolarInt - p;
    }
    var result = "$" + sinDolarInt.toString();
    $("strong").html(result);
  });

  $(".btn-green-peppers").click(function() {
    var str = $(".price ul li:nth-child(3)").html();
    var p = parseInt(str[1]);
    $(".green-pepper").fadeToggle(700);
    $(this).toggleClass("active");
    var sinDolar = $("strong")
      .html()
      .slice(1);
    var sinDolarInt = parseInt(sinDolar);
    if ($(this).hasClass("active")) {
      sinDolarInt = sinDolarInt + p;
      $(".price ul li:nth-child(3)").show();
    } else {
      $(".price ul li:nth-child(3)").hide();
      sinDolarInt = sinDolarInt - p;
    }

    var result = "$" + sinDolarInt.toString();
    $("strong").html(result);
  });

  $(".btn-mushrooms").click(function() {
    var str = $(".price ul li:nth-child(2)").html();
    var p = parseInt(str[1]);
    $(".mushroom").fadeToggle(700);
    $(this).toggleClass("active");
    var sinDolar = $("strong")
      .html()
      .slice(1);
    var sinDolarInt = parseInt(sinDolar);
    if ($(this).hasClass("active")) {
      sinDolarInt = sinDolarInt + p;
      $(".price ul li:nth-child(2)").show();
    } else {
      sinDolarInt = sinDolarInt - p;
      $(".price ul li:nth-child(2)").hide();
    }

    var result = "$" + sinDolarInt.toString();
    $("strong").html(result);
  });

  $(".btn-sauce").click(function() {
    var str = $(".price ul li:nth-child(4)").html();
    var p = parseInt(str[1]);
    var sinDolar = $("strong")
      .html()
      .slice(1);
    var sinDolarInt = parseInt(sinDolar);
    if ($(".sauce").hasClass("sauce-white")) {
      sinDolarInt = sinDolarInt + p;
      $(".sauce").removeClass("sauce-white");
    } else {
      sinDolarInt = sinDolarInt - p;
      $(".sauce").addClass("sauce-white");
    }

    var result = "$" + sinDolarInt.toString();
    $("strong").html(result);
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".price ul li:nth-child(4)").show();
    } else {
      $(".price ul li:nth-child(4)").hide();
    }
  });

  $(".btn-crust").click(function() {
    var str = $(".price ul li:nth-child(5)").html();
    var p = parseInt(str[1]);
    var sinDolar = $("strong")
      .html()
      .slice(1);
    var sinDolarInt = parseInt(sinDolar);
    if ($(".crust").hasClass("crust-gluten-free")) {
      sinDolarInt = sinDolarInt + p;
      $(".crust").removeClass("crust-gluten-free");
    } else {
      sinDolarInt = sinDolarInt - p;
      $(".crust").addClass("crust-gluten-free");
    }
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".price ul li:nth-child(5)").show();
    } else {
      $(".price ul li:nth-child(5)").hide();
    }
    var result = "$" + sinDolarInt.toString();
    $("strong").html(result);
  });
});
