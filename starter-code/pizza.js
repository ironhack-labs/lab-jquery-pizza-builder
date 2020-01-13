// Write your Pizza Builder JavaScript in this file.
$(() => updatePrice());

const hideShow = element => {
  $(`.${element}`).css("display") == "none"
    ? $(`.${element}`).show()
    : $(`.${element}`).hide();
  updatePrice();
};

function updatePrice() {
  let base = 10;
  for (let i = 1; i < 6; i++) {
    if ($(`.price ul li:nth-child(${i})`).css("display") != "none") {
      let price = $(`.price ul li:nth-child(${i})`).html();
      base += parseInt(price[1]);
    }
  }
  $(".price strong").html(`$${base}`);
}
$("button.btn-pepperonni").on("click", function() {
  hideShow("pep");
  hideShow("price ul li:nth-child(1)");
  $(this).toggleClass("active");
});

$("button.btn-mushrooms").on("click", function() {
  hideShow("mushroom");
  hideShow("price ul li:nth-child(2)");
  $(this).toggleClass("active");
});

$("button.btn-green-peppers").on("click", function() {
  hideShow("green-pepper");
  hideShow("price ul li:nth-child(3)");
  $(this).toggleClass("active");
});

$("button.btn-sauce").on("click", function() {
  $(".sauce").toggleClass("sauce-white");
  hideShow("price ul li:nth-child(4)");
  $(this).toggleClass("active");
});

$("button.btn-crust").on("click", function() {
  $(".crust").toggleClass("crust-gluten-free");
  hideShow("price ul li:nth-child(5)");
  $(this).toggleClass("active");
});
