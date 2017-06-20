$(document).ready(function() {

$(".btn.btn-pepperonni").click (function(){
    var classList = $(this).attr('class').split(/\s+/);
    if(classList.indexOf("active") !== -1) {
      $('.pep').toggle();
      $(this).removeClass("active");
      $(this).css("background","#6f6f67 ");
    }
    else {
      $('.pep').toggle();
      $(this).addClass("active");
      $(this).css("background","");
    }
  });
$(".btn.btn-mushrooms").click (function(){
    var classList = $(this).attr('class').split(/\s+/);
    if(classList.indexOf("active") !== -1) {
      $('.mushroom').toggle();
      $(this).removeClass("active");
      $(this).css("background","#6f6f67 ");
    }
    else {
      $('.mushroom').toggle();
      $(this).addClass("active");
      $(this).css("background","");
    }
  });
$(".btn.btn-green-peppers").click (function(){
  var classList = $(this).attr('class').split(/\s+/);
  if(classList.indexOf("active") !== -1) {
    $('.green-pepper').toggle();
    $(this).removeClass("active");
    $(this).css("background","#6f6f67 ");
  }
  else {
    $('.green-pepper').toggle();
    $(this).addClass("active");
    $(this).css("background","");
  }
});
$('button.btn.btn-sauce').text("Regular Sauce");
$("section.sauce").removeClass("sauce-white");
$('button.btn.btn-crust').text("Regular Crust");
$("section.crust").removeClass("crust-gluten-free");
$("button.btn.btn-sauce").click (function(){
  if ($(this).text() === "Regular Sauce") {
    $(this).text("White Sauce");
    $("section.sauce").addClass("sauce-white");
  }
  else {
    $(this).text("Regular Sauce");
    $("section.sauce").removeClass("sauce-white");
  }
});
$("button.btn.btn-crust").click (function(){
  if ($(this).text() === "Regular Crust") {
    $(this).text("Gluten Free");
    $("section.crust").addClass("crust-gluten-free");

  }
  else {
    $(this).text("Regular Crust");
    $("section.crust").removeClass("crust-gluten-free");

  }
});

//Clear out once time
$('aside ul').text("");
buildIngredientList();
$("button").click(buildIngredientList);

function buildIngredientList() {

  var total = 10;

  $('aside ul').text("");

  var pizzaPrices = {
    "Pepperonni": 1,
    "Mushrooms": 1,
    "Green peppers": 1,
    "Regular Sauce": 0,
    "Regular Crust": 0,
    "White Sauce": 3,
    "Gluten Free": 3
  };

  $('aside ul').text("");
  var activeButtons = $("button[class*='active']");
  for (var i = 0; i < activeButtons.length; i++) {
    $('aside ul').append("<li>" + "$" + pizzaPrices[activeButtons[i].textContent] +  " " + activeButtons[i].textContent + "</li>");
    total += pizzaPrices[activeButtons[i].textContent];
  }

  $(".price strong").text("$" + total);
}


});
