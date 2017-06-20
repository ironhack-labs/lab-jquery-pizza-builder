// Write your Pizza Builder JavaScript in this file.

//Iteration 1
var toppings = function(buttonClass,toppingClass,show,className,elementNum){
  $(buttonClass).click(function(){
    $(toppingClass).toggleClass(className);

    //Iteration 4
    var liElement=$('.price li:nth-child('+elementNum+')');
    liElement.toggleClass('hide');

    //Iteration 3
    show=!show;
    if(show){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
    console.log(show);

    //Iteration 5
    checkPrice();
  });
};

//Iteration 2
var rmClass = function(buttonClass,node,className,elementNum){
  $(node).removeClass(className);

  //Iteration 3
  $(buttonClass).removeClass('active');

  //Iteration 4
  var liElement=$('.price li:nth-child('+elementNum+')');
  liElement.addClass('hide');
};

//Iteration 5
var checkPrice = function(){
  var price=10;
  $( ".price li" ).each(function() {
    if(!$(this).hasClass('hide')){
      price+=$(this).data('price');
    }
  });
  $('.price strong').html('$'+price);
};

toppings('.btn-green-peppers','.green-pepper',true,'hide',3);
toppings('.btn-mushrooms','.mushroom',true,'hide',2);
toppings('.btn-pepperonni','.pep',true,'hide',1);
rmClass('.btn-sauce','.crust','crust-gluten-free',5);
rmClass('.btn-crust','.sauce','sauce-white',4);
toppings('.btn-sauce','.sauce',false,'sauce-white',4);
toppings('.btn-crust','.crust',false,'crust-gluten-free',5);
checkPrice();
