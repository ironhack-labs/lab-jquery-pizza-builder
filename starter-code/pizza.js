/////////////////////////////////////////////////
//// DEFAULT LOADING SETUP
/////////////////////////////////////////////////

$( "section.crust" ).removeClass( "crust-gluten-free" );
$( "section.sauce" ).removeClass( "sauce-white" );
$( ".btn-sauce" ).toggleClass( "active" );
$( ".btn-crust" ).toggleClass( "active" );



/////////////////////////////////////////////////
//// TOGGLE TOPPINGS, SAUCE, CRUST & BUTTONS
/////////////////////////////////////////////////

// PEPPERONNI
$( ".btn-pepperonni" ).click( function() {
    $( ".pep" ).toggle();
    $( ".btn-pepperonni" ).toggleClass( "active" );
    $( "aside li:contains('pepperonni')").toggle();
    options[0].isActive = !options[0].isActive;
});

// MUSHROOMS
$( ".btn-mushrooms" ).click( function() {
    $( ".mushroom" ).toggle();
    $( ".btn-mushrooms" ).toggleClass( "active" );
    $( "aside li:contains('mushrooms')").toggle();
    options[1].isActive = !options[1].isActive;
});

// GREEN PEPPERS
$( ".btn-green-peppers" ).click( function() {
    $( ".green-pepper" ).toggle();
    $( ".btn-green-peppers" ).toggleClass( "active" );
    $( "aside li:contains('green peppers')").toggle();
    options[2].isActive = !options[2].isActive;
});

// SAUCE
$( ".btn-sauce" ).click( function () {
    $( "section.sauce" ).toggleClass( "sauce-white" );
    $( ".btn-sauce" ).toggleClass( "active" );
    options[3].isActive = !options[3].isActive;
});

// CRUST
$( ".btn-crust" ).click( function () {
    $( "section.crust" ).toggleClass( "crust-gluten-free" );
    $( ".btn-crust" ).toggleClass( "active" );
    options[4].isActive = !options[4].isActive;
});



/////////////////////////////////////////////////
//// TOGGLE TOPPINGS, SAUCE, CRUST & BUTTONS
/////////////////////////////////////////////////

var initialPrice = 10;
var options = [

{
    option: "pepperonni",
    price: 1,
    isActive: true
},

{
    option: "mushrooms",
    price: 1,
    isActive: true
},

{
    option: "green pepper",
    price: 1,
    isActive: true
},

{
    option: "sauce",
    price: 3,
    isActive: false
},

{
    option: "gluten free",
    price: 5,
    isActive: false
}

];


var price;
$( "*" ).click( function () {
    price = options.reduce( function( acc, each ) {
        if( each.isActive === true ) {
            return acc + each.price;
        }
        else {
            return acc;
        }
    }, initialPrice);
    $("aside > strong").text("$" + price);
});