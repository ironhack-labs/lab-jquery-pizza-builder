$(window).ready(()=>{
    $(".pizza-ingredient:nth-child(5)").fadeToggle()
    $(".pizza-ingredient:nth-child(4)").fadeToggle()

    let pepPrice = 1;
    let mushPrice = 1;
    let greenPrice = 1;
    let whitePrice = 0;
    let glutenPrice = 0;
    let sum;
    let totalPrice;


    sum = 10 + pepPrice + mushPrice + greenPrice + whitePrice + glutenPrice
    totalPrice = "$" + sum
    $(".price strong").text(totalPrice)


// Write your Pizza Builder JavaScript in this file.
$(".crust").removeClass("crust-gluten-free")
$(".btn-crust").removeClass("active")
$(".sauce").removeClass("sauce-white")
$(".btn-sauce").removeClass("active")

$(".btn-pepperonni").click(function(){
    $(".price strong").text(totalPrice)
    $(".pep").fadeToggle()
    $(".pizza-ingredient:nth-child(1)").fadeToggle()
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        pepPrice = 0
        sum = 10 + pepPrice + mushPrice + greenPrice + whitePrice + glutenPrice
        totalPrice = "$" + sum
    } else {
        $(this).addClass("active")
        pepPrice = 1
        sum = 10 + pepPrice + mushPrice + greenPrice + whitePrice + glutenPrice
        totalPrice = "$" + sum
    }
    
})

$(".btn-mushrooms").click(function(){
    sum = 10 + pepPrice + mushPrice + greenPrice + whitePrice + glutenPrice
    totalPrice = "$" + sum
    $(".price strong").text(totalPrice)
    $(".mushroom").fadeToggle()
    $(".pizza-ingredient:nth-child(2)").fadeToggle()
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        mushPrice = 1
        totalPrice = "$" + sum
    } else {
        $(this).addClass("active")
        mushPrice = 0
        totalPrice = "$" + sum
    }
    })

$(".btn-green-peppers").click(function(){
    sum = 10 + pepPrice + mushPrice + greenPrice + whitePrice + glutenPrice
    $(".price strong").text(totalPrice)
    $(".green-pepper").fadeToggle()
    $(".pizza-ingredient:nth-child(3)").fadeToggle()
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        greenPrice = 1
        totalPrice = "$" + sum
    } else {
        $(this).addClass("active")
        greenPrice = 0
        totalPrice = "$" + sum
    }
    

    })

$(".btn-sauce").click(function(){
    sum = 10 + pepPrice + mushPrice + greenPrice + whitePrice + glutenPrice
    $(".price strong").text(totalPrice)
    $(".pizza-ingredient:nth-child(4)").fadeToggle()
    if($(".sauce").hasClass("sauce-white")){
        $(".btn-sauce").removeClass("active")
        $(".sauce").removeClass("sauce-white")
        whitePrice = 3
        totalPrice = "$" + sum
    } else {
        $(".btn-sauce").removeClass("active")
        $(".sauce").addClass("sauce-white")
        whitePrice = 0
        totalPrice = "$" + sum
    }
    
})


$(".btn-crust").click(function(){
    sum = 10 + pepPrice + mushPrice + greenPrice + whitePrice + glutenPrice
    totalPrice = "$" + sum
    $(".price strong").text(totalPrice)
    $(".pizza-ingredient:nth-child(5)").fadeToggle()
    if($(".thirty-three ~ section").hasClass("crust-gluten-free")){
        $(".btn-crust").removeClass("active")
        $(".crust:parent").removeClass("crust-gluten-free")
        glutenPrice = 5
        totalPrice = "$" + sum
    } else {
        $(".crust:parent").addClass("crust-gluten-free")
        $(".btn-crust").addClass("active")
        glutenPrice = 0
        totalPrice = "$" + sum
    }
    
})

// let calculatePrice = function(){
//     ($(".btn-pepperonni").hasClass("active"))?pepPrice=1:pepPrice=0
//     ($(".btn-sauce").hasClass("active"))?whitePrice=1:mushPrice=0
//     ($(".btn-green-peppers").hasClass("active"))?greenPrice=1:greenPrice=0
//     ($(".btn-mushrooms").hasClass("active"))?mushPrice=1:mushPrice=0
//     ($(".btn-crust").hasClass("active"))?glutenPrice=1:crustPrice=0

    

//    return totalPrice = pepPrice + mushPrice + greenPrice + whitePrice + glutenPrice
// $(".price strong").text(totalPrice)

// }

(function($){
    $.fn.invisible = function() {
        return this.each(function(){
            $(this).css("visibility", "hidden");
        })
    }
    $.fn.visible = function() {
        return this.each(function(){
            $(this).css("visibility", "visible")
        })
    }
}(jQuery))



















});