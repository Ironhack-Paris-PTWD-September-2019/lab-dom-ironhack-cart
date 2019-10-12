
var $btnSuccess =document.querySelector(".btn-success");

//var $shop = document.querySelector(".shop");

$btnSuccess.onclick = function (){
var $products = document.querySelectorAll(".product-row");
var products = [... $products];

products.forEach(function(product){

  var $price = product.querySelector(".price span");
  var price = +($price.innerHTML);
  var $quantity = product.querySelector("#input-quantity");
  var quantity = +($quantity.value);
  var $totalproduct = product.querySelector("#tot");
  var totalproduct = price*quantity;
  $totalproduct.innerHTML = totalproduct;
});

// on a une erreur mais on ne sait pas pkoi :)


//var textTotalprice = document.createElement("h2");
//textTotalprice.innerHTML = 'Total Price :' + 'totalproduct';
//$shop.appendChild(textTotalprice);
//return $totalprice;
//var textTotalprice = document.createElement("h2");
//textTotalprice.innerHTML = 'Total Price :' + 'totalprice';
//$shop.appendChild(textTotalprice);
//return $totalprice;
};





