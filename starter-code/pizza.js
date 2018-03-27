// Write your Pizza Builder JavaScript in this file.

$().ready(function() {

  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");

  //$("button").removeClass("active");

  
  $("li:contains('$3')").hide();
  $("li:contains('$5')").hide();
  $("strong").text("$" +13);

  encendido();

  /* Iteración 1 */

  // Peperoni

  $(".btn-pepperonni").click(function() {
    $(".pep").fadeToggle(10);
    $("li:contains('$1 pepperonni')").fadeToggle().attr("value","1");
     var precio = $(".price ul li:nth-child(1)").html();
      var precioTotal = $("strong").html();
      precio = parseInt(precio[1]);
      precioTotal = parseInt(precioTotal.substring(1));
   
      if($(".btn-pepperonni").hasClass("active")){
        var suma = precio + precioTotal;
        $("strong").html("$"+ suma);
      }else{
        var resta = precioTotal - precio;
        $("strong").html("$" + resta);
      }
  });
  // Mushrooms
  $(".btn-mushrooms").click(function() {
    $(".mushroom").fadeToggle(10);
    $("li:contains('$1 mush')").fadeToggle(10);

    var precio = $(".price ul li:nth-child(2)").html();
    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));
 
    if($(".btn-mushrooms").hasClass("active")){
      var suma = precio + precioTotal;
      $("strong").html("$"+ suma);
    }else{
      var resta = precioTotal - precio;
      $("strong").html("$" + resta);
    }
  });
  //Peper
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").fadeToggle(10);
    $("li:contains('$1 green')").fadeToggle(10);

    var precio = $(".price ul li:nth-child(3)").html();
    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));
 
    if($(".btn-green-peppers").hasClass("active")){
      var suma = precio + precioTotal;
      $("strong").html("$"+ suma);
    }else{
      var resta = precioTotal - precio;
      $("strong").html("$" + resta);
    }
  });

  /* Iteración 2 */

  $(".btn-crust").click(function() {
    $(".crust").toggleClass("crust-gluten-free");

    $("li:contains('$5)").fadeToggle(10);

    var precio = $(".price ul li:nth-child(5)").html();
    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));
 
    // en este caso es al contrario.
    if($(".btn-crust").hasClass("active")){
      var resta = precioTotal - precio;
      $("strong").html("$" + resta);
    }else{
      var suma = precio + precioTotal;
      $("strong").html("$"+ suma);
    }

  });

  $(".btn-sauce").click(function() {
    $(".sauce").toggleClass("sauce-white");
    $("li:contains('$3)").fadeToggle(10);

    var precio = $(".price ul li:nth-child(4)").html();
    var precioTotal = $("strong").html();
    precio = parseInt(precio[1]);
    precioTotal = parseInt(precioTotal.substring(1));
 
    // en este caso es al contrario.
    if($(".btn-sauce").hasClass("active")){
      var resta = precioTotal - precio;
      $("strong").html("$" + resta);
    }else{
      var suma = precio + precioTotal;
      $("strong").html("$"+ suma);
    }


  });
});

function encendido(){
  $("button").click(function(){
    $(this).toggleClass("active");
  })
};

// base price $10, and the price for the pepperonni, mushrooms, and green pepper.