// Write your Pizza Builder JavaScript in this file.


var totalPrice = 13;
$('strong').text("$" + totalPrice)

$('.btn-pepperonni').click("change", function(e) {
    e.preventDefault()
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active')
    $("li:contains(pepperonni)").toggleClass('displayNone')
    
    if($("li:contains(pepperonni)").hasClass('displayNone')){
        totalPrice -- 
        $('strong').text("$" + totalPrice)
    }else{
        totalPrice ++
        $('strong').text("$" + totalPrice)
    }
}
)

$('.btn-mushrooms').click("change", function(e) {
    e.preventDefault()
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active')
    $("li:contains(mushrooms)").toggleClass('displayNone')

    if($("li:contains(mushrooms)").hasClass('displayNone')){
        totalPrice --
        $('strong').text("$" + totalPrice)
    }else{
        totalPrice ++
        $('strong').text("$" + totalPrice)
    }
}
)

$('.btn-green-peppers').click("change", function(e) {
    e.preventDefault()
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active')
    $("li:contains(green)").toggleClass('displayNone')

    if($("li:contains(green)").hasClass('displayNone')){
        totalPrice -- 
        $('strong').text("$" + totalPrice)
    }else{
        totalPrice ++
        $('strong').text("$" + totalPrice)
    }
}
)

$('.btn-sauce').click("change", function(e) {
    e.preventDefault()
    $('.btn-sauce').toggleClass('active')
    $("li:contains(white)").toggleClass('displayNone')
    var sauce = $("#sauce").hasClass("sauce-white")
    if(sauce==true){
        $("#sauce").removeClass("sauce-white")
        $("#sauce").addClass("sauce")   
        
    }else if(sauce==false){
        $("#sauce").addClass("sauce-white")  
        
    }

    if($("li:contains(white)").hasClass('displayNone')){
        totalPrice -= 3
        $('strong').text("$" + totalPrice)
    }else{
        totalPrice +=3
        $('strong').text("$" + totalPrice)
    }
}
)

$('.btn-crust').click("change", function(e) {
    e.preventDefault()
    $('.btn-crust').toggleClass('active')
    $("li:contains(gluten-free)").toggleClass('displayNone')
    var crust = $("#crust").hasClass("crust-gluten-free")
    if(crust==true){
        $("#crust").removeClass("crust-gluten-free")
        $("#crust").addClass("crust")   
    }else if(crust==false){
        $("#crust").addClass("crust-gluten-free")  
        
    }

    if($("li:contains(gluten-free)").hasClass('displayNone')){
        totalPrice -=5 
        $('strong').text("$" + totalPrice)
    }else{
        totalPrice +=5
        $('strong').text("$" + totalPrice)
    }
}
)