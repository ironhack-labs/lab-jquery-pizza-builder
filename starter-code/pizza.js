// Write your Pizza Builder JavaScript in this file.

$(".btn-mushrooms").on("click", function () {
    if ($(".mushroom").css("display") === "none") {
        $(".mushroom").css("display","block")
        $(".btn-mushrooms").addClass("active")
    } else {
        $(".btn-mushrooms").removeClass("active")
        $(".mushroom").css("display", "none")
    }
})

$(".btn-green-peppers").on("click", function () {
    if ($(".green-pepper").css("display") === "none"){
        $(".green-pepper").css("display","block")
        $(".btn-mushrooms").addClass("active")
    } 
     else {
        $(".btn-green-peppers").removeClass("active")
        $(".green-pepper").css("display", "none")
    }
})

$(".btn-pepperonni").on("click", function () {
    console.log('pepero')
    if ($(".pep").css("display") === "none"){
        $(".pep").css("display","block")
        $(".btn-pepperonni").addClass("active")
    } 
     else {
        $(".btn-pepperonni").removeClass("active")
        $(".pep").css("display", "none")
    }
})

//Iteration 2 quitar el white sauce y gluten free por default

$(".sauce").css("display","none")
// $(".crust").css("display","block")
$(".crust-gluten-free").removeClass("crust-gluten-free");

$(".btn-sauce").on("click", function () {
    console.log('sauce')
    if ($(".sauce")){
        $(".sauce").css("display","block")
        //hasta aqui tira, le tendria que poner un contrario, con el else if no me tira por que ya entra en sauce
    } 
})

$(".btn-crust").on("click",function () {
    console.log('crust')
    if ($(this).text()== "Crust"){
        $(".crust").removeClass('crust-gluten-free');
        $(this).text("Gluten-free crust");
    } else {
        $(".crust").addClass('crust-gluten-free');
        $(this).text("Crust");
    }
})


