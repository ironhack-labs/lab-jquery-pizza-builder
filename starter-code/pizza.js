// Write your Pizza Builder JavaScript in this file.
// function hidenPizza (){
//     $(".green-pepper, .mushroom, .pep").toggle()
//   }

var precio = 10;
var cMush = 1;
var cGReen = 1;
var cPep = 1;
var cWhite = 3;
var cGlut = 5;

function hidenPep() {
  $(".pep").toggle();
  $(".btn-pepperonni").toggleClass("active");
  $("li:contains($1 pepperonni)").toggle();
  
  if (cPep == 1) {    
    cPep = 0
  }
  else if (cPep == 0) {
    cPep = 1;
  }
  precioPizza();
}

function hidenMush() {
  $(".mushroom").toggle();
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains($1 mushrooms)").toggle();
  if (cMush == 1) {    
    cMush = 0
  }
  else if (cMush == 0) {
    cMush = 1;
  }
  precioPizza();
}

function hidenGreenPepper() {
  $(".green-pepper").toggle();
  $(".btn-green-peppers").toggleClass("active");
  $("li:contains($1 green peppers)").toggle();
  if (cGReen == 1) {    
    cGReen = 0
  }
  else if (cGReen == 0) {
    cGReen = 1;
  }
  precioPizza();
}

precioPizza();
hidenWhite();
hidenGluten();

$(".btn-pepperonni").on("click", function() {
  hidenPep();
});

$(".btn-mushrooms").on("click", function() {
  hidenMush();
});

$(".btn-green-peppers").on("click", function() {
  hidenGreenPepper();
});
// se puede optmizar el código

function hidenWhite() {
  $("section>section").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains($3 white sauce)").toggle();
  if (cWhite == 3) {    
    cWhite = 0
  }
  else if (cWhite == 0) {
    cWhite = 3;
  }
  precioPizza();
}

function hidenGluten() {
  $("section").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains($5 gluten-free crust)").toggle();
  if (cGlut == 5) {    
    cGlut = 0
  }
  else if (cGlut == 0) {
    cGlut = 5;
  }
  precioPizza();
}


$(".btn-sauce").on("click", function() {
  hidenWhite();
});
$(".btn-crust").on("click", function() {
  hidenGluten();
});

function precioPizza() {
  
  precio = 10 + cMush + cGReen + cPep + cWhite + cGlut;
  $("strong").html(`${precio}`);
}
