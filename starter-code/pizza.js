// Write your Pizza Builder JavaScript in this file.
var totalPrice = 10;
$(".price strong").text("$" + totalPrice);

$(function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $($(".price li:contains('$3 white sauce')")).hide()
    $($(".price li:contains('$5 gluten-free crust')")).hide()
  
    
  
  
    $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active");

    $($(".price li:contains('$1 pepperonni')")).toggle()
    if ($(this).hasClass("active")) {
        totalPrice += 1;
    } else {
        totalPrice -= 1;
    }
    updatePrice();
  });
  $(".btn-mushrooms").click(function() {
    
    $(".mushroom").toggle();
    $(this).toggleClass("active");

    $($(".price li:contains('$1 mushrooms')")).toggle();
    if ($(this).hasClass("active")) {
        totalPrice += 1;
    } else {
        totalPrice -= 1;
    }
    updatePrice();
  });
  $(".btn-green-peppers").click(function() {
    
    $(".green-pepper").toggle();
    $(this).toggleClass("active");

    $($(".price li:contains('$1 green peppers')")).toggle();
    if ($(this).hasClass("active")) {
        totalPrice += 1;
    } else {
        totalPrice -= 1;
    }
    updatePrice();
  });
  $(".btn-sauce").click(function() {
    
    $(".sauce").toggleClass("sauce-white");
    $(this).toggleClass("active");
    
    $($(".price li:contains('$3 white sauce')")).toggle();
    if ($(this).hasClass("active")) {
        totalPrice += 3;
    } else {
        totalPrice -= 3;
    }
    updatePrice();
  });
  $(".btn-crust").click(function(){
    
    $(".crust").toggleClass("crust-gluten-free");
    $(this).toggleClass("active");

    $($(".price li:contains('$5 gluten-free crust')")).toggle();
    if ($(this).hasClass("active")) {
        totalPrice += 5;
    } else {
        totalPrice -= 5;
    }
    updatePrice();
  });
});

function updatePrice () {
    $(".price strong").text("");
    $(".price strong").text("$" + totalPrice);

    //meter precio

    
}


/*Counter.prototype.updateDisplay = function() {
  this.display.innerHTML = '';
  var text = this.count >= 10 ? this.count.toString() : '0' + this.count.toString();
  this.display.appendChild(document.createTextNode(text));
}*/