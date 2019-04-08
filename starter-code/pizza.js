function total() {
  let li = $("body > aside > ul > li");
  let total = 10;

  for (let i = 1; i <= li.length; i++) {
    if (
      $(
        `body > aside > ul > li:nth-child(${i})`
      )[0].attributes.style.value.includes("none") === false
    ) {
      total += Number(
        $(`body > aside > ul > li:nth-child(${i})`)[0].innerText[1]
      );
    }
  }
  $("body > aside > strong")[0].innerText = "$" + total;
}

$(document).ready(function() {
  let li = $("body > aside > ul > li");

  for (let i = 1; i <= li.length; i++) {
    if ($(`body > aside > ul > li:nth-child(${i})`).hide()) {
    }
  }
  for (let i = 1; i < 4; i++) {
    if ($(`body > aside > ul > li:nth-child(${i})`).show()) {
    }
  }

  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".btn-crust").removeClass("active");

  $(".btn-pepperonni").on("click", () => {
    $(".pep").toggle();
    $("body > aside > ul > li:nth-child(1)").toggle();
    total();
  });
  $(".btn-mushrooms").on("click", () => {
    $(".mushroom").toggle();
    $("body > aside > ul > li:nth-child(2)").toggle();
    total();
  });
  $(".btn-green-peppers").on("click", () => {
    $(".green-pepper").toggle();
    $("body > aside > ul > li:nth-child(3)").toggle();
    total();
  });

  $(".btn-sauce").on("click", () => {
    $(".sauce").toggleClass("sauce-white");
    $("body > aside > ul > li:nth-child(4)").toggle();
    total();
  });
  $(".btn-crust").on("click", () => {
    $(".crust").toggleClass("crust-gluten-free");
    $("body > aside > ul > li:nth-child(5)").toggle();
    total();
  });

  $(".btn").on("click", e => $(e.target).toggleClass("active"));
  total();
});
