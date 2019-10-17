// Start here :)

let $button = document.getElementById('calculate-prices');

var $bigTotal = document.querySelector('h2 span');

$button.onclick = function() {
    console.log('click');

var $products = [...document.querySelectorAll('.allproduits')]; //
$products.forEach(function ($allproduits) {
    const $unitPrice = $allproduits.querySelector('.unit-price span');
    const unitPrice = +($unitPrice.innerHTML);

    const $qty = $allproduits.querySelector('.qty input');
    const qty = +($qty.value); 

    var $totalPrice = $allproduits.querySelector('.totalprice span');
    var totalPrice = unitPrice * qty;

    $totalPrice.innerHTML = totalPrice;
    console.log(totalPrice);

});
}


function bigTotal () {
    
}
$bigTotal.textContent = totalPrice;
