// Ejercicio 1
interface Person {
  name: string;
  age: number;
  profession: string;
}
const getPersonValues = (person: Person): (string | number)[] => {
  return [person.name, person.age, person.profession];
};

const lucas: Person = {
  name: "David",
  age: 22,
  profession: "Tecnico ",
};

console.log(getPersonValues(lucas)); 


// Ejercicio 2
function sumOrConcatenate(a: number | string, b: number | string): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; 
  } else if (typeof a === "string" && typeof b === "string") {
    return `${a}-${b}`; 
  } else {
    return `${a}:${b}`; 
  }
}

console.log(sumOrConcatenate(4, 3));         
console.log(sumOrConcatenate(4, "hello"));  
console.log(sumOrConcatenate("hello", "world")); 

// Ejercicio 3

interface Car {
  tires: number;
  turnOnEngine(): void;
  pressPedal(): void;
}

interface Motorcycle {
  tires: number;
  turnOnEngine(): void;
  openThrottle(): void;
}

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return (vehicle as Car).pressPedal !== undefined;
}
function startVehicle(vehicle: Car | Motorcycle): void {
  vehicle.turnOnEngine();

  if (isCar(vehicle)) {
    vehicle.pressPedal();
  } else {
    vehicle.openThrottle();
  }
}

const myCar: Car = {
  tires: 4,
  turnOnEngine: () => console.log("Car engine started"),
  pressPedal: () => console.log("Car is accelerating"),
};

const myMotorcycle: Motorcycle = {
  tires: 2,
  turnOnEngine: () => console.log("Motorcycle engine started"),
  openThrottle: () => console.log("Motorcycle is accelerating"),
};

startVehicle(myCar);

startVehicle(myMotorcycle);

// Ejercicio 4

function removeFirstEntry<T extends string | number>(arr: T[]): T[] {
  return arr.slice(1);
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Tecnico', 'Informatico'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number | string> = ['Hello', 'I', 'have', 3, 'tasks'];

const unsupportedArray = [{ name: 'David', surname: 'Gómez' }, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);     
const newNumArray = removeFirstEntry(numArray);       
const newMixedArray = removeFirstEntry(mixedArray);   

console.log(newStrArray);
console.log(newNumArray);
console.log(newMixedArray);

