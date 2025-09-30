// Strings

let a= 'Paras Rawat'
console.log(a)

let b= '2'
console.log(b)

// Adding two Strings 
let c = 'Mohan'
let d = 'Singh'
let name = c + d;
console.log(name)
console.log()

// Using backtickess

let e =`Hii! I am a String
I am a collection of the characters `
console.log(e)

// Using backtickess to add strings 

let op1 = 'Gagan'
let op2 = 'singh'
let name1 = `${op1}${op2}`
let sentence = 'i am a btech student'
let words =sentence.split(' ')
console.log(name1)


// Properties
console.log("Length of the name: " + name1.length)
console.log("upercase of the name: " + name1.toUpperCase())
console.log("Lowercase of the name: " + name1.toLowerCase())
console.log(" Subsstring Property: " + name1.substring(2,7))
console.log("Suplit Property :" + words )




// making String as a object
let name3 = new String("Pankaj")
console.log(name3)
