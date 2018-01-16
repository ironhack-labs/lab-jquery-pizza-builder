// Write your Pizza Builder JavaScript in this file.

function giveMeTotal(){

    var suma = 10;

    if(!$(".btn-pepperonni").hasClass("active")){

        suma += 1;
    }

    if(!$(".btn-mushrooms").hasClass("active")){

      suma += 1;
   }

   if(!$(".btn-green-peppers").hasClass("active")){

    suma += 1;
   }

   if(!$(".btn-sauce").hasClass("active")){

    suma += 3;
   }

   if(!$(".btn-crust").hasClass("active")){

    suma += 5;
   }


    return suma;
}

function cleanPizza(){

    $(".pep").toggle();
    $(".mushroom").toggle();
    $(".green-pepper").toggle();
    $(".sauce-white").toggle();
    $(".crust").toggleClass("crust-gluten-free");

    $("aside li:nth-child(1)").toggle();
    //$("aside li:nth-child(1)").attr("value", 1);
    $("aside li:nth-child(2)").toggle();
    //$("aside li:nth-child(2)").attr("value", 1);
    $("aside li:nth-child(3)").toggle();
    //$("aside li:nth-child(3)").attr("value", 1);
    $("aside li:nth-child(4)").toggle();
    //$("aside li:nth-child(4)").attr("value", 3);
    $("aside li:nth-child(5)").toggle();
    //$("aside li:nth-child(5)").attr("value", 5);

    $("aside strong").html("$10");
}

function topicButton(buttonName, className, pos){

  $(buttonName).click(function(){

    //var topicAux = $(className).toggle();
    $(className).toggle(); 
    activateButton(buttonName);
    $("aside li:nth-child("+pos+")").toggle();
    $("aside strong").html(giveMeTotal());

});

}

function glutenCrust(buttonName, className, pos){
  
   $(buttonName).click(function(){
      
    $(".crust").toggleClass(className);
    $("aside li:nth-child("+pos+")").toggle();
    $("aside strong").html(giveMeTotal());
    
   })

}

function activateButton(buttonName){

    $(buttonName).toggleClass("active");

}

$(document).ready(function(){

    cleanPizza();
    topicButton(".btn-pepperonni", ".pep", 1); 
    topicButton(".btn-mushrooms", ".mushroom", 2);
    topicButton(".btn-green-peppers", ".green-pepper", 3);
    topicButton(".btn-sauce", ".sauce-white", 4); 
    glutenCrust(".btn-crust", "crust-gluten-free", 5)
   

})