$(window).ready(()=>{
    $(".pizza-ingredient:nth-child(5)").fadeToggle()
    $(".pizza-ingredient:nth-child(4)").fadeToggle()

    let sum;


    sum = 13
    $(".price strong").text(sum)


// Write your Pizza Builder JavaScript in this file.
$(".crust").removeClass("crust-gluten-free")
$(".btn-crust").removeClass("active")
$(".sauce").removeClass("sauce-white")
$(".btn-sauce").removeClass("active")

$(".btn-pepperonni").click(function(){
    $(".pep").fadeToggle()
    $(".pizza-ingredient:nth-child(1)").fadeToggle()
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        sum -= 1
        $(".price strong").text("$"+sum)

    } else {
        $(this).addClass("active")
        sum +=1
        $(".price strong").text("$"+sum)

    }
    
})

$(".btn-mushrooms").click(function(){
    $(".mushroom").fadeToggle()
    $(".pizza-ingredient:nth-child(2)").fadeToggle()
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        sum -= 1
        $(".price strong").text("$"+sum)
    } else {
        $(this).addClass("active")
        sum += 1
        $(".price strong").text("$"+sum)
    }
    })

$(".btn-green-peppers").click(function(){
    $(".green-pepper").fadeToggle()
    $(".pizza-ingredient:nth-child(3)").fadeToggle()
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        sum -= 1
        $(".price strong").text("$"+sum)
    } else {
        $(this).addClass("active")
        sum += 1
        $(".price strong").text("$"+sum)        
    }
    

    })

$(".btn-sauce").click(function(){
    $(".pizza-ingredient:nth-child(4)").fadeToggle()
    if($(".sauce").hasClass("sauce-white")){
        $(".btn-sauce").removeClass("active")
        $(".sauce").removeClass("sauce-white")
        sum -= 3
        $(".price strong").text("$"+sum)
    } else {
        $(".btn-sauce").removeClass("active")
        $(".sauce").addClass("sauce-white")
        sum += 3
        $(".price strong").text("$"+sum)
    }
    
})


$(".btn-crust").click(function(){
    $(".pizza-ingredient:nth-child(5)").fadeToggle()
    if($(".thirty-three ~ section").hasClass("crust-gluten-free")){
        $(".btn-crust").removeClass("active")
        $(".crust:parent").removeClass("crust-gluten-free")
        sum -= 5
        $(".price strong").text("$"+sum)
    } else {
        $(".crust:parent").addClass("crust-gluten-free")
        $(".btn-crust").addClass("active")
        sum += 5
        $(".price strong").text("$"+sum)
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