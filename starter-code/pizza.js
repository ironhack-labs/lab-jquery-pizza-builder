// Write your Pizza Builder JavaScript in this file.

// Ajoute ou supprime pepperonni
// Bouton "Marche/Arrêt"
$(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggle();
    $(".price > ul li:nth-child(1)").toggle();
});
// Ajoute ou supprime mushrooms
$(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggle();
    $(".price > ul li:nth-child(2)").toggle();
});
// Ajoute ou supprime green-peppers
$(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggle();
    $(".price > ul li:nth-child(3)").toggle();
});

// Regular Sauce or White Sauce
$(".btn-sauce").click(function(){
    
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".price > ul li:nth-child(4)").toggle();
});
// Crust or Gluten Free
$(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".price > ul li:nth-child(5)").toggle();
});

