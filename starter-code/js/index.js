let button = document.querySelector("#calc");

button.onclick = function(){
  var sum = 0;
  let products = [... document.querySelectorAll(".produit")];
    products.forEach( function($product){
      let prix = +$product.querySelector('.produit .unit_price span').textContent;
      let input = $product.querySelector('.produit .quantity input').value;
      let calc = (prix * input).toString();
      $product.querySelector('.produit .total_price span').innerHTML=calc;
      sum+=+calc;
    })
    document.querySelector('.total span').innerHTML=sum;
}

let del = [... document.querySelectorAll('.btn-delete')];
var cart = document.getElementById("cart");

del.forEach( function(el){
    el.onclick = function(e){
        let prod = e.currentTarget.parentNode.parentNode;
        cart.removeChild(prod);
    }
})

let createButton = document.querySelector("#create_btn");
createButton.onclick = function(){
  let productNumber = document.querySelector('.fillPrice').value;
  let productName = document.querySelector('.fillText').value;
  let divTag = document.createElement('div');
  divTag.innerHTML = ` <div class="name">
  <span>` + productName + `</span>
</div>
​
<div class="unit_price">
  $<span>`+ productNumber + `</span>
</div>
​
<div class="quantity">
  <label>
    QTY
    <input type="number" value="0" min="0">
  </label>
</div>
​
<div class="total_price">
  $<span>0</span>
</div>
​
<div>
  <button class="btn btn-delete">delete</button>
</div>`;

divTag.classList.add('produit');

let parent = document.getElementById("allproducts");
parent.appendChild(divTag);
}
