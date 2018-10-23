// Write your Pizza Builder JavaScript in this file.
let pep = true;
let gp = true;
let mush = true;
let ws = false;
let gc = false;

let price = 10;
$(document).ready(() => {
  $('.btn-sauce').removeClass('active');
  $('.btn-crust').removeClass('active');
  $('.sauce').removeClass('sauce-white');
  $('.sauce').addClass('sauce-red');
  $('.crust').removeClass('crust-gluten-free');
  $('.price li:nth-of-type(4)').css('display', 'none');
  $('.price li:nth-of-type(5)').css('display', 'none');

  const pricing = () => {
    Array.from($('.price li:visible')).forEach((a) => {
      price += parseInt(a.innerHTML[1]);
    });
    $('.price strong')[0].textContent = "$" + price;
  }

  pricing();

  $('.btn').click((e) => {
    price = 10;

    console.log($('.price strong')[0].textContent);

    switch (e.currentTarget.innerHTML) {
      case 'Pepperonni':
        $('.btn-pepperonni').toggleClass('active');
        if (pep) {
          $('.pep').css('display', 'none');
          pep = false;
          $('.price li:first').css('display', 'none');
        } else {
          $('.pep').css('display', 'block');
          pep = true;
          $('.price li:first').css('display', 'block');
        }
        pricing();
        break;
      case 'Mushrooms':
        $('.btn-mushrooms').toggleClass('active');
        if (mush) {
          $('.mushroom').css('display', 'none');
          mush = false;
          $('.price li:nth-of-type(2)').css('display', 'none');
        } else {
          $('.mushroom').css('display', 'block');
          mush = true;
          $('.price li:nth-of-type(2)').css('display', 'block');
        }
        pricing();
        break;
      case 'Green peppers':
        $('.btn-green-peppers').toggleClass('active');
        if (gp) {
          $('.green-pepper').css('display', 'none');
          gp = false;
          $('.price li:nth-of-type(3)').css('display', 'none');
        } else {
          $('.green-pepper').css('display', 'block');
          gp = true;
          $('.price li:nth-of-type(3)').css('display', 'block');
        }
        pricing();
        break;
      case 'White sauce':
        $('.btn-sauce').toggleClass('active');
        console.log(ws);
        if (ws) {
          $('.sauce').removeClass('sauce-white');
          $('.sauce').addClass('sauce-red');
          ws = false;
          $('.price li:nth-of-type(4)').css('display', 'none');
        } else {
          $('.sauce').addClass('sauce-white');
          $('.sauce').removeClass('sauce-red');
          ws = true;
          $('.price li:nth-of-type(4)').css('display', 'block');
        }
        pricing();
        break;
      case 'Gluten-free crust':
        $('.btn-crust').toggleClass('active');
        $('.crust').toggleClass('crust-gluten-free');
        if (gc) {
          $('.price li:nth-of-type(5)').css('display', 'none');
          gc = false;
        } else {
          $('.price li:nth-of-type(5)').css('display', 'block');
          gc = true;
        }
        pricing();
        break;
      default:
        break;
    }
  });
});