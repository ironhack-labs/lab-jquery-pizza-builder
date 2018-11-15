// Write your Pizza Builder JavaScript in this file.
//(".btn-pepperonni").click(function(){
//$(".pep").hide()
//console.log("pepperoni")
//})/*



var peperoni = 1;
var hongos = 1;
var chile = 1;
var salsa = 3;
var base = 5;
var imp = 21;

function imp_peperoni(){if (peperoni === 1) { peperoni = 0 } else {peperoni = 1 }};
function imp_hongos(){if (hongos === 1) { hongos = 0 } else {hongos = 1 }};
function imp_chile(){if (chile === 1) { chile = 0 } else {chile = 1 }};
function imp_salsa(){if (salsa === 3) { salsa = 0 } else {salsa = 3 }};
function imp_base(){if (base === 5) { base = 0 } else {base = 5 }};

function calc_imp(){ imp = peperoni + chile + hongos + salsa + base + 10}

function importe(){
return "$" + " " + imp
};
$(".price strong").text(importe());


$( document ).ready(function() {

$(".btn-pepperonni").click(function(){
$(".pep").toggle();
$(".btn-pepperonni").toggleClass("active");
$(".price li:nth-child(1)").toggle();
imp_peperoni ();
calc_imp();
$(".price strong").text(importe());

})

$(".btn-green-peppers").click(function(){
$(".green-pepper").toggle();
$(".btn-green-peppers").toggleClass("active");
$(".price li:nth-child(3)").toggle();
imp_chile();
calc_imp();
$(".price strong").text(importe());

})

$(".btn-mushrooms").click(function(){
$(".mushroom").toggle();
$(".btn-mushrooms").toggleClass("active");
$(".price li:nth-child(2)").toggle();
imp_hongos();
calc_imp();
$(".price strong").text(importe());

})

$(".btn-sauce").click(function(){
$(".btn-sauce").toggleClass("active");
$(".sauce").toggleClass("sauce-white");
$(".price li:nth-child(4)").toggle();
imp_salsa();
calc_imp();
$(".price strong").text(importe());

})


$(".btn-crust").click(function(){
$(".btn-crust").toggleClass("active");
$(".crust").toggleClass("crust-gluten-free");
$(".price li:nth-child(5)").toggle();
imp_base();
calc_imp();
$(".price strong").text(importe());
})
});
