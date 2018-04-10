

$(".btn-pepperonni").on("click", function(){
$(".pep").toggleClass("none")
$(".price ul li:first-child").toggleClass("none")
});

$(".btn-mushrooms").on("click", function(){
    $(".cap,.stem").toggleClass("none")
    $(".price ul li:nth-child(2)").toggleClass("none")
    
});

$(".btn-green-peppers").on("click", function(){
    $(".green-pepper").toggleClass("none")
    $(".price ul li:nth-child(3)").toggleClass("none")
});

$(".crust").removeClass("crust-gluten-free");

$(".btn-crust").on("click", function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".price ul li:last-child").toggleClass("none")
})

$(".sauce").removeClass("sauce-white");

$(".btn-sauce").on("click", function(){
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:nth-child(4)").toggleClass("none")
})

$(".btn-sauce,.btn-crust").removeClass("active")


$("button").on("click",function(){
    $(this).toggleClass("active")
})

