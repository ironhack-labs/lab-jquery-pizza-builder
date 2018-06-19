// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
$(".pep").hide();
$(".mushroom").hide();
$(".green-pepper").hide();
$(".sauce").removeClass("sauce-white");
$(".crust").removeClass("crust-gluten-free");
$(".btn").removeClass("active");
$(".price li").hide();

    


    var pep = $(".pep");
    var pepButton = $(".btn-pepperonni");
    var mushroom = $(".mushroom");
    var mushroomButton = $(".btn-mushrooms");
    var grnPep = $(".green-pepper");
    var grnPepButton = $(".btn-green-peppers");
    var sauce = $(".sauce-white");
    var sauceButton = $(".btn-sauce");
    var glutenCrust = $(".crust-gluten-free");
    var glutenCrustButton = $(".btn-crust");
    var price = 10;
    $('.price strong').text("$" + price);
    var priceArray = $(".price li");
    

    

    pepButton.click(function(){
        pep.toggle();
        pepButton.toggleClass("active");
        $("li:contains($1 p)").toggle();
        
        $('.price strong').text("$" + price);
    })
    mushroomButton.click(function(){
        mushroom.toggle();
        mushroomButton.toggleClass("active");
        $("li:contains($1 m)").toggle();
        
        $('.price strong').text("$" + price);
    })
    grnPepButton.click(function(){
        grnPep.toggle();
        grnPepButton.toggleClass("active");
        $("li:contains($1 g)").toggle();
        
        $('.price strong').text("$" + price);
    })
    sauceButton.click(function(){
        $(".sauce").toggleClass("sauce-white");
        sauceButton.toggleClass("active");
        $("li:contains($3)").toggle();
        
        $('.price strong').text("$" + price);
    })
    glutenCrustButton.click(function(){
        $(".crust").toggleClass("crust-gluten-free");
        glutenCrustButton.toggleClass("active");
        $("li:contains($5)").toggle();
        $('.price strong').text("$" + price);
    })

});

$(".btn-crust").click();
$(".btn-sauce").click();
