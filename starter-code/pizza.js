// Write your Pizza Builder JavaScript in this file.
    $('.btn-pepperonni').click(function() {
    $('.pep').toggle(function(){
        if($('.btn-pepperonni').hasClass("active")) {
            $('.price li').eq(0).hide();
        }
        else{
            $('.price li').eq(0).show();
        }
    }); 
 })

 $('.btn-mushrooms').click(function() {
    $('.mushroom').toggle(function(){
        if($('.btn-mushrooms').hasClass("active")) {
            $('.price li').eq(1).hide();
        }
        else{
            $('.price li').eq(1).show();
        }  
        });
 })

 $('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle( function(){
        if($('.btn-green-peppers').hasClass("active")) {
        $('.price li').eq(2).hide();
    }
    else{
        $('.price li').eq(2).show();
    }  
    });
 })

 $('.btn-sauce').click(function() {
    $('.sauce').toggleClass("sauce-white")
    if($('.btn-sauce').hasClass("active")) {
        console.log("active");
        $('.price li').eq(3).show();
    }
    else{
        $('.price li').eq(3).hide();
    }  
 })
 $('.btn-sauce').click(function(){
     
     console.log('button clicked');
 })
 $('.btn-crust').click(function() {
    $('.crust-gluten-free').toggleClass("crust");
 })

 $(".btn").click(function(){
     $(this).toggleClass("active");
 })

 
