// Write your Pizza Builder JavaScript in this file.
$('document').ready(function(){

// Vars    
var $btnTopping = $('.btn');
var $pepperonni = $('.pep');


// Reset default
$btnTopping.removeClass('active');
$('#pizza section:not(.crust)').hide();


//Button events
$('.btn-pepperonni').click(function() {
    topping($pepperonni);
    toggleActive(this);
});
$('.btn-mushrooms').click(function() { 
    topping();
    toggleActive(this);
});
$('.btn-green-peppers').click(function() { 
    topping();
    toggleActive(this);

});
$('.btn-sauce').click(function() { 
    topping()
    toggleActive(this);

});
$('.btn-crust').click(function() { 
    topping()
    toggleActive(this);

});

// Functions
function topping(ingredient) {
    $(ingredient).css('display', 'none') ? $(ingredient).show() : $(ingredient).hide();
}

function toggleActive(btn) {
    $(btn).toggleClass('active');
}


});

