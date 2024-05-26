# Function definition
def greet(name) -> str:
    return f"Hello, {name}!"


# List comprehension and lambda function
squares = [(lambda x: x**2)(i) for i in range(10)]

# Exception handling
try:
    # Loop and conditional
    for num in range(5):
        if num % 2 == 0:
            print(f"{num} is even")
        else:
            print(f"{num} is odd")
    # Raise an exception
    raise ValueError("This is a test exception")
except ValueError as e:
    print(e)


# Class definition
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")


# Inheritance
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"


# Decorator function
def debug(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        print(f"{func.__name__}({args}, {kwargs}) = {result}")
        return result

    return wrapper


# Apply decorator
@debug
def add(a, b):
    return a + b


# Demonstrate class and decorator
dog = Dog("Buddy")
print(dog.speak())
print(greet("Alice"))
print(squares)
print(add(3, 5))
