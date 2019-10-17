//Iteration 1 & 2
var button = document.getElementById("button1");
button.onclick = function() {
  var somme = 0;  // iteration 3
  var $bigtotal = document.querySelector('.totalProducts h2 span')

  var $products = [...document.querySelectorAll(".products")];
  $products.forEach(function($product) {
    let $price = $product.querySelector(".unitPrice span");
    let price = Number($price.innerHTML);

    let $qty = $product.querySelector(".qty input");
    var qty = Number($qty.value);

    var $total1 = $product.querySelector(".totalPrice span");
    var total = price * qty;

    somme += total;

    $total1.innerHTML = total;
    console.log(total);
  });

  $bigtotal.innerHTML = somme; 
};
//Iteration 4
var $card= document.getElementById('card');
var buttonsDelete =[...document.querySelectorAll(".btn-delete")];
buttonsDelete.forEach(function($buttonDelete){
    $buttonDelete.onclick = function(event){
        var $product = event.currentTarget.parentNode.parentNode; 
        $card.removeChild($product); 
        console.log($buttonDelete); 
    }
});
