//const, var, let

const PI = 3.1415;

var x = 1;
console.log(x)
var y = 1.4;
console.log(y);
var z = "Hello";
console.log(z);
var a = [x, y, z];
console.log(a);
var lst = [1, "0", [1, 2], 4.8, true];
console.log(lst);
var obj = {
    name: "Mr X",
    job: "Hacker",
    age: 23,
    address: "Bangaluru"
}
console.log(obj)

let phone = {
    company: {
        name: 'Samsung',
        country: 'South Korea'
    },
    name: 'Galaxy',
    size: 6.5,
    weight: 200,
    color: ['blue', 'red', 'green']
}

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello
World`;
console.log(str3)

let outcome = [[1, 3, 2, 4, 5, 6], 
               [4, 2, 1, 5, 3, 6], 
               [1, 6, 5, 2, 4, 3], 
               [4, 3, 1, 2, 6, 5], 
               [6, 5, 3, 8, 2, 1], 
               [4, 5, 6, 1, 2, 3]]
console.log(outcome[1][3])//5
console.log(outcome[4][3])//8

let D3 = [
           [
            [1, 2], 
            [1, 2]
           ], 
           [
            [1, 2], 
            [1, 2]
           ], 
           [
            [1, 2], 
            [1, 2]
           ]
        ]
        // 3 * 2




        //arithmetic operations
let sum = 1 + 1.4; // 2.4
let dif = 1 - 1.4; // -0.4
let mul = 2 * 4; // 8
let div = 4 / 2; // 2
let mod = 5 % 2; // 1
let pow = 5 ** 2; // 25
let ex1 = 2 * (1 - 6 / 2); // -4

//boolean
let isMore = 2 >= 4; // false
let isLess = 5 < 10; // true
let bool1 = isMore || isLess; // true
let bool2 = isMore && isLess; // false
let isEqual1 = 0 == '0';//true type conversion
let isEqual2 = 0 === '0; //false no type conversion
let notEqual1 = 0 != '0'; //false
let notEqual2 = 0 !== '0'; //true

//string
let str1 = 'Hello';
let str2 = 'World';
let str3 = str1 + ' ' + str2;//'Hello World'
let num = 42;
let str4 = `The answer to universe is ${num}.`;\ The answer to universe is 42.

//arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1 + arr2; // '1, 23, 4'
// ... spread operator
let arr4 = [...arr1, ...arr2];// [1, 2, 3, 4]

//objects
let obj = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj)); // [name, job, salary, address]
let ob1 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
let isEq1 = obj == obj1; // false
let isEq2 = obj === obj2; // false
