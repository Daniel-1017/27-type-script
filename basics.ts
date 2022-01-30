// Primitive values
let age: number;

age = 10;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// Type alias
type Person = {
  name: string;
  age: number;
}; // We can assign new names to avoid duplication

let person: Person;

person = {
  name: "Daniel",
  age: 16,
};

let people: Person[];

// Union type
let course: string | number = "React - The Complete Guide";

course = 1190; // Now we can specify more types of value (string and number)

// Functions and Types
function add(a: number, b: number): number {
  // We can set the return type
  return a + b;
}

function printOutput(value: any) {
  // This function doesn't return anything so it has a special return type named void, it means that this function never returns (undefined or null)
  console.log(value);
}
