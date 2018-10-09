// Write your Pizza Builder JavaScript in this file.
TODO: retirer les variables et ré-adapter les fonctions 

var btnPep = $(".btn-pepperonni");
var btnMush = $(".btn-mushrooms");
var btnGreen = $(".btn-green-peppers");
var btnSauce = $(".btn-sauce");
var btnCrust = $(".btn-crust");

btnPep.click(function(){
    btnPep.toggleClass("active");
    $(".pep").toggle();
});

btnMush.click(function(){
    btnMush.toggleClass("active");
    $(".mushroom").toggle()
});

btnGreen.click(function(){
    btnGreen.toggleClass("active");
    $(".green-pepper").toggle()
});

$(document).ready(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").click(function(){
    $(".btn-sauce").addClass("sauce-white");
    });
});



/*$(document).ready(function(){
    $(".crust").toggleClass("crust-gluten-free");
});

btnCrust.click(function(){
    btnCrust.toggleClass("active");
    $(".crust").hasClass("crust-gluten-free");
});*/