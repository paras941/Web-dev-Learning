// conditional statements

// if else statements 

let age =45;

if(age>18){
    console.log("You cannot vote")

}else{
    console.log("You can vote")
}

//  if else ladder 

    let marks = 56;

    if (marks >= 90) {
        console.log("Grade: A");
    }
    else if (marks >= 75) {
        console.log ("Grade: B");
    }
    else if (marks >= 50) {
        console.log ("Grade: C");
    }
    else {
        console.log ("Grade: Fail");
    }


    // Nested if else 

     if (age >= 18) {
        if (age >= 60) {
            console.log("You are a senior citizen.");
        } else {
            console.log("You are an adult.");
        }
    } else {
        if (age >= 13) {
            console.log("You are a teenager.");
        } else {
            console.log("You are a child.");
        }
    }

    // Switch case

    let num = 6;

    switch(num){
       case 1 : console.log("A")
       case 2 : console.log("B")
       case 3 : console.log("C")
       case 4 : console.log("D")
       case 5 : console.log("E")
       case 6 : console.log("F")
    }