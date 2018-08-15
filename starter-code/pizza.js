// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  $('#pepperonni').click(function(){
    if($('#peperoniiiiii').css("visibility")=='hidden')
      $('#peperoniiiiii').css('visibility','visible');
    else
      $('#peperoniiiiii').css('visibility','hidden');

    $("#pepperonni").toggleClass("active");
  });

  $('#Mushro').click(function(){
    if($('#mushhh').css("visibility")=='hidden')
      $('#mushhh').css('visibility','visible');
    else
      $('#mushhh').css('visibility','hidden');

    $("#Mushro").toggleClass("active");
  });

  $('#greenPepp').click(function(){
    if($('#pepperrr').css("visibility")=='hidden')
      $('#pepperrr').css('visibility','visible');
    else
      $('#pepperrr').css('visibility','hidden');

    $("#greenPepp").toggleClass("active");
  });

  $('#white').click(function(){
    $("#whitesouce").toggleClass("sauce-white");
    $("#white").toggleClass("active");
  });

  $('#glutenFree').click(function(){
    console.log("pico");
    $("#crusss").toggleClass("crust-gluten-free");
    $("#glutenFree").toggleClass("active");
  });

});