// Ejercicio 1
const getProperties = obj => Object.keys(obj);
let person = {
  name: "David",
  age: 22,
  profession: "tecnico campo",
};
console.log(getProperties(person)); 
// Ejercicio 2
// En el contexto global (modo no estricto):
console.log(this); 
//En una función (modo estricto):
'use strict';
function show() {
  console.log(this); 
}
show();
// Dentro de un objeto (método):
const obj = {
  name: "David",
  sayHi() {
    console.log(this.name); 
  }
};
obj.sayHi();
//En un constructor (new keyword):
function Person(name) {
  this.name = name;
}
const p = new Person("Jose");
console.log(p.name); 
//En un evento DOM (HTML/JS):
<button onclick="console.log(this)">Click me</button> 
//En arrow functions (hereda de contexto padre):
const obj = {
  name: "David",
  greet: () => { 
    console.log(this.name); 
  }
};
obj.greet();
//2.2 Enumera las diferencias entre arrow functions y function expressions.


// Ejercicio 3

// Ejercicio 4

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
