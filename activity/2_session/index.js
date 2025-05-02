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
// this léxico: Las arrow functions heredan el valor de this del contexto donde fueron definidas, mientras que las function expressions crean su propio this según cómo se invoquen.
// Objeto arguments: Las arrow functions no tienen acceso al objeto arguments, mientras que las function expressions sí lo permiten.
//Uso como constructor: Las arrow functions no pueden ser usadas con new; las function expressions sí pueden.
//Sintaxis: Las arrow functions tienen una sintaxis más concisa; las function expressions usan la forma tradicional function.
//Métodos de objeto: Las arrow functions no son adecuadas como métodos si se necesita this; las function expressions sí lo son.

// Ejercicio 3
class InvertirCadena {
  constructor() {
    this.cadenaInvertir = "";
  }

  invertir() {
    if (!this.cadenaInvertir) {
      throw new Error("La cadena está vacía");
    }
    const invertida = this.cadenaInvertir.split("").reverse().join("");
    console.log(invertida);
  }
}
const invertirCadena = new InvertirCadena();
try {
  invertirCadena.invertir(); 
} catch (error) {
  console.error("Error capturado:", error.message);
}

invertirCadena.cadenaInvertir = "Hola mundo";
invertirCadena.invertir(); 

if (typeof invertirCadena.nuevoMetodo === "function") {
  invertirCadena.nuevoMetodo();
} else {
  console.warn("El método nuevoMetodo no está definido.");
}
invertirCadena.nuevoMetodo = function () {
  console.log("Este es un nuevo método agregado dinámicamente.");
};
invertirCadena.nuevoMetodo();



// Ejercicio 4
class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("User logged in");
    } else {
      alert("User or passwd incorrect");
    }
  }
}
//Pruebas
let login = new Login("admin", "passwd");
login.login(); 
let logbad = new Login("pepe", "bad");
logbad.login(); 
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
