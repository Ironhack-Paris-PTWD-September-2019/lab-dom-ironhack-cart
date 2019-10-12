var btnCalc=document.querySelector(".btn-calculate-price");



btnCalc.onclick=function(event) {
  var qtyElements=[...document.querySelectorAll("input")]; 
  var priceItems=[...document.querySelectorAll(".element .price-item")].map(el => Number(el.innerHTML)); 
  var elTotalPrice=[...document.querySelectorAll(".element .total-price")];
  var totalPrice=0;
  var bigTotal=document.getElementById("big-total");
  var qtyValues= qtyElements.map(el=>Number(el.value));
  for (let i=0; i<elTotalPrice.length; i++) {
    elTotalPrice[i].innerHTML=qtyValues[i]*priceItems[i];
    totalPrice += qtyValues[i]*priceItems[i];
  }
  bigTotal.innerHTML=totalPrice;
  
};

var elDeletes=[...document.querySelectorAll(".btn-delete")];
//var elProducts=[...document.querySelectorAll(".product")];

elDeletes.forEach(function(elDelete){
  elDelete.onclick=function(e){
    let parentToDel=e.currentTarget.parentNode.parentNode.parentNode; 
    parentToDel.removeChild(e.currentTarget.parentNode.parentNode);
  };
});

// CREATE A NEW PRODUCT 

var btnCreate=document.querySelector(".btn-create");

btnCreate.onclick=function(e){
 let parentEl=e.currentTarget.parentNode.parentNode.parentNode.parentNode;
 let nomProduct=document.querySelector("#create .name input").value;
 let priceProduct=document.querySelector("#create .price-element input").value;

 var $divProduct = document.createElement('div');
  $divProduct.innerHTML = `
  <div class="product"> 
    <div class="container">
      <div class="name element">
        <span> ${nomProduct} </span>
      </div>

      <div class="element"> 
        $<span class="price-item">${priceProduct}</span>
      </div>

      <div class="element">
        <label>
          QTY
          <input type="number" value="0" min="0">
        </label>
      </div>

      <div class="element">
        $<span class="total-price">0</span>
      </div>

      <div class="element">
        <button class="btn btn-delete">delete</button>
      </div>

    </div>

  </div>
  `
  ;

 parentEl.insertBefore($divProduct,e.currentTarget.parentNode.parentNode.parentNode);

 

};