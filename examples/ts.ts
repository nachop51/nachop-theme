// Interface definition
interface Person {
  name: string;
  age: number;
  address?: { street: string; city: string };
}

// Function using interface
function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}

// Enum definition
enum Color {
  Red,
  Green,
  Blue,
}

// Class definition
class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

// Inheritance
class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Type assertion
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// Demonstrate interface and function
const person: Person = { name: "Alice", age: 30 };
console.log(greet(person));

// Demonstrate enum
let favoriteColor: Color = Color.Blue;
console.log(`Favorite color is: ${Color[favoriteColor]}`);

// Demonstrate class and inheritance
let dog: Animal = new Dog("Buddy");
dog.speak();

// Demonstrate generic function
console.log(identity<number>(42));
console.log(identity<string>("Hello"));

// Demonstrate type assertion
console.log(`The length of the string is: ${strLength}`);

// Map demonstration
const map: Map<string, number> = new Map();
map.set("one", 1);
map.set("two", 2);
map.set("three", 3);

map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Nullish coalescing and optional chaining
let user: Person | null = null;
let userName = user?.name ?? "Guest";
console.log(`User name is: ${userName}`);

// Update user to demonstrate optional chaining with existing object
user = {
  name: "Bob",
  age: 25,
  address: { street: "123 Main St", city: "Anytown" },
};
console.log(`User address is: ${user.address?.street}, ${user.address?.city}`);

class Greeter {
  greeting: string;
  greetingPrefix: string = "Hello,";

  constructor(message: string = "esteemed guest") {
    this.greeting = message;
  }

  greetWithTime(): string {
    const currentHour = new Date().getHours();
    const timeOfDay =
      currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
    return `${this.greetingPrefix} ${this.greeting}! Good ${timeOfDay}.`;
  }
}

let detailedGreeter = new Greeter("Alice");
console.log(detailedGreeter.greetWithTime());
