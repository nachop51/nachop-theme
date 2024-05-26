#!/bin/bash

# Demonstrates Bash features: variables, functions, conditionals, loops, arrays, string manipulation, file I/O, and command substitution

# Variable assignment
greeting="Hello, Bash scripting!"
number=5

# Function definition
function print_greeting {
    local name=$1
    echo "$greeting My name is $name."
}

# Array definition
fruits=("Apple" "Banana" "Cherry")

# Print array elements using a loop
echo "Fruits list:"
for fruit in "${fruits[@]}"; do
    echo "- $fruit"
done

# Conditional statements
if [[ $number -gt 3 ]]; then
    echo "$number is greater than 3"
else
    echo "$number is not greater than 3"
fi

# String manipulation
substring=${greeting:7:4}
echo "Substring of greeting: $substring"

# File I/O: Writing to a file
echo "This is a test file." > testfile.txt

# File I/O: Reading from a file
file_content=$(cat testfile.txt)
echo "File content: $file_content"

# Command substitution
current_date=$(date)
echo "Current date and time: $current_date"

# Function call
print_greeting "Alice"

# Demonstrating while loop
echo "Countdown:"
counter=5
while [[ $counter -gt 0 ]]; do
    echo "$counter"
    ((counter--))
done
echo "Liftoff!"

# Clean up
rm testfile.txt
