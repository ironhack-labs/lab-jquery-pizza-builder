// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  alert("Let's make an order!")
})

//Adding and Removing pepperoni 
$(".btn-pepperonni").click(function (){
  $("#pizza > section.pep").toggleClass("inactive");
  $(".btn-pepperonni").toggleClass("active");
//adding price when selecting pepperoni  
  $(".price li:contains('pepperonni')").toggleClass("strike");
  toppings[0]["isActive"] = !toppings[0]["isActive"];
});


//Adding and Removing mushrooms 
$(".btn-mushrooms").click(function (){
  $("#pizza > section.mushroom").toggleClass("inactive");
  $(".btn-mushrooms").toggleClass("active");
//updating the price when selecting mushrooms
  $(".price li:contains('mushrooms')").toggleClass("strike");
  toppings[1]["isActive"] = !toppings[1]["isActive"];
});


//Adding and Removing geen peppers
$(".btn-green-peppers").click(function (){
$("#pizza > section.green-pepper").toggleClass("inactive");
$(".btn-green-peppers").toggleClass("active");
//updating the price when selecting green peppers
$(".price li:contains('green peppers')").toggleClass("strike");
toppings[2]["isActive"] = !toppings[2]["isActive"];
});

//Selecting the sauce type 
$(".btn-sauce").click(function (){
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
//updating price by sauce selection
  $(".price li:contains('white')").toggleClass("strike");
  toppings[3]["isActive"] = !toppings[3]["isActive"]; 
});


//Selecting crust type
$(".btn-crust").click(function (){
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
//updating price by crust selection  
  $(".price li:contains('gluten')").toggleClass("strike");
  toppings[4]["isActive"] = !toppings[4]["isActive"];
});


//this will allow to remove toppings after selecting  
$(".btn-sauce").removeClass("active");
$(".btn-crust").removeClass("active");
$("section.crust").removeClass("crust-gluten-free");
$("section.sauce").removeClass("sauce-white");
$(".price li:contains('white')").addClass("strike");
$(".price li:contains('gluten')").addClass("strike");


//array of options for pizza with objects: topping, sauce, crust
var initPrice = 10;
var toppings = [
{ topping: "Pepperonni",
  price: 1,
  isActive: true,
},
{ topping: "Mushrooms",
  price: 1,
  isActive: true,
},
{ topping: "Green Peppers",
  price: 1,
  isActive: true,
},
{ sauce: "White Sauce",
  price: 3,
  isActive: false,
},
{ crust: "gluten free crust",
  price: 5,
  isActive: false
},
];


//calculate total
var price = 0;
$("*").click(function(){
 price = toppings.reduce(function(a,b){
   if (b.isActive === true ){
    return a + b.price;
   } 
   else {
     return a;
   }
  }, 10);
$("aside strong").text("$" + price)  
});

