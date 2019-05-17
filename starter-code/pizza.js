var app = new Vue({
  el: '#pizzaApp',
  data: {
    isPepperonniVisible: true,
    isMushroomVisible: true,
    isGreenPepperVisible: true,
    isGlutenFree: 'crust',
    isWhiteSauce: 'sauce',
    isPepperonniActive: 'active',
    isMushroomActive: 'active',
    isGreenPepperActive: 'active',
    isCrustActive: '',
    isWhiteSauceActive: '',
    ingredients: [
      { name: 'pepperonni', price: '$1'},
      { name: 'mushrooms', price: '$1'},
      { name: 'green pepper', price: '$1'},
    ],
    totalpriceSymbol: '$',
    totalPriceNumber: 13 
  },
  methods: {
    togglePepperonni: function() {
      this.isPepperonniVisible = !this.isPepperonniVisible;

      if(this.isPepperonniActive === 'active'){
        this.isPepperonniActive = '';
        this.ingredients = [...this.ingredients.filter(e => e.name != 'pepperonni')];
        this.totalPriceNumber--;
      }
      else{
        this.isPepperonniActive = 'active';
        this.ingredients.push({ name: 'pepperonni', price: '$1'});
        this.totalPriceNumber++;
      }
    },
    toggleMushroom: function() {
      this.isMushroomVisible = !this.isMushroomVisible;

      if(this.isMushroomActive === 'active'){
        this.isMushroomActive = '';
        this.ingredients = [...this.ingredients.filter(e => e.name != 'mushrooms')];
        this.totalPriceNumber--;
      }
      else{
        this.isMushroomActive = 'active';
        this.ingredients.push({ name: 'mushrooms', price: '$1'});
        this.totalPriceNumber++;
      }
    },
    toggleGreenPepper: function() {
      this.isGreenPepperVisible = !this.isGreenPepperVisible;

      if(this.isGreenPepperActive === 'active'){
        this.isGreenPepperActive = '';
        this.ingredients = [...this.ingredients.filter(e => e.name != 'green pepper')];
        this.totalPriceNumber--;
      }
      else{
        this.isGreenPepperActive = 'active';
        this.ingredients.push({ name: 'green pepper', price: '$1'});
        this.totalPriceNumber++;
      }
    },
    toggleCrust: function(){
      if(this.isGlutenFree === 'crust crust-gluten-free'){
        this.isGlutenFree = 'crust';
      }
      else if(this.isGlutenFree === 'crust'){
        this.isGlutenFree = 'crust crust-gluten-free';
      }

      if(this.isCrustActive === 'active'){
        this.isCrustActive = '';
        this.ingredients = [...this.ingredients.filter(e => e.name != 'gluten-free crust')];
        this.totalPriceNumber -= 5;
      }
      else{
        this.isCrustActive = 'active';
        this.ingredients.push({ name: 'gluten-free crust', price: '$5'});
        this.totalPriceNumber += 5;
      }
    },
    toggleSauce: function(){
      if(this.isWhiteSauce === 'sauce sauce-white'){
        this.isWhiteSauce = 'sauce';
      }
      else if(this.isWhiteSauce === 'sauce'){
        this.isWhiteSauce = 'sauce sauce-white';
      }
      if(this.isWhiteSauceActive === 'active'){
        this.isWhiteSauceActive = '';
        this.ingredients = [...this.ingredients.filter(e => e.name != 'white sauce')];
        this.totalPriceNumber -= 3;
      }
      else{
        this.isWhiteSauceActive = 'active';
        this.ingredients.push({ name: 'white sauce', price: '$3'})
        this.totalPriceNumber += 3;
      }
    }
}
})

