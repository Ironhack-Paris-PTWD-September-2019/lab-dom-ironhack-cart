// Iteration 1
var btn = document.querySelector ('#calculate-prices');

btn.onclick = function (event) {
    var tab = [...document.querySelectorAll('.product')];
    tab.forEach(function(product) {

    var price = Number(product.querySelector('span.unit-price').innerHTML);
    var quantity = Number(product.querySelector('input.quantity').value);
    var tot = product.querySelector ('span.total');
    var tott = price*quantity;
    tot.innerHTML = tott;
    return tott;

    })

}





