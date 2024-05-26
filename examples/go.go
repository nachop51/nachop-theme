package main

import (
	"errors"
	"fmt"
	"sync"
	"time"
)

// Interface definition
type Greeter interface {
	Greet() string
}

// Struct definition
type Person struct {
	Name string
	Age  int
}

// Method for Person struct
func (p Person) Greet() string {
	return fmt.Sprintf("Hello, my name is %s and I am %d years old.", p.Name, p.Age)
}

// Generic function
func printType[T any](value T) {
	fmt.Printf("Value: %v, Type: %T\n", value, value)
}

// Goroutine function
func printNumbers(wg *sync.WaitGroup, ch chan int) {
	defer wg.Done()
	for i := 1; i <= 5; i++ {
		time.Sleep(1 * time.Second)
		ch <- i
	}
	close(ch)
}

// Function with error handling
func divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("division by zero")
	}
	return a / b, nil
}

func main() {
	// Create an instance of Person and use the method
	person := Person{Name: "Alice", Age: 30}
	fmt.Println(person.Greet())

	// Demonstrate generic function
	printType(42)
	printType("Hello")

	// Demonstrate goroutines and channels
	var wg sync.WaitGroup
	ch := make(chan int)

	wg.Add(1)
	go printNumbers(&wg, ch)

	go func() {
		for num := range ch {
			fmt.Println(num)
		}
	}()

	wg.Wait()

	// Demonstrate error handling
	result, err := divide(10, 2)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("10 / 2 =", result)
	}

	result, err = divide(10, 0)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("10 / 0 =", result)
	}
}
