'use strict'

function counter() {
  let count = 0;

  return function() {
    return count++;
  };
};

// debugger;
const a = counter();
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());

const b = counter();
console.log('b() :>> ', b());
console.log('b() :>> ', b());
console.log('b() :>> ', b());

