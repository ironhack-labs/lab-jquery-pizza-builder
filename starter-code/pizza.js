$(document).ready(() => {
    class Ingredient {
        constructor(button, ingredient, li, price, subClass) {
          this.button = button;
          this.ingredient = ingredient;
          this.li = li;
          this.price = price;
          this.subClass = 0 || subClass ;
        }
        toggleIngredient() {
            $(this).toggleClass('active');
            this.subClass ? this.ingredient.toggleClass(this.subClass) : this.ingredient.toggle('inactive');
            this.li.toggleClass('inactive');
            this.li.hasClass('inactive') ? $('#pizza-price').html($('#pizza-price').html() - this.price.html()) : $('#pizza-price').html(eval($('#pizza-price').html()) + eval(this.price.html())) 
        }
      }   
    peperonni = new Ingredient($('.btn-pepperonni'), $('.pep'), $('#li-peperonni'), $('#pep-price'), null);
    mushrooms = new Ingredient ($('.btn-mushrooms'), $('.mushroom'), $('#li-mushroom'), $('#mushroom-price') );
    greenpeppers = new Ingredient ($('.btn-green-peppers'), $('.green-pepper'), $('#li-green-pepper'), $('#green-pepper-price'));
    sauce = new Ingredient($('.btn-sauce'), $('.sauce'), $('#li-sauce-white'), $('#sauce-white-price'), "sauce-white"  );
    crust = new Ingredient($('.btn-crust'),$('.crust'), $('#li-gluten-free-crust'), $('#gluten-free-crust-price'), 'crust-gluten-free' );
    
    for (let propName in window) {
        if(window[propName] && window[propName].__proto__.constructor.name === "Ingredient"){
            window[propName].button.click( ()=>  window[propName].toggleIngredient() ) 
        }
    };
});



