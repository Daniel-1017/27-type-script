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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Daniel",
  age: 16,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide"; // yes

// If we assign a value to a variable, typescript will understand which type of value we assign so we don't have to specify
