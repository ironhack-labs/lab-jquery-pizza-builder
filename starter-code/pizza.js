let i = 0;
let x = 0;
let y = 0

// Pepper

$("#pepper-add").click(function(){
  let count = ["one","two","three","four","five","six", "seven", "eight", "nine", "ten"];
  $('#pizza').append("<section class='ingredients green-pepper " + count[i] + "'>" + "$1 green peppers"  + "</section>");
  i++;
})

$("#pepper-remove").click(function(){
  i -= 1;
  $("section.green-pepper:last").remove();
})


$("#pepper-activation").click(function(){

  if ($("#pepper-add").hasClass("active")) {
            $("#pepper-add").removeClass("active");
            console.log("cambiado");
      } else {
            $("#pepper-add").addClass("active");
            console.log("quitado");
      }
})

// Pepperoni

$("#pepperoni-add").click(function(){
  let pricePepperoni = 1;
  
  let count = ["one","two","three","four","five","six", "seven", "eight", "nine", "ten"];
  $("#pizza").append("<section class=" + "'ingredients pep " + count[x] + "'>" + "$" + pricePepperoni +  " pepperoni" + "</section>");
  x++;
})

$("#pepperoni-remove").click(function(){
   x -= 1;
   $("section.pep:last").remove();
})

$("#pepperoni-activation").click(function(){

  if ($("#pepperoni-add").hasClass("active")) {
            $("#pepperoni-add").removeClass("active");
            console.log("cambiado");
      } else {
            $("#pepperoni-add").addClass("active");
            console.log("quitado");
      }
})

// Mushrooms

$("#mushrooms-add").click(function(){
  let priceMushroom = 1;
  let count = ["one","two","three","four","five","six", "seven", "eight", "nine", "ten"];
  $("#pizza").append("<section class='ingredients mushroom " + count[y] + "'><div class='cap'>" + "$" + priceMushroom + " mushrooms" + "</div><div class='stem'></div></section>");
  y++;
})

$("#mushrooms-remove").click(function(){
   y -= 1;
   $("section.mushroom:last").remove();
})

$("#mushrooms-activation").click(function(){

  if ($("#mushrooms-add").hasClass("active")) {
            $("#mushrooms-add").removeClass("active");
            console.log("cambiado");
      } else {
            $("#mushrooms-add").addClass("active");
            console.log("quitado");
      }
})

// Cheese

if ($('#cheese').is(':checked')) {
      $("#pizza-cheese").append("$10 cheese pizza");
}

  $('#cheese').change(function() {
        if(!(this.checked)) {
          $("#pizza-cheese").remove();
        }  else if(this.checked) {
            $("#baseIngredient").append("<div id='pizza-cheese' class='ingredients'>$10 cheese pizza</div>");
        }
  });

// Regular Sauce

if ($('#regular-sauce').is(':checked')) {
      $("#pizza-regular-sauce").append("+ $1 regular sauce");
}

  $('#regular-sauce').change(function() {
        if(!(this.checked)) {
          $("#pizza-regular-sauce").remove();
          return;
        }  else if(this.checked) {
            $("#fixedIngredients").append("<div id='pizza-regular-sauce' class='ingredients'>+ $1 white sauce</div>");
        }
  });



// White Sauce

if ($('#white-sauce').is(':checked')) {
      $("#pizza-white-sauce").append("+ $3 white sauce");
}


  $('#white-sauce').change(function() {
        if(!(this.checked)) {
          $("#pizza-white-sauce").remove();
          return;
        }  else if(this.checked) {
            $("#fixedIngredients").append("<div id='pizza-white-sauce' class='ingredients'>+ $3 white sauce</div>");
        }
  });

// Gluten Free

if ($('#gluten-free').is(':checked')) {
      $("#pizza-gluten-free").append("+ $5 gluten free crust");
}


  $('#gluten-free').change(function() {
        if(!(this.checked)) {
          $("#pizza-gluten-free").remove();
          return;
        }  else if(this.checked) {
            $("#fixedIngredients").append("<div id='pizza-gluten-free' class='ingredients'>+ $5 gluten free crust</div>");
        }
  });




// Total

$("body").on('DOMSubtreeModified', "#totalIngredients", function() {
   let totalString = ($(".ingredients").text());
   let totalArray = totalString.split(" ");
  
   let arrayAfinado = totalArray.map(function(elemento){
      let nuevoElemento = elemento.replace(/\D/g,'')
      let nuevoElementoParse = parseInt(nuevoElemento);
      
     if (isNaN(nuevoElementoParse)){
        return nuevoElementoParse = 0;
      } 
      return nuevoElementoParse;
   })
    
   let totalPizza = arrayAfinado.reduce(function(a,b){
   return a+b;  
   },0)
    $("#totalPizza").text(totalPizza);  
 
});