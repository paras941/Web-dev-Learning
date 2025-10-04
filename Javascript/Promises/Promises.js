// let letpromises = new  Promise((resolve, reject)=>{
//      console.log('HELLO JII');
//      resolve(1001)
// });

// let promises = new  Promise((resolve, reject)=>{
//      console.log('HELLO JII');
//      reject(new error ('Error ha bhai'));
// });


// let promises = new Promise((resolve,reject)=>{
//     setTimeout(function SayMyName(){
//     console.log('This is a promise');
// },10000)
// });

let newpromises = new Promise((resolve, reject)=>{
    let Success = true;
    if(Success){
       resolve("fullfilled");
    }else{
        reject("Pending");
    }

});

newpromises.then((message)=>{
        console.log("then message is " + message)
}).catch((error)=>{
    console.log("error is " + error)
})