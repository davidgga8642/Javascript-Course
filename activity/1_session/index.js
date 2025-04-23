// Ejercicio 1
import { nombreCompleto, profesion, puestoDeseado } from './aboutme.js';

console.log("Ej 1");
console.log(nombreCompleto);
console.log(profesion);
console.log(puestoDeseado);

// Ejercicio 2
//Se ejecuta antes el contenido de aboutme.js.Porque cuando usás import en JavaScript ES6, el navegador (o Node) carga y ejecuta los módulos importados antes de continuar con el código del archivo que los importa.
//Entonces, el flujo es:
//  Encuentra el import en index.js.
//  Va a aboutme.js y ejecuta todo el código exportado.
//  Luego vuelve a index.js y sigue con console.log("Ej 1").

// Ejercicio 3
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }

// Ejercicio 4
//¿Qué valor tendrá la variable `i` al finalizar el bucle? 
// 100
// ¿Por qué? 
// El bucle incrementa i desde 0 hasta que ya no cumpla la condición i < 101
// ¿Habría alguna forma de evitar que la variable `i` se declare de forma global?
// si,utilizando let en lugar de var, ya que let tiene un alcance de bloque y no se puede acceder a ella fuera del bucle.
// Ejercicio 5
//¿Cuáles son las diferencias entre ejecutar un fichero JavaScript en un navegador web en formato <script> y en formato <script type=”module”>?. 
// En el formato <script> se ejecuta de forma secuencial y no permite el uso de importaciones y exportaciones entre módulos. En cambio, en el formato <script type="module"> se permite la importación y exportación de módulos, y los scripts se ejecutan en modo estricto por defecto, lo que ayuda a evitar errores comunes en el código.
// Ejercicio 6
function Formatter() {
    this.prefix = "Hello ";
  }
  
  Formatter.prototype.append = function(text) {
    console.log(this.prefix + text);
  };
  const formatter = new Formatter();
  formatter.append("World"); // Resultado: Hello World
    
  Formatter.prototype.toLowerString = function(text) {
    console.log(text.toLowerCase());
  };
  formatter.toLowerString("I’m Lucas"); // Resultado: i’m lucas
