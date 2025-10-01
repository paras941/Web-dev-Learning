// Initialising classes 

class persons{
    Name ="rohan"; // Public modifier
    age=4;
    #ht = "6ft"  //private modifier

    // constructor call 
    constructor(Branch,Rollnumber, Names=['Paras','Rohan','Mohan']){
        console.log(Names)
        this.Branch= Branch;
        this.Rollnumber=Rollnumber;
    }

    get height() {
        return this.#ht; //  getting private property
    }

    set height(value){
        this.#ht = value;    // Setting private property

    }


    walking(){
    console.log("I am walking")
   }

   Sleeping(){
    console.log("I am sleeping")
   }
}

let person1 = new persons("Btech",6);
console.log(person1.Name);
console.log(person1.age);
console.log(person1.Rollnumber);
console.log(person1.height);      // Acccessing private property

person1.Sleeping()
person1.walking()



