// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  $('#pepperonni').click(function(){
    var total = $('#totalPrice').text().replace('$','');
    if($('#peperoniiiiii').css("visibility")=='hidden'){
      $('#peperoniiiiii').css('visibility','visible');
      $('#pepePrice').css('visibility','visible');
      total = parseInt(total) + 1;
    }
    else{
      $('#peperoniiiiii').css('visibility','hidden');
      $('#pepePrice').css('visibility','hidden');
      total = parseInt(total) - 1;
    }
    $("#pepperonni").toggleClass("active");
    $('#totalPrice').text('$'+total);
  });

  $('#Mushro').click(function(){
    var total = $('#totalPrice').text().replace('$','');
    if($('#mushhh').css("visibility")=='hidden'){
      $('#mushhh').css('visibility','visible');
      $('#mushPrice').css('visibility','visible');
      total = parseInt(total) + 1;
    }
    else{
      $('#mushhh').css('visibility','hidden');
      $('#mushPrice').css('visibility','hidden');
      total = parseInt(total) - 1;
    }
    $("#Mushro").toggleClass("active");
    $('#totalPrice').text('$'+total);
  });

  $('#greenPepp').click(function(){
    var total = $('#totalPrice').text().replace('$','');
    if($('#pepperrr').css("visibility")=='hidden'){
      $('#pepperrr').css('visibility','visible');
      $('#greePrice').css('visibility','visible');
      total = parseInt(total) + 1;
    }
    else{
      $('#pepperrr').css('visibility','hidden');
      $('#greePrice').css('visibility','hidden');
      total = parseInt(total) - 1;
    }
    $("#greenPepp").toggleClass("active");
    $('#totalPrice').text('$'+total);
  });

  $('#white').click(function(){
    var total = $('#totalPrice').text().replace('$','');
    $("#whitesouce").toggleClass("sauce-white");
    $("#white").toggleClass("active");
    if($('#saucePrice').css("visibility")=='hidden'){
      $('#saucePrice').css('visibility','visible');
      total = parseInt(total) + 3;
    }
    else{
      $('#saucePrice').css('visibility','hidden');
      total = parseInt(total) - 3;
    }
    $('#totalPrice').text('$'+total);
  });

  $('#glutenFree').click(function(){
    var total = $('#totalPrice').text().replace('$','');
    $("#crusss").toggleClass("crust-gluten-free");
    $("#glutenFree").toggleClass("active");
    if($('#gluPrice').css("visibility")=='hidden'){
      $('#gluPrice').css('visibility','visible');
      total = parseInt(total) + 5;
    }
    else{
      $('#gluPrice').css('visibility','hidden');
      total = parseInt(total) - 5;
    }
    $('#totalPrice').text('$'+total);
  });

});