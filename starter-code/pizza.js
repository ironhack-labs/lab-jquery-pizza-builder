// Write your Pizza Builder JavaScript in this file.






// Write your Pizza Builder JavaScript in this file.
var app1 = new Vue({
  el: '#app1',
  data: {
    pepperoni:false,
    mushrooms:false,
    greenPeppers:false,
    whiteSauce:false,
    glutenFree:false,
    price:10,
  },
  methods: {
    showPepperonni:function(){
      this.pepperoni = !this.pepperoni
      if (this.pepperoni){
        this.price++;
      }else{
        this.price--;
      }
    },
    showMushrooms:function(){
      this.mushrooms = !this.mushrooms
      if (this.mushrooms){
        this.price++;
      }else{
        this.price--;
      }
    },
    showGreenPeppers:function(){
      this.greenPeppers = !this.greenPeppers
      if (this.greenPeppers){
        this.price++;
      }else{
        this.price--;
      }
    },
    showWhiteSauce:function(){
      this.whiteSauce = !this.whiteSauce
      if (this.whiteSauce){
        this.price++;
      }else{
        this.price--;
      }
    },
    showGlutenFree:function(){
      this.glutenFree = !this.glutenFree
      if (this.glutenFree){
        this.price++;
      }else{
        this.price--;
      }
    },
  }
})