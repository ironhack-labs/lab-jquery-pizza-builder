// Write your Pizza Builder JavaScript in this file.
// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

    var suma = 10;
    $(".btn-pepperonni").click(function() {
      $(".btn-pepperonni").toggleClass("active");
      $(".pep").toggleClass("desaparece");
      $("#ronni").toggleClass("borrar");
               
    });
  
    $(".btn-mushrooms").click(function() {
      $(".btn-mushrooms").toggleClass("active");
      $(".mushroom").toggleClass("desaparece");
      $("#shrooms").toggleClass("borrar");
    });
  
    $(".btn-green-peppers").click(function() {
      $(".btn-green-peppers").toggleClass("active");
      $(".green-pepper").toggleClass("desaparece");
      $("#pers").toggleClass("borrar");
      
    });
  
    $(".btn-crust").click(function() {
      $(".btn-crust").toggleClass("active");
      $(".crust").toggleClass("crust-gluten-free");
      $("#no-gluten").toggleClass("borrar");
    });
  
    $(".btn-sauce").click(function() {
      $(".btn-sauce").toggleClass("active");
      $(".sauce").toggleClass("sauce-white");
      $("#te-sauce").toggleClass("borrar");
    });

    function getTotal(){
        var total = 10;
        
        $('.precio').each(function(){
            
           if ($(this).hasClass('borrar')){
                                    
            }else {
                total += parseFloat($(this).text()[1]);
            }
            return total;
        })
     $('#total').text('$'+ total);  
    }
    
    $('.btn').click(function(){
        getTotal();
    })

  });