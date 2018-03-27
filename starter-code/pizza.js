// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  inicializacion();

  borrarAnadirPeperoni();
  borrarAnadirMushrooms();
  borrarAnadirGreenPeppers();
  borrarAnadirSauce();
  borrarAnadirCrust();
  activarBoton();
});

function activarBoton() {
  $("button").click(function() {
    $(this).toggleClass("active");
  });
}

function borrarAnadirPeperoni() {
  $(".btn-pepperonni").click(function() {
    $(".pep").fadeToggle(100);
    $(".price ul li:nth-child(1)").fadeToggle(100);
    var precio = $(".price ul li:nth-child(1)").html();
    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));

    if($(this).hasClass("active")){
      var suma = precio + precioTotal; 
     $("strong").html("$"+ suma);
    }else{
      var resta = precioTotal - precio; 
      $("strong").html("$" + resta);
    }


  });
}

function borrarAnadirMushrooms() {
  $(".btn-mushrooms").click(function() {
    $(".mushroom").fadeToggle(100);
    $(".price ul li:nth-child(2)").fadeToggle(100);
    var precio = $(".price ul li:nth-child(2)").html();
    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));

    if($(this).hasClass("active")){
      var suma = precio + precioTotal; 
     $("strong").html("$"+ suma);
    }else{
      var resta = precioTotal - precio; 
      $("strong").html("$" + resta);
    }
    

  });
}

function borrarAnadirGreenPeppers() {
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").fadeToggle(100);
    $(".price ul li:nth-child(3)").fadeToggle(100);


    var precio = $(".price ul li:nth-child(3)").html();
    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));

    if($(this).hasClass("active")){
      var suma = precio + precioTotal; 
     $("strong").html("$"+ suma);
    }else{
      var resta = precioTotal - precio; 
      $("strong").html("$" + resta);
    }
  });
}

function borrarAnadirSauce() {
  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $(".price ul li:nth-child(4)").show();

    var precio = $(".price ul li:nth-child(4)").html();
    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));

    if(!$(this).hasClass("active")){
      var suma = precio + precioTotal; 
     $("strong").html("$"+ suma);
    }else{
      $(".price ul li:nth-child(4)").hide()
      var resta = precioTotal - precio; 
      $("strong").html("$" + resta);
    }

  });
}

function borrarAnadirCrust() {
  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");
    var precio = $(".price ul li:nth-child(5)").html();
    $(".price ul li:nth-child(5)").show();

    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));

    if(!$(this).hasClass("active")){
      var suma = precio + precioTotal; 
     $("strong").html("$"+ suma);
    }else{
      $(".price ul li:nth-child(5)").hide();
      var resta = precioTotal - precio; 
      $("strong").html("$" + resta);
    }
  });

  
}

function inicializacion() {
  // $('.pep').hide()
  //$('.mushroom').hide()
  //$('.green-pepper').hide();
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  $("button").removeClass("active");

  $(".price ul li:nth-child(4)").hide();
  $(".price ul li:nth-child(5)").hide();
  $("strong").html("$13");
}
