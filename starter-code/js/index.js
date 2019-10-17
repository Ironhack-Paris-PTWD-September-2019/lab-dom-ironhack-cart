var $calcBtn = document.getElementById('calc');
var totalPrice = 0;

$calcBtn.onclick = function () {
  console.log('click');
  
  //
  // Pour chq ligne class="product"
  //
  
  var $products = [...document.querySelectorAll('.product')]; //
  $products.forEach(function ($product) {
    // 1. recup le pu
    var $pu = $product.querySelector('.pu span');
    var pu = Number($pu.innerHTML); // 25

    // 2. recup la qty
    var $qty = $product.querySelector('.qty input');
    var qty = Number($qty.value);

    // 3. maj le subtot
    var $subtot = $product.querySelector('.tot span');
    var subtot = pu * qty;

    $subtot.innerHTML = subtot;
    
    totalPrice += pu * qty;
 
  });
  document.querySelector(".total-price span").innerHTML = totalPrice;
}