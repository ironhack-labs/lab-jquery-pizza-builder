// Write your Pizza Builder JavaScript in this file.

var total = 21

$(".btn-pepperonni").click(function(){
   
    $(".btn-pepperonni").toggleClass("active")
    if ($(".btn-pepperonni").hasClass("active")) {
        $(".pep").show();
        $(".addpep").show();
        total +=1
    }
    else {
        $(".pep").hide();
        $(".addpep").hide();
        total -= 1
    }  
    
    $(".total").text(total);
})

$(".btn-mushrooms").click(function(){
   
    $(".btn-mushrooms").toggleClass("active") 
    if ($(".btn-mushrooms").hasClass("active")) {
        $(".mushroom").show();
        $(".addmush").show();
        total +=1;
    }
    else {
        $(".mushroom").hide();
        $(".addmush").hide();
        total -= 1;
    }
  
    $(".total").text(total);
})

$(".btn-green-peppers").click(function(){
   
    $(".btn-green-peppers").toggleClass("active") 
    if ($(".btn-green-peppers").hasClass("active")) {
        $(".green-pepper").show();
        $(".addgreenpep").show();
        total += 1
    }
    else {
        $(".green-pepper").hide();
        $(".addgreenpep").hide();
        total -= 1
    }
 
    $(".total").text(total);
})

$(".btn-sauce").click(function(){
   
    $(".btn-sauce").toggleClass("active")
    $(".sauce").toggleClass("sauce-white")
    if ($(".btn-sauce").hasClass("active"))  total += 3
    else total -= 3
    $(".total").text(total);
})

$(".btn-crust").click(function(){
   
    $(".btn-crust").toggleClass("active")
    $(".crust").toggleClass("crust-gluten-free")
    if ($(".btn-crust").hasClass("active"))  total += 5
    else total -= 5
    $(".total").text(total);
})
document.getElementsByClassName("grab-me")[0].addEventListener("click", function (){
    //do stuff
})

$(".grab-me").click(function(){
    //do stuff
})

$(".pep")

// var mapper = {
//     "btn-pepperonni": {price: 1, text: "pepperonni", class: "pep"},
//     "btn-mashrooms": {price: 1, text: "mashroom", class: "mashroom"},
// }

// $(".btn-pepperonni").click(function(){
//     $(".pep").toggle()
//     $(".btn-pepperonni").toggleClass("active")
//     $($("li:contains('pepperonni')")).toggle(1000)
//     if ($(".btn-pepperonni").hasClass("active"))  total +=1
//     else total -= 1
//     $("#total").text(total);
// })