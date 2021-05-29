// 'use strict';

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// };

// const userProto = new User();

// userProto.getName = function () {
//   return `${this.name} ${this.lastname}`;
// };

// User.prototype = userProto;

// const user1 = new User("Vasia", "Testovich", 99);
// console.dir(user1);


// // classes

// class UserClass {
//   constructor(name, surname, age) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//   };
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   };
//   get age() {
//     return this._age;
//   };
//   set age(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('Age must be a number');
//     };
//     if (value < 0 || value > 130) {
//       throw new RangeError('Age cannot be < 0 or > 130');
//     };
//     this._age = value;
//   };
//   static isUserClass(obj) {
//     if (obj instanceof UserClass) {
//       return obj instanceof UserClass;
//     }
//   };
// };

// try {
//   const user2 = new UserClass("Test", "Ivanovich", 'fgerta');
//   console.dir(user2);
//   user2.age = 20;
// } catch (e) {
//   console.error(e);
// };

// const user3 = new UserClass("Test", "Ivanovich", 22);
// console.log('UserClass.isUserClass(user3) :>> ', UserClass.isUserClass(user3));

// const user2 = new UserClass('Test', 'Ivanovich', 3);
// console.dir(user2);

// console.log('user2.getFullName(); :>> ', user2.getFullName() );
// user2.age = 4;
// console.log('user2.age :>> ', user2.age);

// // 

// class Fuel {
//   constructor(weight) {
//     this.weight = weight;
//   };
// };

// class Car {
//   constructor(name, model, year, weight, fuel) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//     this.weight = weight;
//     this.fuel = fuel;
//   };
//   getInfoCar() {
//     return `${this.name} ${this.model} - ${this.year} year`;
//   };
//   getFullWeight() {
//     return this.weight + this.fuel.weight;
//   };
//   get year() {
//     return this._year;
//   };
//   set year(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('Age must be a number');
//     };
//     if (value < 1900) {
//       throw new RangeError('Cars didn`t produce in that time');
//     };
//   };
//   static isCarObj(obj) {
//     return obj instanceof Car;
//   }

// };

// const mercedes = new Car('Mercedes', 'S200', 2010, 2000, new Fuel(45));
// console.log('mercedes.getInfoCar() :>> ', mercedes.getInfoCar());

// console.log('mercedes.getFullWeight() :>> ', mercedes.getFullWeight());
// mercedes.year = 1980;
// console.log('mercedes.year :>> ', mercedes.year);

// console.log('Car.isCarObj(mercedes) :>> ', Car.isCarObj(mercedes));
// console.log('Car.isCarObj(user3) :>> ', Car.isCarObj(user3));


/**********************************************************************/

class User {
  constructor (name, surname, age, email, isBanned = false) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.email = email;
    this.isBanned = isBanned;
  }
  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }
  set age(v) {
    this._age = v;
  }
  get age() {
    return this._age;
  }
  static isUser(obj) {
   return obj instanceof User;
  }
}

class Moderator extends User {
  constructor(name, surname, age, email, permission) {
    super(name, surname, age, email);
    this.permission = permission;
  }
  sendMessage(user, message) {
    //  sending message
    console.log('SENDING MESSAGE...');
  }
};

class Administrator extends Moderator {
  constructor(name, surname, age, email, permission) {
    super(name, surname, age, email, permission);
  }
  ban(user) {
    user.isBanned = false;
  }
  unBan(user) {
    user.isBanned = false;
  }
}


// debugger;
const user1 = new User('Username', 'Usersurname', 10, 'useremail@gmail.com');
user1.age = 55;
console.log(user1);
const moder1 = new Moderator('name', 'surname', 22, 'moder@gmail.com', {});
console.log('moder1 :>> ', moder1);
console.log('moder1.firstName :>> ', moder1.firstName);
const message = { body: 'message text'};
moder1.sendMessage(user1, message);
console.log(moder1.getFullName());

const admin1 = new Administrator('Dan', 'Hiu', 122, 'admin@gmail.com');
admin1.ban(user1);
console.dir(user1);
console.log('admin1 :>> ', admin1);
// ************************************************************************
class Squirrel {
  constructor(name) {
    this.name = name;
  }
  eat (food) {
    console.log(`Squirrel ${this.name} is eating ${food}`);
  }
  run() {
    console.log(`Squirrel ${this.name} is running`);
  }
};


//  FlyingSquirrel = Squirrel + fly() + distance
class FlyingSquirrel extends Squirrel {
  constructor(name, distance) {
    super(name);
    this.distance = distance;
  };
  _num = Math.random();
  set distance (dist) {
    if (typeof dist !== 'number') {
      throw new Error('Distance is not a number!');
    }
    this._distance = dist;
  };
  get distance () {
    return this._distance;
  };
  fly() {
    console.log('this._distance :>> ', this._distance);
    console.log(`Flying squirrel ${this.name} is flying`);
  };
  eat () {
    console.log(`Squirrel ${this.name} eats nuts`);
  };
};

const flySq1 = new FlyingSquirrel('Boeing', 3000);
flySq1.fly();
console.log('flySq1._num :>> ', flySq1._num);
flySq1.distance = 'dfr';

class Figure {
  constructor(name) {
    this._name = name;
  }
  getArea() {
    return null;
  }
};

class Triangle extends Figure{
  constructor(a, b, c) {
    super('triangle');
    this._a = a;
    this._b = b;
    this._c = c;
  }
  getArea() {
    const p = (this._a + this._b + this._c) / 2;
    return Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
  }
};
 
class Square extends Figure {
  constructor (a) {
    super('square');
    this._a = a;
  }
  getArea() {
    return this._a * this._a;
  }
};

const t1 = new Triangle(7, 8, 9);
console.log('t1.getArea() :>> ', t1.getArea());

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();  
  };
  throw new TypeError();
}

