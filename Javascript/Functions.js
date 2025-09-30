// Plain function

//  Function defining 
function saymyname(name){
    console.log(name)
}
// function calling
saymyname('Subham');
saymyname('Shiv')
saymyname(8)

// Additing two value

function add(a , b){
    let avg = (a+b)/2
    console.log("Average of the two values: "  + avg)
}

add(4,5)

// Return value 

function addsum(c,d,e){
   let sum =c+d+e
   return sum;
//    return c+d+e
}

let sum = addsum(2,4,3)
console.log(sum)

// Arrows function

function Multiplication (a,b){

    const add = (a, b) => a + b; 
    console.log("Multiplication: " + add(2, 3)); // 5

}

Multiplication();