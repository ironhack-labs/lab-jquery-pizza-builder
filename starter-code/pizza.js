var total     = 21

// Write your Pizza Builder JavaScript in this file.
$('document').ready(function(){
  var pepBtn    = $('.btn-pepperonni')
  var mushBtn   = $('.btn-mushrooms')
  var grnPepBtn = $('.btn-green-peppers')
  var sauceBtn  = $('.btn-sauce')
  var crustBtn  = $('.btn-crust')
  var pep       = $('.pep')
  var grnPep    = $('.green-pepper')
  var mush      = $('.mushroom')
  var sauce     = $('.sauce-white')
  var crust     = $('.crust')
  var active    = $('.active')



  crust.removeClass('crust-gluten-free')


  pepBtn.click(function(){
    $(this).toggleClass('active')
      pep.toggle()
    $(".price ul li:first").toggle();
    if ($(this).hasClass('active')){
      total += 1
    }
    else{
      total -= 1
    }
    $('.price strong').html('$'+total)
  })
  mushBtn.click(function(){
    $(this).toggleClass('active')
    mush.toggle()
    $(".price ul li:nth-child(2)").toggle()
    if ($(this).hasClass('active')){
      total += 1
    }    
    else{
      total -= 1
    }
    $('.price strong').html('$'+total)
  })
  grnPepBtn.click(function(){
    $(this).toggleClass('active')
    grnPep.toggle()
    $(".price ul li:nth-child(3)").toggle()
    if ($(this).hasClass('active')){
      total += 1
    }
    else{
      total -= 1
    }
    $('.price strong').html('$'+total)
  })
  sauceBtn.click(function(){
    $(this).toggleClass('active')
    sauce.toggle()
    $(".price ul li:nth-child(4)").toggle()
    if ($(this).hasClass('active')){
      total += 3
    }
    else{
      total -= 3
    }
    $('.price strong').html('$'+total)
  })

  crustBtn.click(function(){
    $(this).toggleClass('active')
    crust.toggleClass('crust-gluten-free')
    $(".price ul li:nth-child(5)").toggle()
    if ($(this).hasClass('active')){
      total += 5
    }
    else{
      total -= 5
    }
    $('.price strong').html('$'+total)
  })
})

//var getPrice = function(){
//  result = 0
//$(".price ul > li").each(function(){
//  price.push(parseInt($( this ).html().slice(1,2)))
//});
//  for(i = 0; i < price.length ; i++){
//    result += price[i]
//  }
//  return (result + 10)
//}