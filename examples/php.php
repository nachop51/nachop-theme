<?php
// Demonstrates PHP features: classes, methods, arrays, control flow, file I/O, and error handling

// Class definition
class Person {
    private $name;
    private $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce() {
        return "Hello, my name is $this->name and I am $this->age years old.";
    }
}

// Create an instance of Person and use the method
$person = new Person("Alice", 30);
echo $person->introduce() . "\n";

// Array demonstration
$fruits = ["Apple", "Banana", "Cherry"];
foreach ($fruits as $fruit) {
    echo "I like $fruit\n";
}

// Associative array (similar to a hash in other languages)
$person_info = [
    "name" => "Bob",
    "age" => 25,
    "city" => "New York"
];
foreach ($person_info as $key => $value) {
    echo ucfirst($key) . ": $value\n";
}

// Control flow demonstration
$number = 5;
if ($number > 3) {
    echo "$number is greater than 3\n";
} else {
    echo "$number is not greater than 3\n";
}

// File I/O: Writing to a file
$file = fopen("example.txt", "w");
if ($file) {
    fwrite($file, "Hello, PHP programming!\n");
    fclose($file);
} else {
    echo "Error opening file for writing.\n";
}

// File I/O: Reading from a file
$file = fopen("example.txt", "r");
if ($file) {
    $content = fread($file, filesize("example.txt"));
    echo "File content: $content";
    fclose($file);
} else {
    echo "Error opening file for reading.\n";
}

// Exception handling
function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero");
    }
    return $a / $b;
}

try {
    echo "10 / 2 = " . divide(10, 2) . "\n";
    echo "10 / 0 = " . divide(10, 0) . "\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}

// Clean up
unlink("example.txt");
?>
