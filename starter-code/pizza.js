// Write your Pizza Builder JavaScript in this file.

//document.ready englobando todo{}
//tres funciones onclik
//onclick añadir un peperoni, pepper, mushroom
//ponemos visible todo el  peperoni, cuando lo quita lo escondemos. Tb actualizamos la cantidad de peperonis


//las salsas. antes de cargar quitar lo de gluten free y white sauce. y en el tablero ponerlas normales por defecto
//Si el usuario hace click en el botón se añade el gluten free o el white sauce. si le das otra vez lo quitas


$(document).ready(function() {

var price=21;

//Añadir ingredientes
$(".btn-pepperonni").click(function(event) {

    if($(".btn-pepperonni").hasClass("active")){

        $(".pep").css("display", "block");

        $(".panel.price ul li:contains(pepperonni)").css("display", "block");
    
        $(".btn-pepperonni").removeClass("active");

        price++;

        $(".panel.price span").text('$'+price);


    }else{

        $(".pep").css("display", "none");

        $(".panel.price ul li:contains(pepperonni)").css("display", "none");
    
        $(".btn-pepperonni").addClass("active");
        price--;
        $(".panel.price span").text('$'+price);
    }
  
  });

  $(".btn-mushrooms").click(function(event) {

        if($(".btn-mushrooms").hasClass("active")){

            $(".mushroom").css("display", "block");
            $(".panel.price ul li:contains(mushroom)").css("display", "block");
            $(".btn-mushrooms").removeClass("active");
            price++;
            $(".panel.price span").text('$'+price);
        }else{

            $(".mushroom").css("display", "none");

            $(".panel.price ul li:contains(mushroom)").css("display", "none");

            $(".btn-mushrooms").addClass("active");
            price--;
            $(".panel.price span").text('$'+price);
        }


  });

  $(".btn-green-peppers").click(function(event) {

    if($(".btn-green-peppers").hasClass("active")){

    $(".green-pepper").css("display", "block");
    $(".panel.price ul li:contains(peppers)").css("display", "block");
    $(".btn-green-peppers").removeClass("active");
    price++;

    $(".panel.price span").text('$'+price);
}else{
        $(".green-pepper").css("display", "none");

        $(".panel.price ul li:contains(peppers)").css("display", "none");

        $(".btn-green-peppers").addClass("active");
        price--;

        $(".panel.price span").text('$'+price);
    }
  });

  //gluten-free crust, white sauce

  $(".btn-sauce").click(function(event) {

    
    if($(".btn-sauce").hasClass("active")){

    $(".panel.price ul li:contains($3 sauce)").text("$3 white sauce");
    $(".btn-sauce").removeClass("active");

    }else{
        $(".panel.price ul li:contains($3 white sauce)").text("$3 sauce");

        $(".btn-sauce").addClass("active");
        
    }

  });

  $(".btn-crust").click(function(event) {
 
    if($(".btn-crust").hasClass("active")){

    $(".panel.price ul li:contains($5 crust)").text("$5 gluten-free crust");
    $(".btn-crust").removeClass("active");
    }else{

        $(".panel.price ul li:contains($5 gluten-free crust)").text("$5 crust");
        $(".btn-crust").addClass("active");
    }

  });


  });

