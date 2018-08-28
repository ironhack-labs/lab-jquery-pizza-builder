// Write your Pizza Builder JavaScript in this file.
$(function() {

  var $btnpepperonni = $(".btn-pepperonni");
  var $btnmushrooms = $(".btn-mushrooms");
  var $btngreenpepper = $(".btn-green-peppers");

  var $pep = $(".pep");
  var $mushroom = $(".mushroom");
  var $greenpepper = $(".green-pepper");


    $($btnpepperonni).click(function() {
      // faltaría un 'if' (MEJOR TOGGLE) para que el botón quite 
      //pepperonni si hay y añada si no hay;
      // $(this). // añadir able disable (clase active) -- Iteración 3
        $pep.each(function () {
          $($pep).hide();
        });
      
    });

    $($btnmushrooms).click(function() {
        $mushroom.each(function () {
          $($mushroom).hide();
        });
      
    });

    $($btngreenpepper).click(function() {
          $($greenpepper).hide();
        });
      
    });
