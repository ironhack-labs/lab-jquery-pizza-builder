console.log("Hola");

$(document).ready(function () {

  gpSections = $("section.green-pepper");
  mSections = $("section.mushroom");
  pSections = $("section.pep");

  gpSections.css("visibility", "hidden");
  mSections.css("visibility", "hidden");
  pSections.css("visibility", "hidden");

});

$("button.btn-green-peppers").click(function () {
  if (gpSections.css("visibility") == "visible")
    gpSections.css("visibility", "hidden");
  else
    gpSections.css("visibility", "visible");
});

$("button.btn-mushrooms").click(function () {
  if(mSections.css("visibility") == "visible")
    mSections.css("visibility", "hidden");
  else
    mSections.css("visibility","visible");
});


$("button.btn-pepperonni").click(function () {
  if(pSections.css("visibility") == "visible")
    pSections.css("visibility", "hidden");
  else
    pSections.css("visibility","visible");
});
