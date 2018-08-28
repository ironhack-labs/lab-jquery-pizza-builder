// Write your Pizza Builder JavaScript in this file.
var btnPep = $('.btn-pepperoni');
var pep = $('.pep');


function removePep() {
  pep.css('display', 'none').addClass('hidden');
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

function toggleClassPep(boole) {
  btnPep.toggleClass('active', boole);

}

function checkPep() {
  if (pep.hasClass('hidden')) {
    toggleClassPep(true); 
  } else {
    toggleClassPep(false);
  }
}

function init() {
  removePep();
  removeMush();
  removeGreen();
  removeSauce();
  removeGluten();

};

$(init());