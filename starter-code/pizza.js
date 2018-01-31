// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    
    console.log("asasas");
    // Arreglar Sauce y crust por defecto. Para quitar la clase 
    $('.price ul li:last-child').css("display","none");
    $('.price ul li:nth-child(4)').css("display","none");
    $('.crust').removeClass("crust-gluten-free");
    $('.sauce').removeClass("sauce-white");
    
//Añadir o quitar champiñones pepperoni y green-peppers 
    $(".btn-pepperonni").click(function(){
        console.log("funciona!!");
    if ($('.pep').css("display")==="none"){
      $(".pep").css("display","block");
      $(this).removeClass("active");
      $('.price ul li:first-child').css("display","block");
      
    }else {
        $(".pep").css("display","none");
        $(this).removeClass("active");
        $('.price ul li:first-child').css("display","none");
    }
    });
    $(".btn-mushrooms").click(function(){
        console.log("funciona!!");
    if ($('.mushroom').css("display")==="none"){
      $(".mushroom").css("display","block");
      $(this).addClass("active");
      $('.price ul li:nth-child(2)').css("display","block");
    }else {
        $(".mushroom").css("display","none");
        $(this).removeClass("active");
        $('.price ul li:nth-child(2)').css("display","none");
    }
    });

    $(".btn-green-peppers").click(function(){
        console.log("funciona!!");
    if ($('.green-pepper').css("display")==="none"){
      $(".green-pepper").css("display","block");
      $(this).removeClass("active");
      $('.price ul li:nth-child(3)').css("display","block");
    }else {
        $(".green-pepper").css("display","none");
        $(this).removeClass("active");
        $('.price ul li:nth-child(3)').css("display","none");
    }
    });

    $(".btn-sauce").click(function(){
        console.log("funciona!!");
    if ($('.sauce').css("display")==="none"){
      $(".sauce").css("display","block");
      $(this).removeClass("active");
      $('.price ul li:nth-child(4)').css("display","none");
    }else {
        $(".sauce").css("display","none");
        $(this).removeClass("active");
        $('.price ul li:nth-child(4)').css("display","block");
    }
    });

    $(".btn-crust").click(function(){
        console.log("funciona!!");
    if ($('.price ul li:nth-child(5)').css("display")==="block"){
      $(this).removeClass("active");
      $('.price ul li:nth-child(5)').css("display","none");
    }else {
        $(this).removeClass("active");
        $('.price ul li:nth-child(5)').css("display","block");
    }
    });

});

