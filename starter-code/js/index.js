// iteration 3: Iteration 3: Calculating the total price of all products
function renderPrice() { 
    var $calculatePrices = document.getElementById(`calculatePrices`);
    
    $calculatePrices.onclick = function () {
        var $numberOfProducts = [...document.querySelectorAll(`.shopping-line`)];
        var totalPrice = 0;

        $numberOfProducts.forEach(function(product) {
            var $unitPrice = product.querySelector(`.unitPrice`);
            var $unitQuantity = product.querySelector(`.unitQuantity`);
            var $globalPrice = product.querySelector(`.globalPrice`);

            var productPrice = Number($unitPrice.innerHTML) * Number($unitQuantity.value);
            totalPrice += productPrice;

            return $globalPrice.innerHTML = productPrice.toFixed(2);
        });

        var $finalPrice = document.getElementById(`finalPrice`);
        $finalPrice.innerHTML = totalPrice.toFixed(2);
    }
}

// iteration 4: Deleting a product
function renderDeleting() { 
    var $shoppingItems = [...document.querySelectorAll(`.shopping-line`)];

    $shoppingItems.forEach(function($shoppingItem) {
        var $deleteButton = $shoppingItem.querySelector(`.btn-delete`);

        $deleteButton.onclick = function () {
            $shoppingItem.parentNode.removeChild($shoppingItem);
        }
    })
}

// iteration 5: Creating new products
var $newProductCreateButton = document.getElementById(`newProductCreateButton`);

$newProductCreateButton.onclick = function (){
    var $newProductName = document.getElementById(`newProductName`);
    var $newProductPrice = document.getElementById(`newProductPrice`);
    
    var newProductLine = document.createElement('div');
    newProductLine.innerHTML =
        `<div class="shopping-line">
            <div class="productName">
                <span></span>
            </div>
            <div class="productPrice">
                $<span class="unitPrice"></span>
            </div>
            <div>
                <label>
                    QTY <input type="number" value="0" min="0" class="unitQuantity">
                </label>
            </div>
            <div class="productGlobalPrice">
                $<span class="globalPrice">0.00</span>
            </div>
            <div>
                <button class="btn btn-delete">delete</button>
            </div>
        </div>`;

    if($newProductName.value !== `` & $newProductPrice.value !== `` & !isNaN($newProductPrice.value)) {
        newProductLine.querySelector(`.productName span`).innerHTML = $newProductName.value;
        newProductLine.querySelector(`.unitPrice`).innerHTML = Number($newProductPrice.value).toFixed(2);

        var $shoppingList = document.getElementById(`shopping-list`);
        $shoppingList.appendChild(newProductLine);

        $newProductName.value = '';
        $newProductPrice.value = '';
        $newProductName.style.borderColor = `black`;
        $newProductPrice.style.borderColor = `black`;

        renderPrice();
        renderDeleting();
    } else {
        $newProductName.style.borderColor = `red`;
        $newProductPrice.style.borderColor = `red`;
    }
}

renderPrice();
renderDeleting();


