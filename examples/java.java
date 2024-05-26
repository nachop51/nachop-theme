import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

// Interface definition
interface Person {
    String getName();
    int getAge();
    void introduce();
}

// Class implementing an interface
class PersonImpl implements Person {
    private String name;
    private int age;

    public PersonImpl(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public int getAge() {
        return age;
    }

    @Override
    public void introduce() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

// Enum definition
enum Color {
    RED, GREEN, BLUE
}

// Generic class
class Box<T> {
    private T value;

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}

// Base class
class Animal {
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void speak() {
        System.out.println(name + " makes a noise.");
    }
}

// Derived class
class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void speak() {
        System.out.println(getName() + " barks.");
    }
}

public class FeatureDemo {
    // Async method using CompletableFuture
    public static CompletableFuture<String> fetchDataAsync(String url) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000); // Simulate async work
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Fetched data from " + url;
        });
    }

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        // Demonstrate class and interface
        Person person = new PersonImpl("Alice", 30);
        person.introduce();

        // Demonstrate enum
        Color favoriteColor = Color.BLUE;
        System.out.println("Favorite color is: " + favoriteColor);

        // Demonstrate generic class
        Box<Integer> intBox = new Box<>();
        intBox.setValue(123);
        System.out.println("Box value: " + intBox.getValue());

        // Demonstrate inheritance
        Animal dog = new Dog("Buddy");
        dog.speak();

        // Demonstrate streams and lambda expressions
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);
        List<Integer> evenNumbers = numbers.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());
        System.out.println("Even numbers: " + evenNumbers);

        // Demonstrate async/await using CompletableFuture
        CompletableFuture<String> futureData = fetchDataAsync("https://example.com");
        System.out.println(futureData.get());

        // Demonstrate null-coalescing (Optional in Java)
        String username = null;
        String displayName = Optional.ofNullable(username).orElse("Guest");
        System.out.println("User: " + displayName);
    }
}
