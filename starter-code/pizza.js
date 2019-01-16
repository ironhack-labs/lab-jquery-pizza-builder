var ingredients = {
  'Pepperonni': {
    isSelected: true,
    price: 1
  },
  'Mushrooms': {
    isSelected: true,
    price: 1
  },
  'Green peppers': {
    isSelected: true,
    price: 1
  },
  'White sauce': {
    isSelected: true,
    price: 3
  },
  'Gluten-free crust': {
    isSelected: true,
    price: 5
  }
}

function calculatePrice(ingredients) {
  var price = 10
  for (var key in ingredients) {
    if (ingredients[key].isSelected) {
      price += ingredients[key].price
    }
  }
  return price
}

function render(ingredients) {
  // Display the right price
  $('aside.panel.price ul').html('')
  for (var key in ingredients) {
    if (ingredients[key].isSelected) {
      $('aside.panel.price ul').append(`<li>$${ingredients[key].price} ${key}</li>`)
    }
  }
  $('aside.panel.price strong').text('$'+calculatePrice(ingredients))

  // Add the class active only to ingredients with "isSelected"
  $('.btn').each(function() {
    var btnText = $(this).text()
    if (ingredients[btnText].isSelected) {
      $(this).addClass('active')
    }
    else {
      $(this).removeClass('active')
    }
  })
}

// $(document).ready waits the DOM to be loaded and exectute the callback when it's dne
$(document).ready(function() {

  var classDictionnary = {
    'Pepperonni': {toggle: '.pep'},
    'Mushrooms': {toggle: '.mushroom'},
    'Green peppers': {toggle: '.green-pepper'},
    'White sauce': {
      selector: '.sauce',
      toggleClass: 'sauce-white'
    },
    'Gluten-free crust': {
      selector: '.crust',
      toggleClass: 'crust-gluten-free'
    },
  }

  $('.btn').click(function() {
    var btnText = $(this).text()

    // Changing the ingredients (state)
    ingredients[btnText].isSelected = !ingredients[btnText].isSelected

    render(ingredients)



    // $(this).toggleClass('active')


    // if (classDictionnary[btnText].toggle)
    //   $(classDictionnary[btnText].toggle).toggle()
    // else
    //   $(classDictionnary[btnText].selector).toggleClass(classDictionnary[btnText].toggleClass)

    
  })

  

})






// $(".btn-pepperonni").click(function() {
//   $(".pep").toggle();
//   $(".pp").toggle()
//   $(".btn-pepperonni").toggleClass("active");
//   getTotPrice()
// });
// $(".btn-mushrooms").click(function() {
//   $(".mushroom").toggle();
//   $(".mr").toggle()
//   $(".btn-mushrooms").toggleClass("active");
//   getTotPrice()
// });
// $(".btn-green-peppers").click(function() {
//   $(".green-pepper").toggle();
//   $(".gp").toggle()
//   $(".btn-green-peppers").toggleClass("active");
//   getTotPrice()
// });

// $(".btn-crust").click(function() {
//   $("section:last-child").addClass("crust-gluten-free");
//   $(".gf").toggle()
//   $('.price ul').append('<li class="visible">$5 gluten-free crust</li>')
//   getTotPrice()
// });

// $(".btn-sauce").click(function() {
//   $("section:last-child").addClass("sauce-white");
//   $(".btn-sauce").toggleClass("active");
//   $(".ws").toggle()
//   $('.price ul').append('<li class="visible">$3 white sauce</li>')
//   getTotPrice()
// });

// function getTotPrice(){
//   var tot = 10 
//   $.each( $('.price ul li'), function( index, value ){
//     if($(value).hasClass("visible"))tot+= parseInt(value.innerText.slice(1))
// });
// $('.total-price').text('$'+tot) 
// }



