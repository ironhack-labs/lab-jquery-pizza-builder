// Write your Pizza Builder JavaScript in this file.
$(document).ready( () => {

    // on button click remove the pepperonni topping and adjust the price
    $('.btn-pepperonni').click(function() {
        $(this).toggleClass("active");
        $('.pep').toggle("inactive");
        $('#li-peperonni').toggleClass("inactive");
        $('#li-peperonni').hasClass("inactive") ?
            $('#pizza-price').html($('#pizza-price').html() - $('#pep-price').html()) : 
            $('#pizza-price').html(eval($('#pizza-price').html()) + eval($('#pep-price').html()))                        
      })         

    // on button click remove the mushrooms topping and adjust the price
    $('.btn-mushrooms').click(function () {
        $(this).toggleClass("active");
        $('.mushroom').toggle("inactive");
        $('#li-mushroom').toggleClass("inactive");
        $('#li-mushroom').hasClass("inactive") ?
            $('#pizza-price').html($('#pizza-price').html() - $('#mushroom-price').html()) : 
            $('#pizza-price').html(eval($('#pizza-price').html()) + eval($('#mushroom-price').html()))     
    })

    // on button click remove the green peppers topping and adjust the price
    $('.btn-green-peppers').click(function() {
        $(this).toggleClass("active");
        $('.green-pepper').toggle("inactive");
        $('#li-green-pepper').toggleClass("inactive");
        $('#li-green-pepper').hasClass("inactive") ?
            $('#pizza-price').html($('#pizza-price').html() - $('#green-pepper-price').html()) : 
            $('#pizza-price').html(eval($('#pizza-price').html()) + eval($('#green-pepper-price').html()))    
    })

    // on button click add the white sauce and adjust the price
    $('.btn-sauce').click(function() {
        $(this).toggleClass("active");
        $('.sauce').toggleClass("sauce-white");
        $('#li-sauce-white').toggleClass("inactive");
        $('#li-sauce-white').hasClass("inactive") ?
            $('#pizza-price').html($('#pizza-price').html() - $('#sauce-white-price').html()) : 
            $('#pizza-price').html(eval($('#pizza-price').html()) + eval($('#sauce-white-price').html()))    
    })

    // on button click add gluten free crust and adjust the price
    $('.btn-crust').click(function() {
        $(this).toggleClass("active");
        $('.crust').toggleClass('crust-gluten-free');
        $('#li-gluten-free-crust').toggleClass("inactive");
        $('#li-gluten-free-crust').hasClass("inactive") ?
            $('#pizza-price').html($('#pizza-price').html() - $('#gluten-free-crust-price').html()) : 
            $('#pizza-price').html(eval($('#pizza-price').html()) + eval($('#gluten-free-crust-price').html()))    
    })
});
