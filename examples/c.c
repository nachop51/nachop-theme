#include <stdio.h>
#include <stdlib.h>

// Enum definition
typedef enum
{
  RED,
  GREEN,
  BLUE
} Color;

// Struct definition
typedef struct
{
  char name[50];
  int age;
  Color favoriteColor;
} Person;

// Function prototype
void printPerson(const Person *person);
void writeFile(const char *filename, const char *content);
char *readFile(const char *filename);

int main()
{
  // Create an instance of Person and use the struct
  Person person = {"Alice", 30, BLUE};
  printPerson(&person);

  // Array and pointer demonstration
  int numbers[] = {1, 2, 3, 4, 5};
  int *p = numbers;

  for (int i = 0; i < 5; i++)
  {
    printf("Number %d: %d\n", i, *(p + i));
  }

  // Control flow demonstration
  for (int i = 0; i < 5; i++)
  {
    if (numbers[i] % 2 == 0)
    {
      printf("%d is even\n", numbers[i]);
    }
    else
    {
      printf("%d is odd\n", numbers[i]);
    }
  }

  // File I/O demonstration
  const char *filename = "example.txt";
  const char *content = "Hello, C programming!";
  writeFile(filename, content);

  char *fileContent = readFile(filename);
  if (fileContent != NULL)
  {
    printf("File content: %s\n", fileContent);
    free(fileContent);
  }

  return 0;
}

// Function to print a Person struct
void printPerson(const Person *person)
{
  printf("Name: %s\n", person->name);
  printf("Age: %d\n", person->age);
  printf("Favorite Color: %d\n", person->favoriteColor);
}

// Function to write content to a file
void writeFile(const char *filename, const char *content)
{
  FILE *file = fopen(filename, "w");
  if (file == NULL)
  {
    perror("Failed to open file for writing");
    return;
  }
  fprintf(file, "%s\n", content);
  fclose(file);
}

// Function to read content from a file
char *readFile(const char *filename)
{
  FILE *file = fopen(filename, "r");
  if (file == NULL)
  {
    perror("Failed to open file for reading");
    return NULL;
  }

  fseek(file, 0, SEEK_END);
  long length = ftell(file);
  fseek(file, 0, SEEK_SET);

  char *buffer = malloc(length + 1);
  if (buffer == NULL)
  {
    perror("Failed to allocate memory");
    fclose(file);
    return NULL;
  }

  fread(buffer, 1, length, file);
  buffer[length] = '\0';

  fclose(file);
  return buffer;
}
