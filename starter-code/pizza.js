// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $(".btn-pepperonni.active").removeClass("active");
    $(".pep").toggle('display');
    $(".btn-mushrooms.active").removeClass("active");
    $(".mushroom").toggle('display');
    $(".btn-green-peppers.active").removeClass("active");
    $(".green-pepper").toggle('display');
    $(".btn-sauce.active").removeClass("active");
    $(".btn-crust.active").removeClass("active");
}) 

$(document).ready(function(){
    $(".btn-pepperonni").click(function() {
        $(".btn-pepperonni").addClass("active");
        $(".pep").toggle('display');
     });
});


//NO FUNCIONAAAAAAA 
    //Si dejo solamente el if/else, cambia todo el documento y 
    //no entiendo muy bien por qué


// $(document).ready(function(){
//     $(".btn-pepperonni").click(function() {
//         $(".btn-pepperonni").click(function() {
//         $(".btn-pepperonni").addClass("active");
//         $(".pep").toggle('display');
//         });
//         if(display === true){
//         $(".btn-pepperonni").addClass("active");
//         $(".pep").toggle('display');
//         }
//         else(display === false){
//         $(".btn-pepperonni.active").removeClass("active");
//         $(".pep").toggle('display');
//         }
//      });
// });




$(document).ready(function(){
    $(".btn-mushrooms").click(function() {
        $(".btn-mushrooms").addClass("active");
        $(".mushroom").toggle('display');
     });
});
$(document).ready(function(){
    $(".btn-green-peppers").click(function() {
        $(".btn-green-peppers").addClass("active");
        $(".green-pepper").toggle('display');
     });
});

$(document).ready(function(){
    $(".sauce-white").removeClass("sauce-white");
});

$(document).ready(function(){
    $(".btn-sauce").click(function() {
        $(".sauce").addClass("sauce-white");;
     });
});

$(document).ready(function(){
    $(".crust").removeClass("crust-gluten-free");
});

$(document).ready(function(){
    $(".btn-crust").click(function() {
        $(".crust").addClass("crust-gluten-free");;
     });
});
