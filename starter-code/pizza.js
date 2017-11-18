// Write your Pizza Builder JavaScript in this file.
$(function() {
  $(".crust").removeClass("crust-gluten-free");
  $(".btn.crust").removeClass("active");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
});

handleBtn(".btn-pepperonni", ".pep");
handleBtn(".btn-mushrooms", ".mushroom");
handleBtn(".btn-green-peppers", ".green-pepper");
handleBtn(".btn-crust", ".crust", "crust-gluten-free");
handleBtn(".btn-sauce", ".sauce", "sauce-white");


function handleBtn(btnClass, targetClass, extra) {
  $(btnClass).click(function() {
    $(this).toggleClass("active");

    if (extra === undefined) {
      $(targetClass).toggle();
    } else {
      $(targetClass).toggleClass(extra);
    }
    updatePrice();
  });
}

function updatePrice() {
  $(".btn-pepperonni").hasClass("active") ? $(".price li:nth-child(1)").show() : $(".price li:nth-child(1)").hide();
  $(".btn-mushrooms").hasClass("active") ? $(".price li:nth-child(2)").show() : $(".price li:nth-child(2)").hide();
  $(".btn-green-peppers").hasClass("active") ? $(".price li:nth-child(3)").show() : $(".price li:nth-child(3)").hide();
  $(".btn-sauce").hasClass("active") ? $(".price li:nth-child(4)").show() : $(".price li:nth-child(4)").hide();
  $(".btn-crust").hasClass("active") ? $(".price li:nth-child(5)").show() : $(".price li:nth-child(5)").hide();
}


function updatePrice() {
  var total = 10;
  if ($(".btn-pepperonni").hasClass("active")) {
    total += 1;
  }
  if ($(".btn-mushrooms").hasClass("active")) {
    total += 1;
  }
  if ($(".btn-green-peppers").hasClass("active")) {
    total += 1;
  }
  if ($(".btn-sauce").hasClass("active")) {
    total += 1;
  }
  if ($(".btn-crust").hasClass("active")) {
    total += 1;
  }

  $("strong").text("$" + total);
}
