$(".crust").toggleClass("crust-gluten-free");
$(".sauce").toggleClass("sauce-white");

$(".btn-crust").toggleClass("active");
$(".btn-sauce").toggleClass("active");

$(".price li ").eq(4).hide();
var price=parseInt($(".price strong").text().substring(1,3))-5;
$(".price strong").text("$"+price);

$(".price li ").eq(3).hide();
var price=parseInt($(".price strong").text().substring(1,3))-3;
$(".price strong").text("$"+price);

$(document).ready(function() {
    $(".btn-pepperonni").click(function(){ 
        $(this).toggleClass("active");
        $(".pep").toggle();
        if ($(this).hasClass("active")) {
            // $(".price ul").append("<li class=\"li-pepperonni\">$1 pepperonni</li>");    
            $(".price li").eq(0).show();
            var price=parseInt($(".price strong").text().substring(1,3))+1;
            $(".price strong").text("$"+price);
        } else {
            // $(".price ul .li-pepperonni").remove();
            $(".price li").eq(0).hide();
            var price=parseInt($(".price strong").text().substring(1,3))-1;
            $(".price strong").text("$"+price);
        }
        
    });
    $(".btn-mushrooms").click(function(){ 
        $(this).toggleClass("active");
        $(".mushroom").toggle();
        if ($(this).hasClass("active")) {
            // $(".price ul").append("<li class=\"li-mushroom\">$1 mushrooms</li>");    
            $(".price li ").eq(1).show();
            var price=parseInt($(".price strong").text().substring(1,3))+1;
            $(".price strong").text("$"+price);
        } else {
            // $(".price ul .li-mushroom").remove();
            $(".price li ").eq(1).hide();
            var price=parseInt($(".price strong").text().substring(1,3))-1;
            $(".price strong").text("$"+price);
        }
        
    });
    $(".btn-green-peppers").click(function(){ 
        $(this).toggleClass("active");
        $(".green-pepper").toggle();
        if ($(this).hasClass("active")) {
            // $(".price ul").append("<li class=\"li-green-pepper\">$1 green peppers</li>");    
            $(".price li ").eq(2).show();
            var price=parseInt($(".price strong").text().substring(1,3))+1;
            $(".price strong").text("$"+price);
        } else {
            // $(".price ul .li-green-pepper").remove();
            $(".price li ").eq(2).hide();
            var price=parseInt($(".price strong").text().substring(1,3))-1;
            $(".price strong").text("$"+price);
        }
    });

    $(".btn-sauce").click(function(){ 
        $(this).toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
        if ($(this).hasClass("active")) {
            // $(".price ul").append("<li class=\"li-white-sauce\">$3 white sauce</li>");    
            $(".price li ").eq(3).show();
            var price=parseInt($(".price strong").text().substring(1,3))+3;
            $(".price strong").text("$"+price);
        } else {
            // $(".price ul .li-white-sauce").remove();
            $(".price li ").eq(3).hide();
            var price=parseInt($(".price strong").text().substring(1,3))-3;
            $(".price strong").text("$"+price);
        }
    });
    $(".btn-crust").click(function(){ 
        $(this).toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
        if ($(this).hasClass("active")) {
            // $(".price ul").append("<li class=\"li-gluten-free-crust\">$5 gluten-free crust</li>");    
            $(".price li ").eq(4).show();
            var price=parseInt($(".price strong").text().substring(1,3))+5;
            $(".price strong").text("$"+price);
        } else {
            // $(".price ul .li-gluten-free-crust").remove();
            $(".price li ").eq(4).hide();
            var price=parseInt($(".price strong").text().substring(1,3))-5;
            $(".price strong").text("$"+price);
        }
    });
    
});