// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){   
  $(".sauce-white").removeClass('sauce-white');
  $(".crust-gluten-free").removeClass('crust-gluten-free');
  $(".btn-sauce").removeClass('active');
  $(".btn-crust").removeClass('active');
  $( ".price li:nth-child(5)").hide();
  $( ".price li:nth-child(4)").hide();
  total+=pizza+pepperonniPrice+mushroomsPrice+greenPeppersPrice;
  $('strong').html("$"+total);
});
let pepperonniPrice = 1, mushroomsPrice = 1, greenPeppersPrice = 1
, whiteSaucePrice = 3, gfcrustPrice = 5,  pizza = 10, total=0;

$(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass('active');
        $(".pep").toggle("slow");  
        $(".price li:nth-child(1)").toggle("slow",function(){ 
                if($(".price li:nth-child(1)").is(":visible")){
                   total+= pepperonniPrice; 
                } else{
                   total-= pepperonniPrice; 
                }  
                $('strong').html("$"+total);
        });    
})

$(".btn-mushrooms").click(function(){
        $(".btn-mushrooms").toggleClass('active');
        $(".mushroom").toggle("slow");  
        $(".price li:nth-child(2)").toggle("slow",function(){ 
                if($(".price li:nth-child(2)").is(":visible")){
                   total+= mushroomsPrice; 
                } else{
                   total-= mushroomsPrice; 
                }  
                $('strong').html("$"+total);
        });
})

$(".btn-green-peppers").click(function(){
        $(".btn-green-peppers").toggleClass('active');
        $(".green-pepper").toggle("slow"); 
        $( ".price li:nth-child(3)").toggle("slow",function(){ 
                if($(".price li:nth-child(3)").is(":visible")){
                   total+= greenPeppersPrice; 
                } else{
                   total-= greenPeppersPrice; 
                }  
                $('strong').html("$"+total);
        });
})

$(".btn-sauce").click(function(){
        $(".btn-sauce").toggleClass('active');
        $(".sauce").toggleClass('sauce-white');  
        $( ".price li:nth-child(4)").toggle("slow",function(){ 
                if($(".price li:nth-child(4)").is(":visible")){
                   total+= whiteSaucePrice;
                } else{
                   total-= whiteSaucePrice; 
                }
                $('strong').html("$"+total);
        });
})

$(".btn-crust").click(function(){
        $(".btn-crust").toggleClass('active');
        $(".crust").toggleClass('crust-gluten-free'); 
        $( ".price li:nth-child(5)").toggle("slow",function(){ 
                if($(".price li:nth-child(5)").is(":visible")){
                   total+= gfcrustPrice; 
                } else{
                   total-= gfcrustPrice; 
                }  
                $('strong').html("$"+total);
        });   
})
