// Primitives: number, string, boolean
// More Complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;

let userName: string | string[];
userName = 'Rand';

let isInstructor: boolean;
isInstructor = true;

// More Complex Types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Rand',
    age: 20
};

// person = {
//     isEmployee: true
// };

let people: Person[];

// Type Inference
let course: string | number = 'React - The Complete Guide';
course = 12345;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginnnig<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginnnig(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginnnig(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');