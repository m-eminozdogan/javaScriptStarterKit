let cart =[
    {id:1, productName:"Telefon", quantity:1, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:40},
    {id:3, productName:"Kulaklık", quantity:1, unitPrice:80},
    {id:4, productName:"Şarj Aleti", quantity:1, unitPrice:60},
    {id:5, productName:"Cüzdan", quantity:3, unitPrice:30},
    {id:6, productName:"Kolonya", quantity:1, unitPrice:42},
]


////// bütün sepet dizisinin yazdırılması 
cart.map(product=>{
    console.log(product)
})
//////sepetin toplam tutarının hesaplanması 

let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total);

///// sepete 2 ve fazlaası eklenenlerin filtrelenmesi 
let quantityOver2=cart.filter(product=>product.quantity>1)

console.log(quantityOver2);

quantityOver2.map(product=>{
    console.log(product.productName)
})
 
/*
//cart.push({id:7, productName:"Hoparlör", quantity:6, unitPrice:95})

function refTest(sepet) {

sepet.push({id:7, productName:"Hoparlör", quantity:6, unitPrice:95})
    
}
refTest(cart);
console.log(cart);

let sayi=10
function topla(sayim) {
    sayim+=1
console.log(sayim);

}
topla(sayi)
console.log(sayi);
*/