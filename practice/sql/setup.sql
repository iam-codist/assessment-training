PRAGMA foreign_keys = ON;
CREATE TABLE departments (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT NOT NULL, department_id INTEGER REFERENCES departments(id), salary INTEGER NOT NULL, manager_id INTEGER REFERENCES employees(id));
CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INTEGER NOT NULL REFERENCES customers(id), amount INTEGER NOT NULL, status TEXT NOT NULL);
INSERT INTO departments VALUES (10,'Engineering'),(20,'Sales'),(30,'Support'),(40,'Research');
INSERT INTO employees VALUES (1,'Asha',10,60000,NULL),(2,'Ben',10,50000,1),(3,'Chen',20,45000,NULL),(4,'Divya',20,45000,3),(5,'Evan',NULL,40000,NULL),(6,'Farah',10,70000,1);
INSERT INTO customers VALUES (1,'Mira'),(2,'Noah'),(3,'Omar'),(4,'Pia');
INSERT INTO orders VALUES (101,1,120,'paid'),(102,1,80,'pending'),(103,2,200,'paid'),(104,2,50,'cancelled'),(105,4,90,'paid');
