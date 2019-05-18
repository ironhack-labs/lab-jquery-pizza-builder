// Write your Pizza Builder JavaScript in this file.
var app = new Vue({
  el: "#app",
  data:{
    pepperonni: false,
    mushrooms: false,
    greenPeppers: false,
    whiteSauce: false,
    glutenFree: false,
    price: 10,
  },
  methods:{
    showPepper:function(){
      this.pepperonni = !this.pepperonni
      if(this.pepperonni){
        this.price++;
      }else{
        this.price--;
      }
    },
    showMush:function(){
      this.mushrooms = !this.mushrooms
      if(this.mushrooms){
        this.price++;
      }else{
        this.price--;
      }
    },
    showGreen:function(){
      this.greenPeppers = !this.greenPeppers
      if(this.greenPeppers){
        this.price++;
      }else{
        this.price--;
      }
    },
    showWhite:function(){
      this.whiteSauce = !this.whiteSauce
      if(this.whiteSauce){
        this.price+=3;
      }else{
        this.price-=3;
      }
    },
    showGluten:function(){
      this.glutenFree = !this.glutenFree
      if(this.glutenFree){
        this.price+=5;
      }else{
        this.price-=5;
      }
    },
    addIngredents(){
      this.add +=1
    }
  }
})