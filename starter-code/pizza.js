var total = 13;

$('strong').text(total);
$(".btn-pepperonni").on("click", function(){
$(".pep").toggleClass("none")
$(".price ul li:first-child").toggleClass("none")
if( $(".price ul li:first-child").hasClass("none")){
    total--;
} else {
    total++;
}

$('strong').text(total);
});

$(".btn-mushrooms").on("click", function(){
    $(".cap,.stem").toggleClass("none")
    $(".price ul li:nth-child(2)").toggleClass("none")
    if( $(".price ul li:nth-child(2)").hasClass("none")){
        total--;
    } else {
        total++;
    }
    
$('strong').text(total);
});

$(".btn-green-peppers").on("click", function(){
    $(".green-pepper").toggleClass("none")
    $(".price ul li:nth-child(3)").toggleClass("none")
    if( $(".price ul li:nth-child(3)").hasClass("none")){
        total--;
    } else {
        total++;
    }
    
$('strong').text(total);
});

$(".crust").removeClass("crust-gluten-free");
$(".price ul li:last-child").addClass("none")


$(".btn-crust").on("click", function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".price ul li:last-child").toggleClass("none")
    if( $(".price ul li:last-child").hasClass("none")){
        total-=5;
    } else {
        total+=5;
    }
    
$('strong').text(total);
})

$(".sauce").removeClass("sauce-white");
$(".price ul li:nth-child(4)").addClass("none")

$(".btn-sauce").on("click", function(){
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:nth-child(4)").toggleClass("none")
    if( $(".price ul li:nth-child(4)").hasClass("none")){
        total-=3;
    } else {
        total+=3;
    }

$('strong').text(total);
})

$(".btn-sauce,.btn-crust").removeClass("active")


$("button").on("click",function(){
    $(this).toggleClass("active")
})
