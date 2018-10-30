// Write your Pizza Builder JavaScript in this file.
let total = 13;

$(".price ul li:nth-child(n+4)").hide();

$(".btn-pepperonni").removeClass("active")
$(".btn-pepperonni").click(function() {
  $(".pep").toggle();
  if ($(".btn-pepperonni").hasClass("active")) {
    $(".btn-pepperonni").removeClass("active")
    $(".price ul li:first-child").show()
    total += parseInt($(".price ul li:first-child").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  }
  else {
    $(".btn-pepperonni").addClass("active")
    $(".price ul li:first-child").hide()
    total -= parseInt($(".price ul li:first-child").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  }
  $(".price strong").html("$"+total)
})

$(".btn-mushrooms").removeClass("active")
$(".btn-mushrooms").click(function() {
  $(".mushroom").toggle();
  if ($(".btn-mushrooms").hasClass("active")) {
    $(".btn-mushrooms").removeClass("active")
    $(".price ul li:nth-child(2)").show()
    total += parseInt($(".price ul li:nth-child(2)").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  }
  else {
    $(".btn-mushrooms").addClass("active")
    $(".price ul li:nth-child(2)").hide()
    total -= parseInt($(".price ul li:nth-child(2)").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  }
  $(".price strong").html("$"+total)
})

$(".btn-green-peppers").removeClass("active")
$(".btn-green-peppers").click(function() {
  $(".green-pepper").toggle();
  if ($(".btn-green-peppers").hasClass("active")) {
    $(".btn-green-peppers").removeClass("active")
    $(".price ul li:nth-child(3)").show()
    total += parseInt($(".price ul li:nth-child(3)").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  }
  else {
    $(".btn-green-peppers").addClass("active")
    $(".price ul li:nth-child(3)").hide()
    total -= parseInt($(".price ul li:nth-child(3)").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  }
  $(".price strong").html("$"+total)
})

$(".sauce-white").hide()
$(".btn-sauce").click(function(){
  $(".sauce-white").toggle();
  if ($(".btn-sauce").html() == "White sauce") {
    $(".btn-sauce").html("Regular sauce")
    $(".price ul li:nth-child(4)").show()
    total += parseInt($(".price ul li:nth-child(4)").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))    
  }
  else {
    $(".btn-sauce").html("White sauce")
    $(".price ul li:nth-child(4)").hide()
    total -= parseInt($(".price ul li:nth-child(4)").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  }
  $(".price strong").html("$"+total)
  })

$("#pizza section").removeClass("crust-gluten-free")
$(".btn-crust").click(function(){
  if ($(".crust").hasClass("crust-gluten-free")) {
    $(".crust").removeClass("crust-gluten-free");
    $(".btn-crust").html("Gluten-free crust")
    $(".price ul li:nth-child(5)").hide()
    total -= parseInt($(".price ul li:nth-child(5)").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  }
  else {
    $(".crust").addClass("crust-gluten-free");
    $(".btn-crust").html("Regular crust")
    $(".price ul li:nth-child(5)").show()
    total += parseInt($(".price ul li:nth-child(5)").html().slice(1,$(".price ul li:first-child").html().indexOf(" ")+1))
  } 
  $(".price strong").html("$"+total)
})

$(".price strong").html("$"+total)
