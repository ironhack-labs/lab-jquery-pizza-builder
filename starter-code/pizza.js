// Write your Pizza Builder JavaScript in this file.
var finalprice = 13;
$("strong").text("$"+finalprice);
$(".btn-green-peppers").removeClass("active")
$( ".btn-green-peppers" ).click(function() {
    $(".green-pepper").toggle()
    $(".btn-green-peppers").toggleClass("active");
    $("li:contains('$1 green peppers')").toggle()
    if ($(".btn-green-peppers").hasClass("active")){
      finalprice -= 1
    }
    else{finalprice += 1}
    $("strong").text("$"+finalprice);
  });
  $(".btn-mushrooms").removeClass("active")
  $( ".btn-mushrooms" ).click(function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active")
    $("li:contains('$1 mushrooms')").toggle()
    if ($(".btn-mushrooms").hasClass("active")){
      finalprice -= 1
    }
    else{finalprice += 1}
    $("strong").text("$"+finalprice);
  });
  $(".btn-pepperonni").removeClass("active")
  $( ".btn-pepperonni" ).click(function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $("li:contains('$1 pepperonni')").toggle()
    if ($(".btn-pepperonni").hasClass("active")){
      finalprice -= 1
    }
    else{finalprice += 1}
    $("strong").text("$"+finalprice);
  });
  $("li:contains('$3 white sauce')").toggle()
  $(".sauce").removeClass("sauce-white")
  $(".btn-sauce" ).click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("li:contains('$3 white sauce')").toggle()
    if ($(".btn-sauce").hasClass("active")){
      finalprice -= 3
    }
    else{finalprice += 3}
    $("strong").text("$"+finalprice);
  });
  $("li:contains('$5 gluten-free crust')").toggle()
  $(".crust").removeClass("crust-gluten-free")
  $(".btn-crust" ).click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active")
    $("li:contains('$5 gluten-free crust')").toggle()
    if ($(".btn-crust").hasClass("active")){
      finalprice -= 5
    }
    else{finalprice += 5}
    $("strong").text("$"+finalprice);
  });



 