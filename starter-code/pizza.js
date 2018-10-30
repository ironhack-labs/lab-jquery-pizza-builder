// Write your Pizza Builder JavaScript in this file.
$(function() {
  
  $(".btn-pepperonni").click(function(){
    $(".pep").toggle(); 
    $( ".btn-pepperonni" ).toggleClass( "active" );
    $('.panel.price li').eq(0).toggle();
    if($('btn-pepperonni').hasClass("active")){
      sum += 1
  } else {
      sum = 0
  }
  totalprice()
  });

  $(".btn-mushrooms").click(function(){
    $(".mushroom ").toggle(); 
    $( ".btn-mushrooms" ).toggleClass( "active" );
    $('.panel.price li').eq(1).toggle();
    if($('btn-mushrooms').hasClass("active")){
      sum += 1
  } else {
      sum = 0
  }
  totalprice()
  });

  $(".btn-green-peppers").click(function(){
    $(".green-pepper ").toggle(); 
    $( ".btn-green-peppers" ).toggleClass( "active" );
    $('.panel.price li').eq(2).toggle();
    if($('btn-green-peppers').hasClass("active")){
      sum += 1
  } else {
      sum = 0
  }
  totalprice()
})
  });

  $(".btn-sauce").click(function(){
    $(".sauce-white ").toggle(); 
    $( ".btn-sauce" ).toggleClass( "active" );
    $('.panel.price li').eq(3).toggle();
    if($('.btn-sauce').hasClass("active")){
      sum += 3
  } else {
      sum = 0
  }
  totalprice()
})
  $(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free")
    $( ".btn-crust" ).toggleClass( "active" );
    $('.panel.price li').eq(4).toggle();
    if($('.btn-crust').hasClass("active")){
      sum += 5
  } else {
      sum = 0
  }
  totalprice()
})

var sum = 0;
function totalprice(){
  $("strong").text(sum + 10);
}


