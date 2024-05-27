-- Demonstrates SQL features: table creation, data insertion, querying, updating, deleting, joins, and aggregation functions

-- Create a table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    BirthDate DATE,
    HireDate DATE,
    Salary DECIMAL(10, 2),
    DepartmentID INT
);

-- Insert data into the table
INSERT INTO Employees (EmployeeID, FirstName, LastName, BirthDate, HireDate, Salary, DepartmentID) VALUES
(1, 'Alice', 'Smith', '1980-01-15', '2010-06-01', 70000.00, 1),
(2, 'Bob', 'Johnson', '1985-05-23', '2012-09-15', 75000.00, 2),
(3, 'Carol', 'Williams', '1990-07-30', '2018-03-22', 65000.00, 1),
(4, 'David', 'Brown', '1975-11-12', '2005-05-01', 90000.00, 3),
(5, 'Eva', 'Davis', '1992-02-14', '2019-07-19', 60000.00, 2);

-- Create Departments table
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

-- Insert data into the Departments table
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'Human Resources'),
(2, 'Finance'),
(3, 'Engineering');

-- Simple SELECT query
SELECT * FROM Employees;

-- Update data in the table
UPDATE Employees
SET Salary = 80000.00
WHERE EmployeeID = 2;

-- Delete data from the table
DELETE FROM Employees
WHERE EmployeeID = 5;

-- Complex query with JOIN
SELECT Employees.FirstName, Employees.LastName, Departments.DepartmentName
FROM Employees
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

-- Aggregation functions

-- Calculate the average salary
SELECT AVG(Salary) AS AverageSalary FROM Employees;

-- Count the number of employees in each department
SELECT DepartmentID, COUNT(*) AS NumberOfEmployees
FROM Employees
GROUP BY DepartmentID;

-- Sum of salaries for each department
SELECT DepartmentID, SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY DepartmentID;

-- Maximum and minimum salaries in the company
SELECT MAX(Salary) AS MaxSalary, MIN(Salary) AS MinSalary FROM Employees;

-- Average salary and number of employees per department
SELECT Departments.DepartmentName, AVG(Employees.Salary) AS AverageSalary, COUNT(Employees.EmployeeID) AS NumberOfEmployees
FROM Employees
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID
GROUP BY Departments.DepartmentName;
