// Start here :)

// document.querySelector(".btn-success").onclick = function() {
//   console.log("coucou");

//   // recup le pu
//   var $pu = document.querySelector(".unitPrice");
//   var pu = Number($pu.innerHTML);

//   // recup qty
//   var $qty = document.querySelector(".quantity input");
//   var qty = Number($qty.value);
//   //console.log($qty);

//   //Prix total
//   var $subtot = document.querySelector(".tot span");
//   var subtot = pu * qty;

//   $subtot.innerHTML = subtot;
//   console.log(subtot);
// };

//iteration2

document.querySelector(".btn-success").onclick = function() {
  //console.log("coucou");

  var sum = 0;

  var $products = [...document.querySelectorAll(".product")]; //
  $products.forEach(function($product) {
    // recup le pu
    var $pu = $product.querySelector(".unitPrice");
    var pu = Number($pu.innerHTML);

    // recup qty
    var $qty = $product.querySelector(".quantity input");
    var qty = Number($qty.value);
    //console.log($qty);

    //Prix total
    var $subtot = $product.querySelector(".tot span");
    var subtot = pu * qty;

    $subtot.innerHTML = subtot;
    console.log(subtot);
  });
};
