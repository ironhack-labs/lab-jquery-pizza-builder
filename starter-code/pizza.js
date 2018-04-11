// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $(".active").toggleClass("active");
    $(".price li ").toggle();
    $(".price strong").text("$10")
    
    var pepperonni = false, greenPepper = false, mushroom = false, sauce = false, crust = false;
    var total = Number($(".price strong").text().slice(1,3));
  $(".pep").toggle();
  $(".btn-pepperonni").click(function() {
    $(this).toggleClass("active");
    $(".pep").toggle();
    $(".price li:first").toggle();
    if (pepperonni){
      $(".price strong").text("$" + (total - 1));
      pepperonni = false;
      total--;}
      else{
      $(".price strong").text("$" + (total + 1));
      pepperonni = true;
     total++; }
  });

  
  $(".mushroom").toggle();
  $(".btn-mushrooms").click(function() {
    $(this).toggleClass("active");
    $(".mushroom").toggle();
    $(".price li:nth-child(2)").toggle();
    if (mushroom){
      $(".price strong").text("$" + (total - 1));
      mushroom = false;
       total--;}
      else{
      $(".price strong").text("$" + (total + 1));
      mushroom  = true;
       total++; }
  });
  $(".green-pepper").toggle();
  $(".btn-green-peppers").click(function() {
    $(this).toggleClass("active");
    $(".green-pepper").toggle();
    $(".price li:nth-child(3)").toggle();
    if (greenPepper){
      $(".price strong").text("$" + (total - 1));
      greenPepper = false;
       total--;}
      else{
      $(".price strong").text("$" + (total + 1));
      greenPepper  = true;
       total++; }
  });
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").click(function() {
      $(this).toggleClass("active");
      $(".sauce").toggleClass("sauce-white");
      $(".price li:nth-child(4)").toggle();
      if (greenPepper){
        $(".price strong").text("$" + (total - 3));
        greenPepper = false;
        total -= 3;}
        else{
        $(".price strong").text("$" + (total + 3));
        greenPepper  = true;
         total += 3; }
    });

  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").click(function() {
      $(this).toggleClass("active");
      $(".crust").toggleClass("crust-gluten-free");
      $(".price li:last").toggle();
      if (greenPepper){
        $(".price strong").text("$" + (total - 5));
        greenPepper = false;
         total -= 5;}
        else{
        $(".price strong").text("$" + (total + 5));
        greenPepper  = true;
         total += 5; }
  });

});