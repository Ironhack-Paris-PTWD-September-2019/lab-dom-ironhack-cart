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

  let $totalprice = document.querySelector(".totalprice span");
  $totalprice.innerHTML = somme;
};

//bouton delete

let $buttonDel = [...document.getElementsByClassName("btn btn-delete")];

$buttonDel.forEach(function($buttonDel) {
  $buttonDel.onclick = function(event) {
    let $enfant = event.currentTarget.parentNode.parentNode;
    let $products = document.getElementsByClassName("products")[0];
    $products.removeChild($enfant);
  };
});
