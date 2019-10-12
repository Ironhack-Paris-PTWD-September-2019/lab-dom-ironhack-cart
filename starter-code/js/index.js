// UNCOMMENT EACH ITERATION PROGRAM TO SEE THE PROGRESS

/* ----
ITERATION 1: ONE ITEM
---- */

// var $btn = document.querySelector(".calculate button");

// $btn.onclick = () => {
//   let pu = Number(document.querySelector(".pu span").innerHTML);
//   let qty = Number(document.querySelector(".qty input").value);
//   document.querySelector(".subtot span").innerHTML = pu * qty;
// };

/* ----
ITERATION 2: SEVERAL ITEMS
---- */
// var $btn = document.querySelector(".calculate button");

// $btn.onclick = () => {
//   document.querySelectorAll(".product").forEach($product => {
//     let pu = Number($product.querySelector(".pu span").innerHTML);
//     let qty = Number($product.querySelector(".qty input").value);
//     $product.querySelector(".subtot span").innerHTML = pu * qty;
//   });
// };

/* ----
ITERATION 3: TOTAL PRICE
---- */
// var $btn = document.querySelector(".calculate button");
// var totalPrice = 0;

// $btn.onclick = () => {
//   document.querySelectorAll(".product").forEach($product => {
//     let pu = Number($product.querySelector(".pu span").innerHTML);
//     let qty = Number($product.querySelector(".qty input").value);
//     $product.querySelector(".subtot span").innerHTML = pu * qty;
//     totalPrice += pu * qty;
//   });
//   document.querySelector(".total-price span").innerHTML = totalPrice;
// };

/* ----
ITERATION 4: DELETE ITEMS
---- */
// var $btn = document.querySelector(".calculate button");
// var $deleteButtons = document.querySelectorAll(".btn-delete");
// var totalPrice = 0;

// $btn.onclick = () => {
//   document.querySelectorAll(".product").forEach($product => {
//     let pu = Number($product.querySelector(".pu span").innerHTML);
//     let qty = Number($product.querySelector(".qty input").value);
//     $product.querySelector(".subtot span").innerHTML = pu * qty;
//     totalPrice += pu * qty;
//   });
//   document.querySelector(".total-price span").innerHTML = totalPrice;
// };

// $deleteButtons.forEach($deleteButton => {
//   $deleteButton.onclick = e => {
//     let $currentDelete = e.currentTarget;
//     let $productToDelete = $currentDelete.parentNode.parentNode;
//     $productToDelete.parentNode.removeChild($productToDelete);

//     totalPrice -= Number(
//       $productToDelete.querySelector(".subtot span").innerHTML
//     );
//     document.querySelector(".total-price span").innerHTML = totalPrice;
//   };
// });

/* ----
ITERATION 5: ADD ITEMS
---- */
var $btn = document.querySelector(".calculate button");
var $deleteButtons = document.querySelectorAll(".btn-delete");
var totalPrice = 0;

// Button "Calculate prices"
$btn.onclick = () => {
  document.querySelectorAll(".product").forEach($product => {
    let pu = Number($product.querySelector(".pu span").innerHTML);
    let qty = Number($product.querySelector(".qty input").value);
    $product.querySelector(".subtot span").innerHTML = pu * qty;
    totalPrice += pu * qty;
  });
  document.querySelector(".total-price span").innerHTML = totalPrice;
};

// Button "Delete"
$deleteButtons.forEach($deleteButton => {
  $deleteButton.onclick = e => {
    let $currentDelete = e.currentTarget;
    let $productToDelete = $currentDelete.parentNode.parentNode;
    $productToDelete.parentNode.removeChild($productToDelete);

    // Update the total price
    totalPrice -= Number(
      $productToDelete.querySelector(".subtot span").innerHTML
    );
    document.querySelector(".total-price span").innerHTML = totalPrice;
  };
});

// Button "Create"
var $createButton = document.querySelector(".btn-create");
$createButton.onclick = () => {
  let newName = [...document.querySelectorAll(".new-product input")][0].value;
  let newUnitPrice = [...document.querySelectorAll(".new-product input")][1]
    .value;

  // Copie du 1er product
  let $copyProduct = document.querySelector(".product").cloneNode(true);
  // Remplacement des valeurs
  $copyProduct.querySelector(".name span").innerHTML = newName;
  $copyProduct.querySelector(".pu span").innerHTML = newUnitPrice;
  $copyProduct.querySelector(".qty input").value = 0;
  $copyProduct.querySelector(".subtot span").innerHTML = 0;
  // Positionnement
  document
    .querySelector(".list-products")
    .insertBefore($copyProduct, document.querySelector(".new-product"));

  // Reset des inputs "Create"
  document.querySelectorAll(".new-product input")[0].value = "";
  document.querySelectorAll(".new-product input")[1].value = "";
};
