// Write your Pizza Builder JavaScript in this file.
function init() {
  //ITERATION 1
  $(".btn-pepperonni").click(function() {
    if($(".pep").attr("style")) {
      $(".pep").css("display", "");
      $(this).addClass("active");
      $(".price ul li:first").show(500);
      sum += pep;
    } else {
      $(".pep").css("display", "none");
      $(this).removeClass("active");
      $(".price ul li:first").hide(500);
      sum -= pep;
    }total.html("$" + (sum))

  });

  $(".btn-mushrooms").click(function() {
    if($(".mushroom").attr("style")) {
      $(".mushroom").css("display", "");
      $(this).addClass("active");
      $(".price ul li:nth-child(2)").show(500);
      sum += mush;
    } else {
      $(".mushroom").css("display", "none");
      $(this).removeClass("active");
      $(".price ul li:nth-child(2)").hide(500);
      sum -= mush;
    }
    total.html("$" + (sum))
  });

  $(".btn-green-peppers").click(function() {
    if($(".green-pepper").attr("style")) {
      $(".green-pepper").css("display", "");
      $(this).addClass("active");
      $(".price ul li:nth-child(3)").show(500);
      sum += green;
    } else {
      $(".green-pepper").css("display", "none");
      $(this).removeClass("active");
      $(".price ul li:nth-child(3)").hide(500);
      sum -= green;
    }
    total.html("$" + (sum))
  });

  //ITERATION 2
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");


  $(".btn-crust").click(function() {
    if($(".crust").hasClass("crust-gluten-free")) {
      $(".crust").removeClass("crust-gluten-free");
      $(this).removeClass("active");
      $(".price ul li:nth-child(5)").hide(500);
      sum-= glutCrust;
    } else {
      $(".crust").addClass("crust-gluten-free");
      $(this).addClass("active");
      $(".price ul li:nth-child(5)").show(500);
      sum+= glutCrust;
    }
    total.html("$" + (sum));
  });

  $(".btn-sauce").click(function() {
    if($(".sauce").hasClass("sauce-white")) {
      $(".sauce").removeClass("sauce-white");
      $(this).removeClass("active");
      $(".price ul li:nth-child(4)").hide(500);
      sum -= white;
    } else {
      $(".sauce").addClass("sauce-white");
      $(this).addClass("active");
      $(".price ul li:nth-child(4)").show(500);
      sum += white;
    }
    total.html("$" + (sum));
  });

  //ITERATION 3
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");

  // The button iterations are inside the click event handlers.

  //ITERATION 4
  $(".price ul li:nth-child(4)").css("display", "none");
  $(".price ul li:nth-child(5)").css("display", "none");

  // The list items iterations are inside the click event handlers.

  //ITERATION 5
  var pep = 1;
  var mush = 1;
  var green = 1;
  var white = 3;
  var glutCrust = 5;
  var sum = 10 +(pep+mush+green);
  var total = $(".price strong");

  total.html("$" + (sum));
}

$(document).ready(init());
