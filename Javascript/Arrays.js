// Initialing a Array
let arr=[ 1,2,4,24,23,233]

console.log("Elements in array"+ arr)
// Accessing element 
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(typeof(arr))

// Array constructor 

let brr = new Array( 1,34,23,12)
//  property of the arrays
brr.push("Rohan")  // push at back
brr.push("Mohan")    
brr.push(32)    
brr.push(4)    
brr.shift()        // remove from front
brr.pop()          // pop from back
brr.unshift("paras") // add from the front 
brr.slice(1,4)
brr.splice(1,2,"kunal")

console.log(" Array constructor: " + brr)
console.log(typeof(brr))

brr.push("Rohan")

// map functin
let Array = [10,20,30,40,50]

let ansArray = Array.map((numbers)=> {
    return numbers*numbers
});

console.log(ansArray)

// Filter funciton
let brray = [10,23,23,'Mukesh','Rahul']
let ansbrray = brray.filter((value)=>{
        if(typeof(value)=='string'){
            // console.log(true)
            return true;
        }else{
            // console.log(false)
            return false;
        }
}
);

console.log(ansbrray)

Sorting in array

let data =[2,3,3,53,42,4,24]
data.sort((a,b)=>a-b);
console.log(data)

data.sort((a,b)=>b-a);
console.log(data)


// for Each function in array

let values =[1,32,3,2,32,2]

let answer = values.forEach((index, value) => {
     console.log("values", value,"Index",index);
});


let obj = {
    name : "Mohan Singh",
    Branch: " Btech",
    Rollnumber: 5,
    CollegeID:16003,
    greet: function (){
    console.log("Hii!, My name is Mohan ")
    }
};

// for in function
for( let key in obj){
    console.log(key)
}


// for of function
let fullname = " Paras Rawat"
for( let value of fullname){
    console.log(value)
}