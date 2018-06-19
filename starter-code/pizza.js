// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
	$("button").toggleClass("active");
	$(".green-pepper").toggle();
	$(".pep").toggle();
	$(".mushroom").toggle();
     $(".sauce-white").toggle();
     $(".crust").removeClass("crust-gluten-free");
     $(".price > ul").children().toggle();
      $(".price > strong").text("10$");
    ($(".price > strong").text()).slice(1);

	$(".btn-pepperonni").click(function() {
          $(this).toggleClass("active");
          if($(this).hasClass("active")){
          $(".pep").fadeToggle();
          $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))+1)+"$");
          $("li:contains( pepperonni)").toggle();
          }
          else{
               $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))-1)+"$");
               $("li:contains(pepperonni)").toggle();
          }
	});

	$(".btn-mushrooms").click(function() {
          $(this).toggleClass("active");
          if($(this).hasClass("active")){
               $(".mushroom").toggle();
               $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))+1)+"$");
               $("li:contains(mushrooms)").toggle();
          }
          else{
               $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))-1)+"$");
               $("li:contains(mushrooms)").toggle();
               
          }
	});

	$(".btn-green-peppers").click(function() {
		$(this).toggleClass("active");
          if($(this).hasClass("active")){
               $(".green-pepper").toggle();
               $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))+1)+"$");
               $("li:contains(green)").toggle();
          }
          else{
               $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))-1)+"$");
               $("li:contains(green)").toggle();
          }
	});

	$(".btn-sauce").click(function() {
		$(this).toggleClass("active");
          if($(this).hasClass("active")){
               $(".sauce-white").toggle();
               $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))+3)+"$");
               $("li:contains($3 white sauce)").toggle();
          }
          else{
               $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))-3)+"$");
               $("li:contains($3 white sauce)").toggle();
          }
		
     });
     
     $(".btn-crust").click(function(){
          $(this).toggleClass(" active");
          if($(this).hasClass("active")){
          $(".crust").toggleClass("crust-gluten-free");
          $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))+5)+"$");
          $("li:contains($5 gluten-free crust)").toggle();
          }
          else{
               $(".crust").toggleClass("crust-gluten-free");
               $(".price > strong").text((parseInt(($(".price > strong").text()).slice(0,2))-5)+"$");
               $("li:contains($5 gluten-free crust)").toggle();
          }
     })



});