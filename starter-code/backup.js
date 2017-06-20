// Write your Pizza Builder JavaScript in this file
var pizza = $('#pizza');

resetButtonsState();
//Add default crust and sauce
 var crust = $("<section class='crust'>");
 pizza.append(crust);
 crust.append("<section class='cheese'></section>");
 crust.append("<section class='sauce'></section>");   

//Add peperoni
$(".btn-pepperonni").on("click", function() {  
    if (hasPeperoni()) {
         $(".btn-pepperonni").removeClass('active'); 
    } else {
         $(".btn-pepperonni").addClass('active'); 
         addPeperoni();
    }
});

//Add mushrooms
$(".btn-mushrooms").on("click", function() {
    if (hasMushrooms()) {
        $(".btn-mushrooms").removeClass('active'); 
    } else {
        $(".btn-mushrooms").addClass('active');
        addMushrooms(); 
    }
});

//Add peppers
$(".btn-green-peppers").on("click", function() {
  if (hasGreenPeppers()) {
       $(".btn-green-peppers").removeClass('active'); 
  } else {
    $(".btn-green-peppers").addClass('active'); 
    addPeppers();
  }
});

//Add white sauce
$(".btn-sauce").on("click", function() {
    if (hasWhiteSauce()) {
        $(".btn-sauce").removeClass('active'); 
    } else {
        $(".btn-sauce").addClass('active'); 
        addWhiteSauce();
    }
});

//Add gluten-free crust
$(".btn-crust").on("click", function() {
    if (hasGlutenFreeCrust()) {
        $(".btn-crust").removeClass('active'); 
    } else {
        $(".btn-crust").addClass('active'); 
        addGlutenFreeCrust();
    }  
});

//Auxiliary functions
function resetButtonsState() {
    $(".btn").removeClass('active');
}

function hasPeperoni() {
     if ($(".pep").length > 0){
        return true;
    } 
    return false;
}

function hasMushrooms() {
      if ($(".mushroom").length > 0){
       return true;
    }  
    return false;
}

function hasGreenPeppers() {
      if ($(".green-pepper").length > 0){
       return true;
    }  
    return false;
}

function hasWhiteSauce() {
  if ($(".sauce-white").length > 0){
      return true;
    }
    return false;
}  

function hasGlutenFreeCrust () {
 if ($(".crust-gluten-free").length > 0){
     return true;   
    }  
    return false;
}


function addPeperoni () {
  pizza.prepend("<section class='pep one'>1</section>");
  pizza.prepend("<section class='pep two'>2</section>");
  pizza.prepend("<section class='pep three'>3</section>");
  pizza.prepend("<section class='pep four'>4</section>");
  pizza.prepend("<section class='pep five'>5</section>");
  pizza.prepend("<section class='pep six'>6</section>");
  pizza.prepend("<section class='pep seven'>7</section>");
  pizza.prepend("<section class='pep eight'>8</section>");
  pizza.prepend("<section class='pep nine'>9</section>");
  pizza.prepend("<section class='pep ten'>10</section>");

}

function addMushrooms () {
  var mushroom = $("<section class='mushroom one'>");
  pizza.prepend(mushroom);
  mushroom.append("<div class='cap'>1</div>");
  mushroom.append("<div class='stem'></div>");
}

function addPeppers () {
  pizza.prepend("<section class='green-pepper one'></section>");
  pizza.prepend("<section class='green-pepper two'></section>");
}

function addWhiteSauce () {
    $('.sauce').addClass('sauce-white');
}

function addGlutenFreeCrust () {
    $('.crust').addClass('crust-gluten-free');
}

function checkButtonsState() {
    if ($(".pep").length > 0){

       $(".btn-pepperonni").addClass('active'); 
    }  
    if ($(".mushroom").length > 0){
       $(".btn-mushrooms").addClass('active'); 
    }  
    if ($(".green-pepper").length > 0){
       $(".btn-green-peppers").addClass('active'); 
    }  
    if ($(".sauce-white").length > 0){
       $(".btn-sauce").addClass('active'); 
    }  
    if ($(".crust-gluten-free").length > 0){
       $(".btn-crust").addClass('active'); 
    }  
}

  pizza.prepend("<section class='pep eleven'>11</section>"
  pizza.prepend("<section class='pep twelve">12</section>"
  pizza.prepend("<section class="pep thirteen">13</section>"
  pizza.prepend("<section class="pep fourteen">14</section>"
  pizza.prepend("<section class="pep fifteen">15</section>"
  pizza.prepend("<section class="pep sixteen">16</section>"
  pizza.prepend("<section class="pep seventeen">17</section>"
  pizza.prepend("<section class="pep eightteen">18</section>"
  pizza.prepend("<section class="pep nineteen">19</section>"
  pizza.prepend("<section class="pep twenty">20</section>"
  pizza.prepend("<section class="pep twenty-one">21</section>"
  pizza.prepend("<section class="pep twenty-two">22</section>"
  pizza.prepend("<section class="pep twenty-three">23</section>"
  pizza.prepend("<section class="pep twenty-four">24</section>"
  pizza.prepend("<section class="pep twenty-five'>25</section>"
  pizza.prepend("<section class='pep twenty-six'>26</section>"
  pizza.prepend("<section class='pep twenty-seven'>27</section>"
  pizza.prepend("<section class='pep twenty-eight'>28</section>"
  pizza.prepend("<section class='pep twenty-nine'>29</section>"
  pizza.prepend("<section class='pep thirty'>30</section>"
  pizza.prepend("<section class='pep thirty-one'>31</section>"
  pizza.prepend("<section class='pep thirty-three">33</section>"