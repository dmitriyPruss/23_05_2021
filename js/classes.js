'use strict';

function User(name, age) {
  this.name = name;
  this.age = age;
};

const userProto = new User();

userProto.getName = function () {
  return `${this.name}`;
}