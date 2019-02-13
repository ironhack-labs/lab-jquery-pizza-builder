// Write your Pizza Builder JavaScript in this file.
$(function () {
  
  $( "li:contains('$3 white sauce')" ).remove();        // Se elimina al principio (iteración 2)
  $( "li:contains('$5 gluten-free crust')" ).remove();  // Se elimina al principio (iteración 2)
  $( ".btn-sauce" ).removeClass('active');              // Se elimina al principio (iteración 3)
  $( ".btn-crust" ).removeClass('active');              // Se elimina al principio (iteración 3)
  $( "strong:contains('$')" ).text('$13');              // Se carga el precio correcto inicial (iteración 5)

  var prices = [
    {
      ingredient: 'pepperonni',
      price: 1
    },
    {
      ingredient: 'mushrooms',
      price: 1
    },
    {
      ingredient: 'green peppers',
      price: 1
    },
    {
      ingredient: 'white sauce',
      price: 3
    },
    {
      ingredient: 'gluten-free crust',
      price: 5
    }
  ];

  function addPrice ( prices, ingredient ) {
    var myPrice = prices.filter( ingr => ingr.ingredient === ingredient );
    var toAdd = myPrice[0].price;
    var oldTotal = parseInt( $( "strong:contains('$')" ).text().substr(1) );
    var newTotal = oldTotal + toAdd;
    $( "strong:contains('$')" ).text( '$' + newTotal );
  }

  function subPrice ( prices, ingredient ) {
    var myPrice = prices.filter( ingr => ingr.ingredient === ingredient );
    var toSub = myPrice[0].price;
    var oldTotal = parseInt( $( "strong:contains('$')" ).text().substr(1) );
    var newTotal = oldTotal - toSub;
    $( "strong:contains('$')" ).text( '$' + newTotal );
  }

  $('.btn-pepperonni').click( function() {
    var peppe = $("li:contains('$1 pepperonni')");
    if (peppe[0] != undefined) {
      peppe.remove();
      $('.btn-pepperonni').removeClass('active');
      subPrice ( prices, 'pepperonni' );
    }
    else {
      var newPeppe = $('<li></li>').text("$1 pepperonni");
      $('.price ul').append(newPeppe);
      $('.btn-pepperonni').addClass('active');
      addPrice ( prices, 'pepperonni' );
    }
  });

  $('.btn-mushrooms').click( function() {
    var mush = $("li:contains('$1 mushrooms')");
    if (mush[0] != undefined) {
      mush.remove();
      $('.btn-mushrooms').removeClass('active');
      subPrice ( prices, 'mushrooms' );
    }
    else {
      var newMush = $('<li></li>').text("$1 mushrooms");
      $('.price ul').append(newMush);
      $('.btn-mushrooms').addClass('active');
      addPrice ( prices, 'mushrooms' );
    }
  });

  $('.btn-green-peppers').click( function() {
    var peppers = $("li:contains('$1 green peppers')");
    if (peppers[0] != undefined) {
      peppers.remove();
      $('.btn-green-peppers').removeClass('active');
      subPrice ( prices, 'green peppers' );
    }
    else {
      var newPeppers = $('<li></li>').text("$1 green peppers");
      $('.price ul').append(newPeppers);
      $('.btn-green-peppers').addClass('active');
      addPrice ( prices, 'green peppers' );
    }
  });

  $('.btn-sauce').click( function() {
    var sauce = $("li:contains('$3 white sauce')");
    if (sauce[0] != undefined) {
      sauce.remove();
      $('.btn-sauce').removeClass('active');
      subPrice ( prices, 'white sauce' );
    }
    else {
      var newSauce = $('<li></li>').text("$3 white sauce");
      $('.price ul').append(newSauce);
      $('.btn-sauce').addClass('active');
      addPrice ( prices, 'white sauce' );
    }
  });

  $('.btn-crust').click( function() {
    var crust = $("li:contains('$5 gluten-free crust')");
    if (crust[0] != undefined) {
      crust.remove();
      $('.btn-crust').removeClass('active');
      subPrice ( prices, 'gluten-free crust' );
    }
    else {
      var newCrust = $('<li></li>').text("$5 gluten-free crust");
      $('.price ul').append(newCrust);
      $('.btn-crust').addClass('active');
      addPrice ( prices, 'gluten-free crust' );
    }
  });

});
