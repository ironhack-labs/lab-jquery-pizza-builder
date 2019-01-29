// Write your Pizza Builder JavaScript in this file.

//const toggleActive = () => {
  //$('article').toggleClass('active')
//}

//$('button').click(toggleActive);

$(document).ready(function(){

  var total = 13;
  let isPepperonni = false;
  let isMush = false;
  let isPep = false;
  let isWhite = false;
  let isGluten = false;

  $('strong').text("$" + total);

$('.btn-pepperonni').click(()=>{
  $('.pep').toggle();
  isPepperonni = !(isPepperonni);
  $('.btn-pepperonni').toggleClass('active');
  $('.I1').toggle();
  if (isPepperonni){
    total -=1;
  }
  else {
    total +=1;  
  }
  $('strong').html("$" + total);
})

$('.btn-mushrooms').click(()=>{
  $('.mushroom').toggle();
  isMush = !(isMush);
  $('.btn-mushrooms').toggleClass('active');
  $('.I2').toggle();
  if (isMush){
    total -=1;
  }
  else {
    total +=1;  
  }
  $('strong').html("$" + total);
})

$('.btn-green-peppers').click(()=>{
  $('.green-pepper').toggle();
  isPep = !(isPep);
  $('.btn-green-peppers').toggleClass('active');
  $('.I3').toggle();
  if (isPep){
    total -=1;
  }
  else {
    total +=1;  
  }
  $('strong').html("$" + total);
})

$('.btn-sauce').click(()=>{
  $('.sauce').toggleClass('sauce-white')
  isWhite = !(isWhite)
  $('.btn-sauce').toggleClass('active');
  $('.price li:contains(sauce)').toggle();
  if (isWhite){
    total +=3;
  }
  else {
    total -=3;  
  }
  $('strong').html("$" + total);
})

$('.btn-crust').click(()=>{
  $('.crust').toggleClass('crust-gluten-free');
  isGluten = !(isGluten);
  $('.btn-crust').toggleClass('active');
  $('.price li:contains(crust)').toggle();
  if (isGluten){
    total +=5;
  }
  else {
    total -=5;  
  }
  $('strong').html("$" + total);
})

$('.price li:contains(sauce)').css('display', 'none');
$('.price li:contains(crust)').css('display', 'none');




});