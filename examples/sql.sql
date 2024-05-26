-- Demonstrates SQL features: table creation, data insertion, querying, updating, and deleting

-- Create a table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    BirthDate DATE,
    HireDate DATE,
    Salary DECIMAL(10, 2)
);

-- Insert data into the table
INSERT INTO Employees (EmployeeID, FirstName, LastName, BirthDate, HireDate, Salary) VALUES
(1, 'Alice', 'Smith', '1980-01-15', '2010-06-01', 70000.00),
(2, 'Bob', 'Johnson', '1985-05-23', '2012-09-15', 75000.00),
(3, 'Carol', 'Williams', '1990-07-30', '2018-03-22', 65000.00);

-- Query the table
SELECT * FROM Employees;

-- Update data in the table
UPDATE Employees
SET Salary = 80000.00
WHERE EmployeeID = 2;

-- Delete data from the table
DELETE FROM Employees
WHERE EmployeeID = 3;

-- Complex query with JOIN
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'Human Resources'),
(2, 'Finance'),
(3, 'Engineering');

CREATE TABLE EmployeeDepartments (
    EmployeeID INT,
    DepartmentID INT,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

INSERT INTO EmployeeDepartments (EmployeeID, DepartmentID) VALUES
(1, 1),
(2, 3),
(3, 2);

SELECT Employees.FirstName, Employees.LastName, Departments.DepartmentName
FROM Employees
JOIN EmployeeDepartments ON Employees.EmployeeID = EmployeeDepartments.EmployeeID
JOIN Departments ON EmployeeDepartments.DepartmentID = Departments.DepartmentID;
