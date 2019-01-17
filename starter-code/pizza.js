
// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
    

    $('.btn-sauce').removeClass("active")
    $('.btn-crust').removeClass("active")

    // $(".sauce").removeClass("sauce-white")
    // $(".crust").removeClass("crust-gluten-free")


    $('.btn-pepperonni').on("click", function() {
        
        $('.pep').fadeToggle()
        $('.btn-pepperonni').toggleClass("active")
    
    });

    $('.btn-mushrooms').on("click", function() {
        
        $('.mushroom').fadeToggle()
        $('.btn-mushrooms').toggleClass("active")
        
    });

    $('.btn-green-peppers').on("click", function() {
        
        $('.green-pepper').fadeToggle()
        $('.btn-green-peppers').toggleClass("active")
        
    });
    
    $('.btn-sauce').on("click", function() {
        
        $('.sauce-white').fadeToggle()
        $('.btn-sauce').toggleClass("active")
        
    });

    $('.btn-crust').on("click", function() {
        
        $('.crust-gluten-free').fadeToggle()
        $('.btn-crust').toggleClass("active")
        
    });













  });




  

