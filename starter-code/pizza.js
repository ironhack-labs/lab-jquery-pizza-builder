// Write your Pizza Builder JavaScript in this file.
function hidenPizza (){
    $(".green-pepper, .mushroom, .pep").toggle()
  }
  
  function hidenPep (){
    $(".pep").toggle()
  }
  
  function hidenMush (){
    $(".mushroom").toggle()
  }
  
  function hidenGreenPepper() {
    $(".green-pepper").toggle()
  }
  
  hidenPizza(),
  
  $(".btn-pepperonni").on("click", function(){
    hidenPep()
  })
  
  $(".btn-mushrooms").on("click",function (){
    hidenMush()
  })
  
  $(".btn-green-peppers").on("click",function (){
    hidenGreenPepper()
  })
  // se puede optmizar el código 
  
  function hidenWhite (){
    $("section").toggleClass(".sauce-white")
  }
  function hideGluten (){
    $("crust-gluten-free").toggleClass()
  }
  $(".btn-sauce").on("click",function (){
    hidenWhite()
  })
  $(".btn-crust").on("click",function (){
    hidenGluten()
  })