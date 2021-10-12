SELECT * FROM Customers;
SELECT column1, column2, ...
FROM table_name;
SELECT * FROM table_name;
SELECT Country FROM Customers;
SELECT COUNT(DISTINCT Country) FROM Customers;
SELECT Count(*) AS DistinctCountries
FROM (SELECT DISTINCT Country FROM Customers);
SELECT column1, column2, ...
FROM table_name
WHERE condition;
UPDATE column1;
SELECT * FROM Customers
WHERE Country='ROAMANIA';
SELECT * FROM Customers
WHERE CustomerID=1;
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
SELECT column3;
CREATE DATABASE databasename;
DROP DATABASE databasename;