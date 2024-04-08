// 1. Given the data below, define a type alias for representing users.

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

//Answer : 
 let user : {
        name: string,
        age: 99,
        company?: string,
    }



// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

 enum days_of_week { 'Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'}


// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    
    constructor(
        public firstName:string, 
        public lastName:string) {}

    getFullName = ():string => {
   // return `${this.firstName} ${this.lastName}`
   return `${this.firstName } ${this.lastName}`
}
}
    
const  person_a = new Person('ana', 'maher')

person_a.getFullName()
 
// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
   
    constructor(
        public salary:number, //initialize the new attribute that belongs to Employee extended Class.
        firstName:string,   // also initialize attributes from parent class - fname and lname
        lastName:string){
            super(firstName,lastName)  //super(fname,lname) imports the attributes from parent class.
        }  
}

const person_b = new Employee(250000,'ana', 'maher',)
//const person_c = new Employee({firstName:'ava', lastName:'pun', salary:125000})


// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

interface Address {
    street:string,
    city:string,
    zipCode:number
}

interface Employee extends Address {
    name:string,
    salary:number,
    address: Address  // Address interface is used as address type here. 
}