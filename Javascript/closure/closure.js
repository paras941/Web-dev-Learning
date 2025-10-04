// function outerfunction(){   // Outer block
//     let name = ' Rohan';
//     function innerfunction(){      // Inner block
//      console.log(name)
//     }
//     innerfunction();
// }

// outerfunction();


// cloure property

function outer(){
    let name= 'Manas'


function inner(){
    console.log(name)
}
    return inner;
}
// outer();
let inn = outer();
inn();