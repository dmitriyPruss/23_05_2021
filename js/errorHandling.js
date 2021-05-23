'use strict';

function f(n) {
  return n * f(n - 1);
};

// debugger;
try {
  console.log('BEFORE ERROR');
  const y = x / 5;
  console.log("AFTER ERROR");
} catch (error) {
  console.log('error :>> ', error);
};

console.log('AFTER TRY');

/*******************/
function f(n) {
  if (typeof n !== 'number') {
    throw new TypeError('The argument must be number value');
  };
  if ( !Number.isFinite(n) ) {
    throw new RangeError('The argument must be a finite value')
  };
  if (!Number.isSafeInteger(n) || n < 0) {
    throw new RangeError('The argument must be non negative integer value');
  };
  if (n === 0) {
    return 1;
  };
  return n * f(n - 1);
};

// f(-5);
// f(Infinity);


try {
  f(Infinity);
} catch (error) {
  // console.error(error);
};

console.log('AFTER f');




function validateValue(v) {
  if (typeof v !== 'number') {
    throw new TypeError('v must be a number')
  };
  if ( !(v >= 0 && v <= 150) ) {
    throw new RangeError('Value must be >= 0 && <= 15');
  };
  return v;
};


const inputValue = 356;
try {
  const value = validateValue(inputValue);
} catch(e) {
  console.log(e);
  if (e instanceof TypeError) {
    console.log(e.name + ' - Input a number value, please');
  };
  if (e instanceof RangeError) {
    console.log(e.name + ' - Input value between 0 and 150 please');
  };
  // if (e instanceof Error) {
  //   console.log('Try again later, please');
  // };
  throw e;
} finally {
  console.log('Super!');
};

// console.log('validateValue(7) :>> ', validateValue(7));
// // console.log('validateValue(777) :>> ', validateValue(777));
// console.log('validateValue("qwerty") :>> ', validateValue("qwerty"));