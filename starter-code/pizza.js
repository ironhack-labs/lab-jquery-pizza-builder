// Write your Pizza Builder JavaScript in this file.

$(document).ready(function () {

  //all options
  $(".btn-pepperonni").click(function() {
    $(".roni").fadeToggle() 
  });

  $(".btn-mushrooms").click(function() {
    $(".shroom").fadeToggle() 
  });

  $(".btn-green-peppers").click(function() {
    $(".bell-pepper").fadeToggle()
  });

  $(".btn-sauce").click(function(){
    $(".sauce-red").fadeToggle()
  });

  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free")
  });
   
  $(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active")
  });

  $(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active")
  });

  $(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active")
  });

//extras put on
  $(".btn-sauce").click(function(){
    $(".white").toggle("white")
  });

  $(".btn-crust").click(function(){
    $(".gluten").toggle("gluten")
  });

  //major toppings go away
  $(".btn-pepperonni").click(function() {
    $("#toni").toggle("toni") 
  });

  $(".btn-mushrooms").click(function() {
    $("#oms").fadeToggle("oms") 
  });

  $(".btn-green-peppers").click(function() {
    $("#ers").fadeToggle("ers")
  });

  //change price
  
  $(".btn-pepperonni").click(function() {
    let top1 = parseFloat(document.getElementById("top1").innerHTML)
    let prices = parseFloat(document.getElementById("prices").innerHTML)
    let price = prices - top1
    document.getElementById("prices").innerHTML = price
  });
  $(".btn-mushrooms").click(function() {
    let top2 = parseFloat(document.getElementById("top2").innerHTML)
    let prices = parseFloat(document.getElementById("prices").innerHTML)
    let price = prices - top2
    document.getElementById("prices").innerHTML = price
  });
  $(".btn-green-peppers").click(function() {
    let top3 = parseFloat(document.getElementById("top3").innerHTML)
    let prices = parseFloat(document.getElementById("prices").innerHTML)
    let price = prices - top3
    document.getElementById("prices").innerHTML = price
  });
  $(".btn-sauce").click(function() {
    let top4 = parseFloat(document.getElementById("top4").innerHTML)
    let prices = parseFloat(document.getElementById("prices").innerHTML)
    let price = prices + top4
    document.getElementById("prices").innerHTML = price
  });
  $(".btn-crust").click(function() {
    let top5 = parseFloat(document.getElementById("top5").innerHTML)
    let prices = parseFloat(document.getElementById("prices").innerHTML)
    let price = prices + top5
    document.getElementById("prices").innerHTML = price
  });
});

