// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// oop hard parts

function userCreator(name, score) {
  const newUser = Object.create(userMethodStore);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const userMethodStore = {
  increment() {
    this.score++;
  }
}


const emre = userCreator('emre', 12);

window.emre = emre;

function mul(a, b ) {
  return a * b;
}

mul.text = 'text';
mul.default = 'sda';

mul.prototype.func = function() {console.log('func is running')}

window.mul = mul;

function userCreator2(name, score) {
  this.name = name;
  this.score = score;
}

userCreator2.prototype.increment = function() {
  function addOne() {
    this.score++;
  }
  addOne();
  // this.score++;
}

window.emre2 = new userCreator2('emre', 4);

class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
}

const userFunctions = {
  increment(){
    this.score++;
  },
  sayHi() {
    console.log('Hi my name is ' + this.name)
  }
}

function userCreator3(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const user = userCreator3('Hamid', 99);

const paidUserFuncs = {
  increaseBalance: function(value) {
    this.balance += value;
  }
}

function paidUser(name, score, balance) {
  const newPaidUser = userCreator3(name, score);
  Object.setPrototypeOf(newPaidUser, paidUserFuncs);
  newPaidUser.balance = balance;
  return newPaidUser;
}

Object.setPrototypeOf(
  paidUserFuncs, userFunctions
);

window.hamid = paidUser('hamid', 11, 120);


// with call 

function Person(firstName,lastName,age, gender, interest) {
  this.name = {
    first: firstName,
    last: lastName
  };
  this.age = age;
  this.gender = gender;
  this.interest = interest;
}

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

function Teacher(firstName,lastName,age, gender, interest, subject) {
  Person.call(this, firstName,lastName,age, gender, interest)
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false,
  writable: true
});