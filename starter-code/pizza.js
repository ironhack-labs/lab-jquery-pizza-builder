// Write your Pizza Builder JavaScript in this file.
var butpepperonni = $(".btn-pepperonni")
var butmushrooms = $(".btn-mushrooms")
var butgreenpeppers = $(".btn-green-peppers")

var butcrust = $(".btn-crust")
var butsauce = $(".btn-sauce")

var total = parseInt($("strong").html().slice(1))

butpepperonni.on("click",function(){
    $(".pep").toggle()
    if ($(this).hasClass("active")){
        total--
        $("strong").html("$"+total)
    } else {
        total++
        $("strong").html("$"+total)
    }
    $(this).toggleClass("active")
    $("li:contains(pepperonni)").toggle()
})


butmushrooms.on("click",function(){
    $(".mushroom").toggle()
    if ($(this).hasClass("active")){
        total--
        $("strong").html("$"+total)
    } else {
        total++
        $("strong").html("$"+total)
    }
    $(this).toggleClass("active")
    $("li:contains(mushrooms)").toggle()
})

butgreenpeppers.on("click",function(){
    $(".green-pepper").toggle()
    if ($(this).hasClass("active")){
        total--
        $("strong").html("$"+total)
    } else {
        total++
        $("strong").html("$"+total)
    }
    $(this).toggleClass("active")
    $("li:contains(green peppers)").toggle()
})


butcrust.on("click",function(){
    $(".crust").toggleClass("crust-gluten-free")
    if ($(this).hasClass("active")){
        total-=5
        $("strong").html("$"+total)
    } else {
        total+=5
        $("strong").html("$"+total)
    }
    $(this).toggleClass("active")
    $("li:contains(gluten-free crust)").toggle()
})

butsauce.on("click",function(){
    $(".sauce").toggleClass("sauce-white")
    if ($(this).hasClass("active")){
        total-=3
        $("strong").html("$"+total)
    } else {
        total+=3
        $("strong").html("$"+total)
    }
    $(this).toggleClass("active")
    $("li:contains(white sauce)").toggle()
})