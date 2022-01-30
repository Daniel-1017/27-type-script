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

// Union type
let course: string | number = "React - The Complete Guide";

course = 1190;
