//    VAR data type

var a= 34;
if(true){
    console.log(a)
}

// var is only accessible in the scope of the function

function solve (){
    var age = 5;
    console.log(age)

}

// this is not allowed 
// console.log(age)
solve()


// Same defination can create complexity in code 

// var x =45;
// var x =43; 

// var data type can create debugging issues so we can use let data type
// let data type 

// let x =45;
// let x =34;


// not allowed 

let x =34;  // this is a integer data type
let y ="paras Rawat";  // this is a string data type
console.log(x)
console.log(y)

let num = 5;
num =" paras"
console.log(num)

// camelcase = SumOfArray