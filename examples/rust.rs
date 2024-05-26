// Demonstrates Rust features: structs, enums, traits, generics, functions, control flow, error handling, and file I/O

use std::fs::File;
use std::io::{self, Read, Write};

// Struct definition
struct Person {
    name: String,
    age: u8,
}

// Implement methods for Person struct
impl Person {
    fn new(name: &str, age: u8) -> Self {
        Self {
            name: name.to_string(),
            age,
        }
    }

    fn introduce(&self) -> String {
        format!("Hello, my name is {} and I am {} years old.", self.name, self.age)
    }
}

// Enum definition
enum Color {
    Red,
    Green,
    Blue,
}

// Trait definition
trait Describable {
    fn describe(&self) -> String;
}

// Implement Describable trait for Color enum
impl Describable for Color {
    fn describe(&self) -> String {
        match self {
            Color::Red => String::from("The color is Red."),
            Color::Green => String::from("The color is Green."),
            Color::Blue => String::from("The color is Blue."),
        }
    }
}

// Generic function
fn print_type<T: std::fmt::Debug>(value: T) {
    println!("Value: {:?}, Type: {}", value, std::any::type_name::<T>());
}

// Function with Result for error handling
fn read_file_contents(filename: &str) -> Result<String, io::Error> {
    let mut file = File::open(filename)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

fn main() {
    // Create an instance of Person and use its method
    let person = Person::new("Alice", 30);
    println!("{}", person.introduce());

    // Demonstrate enum and trait
    let color = Color::Blue;
    println!("{}", color.describe());

    // Demonstrate generic function
    print_type(42);
    print_type("Hello");

    // Control flow demonstration
    let number = 5;
    if number > 3 {
        println!("{} is greater than 3", number);
    } else {
        println!("{} is not greater than 3", number);
    }

    // File I/O demonstration with error handling
    let filename = "example.txt";
    let content = "Hello, Rust programming!";
    File::create(filename)
        .and_then(|mut file| file.write_all(content.as_bytes()))
        .expect("Failed to write to file");

    match read_file_contents(filename) {
        Ok(contents) => println!("File content: {}", contents),
        Err(e) => println!("Error reading file: {}", e),
    }

    // Clean up
    std::fs::remove_file(filename).expect("Failed to delete file");
}
