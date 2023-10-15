// // Example:

// // let age: number = 30;
// // let weight: number = 150.5;
// // let username: string = 'maxamud'
// // console.log(age,weight)

// //axamble 2
// // let greeting: string = `Hello, my name is ${username}`;

// // console.log(greeting.toUpperCase())


// // 3. boolean
// // Used for true/false values.

// // Example:

// let isAdult: boolean = true;

// console.log('is he edult' , isAdult)


// // 4. array
// // Used for arrays of other types.

// // Example:

// let numbers: number[] = [1, 2, 3, 4, 5];
// let names: string[] = ["Alice", "Bob", "Charlie"];

// numbers.map(number => number)
// console.log(names.map(name => name.toUpperCase()))
// console.log(numbers)



// // 5. tuple
// // Used for fixed-length arrays with elements of specified types.

// // Example:

// let person: [string, number] = ["Alice", 30]; // [name, age]

// console.log(person)


// // 6. enum
// // Used for creating named constants.

// // Example:

// enum Role  {Admin, user, manager}
// let admin: Role.Admin
// let user: Role.user



// // 7. any
// // Used when the type is unknown or dynamic.

// // Example:

// let variable : any = 'maxamud'

// variable: 200
// variable : false

// console.log(variable)


// // 8. void
// // Commonly used as the return type of functions that do not return a value.

// // Example:

// function logMessage(message: string): void {
//     console.log(message);
// }
// // 9. null and undefined


// // Special types that have only one value each (null and undefined).

// // Example:

// let u: undefined = undefined;
// let n: null = null;



// // opic 3: Functions and Type Annotations
// // Functions play a critical role in TypeScript, and understanding how to work with types in function parameters and return values is crucial.

// // Typing Function Parameters and Return Values
// // Example:

function greet(name: string): string {
    return `Hello, ${name}`;
}
console.log(greet('maxamud cabdi😎'))



// Function Expressions

// Example:



const add: (a: number , b: number) => number = function(a, b) {
    return a + b;
}
console.log(add(10, 10))
// arrow function
const reduction: (a: number , b: number) =>number = (a,b)=>{
    return a-b
}
console.log(reduction(100, 40))


// optional and default params

function  userinfo(name: string , age?: number) : string{
    
    return  age?`my name is ${name} and my ${age} years old`:
    `my name is ${name}`
}

console.log(userinfo('maxamud',28))
console.log(userinfo('maxamud'))


// object and type aliases

type users = {name: string , age: number}
let users= {name: 'maxamud', age: '28'};
let users2= {name: 'maxamud', age: '20'};
console.log(users,users2)


// union type 

type StringOrNumber = string | number
let id: StringOrNumber = '200'
let id2: StringOrNumber = 'maxamud_22'
console.log(id,id2)


// intersection type

type Names = {name: string}
type age = {age: number}
type person = Names & age

const newperson : person = {name: 'maxamud', age: 20}



// 4. Nullable Types and Optional Chaining
// Example: Safe Property Access
const user = { profile: { name: 'Alice', age: 30 } };
const age = user?.profile?.age;


// 5. Nullish Coalescing Operator
// Example: Default Value Assignment
const input = null;
const output = input ?? 'default';



// 6. Type Assertion
// Example: Asserting Variable Type
let unknownVar: unknown = "I am a string";
let strVar: string = (unknownVar as string).toUpperCase();