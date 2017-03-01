// // Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').click(function() {
    $(".pep").toggle();
    $("#li-pep span").toggleClass("total");
    $("#li-pep").toggle();
     $(this).toggleClass('active');
    totalPrice();
});

$('.btn-mushrooms').click(function() {
    $(".mushroom").toggle();
    $("#li-mushroom span").toggleClass("total");
    $("#li-mushroom").toggle();
    $(this).toggleClass('active');
    totalPrice();
});

$('.btn-green-peppers').click(function() {
    $(".green-pepper").toggle();
    $("#li-green-pepper span").toggleClass("total");
    $("#li-green-pepper").toggle();
    $(this).toggleClass('active');
    totalPrice();
});

$('.btn-sauce').click(function() {
    $(".sauce").toggleClass('sauce-white');
    $("#li-sauce-white span").toggleClass("total");
    $("#li-sauce-white").toggle();
    $(this).toggleClass('active');
    totalPrice();

});

$('.btn-crust').click(function() {
    $(".jx1").toggleClass('crust-gluten-free');
    $("#li-crust-gluten-free span").toggleClass("total");
    $("#li-crust-gluten-free").toggle();
    $(this).toggleClass('active');
    totalPrice();
});

function totalPrice() {
  var list = $(".total").text().split(" ").map(function(item) {
      return parseInt(item, 10);
  });
  console.log('List', list);
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
  sum = sum + (list[i]);
}
 console.log('SUM: ', sum);
 document.querySelector("#totalPrice").innerHTML = '$' + sum;

 }

 var calculate = $('.btn').click() ;

// TEST CODES BELLOW


//
//
// //Calculate prices for individual products
//   function calculatePrices() {
//
//     for( i = 0; i < getProduct.length; i++ ) {
//       var totalPrice = Number(getUnitPrice[i].innerHTML.replace(/[^0-9\.]+/g,"")) * getUnitQty[i].value;
//       document.getElementsByClassName('totalProductPrice')[i].innerHTML = totalPrice;
//     }
//     getTotalPrice();
//   }
//
//
// //Add Total Product Prices and Update Total Price
// function addTotalProductPrice(a, b) {
//   return a + b;
// }
//
// function getTotalPrice() {
//   var priceArray = [];
//   for(i = 0; i < getProduct.length; i++) {
//     var productPriceValue = parseInt(getTotalProductPrice[i].innerHTML);
//     priceArray.push(productPriceValue);
//   }
//   var total = priceArray.reduce(addTotalProductPrice, 0);
//
//   document.getElementById('spanTotal').innerHTML =  total
// }

//
//
//
//
//
//
// function deleteRow(){
//   for(i = 0; i < getProduct.length; i++) {
//     deleteButtons[i].addEventListener('click', function (e) {
//       e.currentTarget.parentNode.parentNode.remove();
//     });
//   }
// }
//
//
// function createRow() {
//   // anonymous function added to even listener
//   getCreateBtn.addEventListener('click', function (e) {
//     var getValueofProductName = document.getElementById('productNameValue').value;
//     var getValueofProductCost = document.getElementById('productCostValue').value;
//     var newProductRow = document.createElement('div');
//     newProductRow.setAttribute('class','row');
//     newProductRow.innerHTML = newProductHtml();
//     newProductRow.querySelector('.productName').innerHTML = getValueofProductName;
//     newProductRow.querySelector('.productCost').innerHTML = getValueofProductCost;
//     document.getElementById('something').appendChild(newProductRow);
//     // document.getElementsByClassName('container')[0].insertBefore(newProductRow, getCreateDiv.parentNode);
//     deleteRow();
//   });
// }
//
//
// function newProductHtml(){
//   return '<div class="col-xs-5"> <span class="productName"> </span> </div> <div class="col-xs-5">' +
//     '<span class="productCost"></span>' +
//   '</div>' +
//   '<div class="col-xs-5">' +
//     '<label for="qty">QTY</label>' +
//     '<input type="text" value="0" class="qty">' +
//   '</div>' +
//   '<div class="col-xs-5">' +
//     '$<span class="totalProductPrice">0.00</span>' +
//   '</div>' +
//   '<div class="col-xs-5 delete">' +
//     '<button class="btn btn-delete">DELETE</button></div>';
// }
//
//
// createRow();

//
//   $(".btn-pepperonni").click(function(){
//     //
//     if ($("li:nth-child(4n)").innerText
// :
// "Pepperonni"() === "$1 pepperoni") {
//     //
//     //   console.log("Hi: ");
//     //
//     // }
// console.log($("li"));
//   });




// function totalPrice() {
//   var list =   Number($('#total').text().slice(0 , 1));
//   console.log('List', list);
//   var sum = 0;
// for (var i = 0; i < list.length; i++) {
//   sum = sum + (list[i]);
// }
//  console.log('SUM: ', sum);
//
//  }

//
// calculate.onClick = totalPrice();

// function getTotalPrice() {
//   var priceArray = [];
//   for(i = 0; i < wholeList.length; i++) {
//     var totalCost = parseInt(wholeList[i].text());
//     priceArray.push(totalCost);
//   }
//   // var total = priceArray.reduce(totalCost);
//   var sum = 0;
//   priceArray.forEach(function(e){
//     sum += e;
//     $('totalPrice').innerHTML =  sum;
//   });
// }
// getTotalPrice();





// var getUnitPrice = document.getElementsByClassName('productCost');
// var getUnitQty = document.getElementsByClassName('qty');
// var deleteButtons = document.getElementsByClassName('btn-delete');




























//
