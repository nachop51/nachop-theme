// Demonstrates Kotlin features: classes, functions, null safety, collections, and coroutines

fun main() {
    // Class usage
    val person = Person("Alice", 30)
    println(person.introduce())

    // Null safety
    val nullableName: String? = null
    println(nullableName?.length ?: "Name is null")

    // Collections and higher-order functions
    val numbers = listOf(1, 2, 3, 4, 5)
    val doubled = numbers.map { it * 2 }
    println(doubled)

    // Coroutines
    runBlocking {
        launch {
            delay(1000L)
            println("Coroutines are cool!")
        }
        println("Hello,")
    }
}

// Data class definition
data class Person(val name: String, val age: Int) {
    fun introduce() = "Hello, my name is $name and I am $age years old."
}
