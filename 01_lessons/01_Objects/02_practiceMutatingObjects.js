let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message); // "Hello from the function scope!"
console.log(message); // 'Hello from the global scope!'

////


let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

// mutability of objects. obj and myObj reference the same object.
func(myObj); // 'Greetings from the function scope!'
console.log(myObj.message); // 'Greetings from the function scope!'

////

let message2 = 'Hello from the global scope!';

function func() {
  //message2 = 'Hello from the function scope!';
 // console.log(message2);
}
// message2 resolves to the global-scope variable
//func();               // 'Hello from the function scope!';
//console.log(message2); // 'Hello from the function scope!';

////
let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a);         // false
console.log(newObj.a === obj.a);  // true
// primitives are immutable, and newObj.a += 10 reassigns property `a` to a new value.

////

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

console.log(menagerie.warthog); //=== animal; // false
console.log(menagerie.meerkat); //=== animal; // true