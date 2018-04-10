// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
    var $totalPrice = 10;
    var pepPrice = 1;
    var mushroomPrice = 1;
    var greenPepperPrice = 1;
    var saucePrice = 3;
    var crustPrice = 5;
    
// start off with out any active ingredients
$(".active").toggleClass("active");

// start off without pepperonni
$(".pep").toggle();


$('.price ul li').remove();
$('.price strong').html($totalPrice)


$(".btn-pepperonni").click(function(){
            $(".pep").toggle();
            $(this).toggleClass('active');
            if ($(this).hasClass('active')){
                $('.price ul').append("<li> $1 pepperonni </li>");
                $totalPrice += pepPrice;
                $('.price strong').html('$'+$totalPrice);
            }
            else{
                $('.price ul li:contains("pepperonni")').remove();
                $totalPrice -= pepPrice;
                $('.price strong').html('$'+$totalPrice);
            }
         
});

// start off without mushroom
$(".mushroom").toggle();
$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass('active');
    if ($(this).hasClass('active')){
        $('.price ul').append("<li> $1 mushrooms </li>");
        $totalPrice += mushroomPrice;
        $('.price strong').html('$'+$totalPrice);
    }
    else{
        $('.price ul li:contains("mushrooms")').remove();
        $totalPrice -= mushroomPrice;
        $('.price strong').html('$'+$totalPrice);
    }
   

});

// start off without greenpepper
$(".green-pepper").toggle();
$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass('active');
    if ($(this).hasClass('active')){
        $('.price ul').append("<li> $1 green peppers </li>");
        $totalPrice += greenPepperPrice;
        $('.price strong').html('$'+$totalPrice);
    }
    else{
        $('.price ul li:contains("peppers")').remove();
        $totalPrice -= greenPepperPrice;
        $('.price strong').html('$'+$totalPrice);
    }

      
});


// start crust off normal
$('.crust').toggleClass('crust-gluten-free');

// toggle crust
$(".btn-crust").click(function(){
    $(".crust").toggleClass('crust-gluten-free');
    if ($('.crust-gluten-free').hasClass('crust-gluten-free')){
        $('.price ul').append("<li> $3 gluten-free crust </li>");
        $totalPrice += crustPrice;
        $('.price strong').html('$'+$totalPrice);
        
    }
    else{
        $('.price ul li:contains("crust")').remove();
        $totalPrice -= crustPrice;
        $('.price strong').html('$'+$totalPrice);
    }
    
   
});

// start sauce off normal
$('.sauce').toggleClass('sauce-white');


// toggle sauce
$(".btn-sauce").click(function(){
        $(".sauce").toggleClass('sauce-white');
        if ($(".sauce").hasClass('sauce-white')){
            $('.price ul').append("<li> $3 white sauce </li>");
            $totalPrice += saucePrice;
            $('.price strong').html('$'+$totalPrice);
        }
        else{
            $('.price ul li:contains("white")').remove();
            $totalPrice -= saucePrice;
            $('.price strong').html('$'+$totalPrice);
        }
        
    
   
});


//end of document ready
});