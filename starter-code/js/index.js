



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

    document.querySelector('.total').innerHTML=sum + "$";


}



let del = [... document.querySelectorAll('.btn-delete')];
var cart = document.getElementById("cart");

del.forEach( function(el){
    el.onclick = function(e){
        let prod = e.currentTarget.parentNode.parentNode;
        cart.removeChild(prod);
    }
})


