function togglePepperoni() {
  var pepperoni = $(".pep");
  var btn = $(".btn-pepperonni");
  if ($(btn).hasClass("active")) {
    $(pepperoni).each(function() {
      $(this).css("display", "none");
      $(btn).removeClass("active");
    });
  } else {
    $(pepperoni).each(function() {
      $(this).css("display", "block");
      $(btn).addClass("active");
    });
  }
}

function toggleMushroom() {
  var mushroom = $(".mushroom");
  var btn = $(".btn-mushrooms");
  if ($(btn).hasClass("active")) {
    $(mushroom).each(function() {
      $(this).css("display", "none");
      $(btn).removeClass("active");
    });
  } else {
    $(mushroom).each(function() {
      $(this).css("display", "block");
      $(btn).addClass("active");
    });
  }
}

function togglePepper() {
  var pepper = $(".green-pepper");
  var btn = $(".btn-green-peppers");
  if ($(btn).hasClass("active")) {
    $(pepper).each(function() {
      $(this).css("display", "none");
      $(btn).removeClass("active");
    });
  } else {
    $(pepper).each(function() {
      $(this).css("display", "block");
      $(btn).addClass("active");
    });
  }
}

function toggleSauce() {
  var sauce = $(".sauce");
  var btn = $(".btn-sauce");
  if ($(btn).hasClass("active")) {
    $(sauce).each(function() {
      $(this).css("display", "none");
      $(btn).removeClass("active");
    });
  } else {
    $(sauce).each(function() {
      $(this).css("display", "block");
      $(btn).addClass("active");
    });
  }
}

function toggleCrust() {
  var crust = $(".crust");
  var btn = $(".btn-crust");
  if ($(btn).hasClass("active")) {
    $(crust).each(function() {
      $(this).css("display", "none");
      $(btn).removeClass("active");
    });
  } else {
    $(crust).each(function() {
      $(this).css("display", "block");
      $(btn).addClass("active");
    });
  }
}

$($(".btn-pepperonni")).click(function() {
  togglePepperoni();
});
$($(".btn-mushrooms")).click(function() {
  toggleMushroom();
});
$($(".btn-green-peppers")).click(function() {
  togglePepper();
});
$($(".btn-sauce")).click(function() {
  toggleSauce();
});
$($(".btn-crust")).click(function() {
  toggleCrust();
});
