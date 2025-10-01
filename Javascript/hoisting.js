// n hoisting means that variable and function declarations are moved to the top of their scope.
{
greet();   

function greet() {
  console.log("Hello!");
}
}
// This is not exceptable 
{
greet();   

let greet = function() {
  console.log("Hello!");
};
}

// In var only the declaration is shifted to the top not the value 
{
console.log(age)

var age = 23;
}
// but in let and const value and declaration is not shifted to the top
{
console.log(number)
console.log(name)
                                    //  Through error
let name = 'Paras Rawat';
const number = 34;
}

// in objects hoisting is also does not exceptable
{

console.log(obj)
let obj ={
    name : "Paras ",
    Rollnumber: 3,

};

}






