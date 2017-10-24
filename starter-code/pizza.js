$(document).ready(function(){

var pimiento = $("section").hasClass('green-pepper');


if(pimiento == true){
      $(".btn-green-peppers").click(function(){
      $("[class^='green-pepper']").css({"display": "none"});
      });
    }
if(pimiento == false){
      $(".btn-green-peppers").click(function(){
      $("[class^='green-pepper']").css({"display": "block"});
      });
    }


  // $(".btn-green-peppers").click(function(){
  // $("[class^='green-pepper']").css({"display": "none"});
  // });












// $("#menu ul li:first").addClass("selected");
// $(".container article:nth-child(2)").addClass("middle");
// $(".list-item:odd").addClass("highlighted");
// $("#list-container list-item:last").css({"border":"1px solid #eee"});
//
 // $("#form-container input").focus(function(){
 //   $(this).css({"background-color": "green"});
 // });
//  $("#form-container input").blur(function(){
//    $(this).css({"background-color": ""});
//  });





});
