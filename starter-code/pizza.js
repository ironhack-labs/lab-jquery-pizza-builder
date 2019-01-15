// Write your Pizza Builder JavaScript in this file.
var num = 13;

 function Ingredient(btnIngredient,ingredient,className,pos){

  this.btnIngredient = $(btnIngredient);
  this.ingredient = $(ingredient);

  var panelPrice = $("aside.panel.price ul li");
  var priceUnit = +$(panelPrice[pos]).text().split(" ")[0].replace("$","")
  
  var that = this.btnIngredient;
  var thatIngredient = this.ingredient;  
  this.removeIngredient = function(){

    this.btnIngredient.click(function(){

      that.toggleClass("active")
   
      if(that[0].className === className){

        if(pos === 4)  thatIngredient.toggleClass("crust-gluten-free")
        else if(pos === 3) thatIngredient.toggleClass("sauce-white")
        else {
        thatIngredient.show();  
        }
        $(panelPrice[pos]).show();
        $("strong").text("$" + (num += priceUnit));
      

      } 
      else {
        if(pos === 4)  thatIngredient.toggleClass("crust-gluten-free")
        else if(pos === 3) thatIngredient.toggleClass("sauce-white")
         
        
          else  {  thatIngredient.hide();
          }
        $(panelPrice[pos]).hide();
        $("strong").text("$" + (num -= priceUnit));
       
      }
    })
  }
 }


var pepperoni = new Ingredient(".btn-pepperonni",".pep","btn btn-pepperonni active",0)
var mushrooms = new Ingredient(".btn-mushrooms",".mushroom","btn btn-mushrooms active",1) 
var greenPeper = new Ingredient(".btn-green-peppers",".green-pepper","btn btn-green-peppers active",2);
var whiteSauce = new Ingredient(".btn-sauce",".sauce","btn btn-sauce active",3)
var glutenFree = new Ingredient(".btn-crust",".crust","btn btn-crust active",4);


var whiteSauceDefault = $(".btn-sauce").toggleClass("active")
var glutenFreeDefault = $(".btn-crust").toggleClass("active");
var panelPrice = $("aside.panel.price ul li");
$("strong").text("$" + 13)
$(panelPrice[3]).hide();
$(panelPrice[4]).hide();




pepperoni.removeIngredient();
mushrooms.removeIngredient();
greenPeper.removeIngredient();
whiteSauce.removeIngredient();
glutenFree.removeIngredient();

