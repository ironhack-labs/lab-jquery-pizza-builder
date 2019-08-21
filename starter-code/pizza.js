const btnPeppe = document.querySelector('.btn-pepperonni');
const btnMush = document.querySelector('.btn-mushrooms');
const btnGreen = document.querySelector('.btn-green-peppers');
const btnSauce = document.querySelector('.btn-sauce');
const btnCrust = document.querySelector('.btn-crust');

const pepperonnis = document.querySelectorAll('.pep')
const mushrooms = document.querySelectorAll('.mushroom')
const green = document.querySelectorAll('.green-pepper')
const sauce = document.querySelectorAll('.sauce')
const crust = document.querySelectorAll('.crust')



btnPeppe.onclick = () => {

  if (pepperonnis[0].style.display === 'none') {
    pepperonnis.forEach(pep => {
      pep.classList.toggle('active')
      pep.style.display = '';
    })

    btnPeppe.classList.toggle('none')
  } else {
    pepperonnis.forEach(pep => {
      pep.classList.toggle('none')
      pep.style.display = 'none';
    })

    btnPeppe.classList.toggle('active')
  }
}


btnMush.onclick = () => {

  if (mushrooms[0].style.display === 'none') {
    mushrooms.forEach(mus => {
      mus.classList.toggle('active')
      mus.style.display = '';
    })

    btnMush.classList.toggle('none')
  } else {
    mushrooms.forEach(mus => {
      mus.classList.toggle('none')
      mus.style.display = 'none';
    })

    btnMush.classList.toggle('active')
  }
}


btnGreen.onclick = () => {

  if (green[0].style.display === 'none') {
    green.forEach(g => {
      g.classList.toggle('active')
      g.style.display = '';
    })

    btnGreen.classList.toggle('none')
  } else {
    green.forEach(g => {
      g.classList.toggle('none')
      g.style.display = 'none';
    })

    btnGreen.classList.toggle('active')
  }
}


// btnSauce.onclick = () => {

//   if (sauce = '.sauce-white') {
//     - = 'sauce'
//   } else() {

//   }

// }