'use strict';

function User(name, age) {
  this.name = name;
  this.age = age;
};

const userProto = new User();

userProto.getName = function () {
  return `${this.name} ${this.lastname}`;
};

User.prototype = userProto;

const user1 = new User("Vasia", "Testovich", 99);
console.dir(user1);


// classes

class UserClass {
  constructor(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
  };
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  };
  get age() {
    return this._age;
  };
  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    };
    if (value < 0 || value > 130) {
      throw new RangeError('Age cannot be < 0 or > 130');
    };
    this._age = value;
  };
  static isUserClass(obj) {
    if (obj instanceof UserClass) {
      return obj instanceof UserClass;
    }
  };
};

try {
  const user2 = new UserClass("Test", "Ivanovich", 'fgerta');
  console.dir(user2);
  user2.age = 20;
} catch (e) {
  console.error(e);
};

const user3 = new UserClass("Test", "Ivanovich", 22);
console.log('UserClass.isUserClass(user3) :>> ', UserClass.isUserClass(user3));

const user2 = new UserClass('Test', 'Ivanovich', 3);
console.dir(user2);

console.log('user2.getFullName(); :>> ', user2.getFullName() );
user2.age = 4;
console.log('user2.age :>> ', user2.age);

// 

class Fuel {
  constructor(weight) {
    this.weight = weight;
  };
};

class Car {
  constructor(name, model, year, weight, fuel) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.fuel = fuel;
  };
  getInfoCar() {
    return `${this.name} ${this.model} - ${this.year} year`;
  };
  getFullWeight() {
    return this.weight + this.fuel.weight;
  };
  get year() {
    return this._year;
  };
  set year(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    };
    if (value < 1900) {
      throw new RangeError('Cars didn`t produce in that time');
    };
  };
  static isCarObj(obj) {
    return obj instanceof Car;
  }

};

const mercedes = new Car('Mercedes', 'S200', 2010, 2000, new Fuel(45));
console.log('mercedes.getInfoCar() :>> ', mercedes.getInfoCar());

console.log('mercedes.getFullWeight() :>> ', mercedes.getFullWeight());
mercedes.year = 1980;
console.log('mercedes.year :>> ', mercedes.year);

console.log('Car.isCarObj(mercedes) :>> ', Car.isCarObj(mercedes));
console.log('Car.isCarObj(user3) :>> ', Car.isCarObj(user3));
