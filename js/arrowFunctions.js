'use strict';

function sum(a, b) {
  return a + b;
};

const sum2 = (a, b) => {
  return a + b;
};

// const factorial = n => {
//   if (n === 1) {
//     return 1;
//   };
//   return n * factorial(n - 1);
// };
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
console.log('factorial(5) :>> ', factorial(5));

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(item => item % 2 === 0);

const getSquare = n => (n ** 2);
console.log('getSquare(3) :>> ', getSquare(3));

const pow = (num, n) => (n === 0 ? 1 : num * pow(num, n-1));

console.log('pow(5, 3) :>> ', pow(5, 3));


const obj = {
  name: 'Vasya',
  getName() {
    console.log('this.name :>> ', this.name);
    console.log('this :>> ', this);
  },
  getAge: () => {},
};

obj.getName();
// debugger;
obj.getAge();

console.log('this :>> ', this);

function f() {
  console.log('this :>> ', this);
};
f();

const arrFunc = () => {
  console.log('this :>> ', this);
};
arrFunc();

const f1 = new Function();

function sum(a, b) {
  return a + b;
};

// arguments
// debugger;

function sumInfArgs() {
  console.log('arguments :>> ', arguments);
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  };
  return result;
};

console.log('sumInfArgs(1, 2, 3, 4) :>> ', sumInfArgs(1, 2, 3, 4));
console.log('f:>> ', f);


