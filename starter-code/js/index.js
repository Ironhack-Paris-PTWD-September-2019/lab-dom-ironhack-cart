// //ITERATION 1

// let $buttonsuccess = document.querySelector(".btn-success");

// $buttonsuccess.onclick = function (){
// console.log('click');

// //1) Recup le price
// let $price = document.querySelector(".price span");
// let price = Number($price.innerHTML);


// //2) Recup la quantité
// let $quantite = document.querySelector(".quantite input");
// let quantite = Number($quantite.innerHTML);


// let $subtot = document.querySelector(".tot span");    
// let subtot = quantite * price; 

// $subtot.innerHTML = subtot;

// console.log(subtot);
// };


// ITERATION 1 et 2 :

var $calcBtn = document.getElementById('calc');

$calcBtn.onclick = function () {

  //   console.log('click');
  
  var $products = [...document.querySelectorAll('.product')]; //
  $products.forEach(function ($product) {
    // 1. recup le pu
    var $pu = $product.querySelector('.pu');
    var pu = Number($pu.innerHTML); // 25

    // 2. recup la qty
    var $qty = $product.querySelector('.qty');
    var qty = Number($qty.value);
    
    // 3. maj le subtot
    var $subtot = $product.querySelector('.subtot');
    var subtot = pu * qty;
    $subtot.innerHTML = subtot; 
    
    // ITERATION 3 :
    var $totalPrice = [...document.querySelectorAll('.totalprice')];
    $totalPrice.forEach(function ($totalPrice){
    $totalPrice.innerHTML = subtot;
    });
  });
};




