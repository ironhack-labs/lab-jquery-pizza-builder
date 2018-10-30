// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    $(".sauce").removeClass("sauce-white")
    $(".btn-sauce").toggleClass("active")
    $("li:contains(white)").toggle()

    $(".crust").removeClass("crust-gluten-free")
    $(".btn-crust").toggleClass("active")
    $("li:contains(gluten)").toggle()
    
    $(".btn-pepperonni").click(function(event){
    $(".btn-pepperonni").toggleClass("active")
        $(".pep").toggle()
        $("li:contains(pepperonni)").toggle()
    });

    $(".btn-mushrooms").click(function(event){
    $(".btn-mushrooms").toggleClass("active")
        $(".mushroom").toggle()
        $("li:contains(mushroom)").toggle()
    });

    $(".btn-green-peppers").click(function(event){
    $(".btn-green-peppers").toggleClass("active")
        $(".green-pepper").toggle()
        $("li:contains(green)").toggle()
    });

    $(".btn-sauce").click(function(event){
    $(".btn-sauce").toggleClass("active")
        $(".sauce").toggleClass("sauce-white")
        $("li:contains(white)").toggle()

    });

    $(".btn-crust").click(function(event){
    $(".btn-crust").toggleClass("active")
        $(".crust").toggleClass("crust-gluten-free")
        $("li:contains(gluten)").toggle()
    });

    
  });