// Write your Pizza Builder JavaScript in this file.
$( document ).ready(function() {
  let listItems = [];

  //default setting for the pizza
  $(".crust").removeClass("crust-gluten-free");
  $(".sauce").removeClass("sauce-white");
  $(".btn-crust").removeClass("active");
  $(".btn-sauce").removeClass("active");

  //default setting for the price of the pizza
  listItems.push($(".price li:contains('white sauce')").closest("li").detach());
  listItems.push($(".price li:contains('crust')").closest("li").detach());
  
  //calculate price of the pizza
  calculatePrice();


  $(".btn").click(function(){

    const $this = $(this) //better for performance

    const toRemove = $this.data("id");
    const classToggle = $this.data("class");
    const topping = $this.data("topping");

    $(toRemove).toggleClass( classToggle );
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {   
      //filter the selected toppng from the array
      const selectedItem = listItems.filter(item => {
        return item[0].innerHTML.includes(`${topping}`);
      })
 
      $(".price ul").append(selectedItem);
    } else {
      let listItem = $(`.price li:contains(${topping})`).closest("li").detach();
      listItems.push(listItem);
    }
    calculatePrice();
   })

});

function calculatePrice() {
  let sum = 0;

  $('.pprice').each(function() {
    sum += Number($(this).html());
  });

  $(".ptotal").html(sum);

}