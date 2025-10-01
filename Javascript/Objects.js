let obj = {
    name : "Mohan Singh",
    Branch: " Btech",
    Rollnumber: 5,
    CollegeID:16003,
    greet: function (){
    console.log("Hii!, My name is Mohan ")
    }
};

// This is a shallow copy 
let obj2=obj;

console.log(obj)
obj.greet()

console.log("type is: " + typeof(obj))
console.log()
// Printing Shallow copy of obj
console.log(obj2)

// Static object
let person = {
  name: "Sachin",
  age: 20
};

// dynamic object
let persons = new Object();
person.name = "Rohit";
person.name = "Rohan";
person.age = 20;

// // Constructor function

function persons(Branch,Rollnumber){
     this.Branch =Branch;
     this.Rollnumber=Rollnumber;
}


let p1 = new persons("Btech", 20);
let p2 = new persons("B.com", 22);
console.log(p1.Branch); 
console.log(p1.Rollnumber); 

console.log(p2.Branch); 
console.log(p2.Rollnumber); 



