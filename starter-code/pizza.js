// Write your Pizza Builder JavaScript in this file.

// Add or remove Pepperonni and change the button 
var btnPep = $(".btn-pepperonni");
btnPep.click(function () {
   $(".pep").toggle()
   btnPep.toggleClass("active");
});

// Add or remove Green pepper and change the button 
var btnGreenP = $(".btn-green-peppers");
btnGreenP.click(function () {
   $(".green-pepper").toggle()
   btnGreenP.toggleClass("active");
});

// Add or remove Mushrooms and change the button 
var btnMush = $(".btn-mushrooms");
btnMush.click(function () {
   $(".mushroom").toggle()
   btnMush.toggleClass("active");
});

// OPTIONS SAUCE
var btnSauce = $(".btn-sauce");

btnSauce.click(function () {
   $(".sauce").toggleClass("sauce-white")
   btnSauce.toggleClass("active");
});

// OPTIONS CRUST
var btnCrust = $(".btn-crust");

btnCrust.click(function () {
   $(".crust").toggleClass("crust-gluten-free")
   btnCrust.toggleClass("active");

});