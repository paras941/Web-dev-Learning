// Compilation error 
//  console.log(1

// Run time error 

// console.log(x)

// Exception handling

// try and catch 

try{
    console.log("Checking error")
    console.log(x)

}catch(error){
    console.log("error aa gya bhai ", error)
}finally{
    console.log("mee to chalunga hii bhai , finally huu")
}


// throw keyword

try{
    console.log(y)
}catch(err){
    throw new Error("Name to declare ker le bhai ")
}

