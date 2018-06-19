// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  //$(".green-pepper").hide();
  //$(".mushroom").hide();
  //$(".pep").hide();
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");
  $("li:contains($5 gluten-free crust)").hide();
  $("li:contains($3 white sauce)").hide();
});


// Insertar funcionalidad a los botones.


$(".btn-mushrooms").click(function(){
    $(".btn-mushrooms").toggleClass("active")
    if (
        $(".btn-mushrooms").hasClass("active")){
            $(".mushroom").show();
            $("li:contains($1 mushrooms)").show(); 
            }
    else { 
        $(".mushroom").hide();
        $("li:contains($1 mushrooms)").hide();
    
    }
});


$(".btn-pepperonni").click(function(){
    $(".btn-pepperonni").toggleClass("active")
    if (
        $(".btn-pepperonni").hasClass("active"))
        { $(".pep").show();
            $("li:contains($1 pepperonni)").show();
        }
    else {  $(".pep").hide();
            $("li:contains($1 pepperonni)").hide();
    }   
});

$(".btn-green-peppers").click(function(){
    $(".btn-green-peppers").toggleClass("active")
    if (
        $(".btn-green-peppers").hasClass("active"))
        {   $(".green-pepper").show()
            $("li:contains($1 green peppers)").show();
        }
    else {  $(".green-pepper").hide();
            $("li:contains($1 green peppers)").hide();
        }
});


$(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active")
    if (
        $(".btn-sauce").hasClass("active"))
        { $(".sauce").addClass("sauce-white")
            $("li:contains($3 white sauce)").show();
        }
    else {$(".sauce").removeClass("sauce-white");
        $("li:contains($3 white sauce)").hide();
    }
});

$(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active")
    if (
        $(".btn-crust").hasClass("active"))
        { $(".crust").addClass("crust-gluten-free")
        $("li:contains($5 gluten-free crust)").show();
        }
    else {$(".crust").removeClass("crust-gluten-free");
        $("li:contains($5 gluten-free crust)").hide();}
});

