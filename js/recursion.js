'use strict';

function f() {
  f();
};

// 1! = 1;
// 2! = 2 * 1 = 2 * 1!;
// 3! = 3 * 2 * 1 = 3 * 2!;

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// debugger;
const a = factorial(5);

function numberLogger(n) {
  if ( n === 0 ) {
    return;
  };
  
  numberLogger(n - 1);
  console.log('n :>> ', n);
};

//  debugger
numberLogger(10);


bracketWrapper(1); // => ()
// ((()))

function bracketWrapper(n) {
  return n === 1 ? '()' : "(" + bracketWrapper(n - 1) + ")";
};

console.log('bracketWrapper(3) :>> ', bracketWrapper(3)); 

const brackets = [];
function bracketWrapper2(n) {
  const brackets = [];
  bracketWrapperRec(n);
  // const returningBrackets = bracketWrapperRec(n);
  function bracketWrapperRec(n) {
    if (n === 0) {
      return;
    };
    brackets.push('(');
    
    bracketWrapperRec(n - 1);
    brackets.push(')');
  };

  return brackets;
}

// debugger;
bracketWrapper2(3);
const brackets2 = bracketWrapper2(3);
console.log('brackets2 :>> ', brackets2.join('')); 