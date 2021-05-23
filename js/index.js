'use strict';

//  HW - prototypes

// const schoolAgeWomen = users.filter(isSchoolAgeWoman)
// .map(getUserFullName);
// console.table(schoolAgeWomen);

// function isSchoolAgeWoman(user, i, arr) {
//     return user.age >= 6 && user.age <= 18 && !user.isMale;
// };

// function getUserFullName(user, i, arr) {
//     return user.getFullName();
// };


const pets = ['cat', 'dog', 'parrot'];

console.log(`I have ${pets.join(', ')}`);

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce(sum);

function sum(accumulator, item) {
    return accumulator + item;
};
console.log('result :>> ', result);

const multiResult = arr.reduce(mult);

function mult(accumulator, item) {
    return accumulator * item;
};
console.log('multiResult :>> ', multiResult);

const petsResult = pets.reduce(sumPets);

console.log('petsResult :>> ', petsResult);

function sumPets(accumulator, item) {
    return accumulator + ', ' + item;
};

const a = 2;
console.log('Array.isArray(arr) :>> ', Array.isArray(arr));

const arr1 = [1, 2, 4, 8];
const arr2 = arr1.slice(0); //copy all array
console.log('arr1 :>> ', arr1);
console.log('arr2 :>> ', arr2);

const arr3 = arr1.splice(1, 2);

console.log('arr1 :>> ', arr1);
console.log('arr3 :>> ', arr3);

if (true) {
    console.log('run :>> ');
};




function MyArray() {
    if (!new.target) {
        return new MyArray();
    }
    this.length = 0;
};


const myArrayProto = new MyArray();

myArrayProto.pop = function() {
    if (this.length === 0) {
        return; // return undefined; 
    };
    const lastItem = this[this.length - 1];
    delete this[--this.legth];
    return lastItem;
};

myArrayProto.push = function(item) {
    this[this.length] = item;
    return ++this.length;
}; 

myArrayProto.shift = function() {
    if (this.length === 0) {
        return;
    }
    const firstItem = this[0];
    for(let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    };
    delete this[--this.length];
    return firstItem;
};

MyArray.prototype = myArrayProto;

const myArr1 = new MyArray();
const myArr2 = new MyArray();

myArrayProto.filter = function(callback) {
    const returningArray = new MyArray();
    for(let i = 0; i < this.length; i++) {
        if (callback(this[0], i, this)) {
            returningArray.push(this[i]);
        };
    };
    return returningArray;
};

arr.filter(isEven);

function isEven(item, i, arr) {
    return item % 2;
};

const myArray3 = new MyArray();
myArray3.push(1);
myArray3.push(2);

debugger;
const myArr3 = myArray3.filter(isEven);
console.log('myArr3 :>> ', myArr3);

