using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSharpFeatureDemo
{
    // Interface definition
    public interface IPerson
    {
        string Name { get; }
        int Age { get; }
        void Introduce();
    }

    // Class definition implementing an interface
    public class Person : IPerson
    {
        public string Name { get; private set; }
        public int Age { get; private set; }

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public void Introduce()
        {
            Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
        }
    }

    // Enum definition
    public enum Color
    {
        Red,
        Green,
        Blue
    }

    // Generic class
    public class Box<T>
    {
        public T Value { get; set; }
    }

    // Base class
    public class Animal
    {
        public string Name { get; set; }

        public virtual void Speak()
        {
            Console.WriteLine($"{Name} makes a noise.");
        }
    }

    // Derived class
    public class Dog : Animal
    {
        public override void Speak()
        {
            Console.WriteLine($"{Name} barks.");
        }
    }

    class Program
    {
        // Async method
        public static async Task<string> FetchDataAsync(string url)
        {
            await Task.Delay(1000); // Simulate async work
            return $"Fetched data from {url}";
        }

        static async Task Main(string[] args)
        {
            // Demonstrate class and interface
            IPerson person = new Person("Alice", 30);
            person.Introduce();

            // Demonstrate enum
            Color favoriteColor = Color.Blue;
            Console.WriteLine($"Favorite color is: {favoriteColor}");

            // Demonstrate generic class
            Box<int> intBox = new Box<int> { Value = 123 };
            Console.WriteLine($"Box value: {intBox.Value}");

            // Demonstrate inheritance
            Animal dog = new Dog { Name = "Buddy" };
            dog.Speak();

            // Demonstrate LINQ
            List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8 };
            var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
            Console.WriteLine("Even numbers: " + string.Join(", ", evenNumbers));

            // Demonstrate async/await
            string data = await FetchDataAsync("https://example.com");
            Console.WriteLine(data);

            // Demonstrate null-coalescing operator
            string username = null;
            string displayName = username ?? "Guest";
            Console.WriteLine($"User: {displayName}");
        }
    }
}
