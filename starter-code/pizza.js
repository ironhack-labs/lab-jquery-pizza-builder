// Write your Pizza Builder JavaScript in this file.
var total = 21;
$(".btn-pepperonni").click(() =>{
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    if( $(".price ul li:first-child").hasClass("none")){
      total --;
    } else {
      total++;
     }
  
  $('strong').text("$" + total);
  })
  
  $(".btn-mushrooms").click(() => {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    if( $(".price ul li:nth-child(2)").hasClass("none")){
      total--;
    } else {
        total++;
    }
    
    $('strong').text("$" + total);
    
  })
  
  $(".btn-green-peppers").click(() => {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    $('strong').text("$" + total);
    
  })
  
  $(".btn-sauce").click(() => {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price li:nth-child(4)").toggle();
    if( $(".price ul li:nth-child(4)").hasClass("none")){
      total -= 3;
    } else {
      total +=3;
     }
    $("strong").text("$" + total);
    
  })
  
  $(".btn-crust").click(() => {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    if( $(".price ul li:nth-child(5)").hasClass("none")){
      total -= 5;
    } else {
      total += 5;
     }
    $("strong").text("$" + total);
  })
    
 
  