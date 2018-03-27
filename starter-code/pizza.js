// PIZZA & BUTTONS RESET

$("#pizza > section:not(.green-pepper):not(.mushroom):not(.pep):not(.crust)").hide();
$("#pizza section:last-child").toggleClass("crust-gluten-free sauce-white");
$(".controls ul li:nth-child(n+4) button").toggleClass("active");
$(".price ul li:nth-child(n+4)").hide();

// TOTAL PRICE VAR

var totalPrice = 10 + parseInt($(".price ul li:first-child").text().substr(1,1)) +
                  parseInt($(".price ul li:nth-child(2)").text().substr(1,1)) +
                  parseInt($(".price ul li:nth-child(3)").text().substr(1,1));

$("strong").text("$" + totalPrice);

// ADD TOPINGS TO PIZZA

$(".btn-pepperonni").on("click", function(){
  $(".btn-pepperonni").toggleClass("active");
  
  if($(".btn-pepperonni").hasClass("active")){
    $(".price ul li:first-child").show();
    $(".pep").show();
    totalPrice += parseInt($(".price ul li:first-child").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  } else {
    $(".price ul li:first-child").hide();
    $(".pep").hide();
    totalPrice -= parseInt($(".price ul li:first-child").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  }
});

$(".btn-mushrooms").on("click", function(){
  $(".btn-mushrooms").toggleClass("active");

  if($(".btn-mushrooms").hasClass("active")){
    $(".price ul li:nth-child(2)").show();
    $(".mushroom").show();
    totalPrice += parseInt($(".price ul li:nth-child(2)").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  } else {
    $(".price ul li:nth-child(2)").hide();
    $(".mushroom").hide();
    totalPrice -= parseInt($(".price ul li:nth-child(2)").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  }
});

$(".btn-green-peppers").on("click", function(){
  $(".btn-green-peppers").toggleClass("active");

  if($(".btn-green-peppers").hasClass("active")){
    $(".price ul li:nth-child(3)").show();
    $(".green-pepper").show();
    totalPrice += parseInt($(".price ul li:nth-child(3)").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  } else {
    $(".price ul li:nth-child(3)").hide();
    $(".green-pepper").hide();
    totalPrice -= parseInt($(".price ul li:nth-child(3)").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  }
});

$(".btn-sauce").click(function () {
  $(".btn-sauce").toggleClass("active");

  if($(".btn-sauce").hasClass("active")){
    $(".price ul li:nth-child(4)").show();
    $("#pizza section:last-child").toggleClass("sauce-white");
    totalPrice += parseInt($(".price ul li:nth-child(4)").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  } else {
    $(".price ul li:nth-child(4)").hide();
    $("#pizza section:last-child").toggleClass("sauce-white");
    totalPrice -= parseInt($(".price ul li:nth-child(4)").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  }
});

$(".btn-crust").click(function () {
  $(".btn-crust").toggleClass("active");

  if ($(".btn-crust").hasClass("active")) {
    $(".price ul li:nth-child(5)").show();
    $("#pizza section:last-child").toggleClass("crust-gluten-free");
    totalPrice += parseInt($(".price ul li:nth-child(5)").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  } else {
    $(".price ul li:nth-child(5)").hide();
    $("#pizza section:last-child").toggleClass("crust-gluten-free");
    totalPrice -= parseInt($(".price ul li:nth-child(5)").text().substr(1,1));
    $("strong").text("$" + totalPrice);
  }
});



