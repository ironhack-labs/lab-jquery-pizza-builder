// Write your Pizza Builder JavaScript in this file.



var crust = true;
var pep = true;
var green = true;
var mushroom = true;
var sauce = true;

/*pep = 1;
greenPep =1;
mushroom = 1;
sauce = 3;
crust = 5;
*/
var total = 21; 

  $('.btn-pepperonni').click(()=>{
  $('.pep').toggleClass('hide')
  $('.btn-pepperonni').toggleClass('wasClick')
  $('.price li:eq( 0 )').toggle();
  if(pep){
    total -= 1
  } else {
    total += 1
  }
  pep = !pep;
  $('strong').text('$'+total)
  
});

$('.btn-green-peppers').click(()=>{
  //green peppers clicked 
  $('.green-pepper').toggle()
  $('.btn-green-peppers').toggleClass('wasClick')
  $('.price li:eq( 2 )').toggle();
  if(green){
    total -= 1
  } else {
    total += 1
  }
  green = !green;
  $('strong').text('$'+total)
});

  $('.btn-mushrooms').click(()=>{
  //mushrooms clicked 
  //$('.mushroom').toggle()
  $('.mushroom').toggleClass('hide')
  $('.btn-mushrooms').toggleClass('wasClick')
  $('.price li:eq( 1 )').toggle();
  if(mushroom){
    total -= 1
  } else {
    total += 1
  }
  mushroom = !mushroom;
  $('strong').text('$'+total)
})
  $('.btn-sauce').click(()=> {
  $('.sauce-white').toggleClass('hide')
  $('.btn-sauce').toggleClass('wasClick')
  $('.price li:eq( 3 )').toggle();
  if(sauce){
    total -= 3
  } else {
    total += 3
  }
  sauce = !sauce;
  $('strong').text('$'+total)
});
$('.btn-crust').click(()=> {
  $('.crust-gluten-free').toggle()
  $('.btn-crust').toggleClass('wasClick')
  $('.price li:eq( 4)').toggle();
  if(crust){
    total -= 5
  } else {
    total += 5
  }
  crust = !crust;
  $('strong').text('$'+total)

});






