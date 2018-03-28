// Write your Pizza Builder JavaScript in this file.
//iteration1
// Action sur le click event sur le bouton peperonni.
// *** Identification du bouton qui vient d'être cliquer.
// *** Toggle = activer/desactiver la class ".active" du bouton peperoni.
// *** Toggle = enleve/remet la class ".pep" pour les peperonies sur la pizza.
// *** removePriceInlist = enleve/remet l'ingredient dans la liste des ingredients.
// *** updatePrice() = mets à jour le prix total si peperonie est affiché ou pas.
$('.btn-pepperonni').click(function(){
  var btn=$(event.target);
  btn.toggleClass('active');  
  $('.pep').toggle();
  removePriceInList('pepperonni')
  updatePrice();
})
$('.btn-mushrooms').click(function(){
  var btn1=$(event.target);
  btn1.toggleClass('active');  
  $('.mushroom').toggle();
  removePriceInList('mushroom');
  updatePrice();
})
$('.btn-green-peppers').click(function(){
  var btn2=$(event.target);
  btn2.toggleClass('active');  
  $('.green-pepper').toggle();
  removePriceInList('green');
  updatePrice();
})

//iteration 2 & 3
// Enleve le gluten et la sauce par default des le chargement de la page HTML
$('.sauce-white').removeClass('sauce-white');
$('.crust-gluten-free').removeClass('crust-gluten-free');
// Enleve le status active des deux derniers bouttons des le chargement de la page HTML
$('.btn-sauce, .btn-crust').removeClass('active');

$('.btn-sauce').click(function(){
  var btn3=$(event.target);  
  btn3.toggleClass('active');  
  $('.sauce').toggleClass('sauce-white');
  removePriceInList('sauce');
  updatePrice();
})

$('.btn-crust').click(function(){
  var btn4=$(event.target);  
  btn4.toggleClass('active');  
  $('.crust').toggleClass('crust-gluten-free');
  removePriceInList('gluten');
  updatePrice();
})

//iteration 4

// Cache les prix de la sauce et le gluten lors du chargement de la page HTML
$(' .price ul li:nth-last-of-type(2)').hide();
$(' .price ul li:last').hide();


function removePriceInList(ingredient){
  $(".price li:contains("+ingredient+")").toggle();
}

//iteration 5
// Fonction permettant la mise a jour du prix total
// ***** Verifie s'il un ingredient est affiche sur la liste des ingredients
// --> mets a jour le nouveau resultat;
function updatePrice(){
  var priceTot = 10;
   var ingredientList= $(".price li");
   ingredientList.each(function(index,ingred){
      if ((ingred.textContent === '$1 pepperonni' 
          || ingred.textContent ==='$1 mushrooms' 
          || ingred.textContent === '$1 green peppers') 
          && ingred.style.display != "none")
          {
        priceTot += 1     
      } 
      else if (ingred.textContent === "$3 white sauce" && ingred.style.display != "none")
      {
        priceTot += 3
      }
      else if (ingred.textContent === "$5 gluten-free crust" && ingred.style.display != "none"){
        priceTot += 5
      }
      $('strong').text("$" + priceTot);
   })
}
// Appelle de la fonction updatePrice lors du chargement de la page HTML
updatePrice();