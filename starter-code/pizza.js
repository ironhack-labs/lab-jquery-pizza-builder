// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
inicializacion()

  
borrarAnadirPeperoni();
  borrarAnadirMushrooms();
  borrarAnadirGreenPeppers();
  borrarAnadirSauce();
  borrarAnadirCrust();
  activarBoton();

}
)

function activarBoton(){
  $("button").click(function(){
    $(this).toggleClass("active");
  })
}

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


function borrarAnadirSauce(){
  $('.btn-sauce').click(function(){
    $('.sauce').toggleClass("sauce-white");
  }  
  )
}

function borrarAnadirCrust(){
  $('.btn-crust').click(function(){
    $('.crust').toggleClass("crust-gluten-free");
  }  
  )
}

function inicializacion() {

  $('.pep').hide()
  $('.mushroom').hide()
  $('.green-pepper').hide();
  $('.crust').removeClass("crust-gluten-free");
  $('.sauce').removeClass("sauce-white");

  $('button').removeClass("active");
  
}