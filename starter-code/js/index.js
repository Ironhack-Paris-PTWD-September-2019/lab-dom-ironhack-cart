var $calculatePrices = document.getElementById(`calculatePrices`);
var $numberOfProducts = [...document.querySelectorAll(`.shopping-line`)];
var totalPrice = 0;

$calculatePrices.onclick = function () {
    $numberOfProducts.forEach(function(product) {
        var $unitPrice = product.querySelector(`.unitPrice`);
        var $unitQuantity = product.querySelector(`.unitQuantity`);
        var $globalPrice = product.querySelector(`.globalPrice`);

        var productPrice = Number($unitPrice.innerHTML) * Number($unitQuantity.value);
        totalPrice += productPrice;

        return $globalPrice.innerHTML = productPrice;
    });

    var $finalPrice = document.getElementById(`finalPrice`);
    $finalPrice.innerHTML = totalPrice;
}

// *****************

var $deleteButtons = [...document.querySelectorAll(`.btn-delete`)];

$deleteButtons.forEach(function($deleteButton) {
    $deleteButton.onclick = function () {
        console.log(`coucou`)
    }
})
