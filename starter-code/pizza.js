// Write your Pizza Builder JavaScript in this file.
let total = 13;
function calculatePrice() {
    $(".price strong").text("$" + total);
  }

$('.btn-pepperonni').click(function(e){
    $("* .pep").toggle()
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:nth-child(1)").toggle();
    if($(".btn-pepperonni").hasClass("active")) {
        total += 1;
    } else {
        total -= 1;
    } calculatePrice();
 });
 
 $('.btn-mushrooms').click(function(e){
    $("* .mushroom").toggle()
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul li:nth-child(2)").toggle();
    if($(".btn-mushrooms").hasClass("active")) {
        total += 1;
    } else {
        total -= 1;
    } calculatePrice();
 });
 
 $('.btn-green-peppers').click(function(e){
    $("* .green-pepper").toggle()
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul li:nth-child(3)").toggle();
    if($(".btn-green-peppers").hasClass("active")) {
        total += 1;
    } else {
        total -= 1;
    } calculatePrice();
 });
 
 $(".sauce").toggleClass("sauce-white");
 $(".btn-sauce").toggleClass("active");
 $(".price ul li:nth-child(4)").toggle();
 $('.btn-sauce').click(function(e){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price ul li:nth-child(4)").toggle();
    if($(".btn-sauce").hasClass("active")) {
        total += 3;
    } else {
        total -= 3;
    } calculatePrice();
 });
 
 $(".crust").toggleClass('crust-gluten-free');
 $(".btn-crust").toggleClass("active");
 $(".price ul li:nth-child(5)").toggle();
 $('.btn-crust').click(function(e){
    $(".crust").toggleClass('crust-gluten-free');
    $(".btn-crust").toggleClass("active");
    $(".price ul li:nth-child(5)").toggle();
    if($(".btn-crust").hasClass("active")) {
        total += 5;
    } else {
        total-= 5;
    } calculatePrice();
 });