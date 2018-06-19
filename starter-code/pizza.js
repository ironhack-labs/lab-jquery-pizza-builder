console.log("Hola");

$(document).ready(function(){
  var gpSections;
  var mSections;
  var pSections;

  gpSections=$("section.green-pepper");
  mSections= $("section.mushroom")
  pSections=$("section.pep")
  
  mSections.css("visibility", "hidden")
  gpSections.css("visibility", "hidden")
  pSections.css("visibility", "hidden")
  
  $(":button.bnt-pepperoni").click(function(){  
    $("section.green-pepper").css("visibility", "visible");
  });
  $(":button.bnt-mushrooms").click(function(){  
    mSections.css("visibility", "visible");
  });
  $(":button.bnt-green-peppers").click(function(){  
    gpSections.css("visibilty", "visible");
  });
});  
