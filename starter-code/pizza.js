// Write your Pizza Builder JavaScript in this file.

// Pepperonni
    var btnPep = $(".btn-pepperonni") ;
    var pep = $(".pep") ;
    btnPep.click(function(){
        btnPep.toggleClass("active");
        pep.toggle()
    });

// Mushrooms
var btnMush = $(".btn-mushrooms") ;
var mush = $(".mushroom") ;
btnMush.click(function(){
    btnMush.toggleClass("active");
    mush.toggle()
});

// Green peppers

var btnPeppers = $(".btn-green-peppers") ;
var greenPepper = $(".green-pepper") ;
btnPeppers.click(function(){
    btnPeppers.toggleClass("active");
    greenPepper.toggle()
});


// remove sauce

$(document).ready(function(){
var crust = $(".crust") ;
var gluten = $(".crust-gluten-free");
sauce.removeClass(gluten);
}











