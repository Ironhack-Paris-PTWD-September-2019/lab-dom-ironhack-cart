// Start here :)

// const calculateButton = document.getElementById("calculate");
// const produits = document.getElementsByClassName("name");
calcButton = document.getElementById("calculate")

calcButton.onclick = function() {
    console.log("click");
    var $allProducts = [...document.querySelectorAll(".products")];
    var globalPrice = 0;
    for (const product of $allProducts) {
        let couts = product.querySelector('.cost span').innerHTML;
        let quantity = Number(product.querySelector(".quantity input").getAttribute("value"));
        let $subtot = product.querySelector(".totalPrice span")
        let subtot = quantity * couts;
        $subtot.innerHTML = subtot;
        globalPrice += subtot;
        console.log(subtot);
        console.log(globalPrice);
    };
    $globalPrice = document.querySelector(".globalPrice span");
    $globalPrice.innerHTML = globalPrice;
}

deleteButtons = [...document.getElementsByClassName("btn-delete")]
console.log(deleteButtons)

for (let i = 0; i < deleteButtons.length; i++) {
    parentNode = document.getElementById("conteneur");
    deleteButtons[i].onclick = function(e) {
    console.log('click')
    if(e.currentTarget.id === "shirtDeleteButton") {
        child = document.getElementById("shirtContainer");
        parentNode.removeChild(child);
    }
    else if(e.currentTarget.id === "bubbleDeleteButton") {
        child = document.getElementById("bubbleContainer");
        parentNode.removeChild(child);
    }
    }
}
createButton = document.getElementById("createButton")

createButton.onclick = function() {
    console.log("click")
    itemToCreate = document.querySelector(".createdItem input").getAttribute("value");
    priceToCreate = document.querySelector(".createdPrice input").getAttribute("value");
    var newDiv = document.createElement("div");
    newDiv.style.display= "flex";
    newDiv.style.justifyContent = "space-around";
    newDiv.style.padding = "10px";
    var newContent = document.createTextNode(itemToCreate);
    var currentDiv = document.getElementById("conteneur");
    newDiv.appendChild(newContent);
    document.body.insertBefore(newDiv, currentDiv);
}

