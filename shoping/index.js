  var removebtn = document.getElementsByClassName('btn-danger');

//   for(i = 0 ; i < removebtn.length ; i++){
//     removebtn[i].addEventListener('click' , removebtns)
// } 
function removebtns(e){
    var event = e.target 
     event.parentElement.parentElement.remove()
     grandTotal()
}

var  addTocart = document.getElementsByClassName(' btn-primary')
for(i = 0 ; i <  addTocart.length ; i++){
    addTocart[i].addEventListener('click' , addTOCart)
}


function addTOCart(e){
    var cartevents = e.target ;
     var carteventsall = cartevents.parentElement
    var parentAddCart = cartevents.parentElement.parentElement ;
    // var itemimg = parentAddCart.children[0].src
    // var itemname = parentAddCart.children[1].innerText
    // var itemprice = parentAddCart.children[0].innerText
    // var itempricetotals = parentAddCart.children[1].innerText
    //   console.log (itemimg , itemname  , itemprice ,itempricetotals)

    // there is  second way to make add to cart list down 

     var itemimg = parentAddCart.children[0].src
     var itemname = parentAddCart.children[1].innerText
     var itemprice = carteventsall.children[0].innerText
      var itempricetotals = carteventsall.children[1].innerText
    //   console.log (itemimg , itemname  , itemprice)
 
    addTocartUpdate(itemimg , itemname  , itemprice , itempricetotals)
}

function addTocartUpdate(itemimg , itemname  , itemprice , itempricetotals){
    var createContent = document.createElement('div');
    createContent.classList.add('cart-row')
    var itemscart = document.getElementsByClassName('cart-items')[0];
    var cartitemTitel = document.getElementsByClassName('cart-item-title');
     for( i = 0 ; i < cartitemTitel.length; i++){
        // console.log(cartitemTitel[i])
        if(cartitemTitel[i].innerText == itemname ){
            alert('This Item Already Added To Your Cart')
            return
        }
       
     }

   
      createContentsall = `
      <img src="${itemimg}" class="cart-item-image" alt="2">
  <span class="cart-item-title"> ${itemname}</span>
 
<span class="cart-price cart-colunm">${itemprice}</span>
 <span class="cart-price-total cart-colunm"> ${itempricetotals}</span>
<div class="cart-quantity cart-colunm">
  <input type="number" name="" value="1" class="cart-quantity-input">
  <button class="btn btn-danger" type="button">Remove</button>
</div> `
createContent.innerHTML =  createContentsall ;
    itemscart.append(createContent)

    for(i = 0 ; i < removebtn.length ; i++){
        removebtn[i].addEventListener('click' , removebtns)
    }
    
for(i = 0 ; i < inputs.length ; i++){
    inputs[i].addEventListener('click' , updateElement)
}
grandTotal()
}



var inputs = document.getElementsByClassName('cart-quantity-input');
    
// for(i = 0 ; i < inputs.length ; i++){
//     inputs[i].addEventListener('click' , updateElement)
// } 

function updateElement(e){
    
    var quantityupdate = e.target
    var parentsup = quantityupdate.parentElement.parentElement ;
    // console.log(parentsup)
   var priceElement = parentsup.getElementsByClassName('cart-price')[0];
   var priceElementTotal = parentsup.getElementsByClassName('cart-price-total')[0];
   var priceElements = priceElement.innerText.replace('$' , ' ');
    priceElementTotal.innerText = quantityupdate.value * priceElements ;


//    console.log(priceElementTotal.innerText)
   if(isNaN(quantityupdate.value) || quantityupdate.value <= 0){
    quantityupdate.value = 1;
   }
   grandTotal()
}

function grandTotal(){
    var total = 0 ; 
    var grands = document.getElementsByClassName('cart-grand-price')[0] ;
    var cartTotals = document.getElementsByClassName('cart-price-total');
    
   for(i = 0 ; i < cartTotals .length ; i++){
   var carttotalall =  parseInt(cartTotals [i].innerText.replace('$',' '))
    //  console.log(typeof  carttotalall )
      total += carttotalall 

     }
        grands.innerText = '$' + total ;
   
     }


