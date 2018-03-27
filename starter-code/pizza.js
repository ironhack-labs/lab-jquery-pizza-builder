// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
  borrarAnadirPeperoni();
  borrarAnadirMushrooms();
  borrarAnadirGreenPeppers();


}
)

function borrarAnadirPeperoni(){
   $('.btn-pepperonni').click(function(){
     $('.pep').fadeToggle(100);
   }  
   )
}

function borrarAnadirMushrooms(){
  $('.btn-mushrooms').click(function(){
    $('.mushroom').fadeToggle(100);
  }  
  )
}

function borrarAnadirGreenPeppers(){
  $('.btn-green-peppers').click(function(){
    $('.green-pepper').fadeToggle(100);
  }  
  )
}
