
var $cart = document.getElementById('cart');

//
// Calc
//

var $calc = document.getElementById('calc');

function updateProductTotal($product) {
  //
  // Iteration 1
  //
  
  var $tot = $product.querySelector('.tot span');
  var $pu = $product.querySelector('.pu span');
  var $qty = $product.querySelector('.qty input');

  var pu = Number($pu.textContent);
  var qty = Number($qty.value) || 0;
  var tot = pu*qty;
  
  $tot.textContent = tot; // update the product's total

  return tot;
}

//
// Iteration 3
//

var $bigtotal = document.querySelector('h2 span');

function calcAll() {
  var sum = 0;

  //
  // Iteration 2
  //

  var $products = [...document.querySelectorAll('.product')]; // find all the products
  $products.forEach(function ($product) {
    var tot = updateProductTotal($product);

    sum += tot;
  });

  // update the sum
  $bigtotal.textContent = sum;
}
$calc.onclick = calcAll;

//
// Iteration 4
//

var $deleteButtons = [...document.querySelectorAll('.btn-delete')];

function bindDeleteButton($deleteButton) {
  $deleteButton.onclick = function (e) {
    // delete the product
    var $product = e.currentTarget.parentNode.parentNode; // product div
    $cart.removeChild($product);

    calcAll(); // once deleted, recalc all
  };
}
$deleteButtons.forEach(bindDeleteButton);

//
// Iteration 5
//

var $createButton = document.getElementById('create');
$createButton.onclick = function () {
  var $name = document.querySelector('.new input[type="text"]');
  var $pu = document.querySelector('.new input[type="number"]');

  var $div = document.createElement('div');
  $div.className = 'product';
  $div.innerHTML = `
    <div class="name">
      <span>${$name.value}</span>
    </div>

    <div class="pu">
      $<span>${$pu.value}</span>
    </div>

    <div class="qty">
      <label>
        QTY
        <input type="number" value="0" min="0">
      </label>
    </div>

    <div class="tot">
      $<span>0</span>
    </div>

    <div class="rm">
      <button class="btn btn-delete">delete</button>
    </div>
  `;
  $cart.appendChild($div);

  // don't forget to bind the .onclick handler
  bindDeleteButton($div.querySelector('.btn-delete'));
};
