// Start here :)

//Iteration 1

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

//Iterations 1 & 2

document.querySelector(".btn-success").onclick = function() {
  var sumCart = 0;
  var $products = [...document.querySelectorAll(".product")];

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

    //Iteration 3 = Cout Total Cart
    var $totalCart = document.querySelector("h2 > span");
    sumCart += subtot;
    $totalCart.innerHTML = sumCart;
  });

  console.log(sumCart);
};

//Iteration 3
//create a div
let parent = document.getElementsByTagName("body")[0];
let divTotalCart = document.createElement("div");
parent.appendChild(divTotalCart);
let scriptTag = document.querySelector("script");
parent.insertBefore(divTotalCart, scriptTag);

//create h2
let h2Tag = document.createElement("h2");
divTotalCart.appendChild(h2Tag);
h2Tag.innerHTML = "Total Price: $";

//create span
let spanEl = document.createElement("span");
h2Tag.appendChild(spanEl);
spanEl.innerHTML = "0";

//Iteration 4
var $deleteBtns = [...document.getElementsByClassName("btn-delete")];
for (let i = 0; i < $deleteBtns.length; i++) {
  var parentNode = document.getElementById("main-cart");
  var productToDelete = document.querySelector(".main-container product");
  $deleteBtns[i].onclick = function(e) {
    //parentDiv.removeChild(productToDelete);
    console.log(e.currentTarget.innerHTML);
  };
}

//Iteration 5
