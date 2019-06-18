// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){

  let pepButton = $(".btn-pepperonni")
  let mushButton = $(".btn-mushrooms")
  let greenpButton = $(".btn-green-peppers")
  let whiteSauceB = $(".btn-sauce")
  let glutenFreeB = $(".btn-crust")
  let grandTotal = Number(($("strong").text().slice(1)))
  $("li:contains(gluten-free crust)").hide()
  $("li:contains(white sauce)").hide()


  pepButton.click(function() {
    if($('.price>ul>li:visible:contains(pepperonni)').length > 0){
      $(".pep").fadeToggle(300);
      $(pepButton).toggleClass('active');
      $("li:contains(pepperonni)").toggle();
      grandTotal -= Number(($("li:contains(pepperonni)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    } else {
      $(".pep").fadeToggle(300);
      $(pepButton).toggleClass('active');
      $("li:contains(pepperonni)").toggle();
      grandTotal += Number(($("li:contains(pepperonni)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    }
  })

  mushButton.click(function(){
    if($('.price>ul>li:visible:contains(mushroom)').length > 0){
      $(".mushroom").fadeToggle(300);
      $(mushButton).toggleClass('active');
      $("li:contains(mushroom)").toggle();
      grandTotal -= Number(($("li:contains(mushroom)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    } else {
      $(".mushroom").fadeToggle(300);
      $(mushButton).toggleClass('active');
      $("li:contains(mushroom)").toggle();
      grandTotal += Number(($("li:contains(mushroom)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    }
  })

  greenpButton.click(function(){
    if($('.price>ul>li:visible:contains(green peppers)').length > 0){
      $(".green-pepper").toggle(300);
      $(greenpButton).toggleClass('active')
      $("li:contains(green peppers)").toggle();
      grandTotal -= Number(($("li:contains(green peppers)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    } else {
      $(".green-pepper").toggle(300);
      $(greenpButton).toggleClass('active')
      $("li:contains(green peppers)").toggle();
      grandTotal += Number(($("li:contains(green peppers)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    }
  })

  whiteSauceB.click(function(){              //all this applies to the functions
    if($(whiteSauceB).hasClass('active')){  //checks if the button has been pressed
      $(".sauce").toggleClass('sauce-white');  //un-hides the white sauce class (CSS only)
      $(whiteSauceB).toggleClass('active'); //changes the 'active' status of the button
      $("li:contains(white sauce)").toggle();  //shows the white sauce in the menu that was hidden
      grandTotal -= Number(($("li:contains(white sauce)").text().slice(1,2))) // add to grand total
      $('strong')[0].innerText = `$${grandTotal}`;  //finally adds the grand total to the html
    } else {
      $(".sauce").toggleClass('sauce-white');
      $(whiteSauceB).toggleClass('active');
      $("li:contains(white sauce)").toggle();
      grandTotal += Number(($("li:contains(white sauce)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    }
  })

  glutenFreeB.click(function(){
    if($(glutenFreeB).hasClass('active')){
      $(".crust").toggleClass('crust-gluten-free');
      $(glutenFreeB).toggleClass('active');
      $("li:contains(gluten-free crust)").toggle();
      grandTotal -= Number(($("li:contains(gluten-free crust)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    } else {
      $(".crust").toggleClass('crust-gluten-free');
      $(glutenFreeB).toggleClass('active');
      $("li:contains(gluten-free crust)").toggle();
      grandTotal += Number(($("li:contains(gluten-free crust)").text().slice(1,2)))
      $('strong')[0].innerText = `$${grandTotal}`;
    }
  })
});
