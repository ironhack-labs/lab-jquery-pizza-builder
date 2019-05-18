// Write your Pizza Builder JavaScript in this file.
var pizza = new Vue({
  el: "#app",
  data:{    
    queseavisiblePepperoni: false,
    queseavisibleMushroom: false,
    queseavisiblePepper: false,
    whiteSauce: false,
    glutenCrust: false,
    currentTotal: 10    
  },
  methods:{
    escondePepperoni: function(){
      this.queseavisiblePepperoni = !this.queseavisiblePepperoni;
      if(this.queseavisiblePepperoni){
        this.currentTotal++;
      }else{
        this.currentTotal--;
      }
      
    },

    escondePepper: function(){
      this.queseavisiblePepper = !this.queseavisiblePepper;
      if(this.queseavisiblePepper){
        this.currentTotal++;
      }else{
        this.currentTotal--;
      }
    },

    escondeMushroom: function(){
      this.queseavisibleMushroom = !this.queseavisibleMushroom;
      if(this.queseavisibleMushroom){
        this.currentTotal++;
      }else{
        this.currentTotal--;
      }
    },

    cambiaSauce: function(){
      this.whiteSauce = !this.whiteSauce;
      if(this.whiteSauce){
        this.currentTotal+=3;
      }else{
        this.currentTotal-=3;
      }
    },

    cambiaCrust: function(){
      this.glutenCrust = !this.glutenCrust;
      if(this.glutenCrust){
        this.currentTotal+=5;
      }else{
        this.currentTotal-=5;
      }
    }

    
  }

});
