// Write your Pizza Builder JavaScript in this file.
// reinitialiser sauce-white et crust gluten-free
$(".sauce").removeClass("sauce-white");
$(".crust").removeClass("crust-gluten-free");

// btn sauce-white et crust gluten-free sans classe active
$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");

// cache prix sauce-white par defaut
$(".price ul li:nth-last-child(2)").hide();

// cache prix crust gluten-free par defaut
$(".price ul li:last").hide();

// bouton sauce
$(".btn-sauce").click(function(){
    
    var whiteSauce = $(".sauce");

    if ($(whiteSauce).hasClass("sauce-white")){
        $(whiteSauce).removeClass("sauce-white");
    } else {
        $(whiteSauce).addClass("sauce-white");
    };

    var btnOnOff = this;

    if($(btnOnOff).hasClass("active")){
        $(btnOnOff).removeClass("active");
    } else {
        $(btnOnOff).addClass("active");
    };

    var addPrice = $(".price ul li:nth-last-child(2)");
    $(addPrice).toggle();

});

// bouton crust
$(".btn-crust").click(function(){
    
    var glutenFree = $(".crust");

    if ($(glutenFree).hasClass("crust-gluten-free")){
        $(glutenFree).removeClass("crust-gluten-free");
    } else {
        $(glutenFree).addClass("crust-gluten-free");
    };

    var btnOnOff = this;

    if($(btnOnOff).hasClass("active")){
        $(btnOnOff).removeClass("active");
    } else {
        $(btnOnOff).addClass("active");
    };

    var addPrice = $(".price ul li:last");
    $(addPrice).toggle();

});

// bouton green peppers
$(".btn-green-peppers").click(function(){
    
    $(".green-pepper").toggle();

    var btnOnOff = this;

    if($(btnOnOff).hasClass("active")){
        $(btnOnOff).removeClass("active");
    } else {
        $(btnOnOff).addClass("active");
    };

    var addPrice = $(".price ul li:nth-child(3)");
    $(addPrice).toggle();
   
});

// bouton mushrooms
$(".btn-mushrooms").click(function(){
    
    $(".mushroom").toggle();

    var btnOnOff = this;

    if($(btnOnOff).hasClass("active")){
        $(btnOnOff).removeClass("active");
    } else {
        $(btnOnOff).addClass("active");
    };
    
    var addPrice = $(".price ul li:nth-child(2)");
    $(addPrice).toggle();

});

// bouton pepperonni
$(".btn-pepperonni").click(function(){
    
    $(".pep").toggle();

    var btnOnOff = this;

    if($(btnOnOff).hasClass("active")){
        $(btnOnOff).removeClass("active");
    } else {
        $(btnOnOff).addClass("active");
    };

    var addPrice = $(".price ul li:nth-child(1)");
    $(addPrice).toggle();
    

});