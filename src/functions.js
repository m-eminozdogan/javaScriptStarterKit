function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


/// -> GİRİLEN SAYILARIN ASAL OLUP OLMADIĞINI BULAN FONKSİYON -> ///
function findPrime(...numbers) {
    for (let i=0; i <numbers.length; i++){
        let number=numbers[i];
        let isPrime = new Boolean(true);
            for (let j = 2; j < number; j++) {
            if (number%j==0) {
                isPrime=false
            }
        }
        if (isPrime){
            console.log(number+" asaldır");
        }
        else{console.log(number+" asal değildir")}      
    } 
}  
findPrime(13,3,13,11,9,2)
/// <- GİRİLEN SAYILARIN ASAL OLUP OLMADIĞINI BULAN FONKSİYON <- ///

/////////// -> ARKADAŞ SAYILAR -> //////////////////
function isFriendNumbers(number1,number2) {
    let number1Total=0;
    for (let i = 1; i < number1; i++) {
        if (number1%i==0) {
            number1Total=number1Total+i;
        }  
    }
    let number2Total=0;
    for (let j = 1; j < number2; j++) {
        if (number2%j==0) {
            number2Total=number2Total+j;
        }  
    }
    if (number1Total==number2&&number2Total==number1) {
        console.log(number1+" ve "+number2+" arkadaş sayılardır");
    }
    else{ console.log(number1+" ve "+number2+" arkadaş sayı değillerdir"); }
}
isFriendNumbers(220,284)
/////////// <- ARKADAŞ SAYILAR <- //////////////////

///// -> MÜKEMMEL SAYILAR -> /////////////////////////
function pNumbers() {
    let pNumbers=[]
    let s =0
    for (let index = 1; index < 1000; index++) {
        let total=0;
        for (let i = 1; i < index; i++) {
            if (index%i==0) {
                total=total+i;
            }  
        }
        if (total==index) {
            pNumbers[s]=index
            s++
            console.log(index+" Mükemmel sayıdır");
        }
    }
    console.log(...pNumbers+' Mükemmel sayıdırlar');
    //Spread sonrası ekleme yapınca indexler arası virgül ve boşluklu yazıyor?
}
pNumbers()
///// <- MÜKEMMEL SAYILAR <- /////////////////////////

/// -> 1000'e KADAR ASAL OLUP OLMADIĞINI BULAN FONKSİYON -> ///
function primes() {
    let primes=[]
    
    for (let i=2; i <1000; i++){
        let isPrime = new Boolean(true);
            for (let j = 2; j < i; j++) {
            if (i%j==0) {
                isPrime=false
            }
        }
        if (isPrime){
            primes.push(i)
        }
    } 
    console.log(...primes);
}  
primes()
/// <- 1000'e KADAR ASAL OLUP OLMADIĞINI BULAN FONKSİYON <- ///
