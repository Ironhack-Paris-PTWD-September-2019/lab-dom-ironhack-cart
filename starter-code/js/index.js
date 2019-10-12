// Start here :)

let button = document.getElementsByClassName("totalb")[0];

button.onclick = function() {
  var somme = 0;

  //recuperer la quantité
  var $product = [...document.querySelectorAll(".product")];
  $product.forEach(function($product) {
    let $quantite = $product.querySelector(".qty input");
    let quantite = Number($quantite.value);
    // recuperer le prix
    let $price = $product.querySelector(".price span");
    let price = Number($price.innerHTML);
    let total = price * quantite;
    let $total = $product.querySelector(".total span");
    $total.innerHTML = total;

    somme += total;
  });

  let $totalprice = document.querySelector(".totalprice");
  $totalprice.innerHTML =somme;

};
let buttonDel = document.getElementsByClassName("btn btn-delete")[0];
buttonDel.onclick = function(event){
  console.log('buttonDel');
  let enfant=event.currentTarget.parentNode.parentNode; console.log(enfant);
  let $products = document.getElementsByClassName("products")[0]; console.log($products);
  $products.removeChild(enfant);

}
