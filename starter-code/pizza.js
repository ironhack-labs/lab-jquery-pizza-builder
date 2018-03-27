// Write your Pizza Builder JavaScript in this file.
window.onload = function () {
  var precio = 10;
$(".green-pepper").removeClass("green-pepper");
$(".cap").text("");
$("#pizza  section div").removeClass("stem cap");
$("#pizza section").removeClass("mushroom");
$(".pep").text("");
$("#pizza section").removeClass("pep");
 $("#pizza section").removeClass("crust-gluten-free");
 $("#pizza section section:last-child").removeClass("sauce-white");
 $(".active").removeClass("active");
 $(".price li").hide();
 $("aside strong").text("$" + precio);



$(".btn-green-peppers").click(function(){
  var x = $("aside ul li:nth-of-type(3)").text ();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".price li:nth-of-type(3)").show();
    precio += parseInt(x[1]);
    $("aside strong").text("$" + precio)
  } 
    else {
      $(".price li:nth-of-type(3)").hide();
      precio -= parseInt(x[1]);
      $("aside strong").text("$" + precio);

    }
  for (let i = 1; i < 22; i++) {
    $("#pizza section:nth-of-type(" + i + "):not(section section)").toggleClass("green-pepper"); 
  }
    
  })

  $(".btn-mushrooms").click(function(){
    var x = $("aside ul li:nth-of-type(2)").text ();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")){
      $(".price li:nth-of-type(2)").show();
      precio += parseInt(x[1]);
      $("aside strong").text("$" + precio);
    }
      else {
        $(".price li:nth-of-type(2)").hide();
        precio -= parseInt(x[1]);
      $("aside strong").text("$" + precio);
        
        
      }
    for (let i = 22; i < 54; i++) {
      $("#pizza section:nth-of-type(" + i + ")").toggleClass("mushroom");
      
    }

    $("#pizza section div:first-child").toggleClass("cap");
    $("#pizza section div:last-child").toggleClass("stem");
      
  })



$(".btn-pepperonni").click(function(){
  var x = $("aside ul li:nth-of-type(1)").text ();
  $(this).toggleClass("active");

  if ($(this).hasClass("active")){
    $(".price li:first-child").show();
    precio += parseInt(x[1]);
    $("aside strong").text("$" + precio);
  
  } 
    else {
      $(".price li:first-child").hide();
      precio -= parseInt(x[1]);
      $("aside strong").text("$" + precio);
    }
  
  for (let i = 54; i < 86; i++) {
    $("#pizza section:nth-of-type(" + i + "):not(section section)").toggleClass("pep");
 
  }
  
})

$(".btn-sauce").click(function(){
  var x = $("aside ul li:nth-of-type(4)").text ();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".price li:nth-of-type(4)").show();
    precio += parseInt(x[1]);
    $("aside strong").text("$" + precio);
  } 
    else {
      $(".price li:nth-of-type(4)").hide();
      precio -= parseInt(x[1]);
      $("aside strong").text("$" + precio);
    }
  $("#pizza section section:last-child").toggleClass("sauce-white");
})

$(".btn-crust").click(function(){
  var x = $("aside ul li:nth-of-type(5)").text ();
  $(this).toggleClass("active");
  if ($(this).hasClass("active")){
    $(".price li:nth-of-type(5)").show();
    precio += parseInt(x[1]);
    $("aside strong").text("$" + precio);
  } 
    else {
      $(".price li:nth-of-type(5)").hide();
      precio -= parseInt(x[1]);
      $("aside strong").text("$" + precio);
    }
  $("#pizza section:last-child:not(section section)").toggleClass("crust-gluten-free");
})






}