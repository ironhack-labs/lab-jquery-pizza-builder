// Write your Pizza Builder JavaScript in this file.
$(".btn-pepperonni").click(function(){
    if($(".pep").is(":hidden")){
        $(".pep").show()
        showIngredientPrice("pepperonni")
        sumarTotal(1)
    }else{
        $(".pep").hide()
        hideIngredientPrice("pepperonni")
        restarTotal(1)
    }
    $(this).toggleClass("active")
 });

 $(".btn-mushrooms").click(function(){
     if($(".mushroom").is(":hidden")){
         $(".mushroom").show()
         showIngredientPrice("mushrooms")
         sumarTotal(1)
     } else {
         $(".mushroom").hide()
         hideIngredientPrice("mushrooms")
         restarTotal(1)
     }
     $(this).toggleClass("active")
 })

 $(".btn-green-peppers").click(function(){
    if($(".green-pepper").is(":hidden")){
        $(".green-pepper").show()
        showIngredientPrice("peppers")
        sumarTotal(1)
    } else {
        $(".green-pepper").hide()
        hideIngredientPrice("peppers")
        restarTotal(1)
    }
    $(this).toggleClass("active")
})

$(".crust").toggleClass("crust-gluten-free")
$(".btn-crust").toggleClass("active")

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free")
    $(this).toggleClass("active")
    if($(this).hasClass("active")){
        showIngredientPrice("crust")
        sumarTotal(5)
    } else {
        hideIngredientPrice("crust")
        restarTotal(5)
    }
})

$(".sauce").toggleClass("sauce-white")
$(".btn-sauce").toggleClass("active")

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white")
    $(this).toggleClass("active")
    if($(this).hasClass("active")){
        showIngredientPrice("white")
        sumarTotal(3)
    } else {
        hideIngredientPrice("white")
        restarTotal(3)
    }
})

$(".price li").each(function(){
    if ($(this).html().includes("white")) {
        $(this).hide()
    }
    if ($(this).html().includes("gluten")) {
        $(this).hide()
    }
})

function showIngredientPrice(ingredient){
    $(".price li").each(function(){
        if ($(this).html().includes(ingredient)) {
            $(this).show()
        }
    })
}

function hideIngredientPrice(ingredient){
    $(".price li").each(function(){
        if ($(this).html().includes(ingredient)) {
            $(this).hide()
        }
    })
}

var precioTotal = 13
$(".price strong").html("$"+precioTotal)

function sumarTotal(precio){
    precioTotal = precioTotal + precio
    $(".price strong").html("$"+precioTotal)
}

function restarTotal(precio){
    precioTotal = precioTotal - precio
    $(".price strong").html("$"+precioTotal)
}