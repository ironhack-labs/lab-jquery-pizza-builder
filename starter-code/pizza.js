// Write your Pizza Builder JavaScript in this file.

function removePep() {
  $('.pep').css('display', 'none');
};

function removeMush() {
  $('.mushroom').css('display', 'none');
};

function removeGreen() {
  $('.green-pepper').css('display', 'none');
};

function removeSauce() {
  $('.sauce').removeClass('sauce-white');
};

function removeGluten() {
  $('.crust').removeClass('crust-gluten-free');
};


function init() {
  removePep();
  removeMush();
  removeGreen();
  removeSauce();
  removeGluten();
};

$(init());