// Write your Pizza Builder JavaScript in this file.
// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  //Buttons
  $('.btn-pepperonni').click(function(){
      // if($(this).hasClass('active')){
      //     $(this).removeClass('active');
      //     $('.pep').hide();
      // }else{
      //     $(this).addClass('active');
      //     $('.pep').show();            
      // }
      $(this).toggleClass('active');
      $('.pep').toggle('300'); 
      $('.panel.price ul li:first-child').toggle();
      calculatePrice();           
  });
  $('.btn-mushrooms').click(function(){
      $(this).toggleClass('active');
      $('.mushroom').toggle('300');    
      $('.panel.price ul li:nth-child(2)').toggle();   
      calculatePrice();                       
  });
  $('.btn-green-peppers').click(function(){
      $(this).toggleClass('active');
      $('.green-pepper').toggle('300');  
      $('.panel.price ul li:nth-child(3)').toggle();   
      calculatePrice();                       
  });
  $('.btn-sauce').click(function(){
      $(this).toggleClass('active');
      $('.sauce').toggleClass('sauce-white');  
      $('.panel.price ul li:nth-child(4)').toggle();
      calculatePrice();                          
  });
  $('.btn-crust').click(function(){
      $(this).toggleClass('active');
      $('.crust').toggleClass('sauce-white');   
      $('.panel.price ul li:last-child').toggle();                          
      calculatePrice();
  });   
  
function calculatePrice(){
  let totalPrice = 10;

/*Candidio solution. We can replace the rest of this function with this
  $('.panel.price ul li').each(function(){
    if($(this).is(":visible")){
        total += parseInt($(this).text().replace( /[^\d\.]+/g, ""));
    }
  });
  $('.panel.price strong').html('$'+total);
}
*/

  if($('.btn-pepperonni').hasClass("active")){
    totalPrice +=1;
  }
  if($('.btn-mushrooms').hasClass("active")){
    totalPrice +=1;
  }
  if($('.btn-green-peppers').hasClass("active")){
    totalPrice +=1;
  }
  if($('.btn-sauce').hasClass("active")){
    totalPrice +=3;
  }
  if($('.btn-crust').hasClass("active")){
    totalPrice +=5;
  }
  let priceStr =`$ ${totalPrice}`;
  console.log(priceStr);
  $(`.panel.price strong`).text(priceStr);
}

});