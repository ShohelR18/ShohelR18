var removeBtn = document.getElementsByClassName('btn-danger');
var addElements = document.getElementsByTagName('tbody')[0];

function removeBtns(e){
   var  removeBtn1 = e.target;
    removeBtn1.parentElement.parentElement.remove();
    grandTotal()
}

var addTocart = document.getElementsByClassName('btn-primary');
for( let i = 0 ; i < addTocart.length ; i++){
 addTocart[i].addEventListener('click' , addTocarts )

}

function addTocarts(e){
 var addTocarts = e.target;
 var parents = addTocarts.parentElement;
 var imgSrc = parents.children[0].src;
 var titleName = parents.children[1].innerText;
 var price = parents.children[2].innerText; 
 
addToCartupdate(imgSrc ,titleName ,price);

}

function addToCartupdate(imgSrc ,titleName ,price){

var createEl = document.createElement('tr');
var titleNames = document.getElementsByClassName('item-title');
//  console.log(titleNames)
 for( i = 0 ; i < titleNames.length; i++){
    //  console.log(titleNames[i].innerText == titleName )
   if(titleNames[i].innerText == titleName ){
       alert('This Item Already Added To Your Cart');
       return 
   }
}
createEl.innerHTML = `<td><img src="${imgSrc}" class="item-img" alt=""></td>
<td><h5 class="item-title">${titleName}</h5></td>
<td> <h4 class="item-price">${price}</h4></td>
<td><input type="number" class="item-qty" value='1'></td>
<td><h4 class="item-sub-total"> AED 0</h4></td>
<td><button class="btn btn-danger">Remove</button></td>`

addElements.append( createEl);

for(  i = 0 ; i < removeBtn.length ; i++){
 removeBtn[i].addEventListener('click' , removeBtns)
}
for(  i = 0 ; i <inputs.length ; i++){
inputs[i].addEventListener('click' , updateqty);
}
grandTotal()
}

var inputs = document.getElementsByClassName('item-qty');

function updateqty(event){
   var parantEvent = event.target;
   var parantEvents = parantEvent.parentElement.parentElement;
 
   var prices = parantEvents.getElementsByClassName('item-price')[0];
   
   var sub_price = parantEvents.getElementsByClassName('item-sub-total')[0];
   var cart_price = prices.innerText.replace('AED' , ' ')
     sub_price.innerText = parantEvent.value * cart_price ;
   
   if(isNaN(parantEvent.value) || parantEvent.value <= 0){
     parantEvent.value = 1;
   }
   grandTotal()
}
function grandTotal(){

 var total = 0 ;
var grands = document.getElementsByClassName('grand-total')[0];
var sub_all = document.getElementsByClassName('item-sub-total');
for(i = 0 ; i < sub_all.length ; i++){
 var carttotalall =  parseInt(sub_all [i].innerText.replace('AED',' '));
  
    total += carttotalall ;

   }
   grands.innerText = 'AED '+ total;

}
