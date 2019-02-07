$(document).ready( () => {
    const toggleIngredient = (button, ingredient, li, price, subClass) => {
        button.click(function() {
            $(this).toggleClass('active');
            subClass ? ingredient.toggleClass(subClass) : ingredient.toggle('inactive');
            li.toggleClass('inactive');
            li.hasClass('inactive') ? $('#pizza-price').html($('#pizza-price').html() - price.html()) : $('#pizza-price').html(eval($('#pizza-price').html()) + eval(price.html())) 
        })
    }
    // on button click remove the ingredient topping and adjust the price
    toggleIngredient($('.btn-pepperonni'), $('.pep'), $('#li-peperonni'), $('#pep-price'))
    toggleIngredient($('.btn-mushrooms'), $('.mushroom'), $('#li-mushroom'), $('#mushroom-price') );
    toggleIngredient($('.btn-green-peppers'), $('.green-pepper'), $('#li-green-pepper'), $('#green-pepper-price'));
    toggleIngredient($('.btn-sauce'), $('.sauce'), $('#li-sauce-white'), $('#sauce-white-price'), "sauce-white"  );
    toggleIngredient($('.btn-crust'),$('.crust'), $('#li-gluten-free-crust'), $('#gluten-free-crust-price'), 'crust-gluten-free' );
});
