// Write your Pizza Builder JavaScript in this file.
// Pair Programming 
// Arnau Guadall
// Albert Serradell

$(document).ready(function() {

    var amount = 13;

    //Set enable false when page loads
    $(".crust").removeClass( "crust-gluten-free" );
    $(".crust section:nth-child(2)").removeClass("sauce-white");
    $(".btn-sauce").removeClass("active");
    $(".btn-crust").removeClass("active");
    $(".price ul li:nth-child(4)").hide();
    $(".price ul li:nth-child(5)").hide();
    $(".price strong").html("$" + amount);
    

    $( ".btn-pepperonni" ).click(function() {
        $(".pep").toggle();
        $(".btn-pepperonni").toggleClass("active");
        $(".price ul li:first-child" ).toggle();
        if ($(".btn-pepperonni").hasClass("active")){
            amount += 1; console.log("resta 1");
        } else{
            amount -= 1; console.log("suma 1");
        }
        $(".price strong").html("$" + amount);
    });

    $( ".btn-mushrooms" ).click(function() {
        $(".mushroom").toggle();
        $(".btn-mushrooms").toggleClass("active");
        $( ".price ul li:nth-child(2)" ).toggle();
        amount = ($(".btn-mushrooms").hasClass("active")) ? amount += 1 : amount -= 1;
        $(".price strong").html("$" + amount);
    });

    $( ".btn-green-peppers" ).click(function() {
        $(".green-pepper").toggle();
        $(".btn-green-peppers").toggleClass("active");
        $( ".price ul li:nth-child(3)" ).toggle();
        amount = ($(".btn-green-peppers").hasClass("active")) ? amount += 1 : amount -= 1;        
        $(".price strong").html("$" + amount);
    });

    $(".btn-sauce").click(function(){
        $(".crust section:nth-child(2)").toggleClass("sauce-white");
        $(".btn-sauce").toggleClass("active");
        $( ".price ul li:nth-child(4)" ).toggle();
        amount = ($(".btn-sauce").hasClass("active")) ? amount += 3 : amount -= 3;
        $(".price strong").html("$" + amount);
    });

    $(".btn-crust").click(function(){
        $(".crust").toggleClass( "crust-gluten-free" );
        $(".btn-crust").toggleClass("active");
        $( ".price ul li:nth-child(5)" ).toggle();    
        amount = ($(".btn-crust").hasClass("active")) ? amount += 5 : amount -= 5;
        $(".price strong").html("$" + amount);      
    });   

});


