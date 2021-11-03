

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
