# Demonstrates Ruby features: classes, modules, methods, blocks, arrays, hashes, control flow, and file I/O

# Module definition
module Greeter
  def greet(name)
    "Hello, #{name}!"
  end
end

# Class definition including a module
class Person
  include Greeter

  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def introduce
    "My name is #{@name} and I am #{@age} years old."
  end
end

# Create an instance of Person
person = Person.new("Alice", 30)
puts person.introduce
puts person.greet(person.name)

# Array demonstration
fruits = ["Apple", "Banana", "Cherry"]
fruits.each { |fruit| puts "I like #{fruit}" }

# Hash demonstration
person_info = { name: "Bob", age: 25, city: "New York" }
person_info.each { |key, value| puts "#{key.capitalize}: #{value}" }

# Control flow demonstration
number = 5
if number > 3
  puts "#{number} is greater than 3"
else
  puts "#{number} is not greater than 3"
end

# File I/O: Writing to a file
File.open("example.txt", "w") do |file|
  file.puts "Hello, file!"
end

# File I/O: Reading from a file
file_content = File.read("example.txt")
puts "File content: #{file_content}"

# Exception handling
begin
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"
end

# Remove the example file
File.delete("example.txt") if File.exist?("example.txt")
