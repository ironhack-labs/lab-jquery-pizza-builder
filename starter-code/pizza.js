// Write your Pizza Builder JavaScript in this file.
new Vue({
  el: '#app',
  data: {
    pizza: {
      ingredients:{
        hasMushrooms: true,
        hasGreenPeppers: true,
        hasPepperonni: true,
        hasWhiteSauce: true,
        hasGlutenFreeCrust: true
      },
      totalPrice: 21
    },
    priceList:{
        basePizza: 10,
        mushroomsPrice: 1,
        greenPeppersPrice: 1,
        pepperonniPrice: 1,
        whiteSaucePrice: 3,
        gluttenFreeCrustPrice: 5
    }
  },
  methods: {
    toggleMushrooms: function(){
      this.pizza.ingredients.hasMushrooms = !this.pizza.ingredients.hasMushrooms;
      // console.log('hasMushrooms',this.pizza.ingredients.hasMushrooms);
      this.calculateTotal();
    },
    toggleGreenPeppers: function(){
      this.pizza.ingredients.hasGreenPeppers = !this.pizza.ingredients.hasGreenPeppers;
      // console.log('hasGreenPeppers',this.pizza.ingredients.hasGreenPeppers);
      this.calculateTotal();
    },
    togglePepperonni: function(){
      this.pizza.ingredients.hasPepperonni = !this.pizza.ingredients.hasPepperonni;
      // console.log('hasPepperonni',this.pizza.ingredients.hasPepperonni);
      this.calculateTotal();
    },
    toggleWhiteSauce: function(){
      this.pizza.ingredients.hasWhiteSauce = !this.pizza.ingredients.hasWhiteSauce;
      // console.log('hasWhiteSauce',this.pizza.ingredients.hasWhiteSauce);
      this.calculateTotal();
    },
    toggleGluttenFree: function(){
      this.pizza.ingredients.hasGlutenFreeCrust = !this.pizza.ingredients.hasGlutenFreeCrust;
      // console.log('hasGlutenFreeCrust',this.pizza.ingredients.hasGlutenFreeCrust);
      this.calculateTotal();
    },
    calculateTotal: function(){
      var subtotal = 0;
      this.pizza.ingredients.hasMushrooms ? subtotal += this.priceList.mushroomsPrice : 0;
      this.pizza.ingredients.hasPepperonni ? subtotal += this.priceList.pepperonniPrice : 0;
      this.pizza.ingredients.hasGreenPeppers ? subtotal += this.priceList.greenPeppersPrice : 0;
      this.pizza.ingredients.hasWhiteSauce ? subtotal += this.priceList.whiteSaucePrice : 0;
      this.pizza.ingredients.hasGlutenFreeCrust ? subtotal += this.priceList.gluttenFreeCrustPrice : 0;
      // console.log("subtotal", subtotal);
      this.pizza.totalPrice = subtotal + this.priceList.basePizza;
      console.log('Total Price:',this.pizza.totalPrice);
    }
  }
});