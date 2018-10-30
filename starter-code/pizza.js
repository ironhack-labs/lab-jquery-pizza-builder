// Write your Pizza Builder JavaScript in this file.
var TogglePep = function(){
  $(".btn-pepperonni").click(function(){
  $(".pep").toggle();
  Extras(0);
  });
}

var ToggleMush = function(){
  $(".btn-mushrooms").click(function(){
  $(".mushroom").toggle();
  Extras(1);
  });
}

var ToggleGree = function(){
  $(".btn-green-peppers").click(function(){
  $(".green-pepper").toggle();
  Extras(2);
  });
}

var ToggleSauc = function(){
  $(".btn-sauce").toggleClass("active");
  $(".sauce").toggleClass("sauce-white");
  Extras(3);
  $(".btn-sauce").click(function(){
  $(".sauce").toggleClass("sauce-white");
  Extras(3);
  });
}

var ToggleCrust = function(){
  $(".btn-crust").toggleClass("active");
  $(".crust").toggleClass("crust-gluten-free");
  Extras(4);
  $(".btn-crust").click(function(){
  $(".crust").toggleClass("crust-gluten-free");
  Extras(4);
  });
}

var ToggleIng = function(){
  TogglePep();
  ToggleGree();
  ToggleMush();
  ToggleSauc();
  ToggleCrust();


}

var ToggleBtn = function(){
  $("button").click(function(){
  $(this).toggleClass("active");
  Precio();
  });
}

var Extras = function(index){
  var selector="aside li:eq("+index+")";
  $(selector).toggle();
}

var Precio= function(){
  var base=10;
  var selector=`aside li`;

  $(selector).each(function(index){
    var precioExtra=Number($(`aside li:eq(`+index+`)`).text()[1]);    
    if($(`aside li:eq(`+index+`)`).css('display')!='none')
      base+=precioExtra;
  });
  $('aside strong').text('$'+base);
}